
import { useState, useRef, useEffect } from "react";
import Lottie from "react-lottie";
import styled, { keyframes } from "styled-components";
import robotAnimation from "../assets/robot.json";
import { FiSend, FiUser } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const typing = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: "Inter", sans-serif;
`;

const Header = styled.header`
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
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
  align-self: ${(props) => (props.role === "user" ? "flex-end" : "flex-start")};
  animation: ${fadeIn} 0.3s ease-out forwards;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(props) => (props.role === "user" ? "#3b82f6" : "#10b981")};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bubble = styled.div`
  padding: 0.75rem 1.25rem;
  border-radius: ${(props) =>
    props.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px"};
  background: ${(props) => (props.role === "user" ? "#3b82f6" : "white")};
  color: ${(props) => (props.role === "user" ? "white" : "#333")};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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

  &:hover {
    background: #2563eb;
  }

  &:disabled {
    background: rgb(36, 37, 38);
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
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6b7280;
  animation: ${typing} 1.4s infinite ease-in-out;

  &:nth-child(1) { animation-delay: 0s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }
`;

// Main Component
const AIAssistant = () => {
  const [messages, setMessages] = useState([
    { id: 1, role: "assistant", content: "Hello! How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // 🚀 n8n Webhook Call
  const generateAIResponse = async (userQuery) => {
    try {
      const response = await fetch("http://localhost:5678/webhook/67af8e1c-ae3c-4476-8a39-19b794e1142b/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userQuery }),
      });

      const data = await response.json();
      return data.reply || "Sorry, I didn’t get that.";
    } catch (error) {
      console.error("Error:", error);
      return "Sorry, there was an error connecting to the assistant.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      role: "user",
      content: inputValue,
    };

    setMessages([...messages, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const aiResponse = await generateAIResponse(inputValue);
      const aiMessage = {
        id: messages.length + 2,
        role: "assistant",
        content: aiResponse,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: robotAnimation,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  return (
    <Container>
      <Header>
        <div style={{ width: 32, height: 32 }}>
          <Lottie options={defaultOptions} height={32} width={32} />
        </div>
        <h1>AI Shopping Assistant</h1>
      </Header>

      <ChatContainer ref={chatContainerRef}>
        {messages.map((msg) => (
          <Message key={msg.id} role={msg.role}>
            <Avatar role={msg.role}>
              {msg.role === "user" ? <FiUser size={20} /> : <FaRobot size={20} />}
            </Avatar>
            <Bubble role={msg.role}>{msg.content}</Bubble>
          </Message>
        ))}

        {isTyping && (
          <Message role="assistant">
            <Avatar role="assistant"><FaRobot size={20} /></Avatar>
            <TypingIndicator>
              <Dot /><Dot /><Dot />
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
            placeholder="Ask me anything..."
          />
          <SendButton type="submit" disabled={!inputValue.trim() || isTyping}>
            <FiSend size={20} />
          </SendButton>
        </InputForm>
      </InputContainer>
    </Container>
  );
};

export default AIAssistant;
