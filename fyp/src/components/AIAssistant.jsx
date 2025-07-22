





// import React, { useState } from 'react';
// import './AIAssistant.css'; // Import your CSS styles for the assistant
// const AIAssistant = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { id: 1, sender: 'assistant', text: 'Hi there! I\'m your shopping assistant. How can I help you today?' }
//   ]);
//   const [inputValue, setInputValue] = useState('');

//   const toggleModal = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!inputValue.trim()) return;

//     // Add user message
//     const newUserMessage = {
//       id: messages.length + 1,
//       sender: 'user',
//       text: inputValue
//     };

//     // Add assistant response (mock for now)
//     const newAssistantMessage = {
//       id: messages.length + 2,
//       sender: 'assistant',
//       text: getMockResponse(inputValue)
//     };

//     setMessages([...messages, newUserMessage, newAssistantMessage]);
//     setInputValue('');
//   };

//   // Simple mock response generator
//   const getMockResponse = (userInput) => {
//     const input = userInput.toLowerCase();
    
//     if (input.includes('return') || input.includes('exchange')) {
//       return 'Our return policy allows exchanges within 30 days of purchase. Please have your order number ready.';
//     } else if (input.includes('shipping') || input.includes('delivery')) {
//       return 'Standard shipping takes 3-5 business days. We also offer express shipping for an additional fee.';
//     } else if (input.includes('price') || input.includes('cost')) {
//       return 'Product prices are shown on each item page. We frequently run promotions - check our deals section!';
//     } else if (input.includes('size') || input.includes('fit')) {
//       return 'Size guides are available on each product page. Most items run true to size.';
//     } else {
//       return 'Thanks for your question! A real AI assistant would provide more detailed help here.';
//     }
//   };

//   return (
//     <>
//       {/* AI Assistant Button in Navbar */}
//       <button 
//         onClick={toggleModal}
//         className="nav-link" // Use existing navbar CSS classes
//         aria-label="AI Shopping Assistant"
//       >
//         AI Assistant
//       </button>

//       {/* Modal/Overlay */}
//       {isOpen && (
//         <div className="ai-assistant-modal">
//           <div className="ai-assistant-container">
//             {/* Modal Header */}
//             <div className="ai-assistant-header">
//               <h3>Shopping Assistant</h3>
//               <button 
//                 onClick={toggleModal}
//                 className="close-button"
//                 aria-label="Close AI Assistant"
//               >
//                 &times;
//               </button>
//             </div>

//             {/* Messages Area */}
//             <div className="messages-container">
//               {messages.map((message) => (
//                 <div 
//                   key={message.id}
//                   className={`message-bubble ${message.sender}`}
//                 >
//                   {message.text}
//                 </div>
//               ))}
//             </div>

//             {/* Input Form */}
//             <form onSubmit={handleSubmit} className="input-form">
//               <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 placeholder="Ask me about products, shipping, etc..."
//                 aria-label="Type your question"
//               />
//               <button type="submit" aria-label="Send message">
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default AIAssistant;








// import React, { useState, useRef, useEffect } from 'react';
// import Lottie from 'react-lottie';
// import styled, { keyframes } from 'styled-components';
// import robotAnimation from '../assets/robot.json'; // Replace with your Lottie JSON file
// import { FiSend, FiUser } from 'react-icons/fi';
// // import { IoMdRobot } from 'react-icons/io';
// import { FaRobot } from "react-icons/fa";


