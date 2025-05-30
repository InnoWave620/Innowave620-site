import React, { useState, useRef, useEffect } from "react";
// Import the robot icon directly
import robotIcon from "../assets/images/8888887_robot_automation_icon.png";

interface Message {
  sender: "user" | "bot";
  text: string;
}

// Add the missing formatBotText function
const formatBotText = (text: string): string => {
  // Convert URLs to clickable links
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const textWithLinks = text.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-yellow-300 underline">$1</a>');
  
  // Convert line breaks to <br> tags
  return textWithLinks.replace(/\n/g, '<br>');
};

// Add the missing getFallbackResponse function
const getFallbackResponse = (userInput: string): string => {
  const userInputLower = userInput.toLowerCase();
  
  if (userInputLower.includes('service') || userInputLower.includes('offer')) {
    return "InnoWave620 offers Web Development, Mobile Solutions, UI/UX Design, and Digital Strategy services. How can we help with your project?";
  }
  
  if (userInputLower.includes('contact') || userInputLower.includes('call') || userInputLower.includes('phone')) {
    return "You can contact our founder and CEO, Senzo Shinga, at +27633941909 to discuss your project needs.";
  }
  
  if (userInputLower.includes('about') || userInputLower.includes('company') || userInputLower.includes('who')) {
    return "InnoWave620 is a forward-thinking startup dedicated to delivering innovative technology solutions and premium digital experiences. Our team is passionate about helping businesses grow and adapt in the digital age.";
  }
  
  return "I'm currently in offline mode, but I'd be happy to tell you about InnoWave620's services, our company, or how to contact us. What would you like to know?";
};

const getInitialMessages = (apiKeyValid: boolean | null): Message[] => {
  if (apiKeyValid === false) {
    return [
      { sender: "bot", text: "Hi! I'm currently in offline mode due to a connection issue, but I can still provide basic information about InnoWave620. How can I help you today?" }
    ];
  }
  return [
    { sender: "bot", text: "Hi! How can I help you today?" }
  ];
};

