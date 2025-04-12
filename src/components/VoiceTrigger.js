import { useEffect, useRef } from 'react';

const VoiceTrigger = ({ setMicStatus, micEnabled }) => {
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  useEffect(() => {
    // Only run if micEnabled is true
    if (!micEnabled) {
      setMicStatus('Mic Off');
      return;
    }

    // Check if browser supports the API
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setMicStatus('Not Supported');
      console.error('getUserMedia is not supported in this browser.');
      return;
    }

    const startRecording = async () => {
      try {
        setMicStatus('Requesting Mic Access...');
        // Request audio permissions from the user
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setMicStatus('Recording...');
        
        // Create a new MediaRecorder instance
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        chunksRef.current = []; // Clear previous chunks

        // Collect recorded audio chunks as they become available.
        mediaRecorder.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) {
            chunksRef.current.push(e.data);
          }
        };

        // When recording stops, create a Blob from the chunks.
        mediaRecorder.onstop = () => {
          // Combine chunks to form an audio blob
          const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
          const audioUrl = URL.createObjectURL(audioBlob);
          console.log('Recording complete. Audio URL:', audioUrl);

          // After recording, attempt to fetch location (this can be done in your Emergency component as well)
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
              alert(`Recording complete, but failed to fetch location.`);
              setMicStatus('Recording Complete');
            }
          );
        };

        // Start recording
        mediaRecorder.start();
        console.log('Recording started...');

        // Stop recording after 10 seconds (10,000 ms)
        setTimeout(() => {
          if (mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
            console.log('Recording stopped after 10 seconds');
          }
          // Stop all audio tracks to release the microphone
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
      // Cleanup: Stop recording if component unmounts or if micEnabled becomes false
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
    };
  }, [micEnabled, setMicStatus]);

  return null;
};

export default VoiceTrigger;
