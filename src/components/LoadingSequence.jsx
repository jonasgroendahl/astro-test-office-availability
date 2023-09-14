import { useEffect, useState } from "react";
import { LoadingCookie } from "./LoadingCookie";
import { LoadingChair } from "./LoadingChair";
import { isMonday, isWeekend } from "date-fns";

export const LoadingSequence = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setStep(1);

      setTimeout(() => setStep(2), 5000);
    }, 5000);
  }, []);

  const willI = () => {
    if (isMonday(new Date()) || isWeekend(new Date())) {
      return "Yes! 🥳🥳🥳";
    } else {
      return "No.... 😭😭😭";
    }
  };

  switch (step) {
    case 0:
      return <LoadingCookie />;
    case 1:
      return <LoadingChair />;
    case 2:
      return (
        <div>
          <p className="instructions">{willI()}</p>
        </div>
      );
    default:
      return <div>...</div>;
  }
};
