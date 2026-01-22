// ========================================
// 🏨 ORION HOTEL CONCIERGE - CONFIGURATION
// ========================================

const HOTEL_CONFIG = {
  
  // 🏢 HOTEL IDENTITY
  branding: {
    name: "Orion Hotel",
    tagline: "Where Stars Meet Service",
    location: "15 Ocean Drive, Umhlanga, Durban, South Africa",
    phone: "+27 31 555 0100",
    email: "reservations@orionhotel.co.za",
    website: "www.orionhotel.co.za",
    logo: "./orion-hotel-logo.png" 
  },

  // 🎨 VISUAL THEME
  theme: {
    primaryColor: "#1a365d",      
    accentColor: "#3b82f6",       
    backgroundColor: "#f0f4f8",   
    chatBotBg: "#ffffff",
    chatUserBg: "#1a365d"
  },

  // ⚙️ FEATURE TOGGLES
  features: {
    voiceInput: true,           
    voiceOutput: true,          
    emergencyButton: true,      
    demoMode: false // SET TO TRUE IF TESTING WITHOUT BACKEND
  },

  // 🤖 AI & LANGUAGE SETTINGS
  ai: {
    model: "gemini-2.0-flash-exp",
    defaultLanguage: "English",
    // COMPLETE LANGUAGE SUPPORT LIST
    supportedLanguages: [
      "English", "isiZulu", "isiXhosa", "Afrikaans", 
      "Sepedi", "Setswana", "Sesotho", "Xitsonga", 
      "siSwati", "Tshivenda", "isiNdebele",
      "Hindi", "Japanese", "French", "German", "Spanish", "Portuguese", "Italian"
    ],
    
    // Quick local responses (Client-side fallbacks)
    quickResponses: {
      wifi: "The WiFi is 'Orion_Guest' and the password is 'Stars2024!'.",
      checkout: "Check-out is at 10:00 AM. Let me know if you need assistance with luggage.",
      pool: "The rooftop infinity pool is open from 6 AM to 10 PM."
    }
  },

  // 🔧 SYSTEM SETTINGS
  system: {
    version: "2.1.0-PROD",
    backend: {
      // PASTE YOUR DEPLOYED GOOGLE SCRIPT URL HERE
      scriptUrl: "https://script.google.com/macros/s/AKfycbwQb7bOHwfMQc-L_gqnw_7nLSK2F9iT8cQafTM5fZ-rT6f3tBeJ9ZDjy0AalZ3-I7_m6Q/exec" 
    }
  }
};

// Export for usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HOTEL_CONFIG;
}
