import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, your browser does not support text to speech");
    }
  };

  return (
    mockInterviewQuestion && (
      <div className="p-5 border rounded-lg my-10">
        <div className="grid grid-cols-2 mg:grid-cols-3 lg:grid-cols-5 gap-5">
          {mockInterviewQuestion &&
            mockInterviewQuestion.map((questions, index) => (
              <h2
  className={`p-2 bg-black text-white rounded-full text-xs md:text-sm text-center cursor-pointer ${
    activeQuestionIndex === index ? "bg-secondary text-black" : ""
  }`}
>
                Question #{index + 1}
              </h2>
            ))}
        </div>
        <div>
          <h2 className="my-5 text-md md:text-lg ">
            {mockInterviewQuestion[activeQuestionIndex]?.question}
          </h2>
          <Volume2
            className="cursor-pointer"
            onClick={() =>
              textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)
            }
          />
          <div className="border rounded-lg p-5 bg-blue-100 mt-20">
            <h2 className="flex gap-2 item-center text-blue-700">
              <Lightbulb />
              <strong>Note: </strong>
            </h2>
            <h2 className="text-sm text-blue-700 my-2">
              {process.env.NEXT_PUBLIC_QUESTION_NOTE}
            </h2>
          </div>
        </div>
      </div>
    )
  );
};

export default QuestionsSection;
