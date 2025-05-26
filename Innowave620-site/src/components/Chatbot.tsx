import React, { useState, useRef, useEffect } from "react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const initialMessages: Message[] = [
  { sender: "bot", text: "Hi! How can I help you today?" }
];

function formatBotText(text: string) {
  let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  formatted = formatted.replace(/\n\s*\n/g, '<br/><br/>' );
  formatted = formatted.replace(/\n/g, '<br/>' );
  return formatted;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Call Groq API for AI-powered response
    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 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"
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
      const data = await response.json();
      const botReply = data.choices?.[0]?.message?.content || "Sorry, I couldn't process that.";
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botReply }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, there was an error connecting to the AI service." }
      ]);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div>
      <button
        className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-neutral-950 rounded-full shadow-lg p-4 hover:bg-yellow-500 focus:outline-none"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chatbot"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 5.58 2 10c0 2.08 1.06 3.97 2.83 5.36-.13.5-.51 1.84-.7 2.55-.11.39.27.74.65.59.93-.36 2.19-1.02 2.67-1.28C9.13 17.73 10.53 18 12 18c5.52 0 10-3.58 10-8s-4.48-8-10-8z" fill="currentColor"/></svg>
      </button>
      {open && (
        <div className="fixed bottom-24 right-6 w-80 max-w-[95vw] bg-neutral-900 border border-neutral-800 rounded-lg shadow-2xl z-50 flex flex-col">
          <div className="p-4 border-b border-neutral-800 font-bold text-yellow-400">Chatbot</div>
          <div className="flex-1 p-4 overflow-y-auto max-h-72">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-2 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`px-3 py-2 rounded-lg text-sm max-w-[75%] ${msg.sender === "user" ? "bg-yellow-400 text-neutral-950" : "bg-neutral-800 text-white"}`}
                  {...(msg.sender === "bot" ? { dangerouslySetInnerHTML: { __html: formatBotText(msg.text) } } : {})}
                >
                  {msg.sender === "user" ? msg.text : null}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-2 border-t border-neutral-800 flex gap-2">
            <input
              type="text"
              className="flex-1 px-3 py-2 rounded bg-neutral-800 text-white border border-neutral-700 focus:outline-none"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="bg-yellow-400 text-neutral-950 px-4 py-2 rounded hover:bg-yellow-500 font-semibold"
              onClick={handleSend}
              disabled={!input.trim()}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;