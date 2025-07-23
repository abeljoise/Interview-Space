"use client";

import LoaderUI from "@/components/LoaderUI";
import { useUserRole } from "@/hooks/useUserRole";
import { useRouter } from "next/navigation";
import InterviewScheduleUI from "./InterviewScheduleUI";
import { useEffect, useState } from "react";

function SchedulePage() {
  const router = useRouter();
  const { isInterviewer, isLoading } = useUserRole();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (!isLoading && !isInterviewer) {
      router.push("/");
    } else if (!isLoading && isInterviewer) {
      setShouldRender(true);
    }
  }, [isLoading, isInterviewer, router]);

  if (isLoading || !shouldRender) return <LoaderUI />;

  return <InterviewScheduleUI />;
}
export default SchedulePage;
