"use client";
import { useState, useRef, useEffect } from "react";
import NavBar from "../components/navbar2";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Scroll to bottom whenever messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Function to send user message
  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const newMessages = [...messages, { sender: "user", text: trimmed }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await fetch("http://127.0.0.1:5000/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, user_id: "user123" }),
      });

      const data = await res.json();
      setMessages([...newMessages, { sender: "bot", text: data.bot }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { sender: "bot", text: "⚠️ Server error. Please try again later." },
      ]);
    }
  };

  // Handle Enter key to send message
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent newline
      sendMessage();
    }
  };

  return (
  <div className="flex flex-col justify-center bg-gray-200 h-[100%] pb-50">
    <NavBar></NavBar>
    <div className="text-center text-4xl font-bold my-4">KrishiGPT</div>
    <div className="w-300 mx-auto p-5 bg-white shadow-xl rounded-2xl flex flex-col">
      <div className="h-106 w-290 overflow-y-auto border-1 border-gray-400 mb-3 space-y-3 p-3 bg-gray-50 rounded-lg">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`${
              m.sender === "user"
                ? "text-right text-green-700"
                : "text-left text-gray-800 bg-gray-200 p-2 rounded-lg inline-block"
            }`}
          >
            {m.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="flex border-1 border-gray-400 rounded-lg">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown} // 👈 Handles Enter press
          placeholder="Ask about crops, fertilizers, weather..."
          className="flex-1 p-2 pl-4 py-auto rounded-l-md resize-none h-12 focus:outline-none "
        />
        <button
          onClick={sendMessage}
          className="bg-green-600 text-white px-4 border-8 border-green-600 rounded-r-md cursor-pointer"
        >
          Send
        </button>
      </div>
    </div>
    </div>
  );
}
