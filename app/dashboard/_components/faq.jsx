// File: S:/ai_mock - Copy/app/faq/_components/faq.jsx

"use client";
import { ArrowUpDown } from "lucide-react";
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Real-Time Collaboration Tool for Remote Teams?",
      answer:
        "The Real-Time Collaboration Tool is a web-based platform designed to facilitate seamless collaboration among remote teams. It integrates features like document editing, spreadsheets, project management, live chat, video conferencing, and version control.",
    },
    {
      question: "How does the tool enhance remote team collaboration?",
      answer:
        "By providing real-time access to documents, spreadsheets, and projects, along with live chat, video conferencing, and task management capabilities, the tool ensures that remote teams can work together efficiently and effectively from anywhere.",
    },
    {
      question: "What are the main benefits of using this tool?",
      answer:
        "The tool boosts productivity by enabling real-time collaboration, improves communication through integrated chat and video conferencing, enhances project management with task tracking, and ensures version control to track changes.",
    },
    {
      question: "What technologies does the Real-Time Collaboration Tool use?",
      answer:
        "The tool is built using HTML, CSS, and JavaScript for the front-end interface. It integrates video conferencing using WebRTC technology, chatbot functionality for automated responses, and text sharing for collaborative document editing.",
    },
    {
      question: "How secure is the Real-Time Collaboration Tool?",
      answer:
        "Security is a top priority. The tool employs encryption protocols for data transmission, secure user authentication mechanisms, and access controls to safeguard sensitive information.",
    },
    {
      question: "Can the tool handle large teams and complex projects?",
      answer:
        "Yes, the platform is scalable and can accommodate large teams working on complex projects. It supports multiple concurrent users and ensures smooth performance even with extensive document editing and project management activities.",
    },
    {
      question: "How can I get started with the Real-Time Collaboration Tool?",
      answer:
        "To begin using the tool, simply sign up for an account on our website and start inviting team members. The platform is user-friendly, with intuitive navigation to help you get started quickly.",
    },
    {
      question: "Is there customer support available for assistance?",
      answer:
        "Yes, we provide dedicated customer support to assist you with any questions or issues. You can reach out to our support team via email or through our live chat feature within the tool.",
    },
    {
      question:
        "Can I integrate this tool with other applications or services?",
      answer:
        "Integration capabilities are available to connect the Real-Time Collaboration Tool with third-party applications or services, allowing for enhanced functionality and workflow customization.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-header">
              <div className="faq-question text-red">{faq.question}</div>
              <ArrowUpDown />
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        .faq-container {
          max-width: 600px;
          margin: 0 auto;
        }
        .faq {
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
          margin: 10px 0;
          cursor: pointer;
        }
        .faq-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .faq-question {
          font-weight: bold;
        }
        .faq-answer {
          margin-top: 10px;
        }
        .faq.active {
          background-color: #f9f9f9;
        }
      `}</style>
    </>
  );
};

export default FAQ;