const Chatbot: React.FC = () => {
  const [apiKeyValid, setApiKeyValid] = useState<boolean | null>(null);
  const [messages, setMessages] = useState<Message[]>(getInitialMessages(null));
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initialMessagesRef = useRef<Message[]>(getInitialMessages(null));

  useEffect(() => {
    if (initialMessagesRef.current.length === 1 && initialMessagesRef.current[0].sender === "bot") {
      setMessages(getInitialMessages(apiKeyValid));
    }
  }, [apiKeyValid]);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  useEffect(() => {
    const checkApiKeyValidity = async () => {
      try {
        const apiKey = import.meta.env.VITE_GROQ_API_KEY || "";
        if (!apiKey || apiKey === "YOUR_API_KEY_HERE") {
          setApiKeyValid(false);
          return;
        }
        const response = await fetch("https://api.groq.com/openai/v1/models", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${apiKey}`
          }
        });
        setApiKeyValid(response.ok);
      } catch (error) {
        console.error("API key validation error:", error);
        setApiKeyValid(false);
      }
    };
    checkApiKeyValidity();
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    if (apiKeyValid === false) {
      const fallbackResponse = getFallbackResponse(userMessage.text);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: fallbackResponse }
        ]);
        setIsTyping(false);
      }, 1000);
      return;
    }

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY || "";
      if (!apiKey || apiKey === "YOUR_API_KEY_HERE") {
        setApiKeyValid(false);
        throw new Error("API key is missing or invalid");
      }

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            { role: "system", content: `You are InnoWave620, a forward-thinking technology company. Speak as the company itself, using 'we', 'our', and 'InnoWave620'. Only answer questions using the following information about InnoWave620. If you do not know the answer based on this information, say you don't know. If a user expresses interest in working with us, learning more, or getting started, guide them to book a call with our founder and CEO, Senzo Shinga, by providing his phone number: +27633941909.\n\nAbout: InnoWave620 is a forward-thinking startup dedicated to delivering innovative technology solutions and premium digital experiences. Our team is passionate about helping businesses grow and adapt in the digital age through creativity, expertise, and a commitment to excellence.\n\nServices: Web Development (Custom websites and web applications tailored to business needs, using the latest technologies for performance and scalability), UI/UX Design (Intuitive and engaging user interfaces with a focus on seamless user experiences and modern aesthetics), Mobile Solutions (Cross-platform mobile apps that connect you with your customers on any device, anywhere), Digital Strategy (Consulting and strategy services to help you innovate, grow, and stay ahead in the digital landscape).\n\nFounder & CEO: Senzo Shinga is the founder and CEO of InnoWave620.\n\nTestimonials: Lindiwe Zulu (InnoWave620 transformed our online presence. Their team is professional, creative, and truly cares about client success.), Sipho Mkhize (The mobile app they built for us exceeded expectations. Highly recommended for any digital project!), Amanda Ndlovu (Excellent service and attention to detail. Our website is now faster, more beautiful, and easier to use.).` },
            ...[...messages, userMessage].map((msg) => ({
              role: msg.sender === "user" ? "user" : "assistant",
              content: msg.text
            }))
          ],
          max_tokens: 256,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          setApiKeyValid(false);
        }
        const errorData = await response.json();
        throw new Error(`API error: ${errorData.error?.message || response.statusText}`);
      }

      setApiKeyValid(true);
      const data = await response.json();
      const botReply = data.choices[0].message.content || "I'm sorry, I couldn't generate a response.";
      const cleanedBotReply = botReply.replace(/\*/g, "");
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: cleanedBotReply }
      ]);
      setIsTyping(false);
    } catch (error) {
      console.error("Chatbot error:", error);
      const fallbackResponse = getFallbackResponse(userMessage.text);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: fallbackResponse }
      ]);
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-2">
        <p className="text-white text-center text-sm bg-gray-800 bg-opacity-75 p-2 rounded-lg shadow-lg border border-yellow-400 animate-fadeInUpBig">Talk to an Agent!</p>
        <button
          className="bg-yellow-400 text-neutral-950 rounded-full shadow-lg p-4 hover:bg-yellow-500 focus:outline-none animate-bounceOnce"
          onClick={() => setOpen((o) => !o)}
          aria-label="Open chatbot"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-neutral-950">
            <path d="M12 2C6.48 2 2 5.58 2 10c0 2.08 1.06 3.97 2.83 5.36-.13.5-.51 1.84-.7 2.55-.11.39.27.74.65.59.93-.36 2.19-1.02 2.67-1.28C9.13 17.73 10.53 18 12 18c5.52 0 10-3.58 10-8s-4.48-8-10-8z" fill="currentColor"/>
          </svg>
        </button>

        {open && (
          <div className="absolute bottom-24 right-0 w-80 max-w-[95vw] bg-gradient-to-br from-neutral-900 to-neutral-800 border border-yellow-400 rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden transform transition-all duration-300 ease-in-out scale-100 hover:scale-105 animate-fadeInUpBig">
            <div className="p-4 border-b border-yellow-400 bg-yellow-400 text-neutral-950 font-extrabold text-lg flex items-center justify-between animate-pulseOnce">
              <div className="flex items-center gap-2">
                <img src={robotIcon} alt="AI Assistant" className="w-8 h-8" />
                <span>InnoWave620 Assistant</span>
                {apiKeyValid === false && (
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                    Offline
                  </span>
                )}
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9.75 9.75m0 0l-1.39 1.475M9.75 9.75l-3.0-3m0 0l-1.26 1.26a1.5 1.5 0 01-2.12 0L1.25 8.25m12.006-7.5l.75 1.5m.75 1.5l.75 1.5M12 17.25h.007v.008H12v-.008zM12 15.75h.007v.008H12v-.008zM3.375 11.25l-.75 1.5m.75 1.5l.75 1.5m0-9.75l.75 1.5m.75 1.5l.75 1.5M12 10.5h.007v.008H12V10.5z" />
              </svg>
            </div>
            <div className="flex-1 p-4 overflow-y-auto max-h-72">
              {messages.map((msg, idx) => (
                <div key={idx} className={`mb-2 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.sender === "user" ? (
                    <div className="px-3 py-2 rounded-xl text-sm max-w-[75%] bg-yellow-400 text-neutral-950 shadow-md animate-slideInRight">
                      {msg.text}
                    </div>
                  ) : (
                    <div
                      className="px-3 py-2 rounded-xl text-sm max-w-[75%] bg-neutral-800 text-white shadow-md animate-slideInLeft"
                      dangerouslySetInnerHTML={{ __html: formatBotText(msg.text) }}
                    />
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="mb-2 flex justify-start">
                  <div className="px-3 py-2 rounded-xl text-sm max-w-[75%] bg-neutral-800 text-white opacity-70 animate-pulse shadow-md">
                    InnoWave620 is typing...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-2 border-t border-neutral-800 flex gap-2">
              <input
                type="text"
                className="flex-1 px-3 py-2 rounded-full bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-yellow-400 transition-all duration-200"
                placeholder="Type your message..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="bg-yellow-400 text-neutral-950 px-4 py-2 rounded-full hover:bg-yellow-500 font-semibold transition-all duration-200 transform hover:scale-105"
                onClick={handleSend}
                disabled={!input.trim()}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Chatbot;