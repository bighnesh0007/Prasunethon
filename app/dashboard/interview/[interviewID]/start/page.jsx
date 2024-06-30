"use client"
import React, { useEffect, useState } from 'react';
import { db } from "@/utils/db";
import { mockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import QuestionsSection from './_components/QuestionsSection';
import RecordAnsSection from './_components/RecordAnsSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const StartInterview = ({ params }) => {
  const [interviewData, setInterviewData] = useState(null);
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState(null);
  const [activeQuestionIndex,setactiveQuestionIndex]=useState(0);

  useEffect(() => {
    const GetInterviewDetails = async () => {
      try {
        const result = await db
          .select()
          .from(mockInterview)
          .where(eq(mockInterview.mockId, params.interviewID));
        console.log(result);
        const jsonMockResp = JSON.parse(result[0].jsonMockResp);
        console.log(jsonMockResp);
        setMockInterviewQuestion(jsonMockResp);
        setInterviewData(result[0]);
      } catch (error) {
        console.error("Error fetching interview details:", error);
      }
    };

    GetInterviewDetails();
  }, [params.interviewID]);

  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
            {/* Question */}

            <QuestionsSection 
            mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
           

            />

            {/* video/ audio */}
            <RecordAnsSection
             mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
            interviewData={interviewData}
            />

        </div>
        <div className='flex justify-end gap-6'>
          {activeQuestionIndex>0 && 
          <Button onClick={()=>setactiveQuestionIndex(activeQuestionIndex-1)}>Previous Question</Button>}
          { activeQuestionIndex != mockInterviewQuestion?.length-1 && 
          <Button onClick={()=>setactiveQuestionIndex(activeQuestionIndex+1)}>Next Question</Button>}
          { activeQuestionIndex == mockInterviewQuestion?.length-1 && 
          <Link href={`/dashboard/interview/${interviewData?.mockId}/feedback`}>
          <Button>End Interview</Button>
          </Link>}
        </div>
    </div>
  );
};

export default StartInterview;
