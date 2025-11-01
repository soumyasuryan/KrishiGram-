"use client";

import { useState } from "react";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chatbot window */}
      

      {/* Floating chatbot button */}
     <a
  onClick={() => setIsOpen(true)}
  href="/chatbot"
  className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white md:w-46 h-16 rounded-full shadow-lg flex justify-center items-center text-lg z-50"
>
  <span className="hidden md:inline">AI Assistant</span> <span className="m-6 md:m-0">💬</span>
</a>

    </>
  );
}
