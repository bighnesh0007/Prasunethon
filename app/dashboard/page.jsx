"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import "./styles.css";

const Dashboard = () => {
  const router = useRouter();
  const handleNavigation = (route) => {
    router.push(route);
  };

  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 my-5 p-10 gap-8">
        <Link href={"http://localhost:3002/"}>
          <div className="border shadow-sm rounded-lg p-3">
            <h2 className="font-bold text-primary capitalize text-2xl">
              Video Conferencing
            </h2>
            <div className="image-container">
              <img
                src="vc.jpg"
                alt=""
                srcSet=""
                className="h-100 w-full mt-5 rounded-lg hover-zoom"
              />
              <div className="image-overlay">
                <p className="overlay-text">Click to join a video conference</p>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"http://localhost:5173"}>
          <div className="border shadow-sm rounded-lg p-3">
            <h2 className="font-bold text-white capitalize text-2xl">IDE</h2>
            <div className="image-container">
              <img
                src="ide.jpg"
                alt=""
                srcSet=""
                className="h-100 w-full mt-5 border rounded-lg hover-zoom"
              />
              <div className="image-overlay">
                <p className="overlay-text">
                  Edit and run HTML, CSS, and JavaScript
                </p>
              </div>
            </div>
          </div>
        </Link>
        <a href={"http://localhost:3001/"} className="link-wrapper">
          <div className="border shadow-sm rounded-lg p-3">
            <h2 className="font-bold text-primary capitalize text-2xl">
              ChatBot
            </h2>
            <div className="image-container">
              <img
                src="chat.jpg"
                alt="ChatBot"
                className="chatbot-image hover-zoom"
              />
              <div className="image-overlay">
                <p className="overlay-text">Real-time chat application</p>
              </div>
            </div>
          </div>
        </a>
        <Link href={"http://localhost:3001/"}>
          <div className="border shadow-sm rounded-lg p-3">
            <h2 className="font-bold text-white capitalize text-2xl">
              Text Sharing
            </h2>
            <div className="image-container">
              <img
                src="chatb.jpg"
                alt=""
                srcSet=""
                className="h-100 w-full mt-5 border rounded-lg hover-zoom"
              />
              <div className="image-overlay">
                <p className="overlay-text">Share code live</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
