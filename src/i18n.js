import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to SecureHer 👋",
      intro:
        "Your voice-activated safety and wellness companion. Empowering women with safety, motivation, and support—all in one place.",
      helpButton: "Tap for Emergency Alert",
      whySecureHerTitle: "Why SecureHer?",
      whySecureHerText1:
        "SecureHer provides immediate support for women in any emergency situation. Our innovative platform integrates cutting-edge voice recognition, real-time location tracking, and instant alerts to ensure your safety.",
      whySecureHerText2:
        "Whether you're at home, on the go, or in unfamiliar territory, SecureHer is your trusted companion—always ready to help, motivate, and empower you.",
      // Add more keys as needed for your pages
    },
  },
  hi: {
    translation: {
      welcome: "SecureHer में आपका स्वागत है 👋",
      intro:
        "आपकी आवाज़ से संचालित सुरक्षा और स्वास्थ्य साथी। महिलाओं को सुरक्षा, प्रेरणा और समर्थन—एक ही स्थान पर प्रदान करता है।",
      helpButton: "आपातकालीन अलर्ट के लिए टैप करें",
      whySecureHerTitle: "क्यों SecureHer?",
      whySecureHerText1:
        "SecureHer महिलाओं को किसी भी आपातकालीन स्थिति में तुरंत सहायता प्रदान करता है। हमारा अभिनव प्लेटफ़ॉर्म अत्याधुनिक आवाज पहचान, वास्तविक समय स्थान ट्रैकिंग, और त्वरित अलर्ट को एकीकृत करता है ताकि आपकी सुरक्षा सुनिश्चित हो सके।",
      whySecureHerText2:
        "चाहे आप घर पर हों, सफ़र पर हों या अपरिचित क्षेत्र में हों, SecureHer आपका विश्वसनीय साथी है - हमेशा मदद, प्रेरणा, और सशक्तिकरण के लिए तत्पर।",
      // Add more keys as needed
    },
  },
};

i18n
  .use(LanguageDetector) // Optional: detects language from the browser settings
  .use(initReactI18next) // passes i18n instance into react-i18next
  .init({
    resources,
    fallbackLng: "en", // default language if detection fails
    debug: false, // set true for development
    interpolation: {
      escapeValue: false, // react already escapes by default
    },
  });

export default i18n;
