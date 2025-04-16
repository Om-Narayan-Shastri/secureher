import { useEffect, useRef } from 'react';

const VoiceTrigger = ({ setMicStatus, micEnabled }) => {
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  useEffect(() => {
    if (!micEnabled) {
      setMicStatus('Mic Off');
      return;
    }

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setMicStatus('Not Supported');
      console.error('getUserMedia is not supported in this browser.');
      return;
    }

    const startRecording = async () => {
      try {
        setMicStatus('Requesting Mic Access...');
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setMicStatus('Recording...');

        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        chunksRef.current = [];

        mediaRecorder.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) {
            chunksRef.current.push(e.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
          const audioUrl = URL.createObjectURL(audioBlob);
          console.log('Recording complete. Audio URL:', audioUrl);

          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              console.log('Location fetched:', { latitude, longitude });
              alert(
                `Recording complete!\nAudio URL: ${audioUrl}\nLocation: (${latitude}, ${longitude})`
              );
              setMicStatus('Recording Complete');
            },
            (error) => {
              console.error('Location fetch error:', error);
              alert('Recording complete, but failed to fetch location.');
              setMicStatus('Recording Complete');
            }
          );
        };

        mediaRecorder.start();
        console.log('Recording started...');

        setTimeout(() => {
          if (mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
            console.log('Recording stopped after 10 seconds');
          }
          stream.getTracks().forEach((track) => track.stop());
        }, 10000);
      } catch (error) {
        console.error('Error accessing microphone:', error);
        setMicStatus('Mic Error');
        alert('Error accessing microphone: ' + error.message);
      }
    };

    startRecording();

    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
    };
  }, [micEnabled, setMicStatus]);

  return null; // No UI needed
};

export default VoiceTrigger;
