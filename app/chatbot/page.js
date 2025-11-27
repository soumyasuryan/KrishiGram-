"use client";
import { useState, useRef, useEffect } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer2";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false); // 🔹 NEW STATE
  const chatEndRef = useRef(null);
  const firstRender = useRef(true);
  const [options, setOptions] = useState([]);



  // Scroll to bottom whenever messages update
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    const chatContainer = chatEndRef.current?.parentElement;
    if (chatContainer) {
      chatContainer.scrollTo({
        top: chatContainer.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  // Send user message
  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const newMessages = [...messages, { sender: "user", text: trimmed }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await fetch("https://krishigrambackend.onrender.com/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, user_id: "user123" }),
      });

      const data = await res.json();
      setMessages([...newMessages, { sender: "bot", text: data.bot }]);

      // Check if backend sent options
      if (data.options) {
        setOptions(data.options);
        setInputDisabled(true); // disable typing
      } else {
        setOptions([]);
        setInputDisabled(false);
      }
    } catch (error) {
      setMessages([
        ...newMessages,
        { sender: "bot", text: "⚠️ Server error. Please try again later." },
      ]);
    }
  };

  // Handle option click
  // Handle option click
  const handleOptionClick = async (value, label) => {
    setOptions([]);
    setInputDisabled(false);

    const newMessages = [
      ...messages,
      { sender: "user", text: label },
    ];
    setMessages(newMessages);

    try {
      const res = await fetch("https://krishigrambackend.onrender.com/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: label,   // ✅ Send label as message
          intent: value,    // ✅ Include intent value
          user_id: "user123"
        }),
      });

      const data = await res.json();
      setMessages([...newMessages, { sender: "bot", text: data.bot }]);

      // ✅ Handle next step: if backend returns options again
      if (data.options) {
        setOptions(data.options);
        setInputDisabled(true);
      } else {
        setOptions([]);
        setInputDisabled(false);
      }
    } catch (error) {
      setMessages([
        ...newMessages,
        { sender: "bot", text: "⚠️ Server error. Please try again later." },
      ]);
    }
  };



  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  console.log("BOT RAW:", data);

  return (
    <div className="flex flex-col justify-center bg-gray-200 h-220 md:h-230">
      <NavBar />
      <div className="text-center text-4xl font-bold my-4">KrishiBot</div>

      <div className="md:w-300 mx-3 md:mx-auto p-5 bg-white shadow-xl rounded-2xl flex flex-col">
        {/* Chat Messages */}
        {/* Chat Messages */}
        <div className="h-106 md:w-290 overflow-y-auto border border-gray-400 mb-3 space-y-3 p-3 bg-gray-50 rounded-lg">
          {messages.length === 0 ? (
            <div className="text-gray-400 italic flex justify-center items-center h-96 text-center text-2xl">
              Ask me about crops, fertilizers, weather, market prices or pests...
            </div>
          ) : (
            messages.map((m, i) => (
              <div key={i} className="flex flex-col">
                <div
                  className={`${m.sender === "user"
                    ? "text-right text-green-700"
                    : "text-left text-gray-800 bg-gray-200 p-2 rounded-lg inline-block"
                    }`}
                >
                  <div
                    className={`${m.sender === "user"
                      ? "text-right text-green-700"
                      : "text-left text-gray-800 bg-gray-200 p-2 rounded-lg inline-block"
                      }`}
                    dangerouslySetInnerHTML={{ __html: m.text }}
                  />

                </div>
              </div>
            ))
          )}

          {/* Render buttons BELOW messages (only once, not for each message) */}
          {options.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionClick(opt.value, opt.label)}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}

          <div ref={chatEndRef} />
        </div>


        {/* Input box */}
        <div className="flex border border-gray-400 rounded-lg">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type here..."
            disabled={inputDisabled}
            className={`flex-1 p-2 pl-4 rounded-l-md resize-none h-12 focus:outline-none ${inputDisabled ? "bg-gray-200 cursor-not-allowed" : ""
              }`}
          />

          <button
            onClick={sendMessage}
            disabled={inputDisabled} // 🔹 disable button too
            className={`px-4 border-8 rounded-r-md ${inputDisabled
              ? "bg-gray-400 border-gray-400 text-white cursor-not-allowed"
              : "bg-green-600 border-green-600 text-white hover:bg-green-700"
              }`}
          >
            Send
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
