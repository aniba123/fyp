import React, { useEffect } from 'react';
const ChatWidget = () => {
  useEffect(() => {
    // Step 1: Set the global window.ChatWidgetConfig object
    window.ChatWidgetConfig = {
      webhook: {
        url: 'http://localhost:5678/webhook/67af8e1c-ae3c-4476-8a39-19b794e1142b/chat', 
        route: 'general',
      },
      branding: {
        logo: "https://images.vexels.com/media/users/3/197046/raw/d70337c7aecbf9f3d8196b103041e9ae-e-commerce-logo-template.jpg",  // Replace with your logo URL
        name: 'ShopEase.io',
        welcomeText: 'Hi 👋, how can we help?...',
        responseTimeText: 'We typically respond right away',
      },
      style: {
        primaryColor: '#534574ff',
        secondaryColor: '#416d80ff',
        position: 'right',
        backgroundColor: '#ffffff',
        fontColor: '#333333',
      },
    };

    // Step 2: Dynamically add the external script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/WayneSimpson/n8n-chatbot-template@ba944c3/chat-widget.js';
    script.async = true;

    document.body.appendChild(script);

    // Cleanup function to remove script if component unmounts
    return () => {
      document.body.removeChild(script);
      delete window.ChatWidgetConfig;
    };
  }, []);

  return null;  // This component doesn't render anything itself
};

export default ChatWidget;
