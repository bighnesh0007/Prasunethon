"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

function FeedBack({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const router=useRouter()

  useEffect(() => {
    console.log("Params received:", params);
    GetFeedback();
  }, [params]);

  const GetFeedback = async () => {
    try {
      const result = await db
        .select()
        .from(UserAnswer)
        .where(eq(UserAnswer.mockIdRef, params.interviewID))
        .orderBy(UserAnswer.id);

      console.log("Feedback results:", result);
      setFeedbackList(result);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  return (
    <div className="p-10">

      {feedbackList?.length==0?
      <h2 className="font-bold text-xl text-gray-500 p-10">No Interview record found</h2>  
      :
      <>
      <h2 className="text-3xl font-bold text-green-500">Congratulations</h2>
      <h2 className="font-bold text-2xl">Here is your interview feedback</h2>
      <h2 className="text-primary text-lg my-3">
        Your overall interview rating: <strong>7/10</strong>
      </h2>

      <h2 className="text-sm text-gray-500">
        Find below the interview question with the correct answer, your answer, and feedback for improvement.
      </h2>
      
      {feedbackList.map((item, index) => (
        <Collapsible key={index} className="my-7">
          <CollapsibleTrigger className="p-2 bg-secondary rounded-lg  my-2 text-left flex justify-between">
            Question: {item.question} <ChevronsUpDown h-4 w-4 />
          </CollapsibleTrigger>
          <CollapsibleContent>
          <div className="flex flex-col gap-2">
            <p className="text-red-500 p-2 border rounded-lg border-red-950"><strong>Rating:</strong> {item.rating}</p>
            <p className="p-2 border rounded-lg bg-red-50 text-sm text-red-900"><strong>Your Answer:</strong> {item.userAns}</p>
            <p className="p-2 border rounded-lg bg-green-50 text-sm text-green-900"><strong>Correct Answer:</strong> {item.correctAns}</p>
            <p className="p-2 border rounded-lg bg-blue-50 text-sm text-blue-900"><strong>Feedback:</strong> {item.feedback}</p>
          </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
     </>
}
      <Button onClick={()=>router.replace('/dashboard')}> Go Home</Button>
      
    </div>
  );
}

export default FeedBack;