// // Animation keyframes
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(10px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const typing = keyframes`
//   0% { opacity: 0.5; }
//   50% { opacity: 1; }
//   100% { opacity: 0.5; }
// `;

// // Styled components
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
//   font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
// `;

// const Header = styled.header`
//   padding: 1rem 2rem;
//   background: rgba(255, 255, 255, 0.8);
//   backdrop-filter: blur(10px);
//   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   z-index: 10;

//   h1 {
//     font-size: 1.5rem;
//     font-weight: 600;
//     margin: 0;
//     color: #333;
//   }
// `;

// const ChatContainer = styled.div`
//   flex: 1;
//   overflow-y: auto;
//   padding: 2rem;
//   padding-bottom: 100px;
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
// `;

// const Message = styled.div`
//   display: flex;
//   gap: 1rem;
//   max-width: 80%;
//   align-self: ${props => props.role === 'user' ? 'flex-end' : 'flex-start'};
//   animation: ${fadeIn} 0.3s ease-out forwards;
// `;

// const Avatar = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background: ${props => props.role === 'user' ? '#3b82f6' : '#10b981'};
//   color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-shrink: 0;
// `;

// const Bubble = styled.div`
//   padding: 0.75rem 1.25rem;
//   border-radius: ${props => 
//     props.role === 'user' 
//       ? '18px 18px 4px 18px' 
//       : '18px 18px 18px 4px'};
//   background: ${props => 
//     props.role === 'user' 
//       ? '#3b82f6' 
//       : 'white'};
//   color: ${props => 
//     props.role === 'user' 
//       ? 'white' 
//       : '#333'};
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   line-height: 1.5;
// `;

// const InputContainer = styled.div`
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   padding: 1.5rem;
//   background: rgba(255, 255, 255, 0.9);
//   backdrop-filter: blur(10px);
//   border-top: 1px solid rgba(0, 0, 0, 0.1);
// `;

// const InputForm = styled.form`
//   display: flex;
//   gap: 0.5rem;
//   max-width: 800px;
//   margin: 0 auto;
// `;

// const InputField = styled.input`
//   flex: 1;
//   padding: 0.75rem 1.25rem;
//   border-radius: 24px;
//   border: 1px solid rgba(0, 0, 0, 0.1);
//   font-size: 1rem;
//   outline: none;
//   transition: all 0.2s;

//   &:focus {
//     border-color: #3b82f6;
//     box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
//   }
// `;

// const SendButton = styled.button`
//   width: 48px;
//   height: 48px;
//   border-radius: 50%;
//   background: #3b82f6;
//   color: white;
//   border: none;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   transition: all 0.2s;

//   &:hover {
//     background: #2563eb;
//   }

//   &:disabled {
//     background: #9ca3af;
//     cursor: not-allowed;
//   }
// `;

// const TypingIndicator = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   padding: 0.75rem 1.25rem;
//   background: white;
//   border-radius: 18px 18px 18px 4px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   align-self: flex-start;
// `;

// const Dot = styled.div`
//   width: 8px;
//   height: 8px;
//   border-radius: 50%;
//   background: #6b7280;
//   animation: ${typing} 1.4s infinite ease-in-out;

//   &:nth-child(1) {
//     animation-delay: 0s;
//   }
//   &:nth-child(2) {
//     animation-delay: 0.2s;
//   }
//   &:nth-child(3) {
//     animation-delay: 0.4s;
//   }
// `;

// // Mock responses
// const mockResponses = [
//   "I'm your AI assistant. How can I help you today?",
//   "That's an interesting question. Let me think about that...",
//   "Based on my knowledge, I'd recommend checking our product catalog.",
//   "I can help you with product recommendations, order status, or general questions.",
//   "Our return policy allows returns within 30 days of purchase.",
//   "Shipping typically takes 3-5 business days for standard delivery."
// ];

// const AIAssistant = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, role: 'assistant', content: "Hello! I'm your AI shopping assistant. How can I help you today?" }
//   ]);
//   const [inputValue, setInputValue] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const chatContainerRef = useRef(null);

//   // Auto-scroll to bottom when messages change
//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [messages]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!inputValue.trim()) return;

//     // Add user message
//     const userMessage = {
//       id: messages.length + 1,
//       role: 'user',
//       content: inputValue
//     };

//     setMessages([...messages, userMessage]);
//     setInputValue('');
//     setIsTyping(true);

//     // Mock AI response after delay
//     setTimeout(() => {
//       const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
//       const aiMessage = {
//         id: messages.length + 2,
//         role: 'assistant',
//         content: randomResponse
//       };
//       setMessages(prev => [...prev, aiMessage]);
//       setIsTyping(false);
//     }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5s
//   };

//   // Lottie animation options
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: robotAnimation,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <Container>
//       <Header>
//         {/* Replace with your Lottie animation or icon */}
//         <div style={{ width: 32, height: 32 }}>
//           <Lottie 
//             options={defaultOptions}
//             height={32}
//             width={32}
//           />
//         </div>
//         <h1>AI Shopping Assistant</h1>
//       </Header>

//       <ChatContainer ref={chatContainerRef}>
//         {messages.map((message) => (
//           <Message key={message.id} role={message.role}>
//             <Avatar role={message.role}>
//               {message.role === 'user' ? (
//                 <FiUser size={20} />
//               ) : (
//                 <FaRobot size={20} />
//               )}
//             </Avatar>
//             <Bubble role={message.role}>
//               {message.content}
//             </Bubble>
//           </Message>
//         ))}

//         {isTyping && (
//           <Message role="assistant">
//             <Avatar role="assistant">
//               <IoMdRobot size={20} />
//             </Avatar>
//             <TypingIndicator>
//               <Dot />
//               <Dot />
//               <Dot />
//             </TypingIndicator>
//           </Message>
//         )}
//       </ChatContainer>

//       <InputContainer>
//         <InputForm onSubmit={handleSubmit}>
//           <InputField
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             placeholder="Ask me anything about our products..."
//             aria-label="Type your message"
//           />
//           <SendButton 
//             type="submit" 
//             disabled={!inputValue.trim() || isTyping}
//             aria-label="Send message"
//           >
//             <FiSend size={20} />
//           </SendButton>
//         </InputForm>
//       </InputContainer>
//     </Container>
//   );
// };

// export default AIAssistant;










// import React, { useState, useRef, useEffect } from 'react';
// import Lottie from 'react-lottie';
// import styled, { keyframes } from 'styled-components';
// import robotAnimation from '../assets/robot.json'; // Replace with your Lottie JSON file
// import { FiSend, FiUser } from 'react-icons/fi';
// import { FaRobot } from "react-icons/fa";

// // Animation keyframes
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(10px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const typing = keyframes`
//   0% { opacity: 0.5; }
//   50% { opacity: 1; }
//   100% { opacity: 0.5; }
// `;

// // Styled components (same as before)
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
//   font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
// `;

// const Header = styled.header`
//   padding: 1rem 2rem;
//   background: rgba(255, 255, 255, 0.8);
//   backdrop-filter: blur(10px);
//   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   z-index: 10;

//   h1 {
//     font-size: 1.5rem;
//     font-weight: 600;
//     margin: 0;
//     color: #333;
//   }
// `;

// const ChatContainer = styled.div`
//   flex: 1;
//   overflow-y: auto;
//   padding: 2rem;
//   padding-bottom: 100px;
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
// `;

// const Message = styled.div`
//   display: flex;
//   gap: 1rem;
//   max-width: 80%;
//   align-self: ${props => props.role === 'user' ? 'flex-end' : 'flex-start'};
//   animation: ${fadeIn} 0.3s ease-out forwards;
// `;

// const Avatar = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background: ${props => props.role === 'user' ? '#3b82f6' : '#10b981'};
//   color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-shrink: 0;
// `;

// const Bubble = styled.div`
//   padding: 0.75rem 1.25rem;
//   border-radius: ${props => 
//     props.role === 'user' 
//       ? '18px 18px 4px 18px' 
//       : '18px 18px 18px 4px'};
//   background: ${props => 
//     props.role === 'user' 
//       ? '#3b82f6' 
//       : 'white'};
//   color: ${props => 
//     props.role === 'user' 
//       ? 'white' 
//       : '#333'};
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   line-height: 1.5;
// `;

// const InputContainer = styled.div`
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   padding: 1.5rem;
//   background: rgba(255, 255, 255, 0.9);
//   backdrop-filter: blur(10px);
//   border-top: 1px solid rgba(0, 0, 0, 0.1);
// `;

// const InputForm = styled.form`
//   display: flex;
//   gap: 0.5rem;
//   max-width: 800px;
//   margin: 0 auto;
// `;

// const InputField = styled.input`
//   flex: 1;
//   padding: 0.75rem 1.25rem;
//   border-radius: 24px;
//   border: 1px solid rgba(0, 0, 0, 0.1);
//   font-size: 1rem;
//   outline: none;
//   transition: all 0.2s;

//   &:focus {
//     border-color: #3b82f6;
//     box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
//   }
// `;

// const SendButton = styled.button`
//   width: 48px;
//   height: 48px;
//   border-radius: 50%;
//   background: #3b82f6;
//   color: white;
//   border: none;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   transition: all 0.2s;

//   &:hover {
//     background: #2563eb;
//   }

//   &:disabled {
//     background: #9ca3af;
//     cursor: not-allowed;
//   }
// `;

// const TypingIndicator = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   padding: 0.75rem 1.25rem;
//   background: white;
//   border-radius: 18px 18px 18px 4px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   align-self: flex-start;
// `;

// const Dot = styled.div`
//   width: 8px;
//   height: 8px;
//   border-radius: 50%;
//   background: #6b7280;
//   animation: ${typing} 1.4s infinite ease-in-out;

//   &:nth-child(1) {
//     animation-delay: 0s;
//   }
//   &:nth-child(2) {
//     animation-delay: 0.2s;
//   }
//   &:nth-child(3) {
//     animation-delay: 0.4s;
//   }
// `;

// const AIAssistant = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, role: 'assistant', content: "Hello! I'm your AI shopping assistant. How can I help you today?" }
//   ]);
//   const [inputValue, setInputValue] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const chatContainerRef = useRef(null);

//   // Auto-scroll to bottom when messages change
//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [messages]);

//   // Function to generate AI response based on user query
//   const generateAIResponse = (userQuery) => {
//     const query = userQuery.toLowerCase();
    
//     // Product inquiries
//     if (query.includes('jacket') || query.includes('jackets')) {
//       return "We have a variety of men's jackets available starting from ₹1,999. They come in different styles like bomber, denim, and winter jackets. Would you like more details about a specific type?";
//     }
//     else if (query.includes('watch') || query.includes('watches')) {
//       return "Our ladies watches collection starts from ₹2,499. We have analog, digital, and smartwatch options available. Current offers: FLAT10 (10% off) and NEWUSER20 (20% off for first-time buyers).";
//     }
//     else if (query.includes('headphone') || query.includes('headphones') || query.includes('earphone')) {
//       return "Bluetooth headphones are available from ₹999 to ₹9,999. Key features include: 20hr battery life, noise cancellation, and water resistance. Top brands: Boat, Noise, and Sony.";
//     }
    
//     // Order status
//     else if (query.includes('order') || query.includes('status') || query.includes('track')) {
//       const orderId = query.match(/ord\d+/i)?.[0] || 'ORD123';
//       const statuses = ['confirmed', 'shipped', 'delivered'];
//       const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
//       return `Your order ${orderId.toUpperCase()} is ${randomStatus}. ${randomStatus === 'delivered' ? 'Hope you liked your purchase!' : 'Expected delivery in 3-5 business days.'}`;
//     }
    
//     // Coupons and offers
//     else if (query.includes('coupon') || query.includes('offer') || query.includes('discount')) {
//       return "Current offers: FLAT10 (10% off for all users), NEWUSER20 (20% off for first-time customers). Apply these at checkout!";
//     }
    
//     // Return policy
//     else if (query.includes('return') || query.includes('exchange')) {
//       return "Our return policy: 10-day easy returns. Items must be unused with original tags. Refunds processed within 3-5 business days after we receive the item.";
//     }
    
//     // Shipping and payment
//     else if (query.includes('shipping') || query.includes('delivery')) {
//       return "Standard shipping takes 3-5 business days. Express shipping (₹99 extra) delivers in 1-2 days. We accept all cards, UPI, net banking, and Cash on Delivery (COD available).";
//     }
    
//     // Price inquiries
//     else if (query.includes('price') || query.includes('kitne') || query.includes('cost')) {
//       return "Prices vary by product. Could you please specify which product you're interested in? For example: 'Men's jacket price', 'Ladies watch cost', etc.";
//     }
    
//     // Non-shopping related queries
//     else if (query.includes('how are you') || query.includes('hello') || query.includes('hi')) {
//       return "I'm here to assist with shopping-related questions! How can I help you with your shopping today?";
//     }
//     else {
//       return "I'm here to assist with shopping-related questions! Could you please ask about products, orders, or shopping-related queries?";
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!inputValue.trim()) return;

//     // Add user message
//     const userMessage = {
//       id: messages.length + 1,
//       role: 'user',
//       content: inputValue
//     };

//     setMessages([...messages, userMessage]);
//     setInputValue('');
//     setIsTyping(true);

//     // Generate AI response after delay
//     setTimeout(() => {
//       const aiResponse = generateAIResponse(inputValue);
//       const aiMessage = {
//         id: messages.length + 2,
//         role: 'assistant',
//         content: aiResponse
//       };
//       setMessages(prev => [...prev, aiMessage]);
//       setIsTyping(false);
//     }, 1000); // Fixed delay of 1 second for better UX
//   };

//   // Lottie animation options
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: robotAnimation,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <Container>
//       <Header>
//         <div style={{ width: 32, height: 32 }}>
//           <Lottie 
//             options={defaultOptions}
//             height={32}
//             width={32}
//           />
//         </div>
//         <h1>AI Shopping Assistant</h1>
//       </Header>

//       <ChatContainer ref={chatContainerRef}>
//         {messages.map((message) => (
//           <Message key={message.id} role={message.role}>
//             <Avatar role={message.role}>
//               {message.role === 'user' ? (
//                 <FiUser size={20} />
//               ) : (
//                 <FaRobot size={20} />
//               )}
//             </Avatar>
//             <Bubble role={message.role}>
//               {message.content}
//             </Bubble>
//           </Message>
//         ))}

//         {isTyping && (
//           <Message role="assistant">
//             <Avatar role="assistant">
//               <FaRobot size={20} />
//             </Avatar>
//             <TypingIndicator>
//               <Dot />
//               <Dot />
//               <Dot />
//             </TypingIndicator>
//           </Message>
//         )}
//       </ChatContainer>

//       <InputContainer>
//         <InputForm onSubmit={handleSubmit}>
//           <InputField
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             placeholder="Ask me anything about our products..."
//             aria-label="Type your message"
//           />
//           <SendButton 
//             type="submit" 
//             disabled={!inputValue.trim() || isTyping}
//             aria-label="Send message"
//           >
//             <FiSend size={20} />
//           </SendButton>
//         </InputForm>
//       </InputContainer>
//     </Container>
//   );
// };

// export default AIAssistant;















import { useState, useRef, useEffect } from 'react';
import Lottie from 'react-lottie';
import styled, { keyframes } from 'styled-components';
import robotAnimation from '../assets/robot.json';
import { FiSend, FiUser } from 'react-icons/fi';
import { FaRobot } from "react-icons/fa";

// ... (styled components remain exactly the same as before) ...



// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const typing = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`;

// Styled components (same as before)
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const Header = styled.header`
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 10;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    color: #333;
  }
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Message = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 80%;
  align-self: ${props => props.role === 'user' ? 'flex-end' : 'flex-start'};
  animation: ${fadeIn} 0.3s ease-out forwards;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.role === 'user' ? '#3b82f6' : '#10b981'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Bubble = styled.div`
  padding: 0.75rem 1.25rem;
  border-radius: ${props => 
    props.role === 'user' 
      ? '18px 18px 4px 18px' 
      : '18px 18px 18px 4px'};
  background: ${props => 
    props.role === 'user' 
      ? '#3b82f6' 
      : 'white'};
  color: ${props => 
    props.role === 'user' 
      ? 'white' 
      : '#333'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  line-height: 1.5;
`;

const InputContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const InputForm = styled.form`
  display: flex;
  gap: 0.5rem;
  max-width: 800px;
  margin: 0 auto;
`;

const InputField = styled.input`
  flex: 1;
  padding: 0.75rem 1.25rem;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`;

const SendButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #3b82f6;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #2563eb;
  }

  &:disabled {
    background:rgb(36, 37, 38);
    cursor: not-allowed;
  }
`;

const TypingIndicator = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: white;
  border-radius: 18px 18px 18px 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  align-self: flex-start;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6b7280;
  animation: ${typing} 1.4s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', content: "Hello! I'm your AI shopping assistant. How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Function to generate AI response based on user query
  const generateAIResponse = (userQuery) => {
    const query = userQuery.toLowerCase();
    const isUrduMix = /(hai|hain|ka|ki|kya)/i.test(userQuery); // Detect Urdu/Hindi mixed style
    
    // Helper function for mixed language responses
    const respond = (english, urduMix = '') => {
      return isUrduMix && urduMix ? urduMix : english;
    };

    // Order status tracking
    const orderIdMatch = query.match(/(?:order|ord|#)?\s*([a-z0-9]{4,})/i);
    const orderId = orderIdMatch ? `#${orderIdMatch[1].toUpperCase()}` : '#ORD' + Math.floor(1000 + Math.random() * 9000);
    
    if (query.includes('order') || query.includes('status') || query.includes('track') || orderIdMatch) {
      const statuses = [
        { status: 'confirmed', text: respond(`Your order ${orderId} has been confirmed and will be shipped soon.`, `Aapka order ${orderId} confirm ho gaya hai aur jald hi ship kar diya jayega.`) },
        { status: 'packed', text: respond(`Your order ${orderId} has been packed and is ready for shipment.`, `Aapka order ${orderId} pack kiya ja chuka hai aur shipment ke liye taiyar hai.`) },
        { status: 'shipped', text: respond(`Your order ${orderId} has been shipped and will arrive in 2-3 business days.`, `Aapka order ${orderId} ship kar diya gaya hai aur 2-3 business days mein deliver ho jayega.`) },
        { status: 'out for delivery', text: respond(`Your order ${orderId} is out for delivery and will arrive today!`, `Aapka order ${orderId} aaj deliver ho jayega, yeh delivery ke liye nikal chuka hai.`) },
        { status: 'delivered', text: respond(`Your order ${orderId} has been delivered. We hope you're happy with your purchase!`, `Aapka order ${orderId} deliver ho chuka hai. Umeed hai aap apne purchase se khush honge!`) }
      ];
      return statuses[Math.floor(Math.random() * statuses.length)].text;
    }
    
    // Product inquiries
    if (query.includes('jacket') || query.includes('jackets')) {
      return respond(
        "Men's Jackets available from Rs. 1999. Features: waterproof, multiple pockets, stylish designs. In stock with fast delivery!",
        "Men's Jackets Rs. 1999 se available hain. Features: waterproof, multiple pockets, stylish designs. Stock mein available hain!"
      );
    }
    else if (query.includes('watch') || query.includes('watches')) {
      return respond(
        "Ladies Watches starting at Rs. 2499. Features: elegant designs, water resistant, long battery life. In stock now!",
        "Ladies Watches Rs. 2499 se shuru hain. Features: elegant designs, water resistant, long battery life. Abhi stock mein available hain!"
      );
    }
    else if (query.includes('headphone') || query.includes('earphone')) {
      return respond(
        "Bluetooth Headphones available from Rs. 999. Features: wireless, 20-hr battery life, noise cancellation. In stock now!",
        "Bluetooth Headphones Rs. 999 se available hain. Features: wireless, 20-hr battery life, noise cancellation. Abhi stock mein hain!"
      );
    }
    
    // Coupons and offers
    else if (query.includes('coupon') || query.includes('offer') || query.includes('discount') || query.includes('code')) {
      return respond(
        "Current offers: FLAT10 (10% off sitewide), NEWUSER20 (20% off for first-time customers). Apply at checkout!",
        "Current offers: FLAT10 (10% off), NEWUSER20 (20% off new customers ke liye). Checkout par apply karein!"
      );
    }
    
    // Return policy
    else if (query.includes('return') || query.includes('exchange')) {
      return respond(
        "Return policy: 10-day easy returns. Items must be unused with original packaging. Refunds processed in 3-5 business days.",
        "Return policy: 10-day easy returns. Items unused hone chahiye with original packaging. Refund 3-5 business days mein process hoga."
      );
    }
    
    // Shipping and payment
    else if (query.includes('shipping') || query.includes('delivery')) {
      return respond(
        "Standard shipping: 3-5 business days. Express shipping available for Rs. 99 extra (1-2 days). Payment methods: Cash on Delivery, Credit/Debit Cards.",
        "Standard shipping: 3-5 business days. Express shipping Rs. 99 extra mein available hai (1-2 days). Payment methods: Cash on Delivery, Credit/Debit Cards."
      );
    }
    else if (query.includes('payment') || query.includes('pay')) {
      return respond(
        "We accept: Cash on Delivery, Credit/Debit Cards (Visa/Mastercard), UPI, and Net Banking.",
        "Hum accept karte hain: Cash on Delivery, Credit/Debit Cards (Visa/Mastercard), UPI, aur Net Banking."
      );
    }
    
    // Greetings or non-shopping related
    else if (query.includes('how are you') || query.includes('hello') || query.includes('hi')) {
      return respond(
        "I'm here to assist with shopping-related questions! How can I help you today?",
        "Main shopping se related madad ke liye yahan hoon! Aaj aapko kaise help kar sakta hoon?"
      );
    }
    else {
      return respond(
        "I'm here to assist with shopping-related questions only 😊 Please ask about products, orders, or shopping queries.",
        "Main sirf shopping se related sawalon mein madad kar sakta hoon 😊 Kripya products, orders, ya shopping ke bare mein poochhein."
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      role: 'user',
      content: inputValue
    };

    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Generate AI response after delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue);
      const aiMessage = {
        id: messages.length + 2,
        role: 'assistant',
        content: aiResponse
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };

  // ... (Lottie options and return statement remain exactly the same as before) ...
// Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: robotAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Container>
      <Header>
        <div style={{ width: 32, height: 32 }}>
          <Lottie 
            options={defaultOptions}
            height={32}
            width={32}
          />
        </div>
        <h1>AI Shopping Assistant</h1>
      </Header>

      <ChatContainer ref={chatContainerRef}>
        {messages.map((message) => (
          <Message key={message.id} role={message.role}>
            <Avatar role={message.role}>
              {message.role === 'user' ? (
                <FiUser size={20} />
              ) : (
                <FaRobot size={20} />
              )}
            </Avatar>
            <Bubble role={message.role}>
              {message.content}
            </Bubble>
          </Message>
        ))}

        {isTyping && (
          <Message role="assistant">
            <Avatar role="assistant">
              <FaRobot size={20} />
            </Avatar>
            <TypingIndicator>
              <Dot />
              <Dot />
              <Dot />
            </TypingIndicator>
          </Message>
        )}
      </ChatContainer>

      <InputContainer>
        <InputForm onSubmit={handleSubmit}>
          <InputField
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything about our products..."
            aria-label="Type your message"
          />
          <SendButton 
            type="submit" 
            disabled={!inputValue.trim() || isTyping}
            aria-label="Send message"
          >
            <FiSend size={20} />
          </SendButton>
        </InputForm>
      </InputContainer>
    </Container>
  );
};

export default AIAssistant;
















// import React, { useState, useRef, useEffect } from 'react';
// import Lottie from 'react-lottie';
// import styled, { keyframes } from 'styled-components';
// import robotAnimation from '../assets/robot.json';
// import { FiSend, FiUser } from 'react-icons/fi';
// import { FaRobot } from "react-icons/fa";

// // ... (styled components remain exactly the same as before) ...

// // Animation keyframes
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(10px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const typing = keyframes`
//   0% { opacity: 0.5; }
//   50% { opacity: 1; }
//   100% { opacity: 0.5; }
// `;

// // Styled components (same as before)
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
//   font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
// `;

// const Header = styled.header`
//   padding: 1rem 2rem;
//   background: rgba(255, 255, 255, 0.8);
//   backdrop-filter: blur(10px);
//   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   z-index: 10;

//   h1 {
//     font-size: 1.5rem;
//     font-weight: 600;
//     margin: 0;
//     color: #333;
//   }
// `;

// const ChatContainer = styled.div`
//   flex: 1;
//   overflow-y: auto;
//   padding: 2rem;
//   padding-bottom: 100px;
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
// `;

// const Message = styled.div`
//   display: flex;
//   gap: 1rem;
//   max-width: 80%;
//   align-self: ${props => props.role === 'user' ? 'flex-end' : 'flex-start'};
//   animation: ${fadeIn} 0.3s ease-out forwards;
// `;

// const Avatar = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background: ${props => props.role === 'user' ? '#3b82f6' : '#10b981'};
//   color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-shrink: 0;
// `;

// const Bubble = styled.div`
//   padding: 0.75rem 1.25rem;
//   border-radius: ${props => 
//     props.role === 'user' 
//       ? '18px 18px 4px 18px' 
//       : '18px 18px 18px 4px'};
//   background: ${props => 
//     props.role === 'user' 
//       ? '#3b82f6' 
//       : 'white'};
//   color: ${props => 
//     props.role === 'user' 
//       ? 'white' 
//       : '#333'};
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   line-height: 1.5;
// `;

// const InputContainer = styled.div`
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   padding: 1.5rem;
//   background: rgba(255, 255, 255, 0.9);
//   backdrop-filter: blur(10px);
//   border-top: 1px solid rgba(0, 0, 0, 0.1);
// `;

// const InputForm = styled.form`
//   display: flex;
//   gap: 0.5rem;
//   max-width: 800px;
//   margin: 0 auto;
// `;

// const InputField = styled.input`
//   flex: 1;
//   padding: 0.75rem 1.25rem;
//   border-radius: 24px;
//   border: 1px solid rgba(0, 0, 0, 0.1);
//   font-size: 1rem;
//   outline: none;
//   transition: all 0.2s;

//   &:focus {
//     border-color: #3b82f6;
//     box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
//   }
// `;

// const SendButton = styled.button`
//   width: 48px;
//   height: 48px;
//   border-radius: 50%;
//   background: #3b82f6;
//   color: white;
//   border: none;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   transition: all 0.2s;

//   &:hover {
//     background: #2563eb;
//   }

//   &:disabled {
//     background:rgb(36, 37, 38);
//     cursor: not-allowed;
//   }
// `;

// const TypingIndicator = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   padding: 0.75rem 1.25rem;
//   background: white;
//   border-radius: 18px 18px 18px 4px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   align-self: flex-start;
// `;

// const Dot = styled.div`
//   width: 8px;
//   height: 8px;
//   border-radius: 50%;
//   background: #6b7280;
//   animation: ${typing} 1.4s infinite ease-in-out;

//   &:nth-child(1) {
//     animation-delay: 0s;
//   }
//   &:nth-child(2) {
//     animation-delay: 0.2s;
//   }
//   &:nth-child(3) {
//     animation-delay: 0.4s;
//   }
// `;

// const AIAssistant = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, role: 'assistant', content: "Hello! I'm your AI shopping assistant. How can I help you today?" }
//   ]);
//   const [inputValue, setInputValue] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const chatContainerRef = useRef(null);

//   // Auto-scroll to bottom when messages change
//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [messages]);

//   // Function to call Gemini API
//   const callGeminiAPI = async (userQuery) => {
//     const API_KEY = 'AIzaSyC8TscA27fctckRwvgmCdZD6sEPNWUdK5A'; // Replace with your actual API key
//     // const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;
//     const API_URL = `/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;
//     const systemPrompt = `You are an intelligent AI assistant for an e-commerce store, able to answer questions related to product information, offers, order status, and more. Respond to user queries based on these guidelines:
//     - Product details: Include price, availability (In Stock/Out of Stock), and 2-3 key features
//     - Offers: Mention FLAT10 (10% off), NEWUSER20 (20% off for first-time buyers)
//     - Order status: Provide realistic status (Confirmed, Packed, Shipped, Out for Delivery, Delivered)
//     - Keep responses short, friendly, and in English or Urdu if the user uses both
//     - For non-shopping questions, politely redirect to shopping topics`;
    
//     const payload = {
//       contents: [
//         {
//           parts: [{ text: userQuery }],
//           role: "user"
//         }
//       ],
//       system_instruction: {
//         role: "system",
//         parts: [
//           { text: systemPrompt }
//         ]
//       }
//     };

//     // try {
//     //   const response = await fetch(API_URL, {
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-Type': 'application/json',
//     //     },
//     //     body: JSON.stringify(payload)
//     //   });

//     //   const data = await response.json();
//     //   return data.candidates[0].content.parts[0].text;
//     // }
//     //  catch (error) {
//     //   console.error('Error calling Gemini API:', error);
//     //   return "I'm having trouble connecting to our service. Please try again later.";
//     // }


//     const callGeminiAPI = async (userQuery) => {
//   const API_KEY = 'YOUR_ACTUAL_API_KEY'; // Double-check this!
//   const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

//   const payload = {
//     contents: [{
//       parts: [{ text: userQuery }],
//       role: "user"
//     }],
//     system_instruction: {
//       role: "system",
//       parts: [{
//         text: "You are an AI shopping assistant... (your full instructions here)"
//       }]
//     }
//   };

//   try {
//     console.log("Sending request to Gemini API...", { API_URL, payload }); // Debug log

//     const response = await fetch(API_URL, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(payload)
//     });

//     console.log("Received response status:", response.status); // Debug log

//     if (!response.ok) {
//       const errorData = await response.json(); // Try to get error details
//       console.error("API Error Response:", errorData);
//       throw new Error(`API request failed with status ${response.status}`);
//     }

//     const data = await response.json();
//     console.log("Full API Response:", data); // Debug log

//     // Safer response parsing
//     if (!data.candidates || !data.candidates[0]?.content?.parts[0]?.text) {
//       console.error("Unexpected response structure:", data);
//       throw new Error("Received malformed response from API");
//     }

//     return data.candidates[0].content.parts[0].text;

//   } catch (error) {
//     console.error("API Call Failed:", {
//       error: error.message,
//       payload: payload,
//       stack: error.stack
//     });
//     throw error; // Re-throw to handle in the calling function
//   }
// };
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!inputValue.trim()) return;

//     // Add user message
//     const userMessage = {
//       id: messages.length + 1,
//       role: 'user',
//       content: inputValue
//     };

//     setMessages([...messages, userMessage]);
//     setInputValue('');
//     setIsTyping(true);

//     try {
//       // Call Gemini API and get response
//       const aiResponse = await callGeminiAPI(inputValue);
      
//       const aiMessage = {
//         id: messages.length + 2,
//         role: 'assistant',
//         content: aiResponse
//       };
      
//       setMessages(prev => [...prev, aiMessage]);
//     } catch (error) {
//       const errorMessage = {
//         id: messages.length + 2,
//         role: 'assistant',
//         content: "Sorry, I'm having trouble responding right now. Please try again later."
//       };
//       setMessages(prev => [...prev, errorMessage]);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   // ... (Lottie options and return statement remain exactly the same as before) ...
//  const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: robotAnimation,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <Container>
//       <Header>
//         <div style={{ width: 32, height: 32 }}>
//           <Lottie 
//             options={defaultOptions}
//             height={32}
//             width={32}
//           />
//         </div>
//         <h1>AI Shopping Assistant</h1>
//       </Header>

//       <ChatContainer ref={chatContainerRef}>
//         {messages.map((message) => (
//           <Message key={message.id} role={message.role}>
//             <Avatar role={message.role}>
//               {message.role === 'user' ? (
//                 <FiUser size={20} />
//               ) : (
//                 <FaRobot size={20} />
//               )}
//             </Avatar>
//             <Bubble role={message.role}>
//               {message.content}
//             </Bubble>
//           </Message>
//         ))}

//         {isTyping && (
//           <Message role="assistant">
//             <Avatar role="assistant">
//               <FaRobot size={20} />
//             </Avatar>
//             <TypingIndicator>
//               <Dot />
//               <Dot />
//               <Dot />
//             </TypingIndicator>
//           </Message>
//         )}
//       </ChatContainer>

//       <InputContainer>
//         <InputForm onSubmit={handleSubmit}>
//           <InputField
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             placeholder="Ask me anything about our products..."
//             aria-label="Type your message"
//           />
//           <SendButton 
//             type="submit" 
//             disabled={!inputValue.trim() || isTyping}
//             aria-label="Send message"
//           >
//             <FiSend size={20} />
//           </SendButton>
//         </InputForm>
//       </InputContainer>
//     </Container>
//   );
// };

// export default AIAssistant;