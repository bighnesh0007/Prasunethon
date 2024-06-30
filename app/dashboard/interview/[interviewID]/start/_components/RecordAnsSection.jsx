"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic, StopCircle } from "lucide-react";
import { toast } from "sonner";
import { chatSession } from "@/utils/GeminiAIModal";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

const RecordAnsSection = ({ mockInterviewQuestion, activeQuestionIndex, interviewData }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.forEach((result) => {
      setUserAnswer((prevAns) => prevAns + result.transcript);
    });
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      console.log("Stopping recording, updating user answer in DB...");
      console.log("User Answer:", userAnswer);
      UpdateUserAnswerDb();
    }
  }, [isRecording, userAnswer]);

  const StartStopRecording = () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  };

  const UpdateUserAnswerDb = async () => {
    console.log("Updating user answer in database...");
    setLoading(true);
    try {
      const feedbackPrompt = `Question: ${mockInterviewQuestion[activeQuestionIndex]?.question}, User Answer: ${userAnswer}. Based on the question and answer, please provide a rating and feedback for the answer in JSON format with 'rating' and 'feedback' fields.`;
      const result = await chatSession.sendMessage(feedbackPrompt);

      const MockJsonResponse = result.response.text().replace("```json", "").replace("```", "");

      let JsonFeedbackResp;
      try {
        JsonFeedbackResp = JSON.parse(MockJsonResponse);
      } catch (error) {
        console.error("Error parsing feedback response:", error);
        toast.error("Error parsing feedback response.");
        setLoading(false);
        return;
      }

      try {
        const resp = await db.insert(UserAnswer).values({
          mockIdRef: interviewData?.mockId,
          question: mockInterviewQuestion[activeQuestionIndex]?.question,
          correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
          createdAt: moment().format("YYYY-MM-DD"),
          feedback: JsonFeedbackResp.feedback,
          rating: JsonFeedbackResp.rating,
          userAns: userAnswer,
          userEmail: user?.primaryEmailAddress?.emailAddress,
        });

        if (resp) {
          console.log(JsonFeedbackResp)
          toast.success("User Answer Recorded Successfully");
          console.log("Database response:", resp);
        }
      } catch (dbError) {
        console.error("Error saving user answer to the database:", dbError);
        toast.error("Error saving user answer to the database.");
      }
      setResults([])
      setUserAnswer("");
    } catch (error) {
      console.error("Error processing feedback:", error);
      toast.error("Error processing feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5">
        <Image
          src={"/webcam.png"}
          width={200}
          height={200}
          className="absolute"
        />
        <Webcam
          mirrored={true}
          style={{
            height: 300,
            width: "100%",
            zIndex: 10,
          }}
        />
      </div>
      <Button
        disabled={loading}
        variant="outline"
        className="my-10"
        onClick={StartStopRecording}
      >
        {isRecording ? (
          <h2 className="text-red-600 flex gap-2">
            <StopCircle /> Stop Recording
          </h2>
        ) : (
          <>
            <Mic /> Record Answer
          </>
        )}
      </Button>

      <Button onClick={() => console.log("Current User Answer:", userAnswer)}>Show User Answer</Button>
    </div>
  );
};

export default RecordAnsSection;
