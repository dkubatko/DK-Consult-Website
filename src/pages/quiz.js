import React, { useState } from 'react';
import QuizPageStart from '../components/quiz_pages/start';
import QuizPageLanding from '../components/quiz_pages/landing';

export default function Quiz() {
  const [step, setStep] = useState('start'); 
  const [nextStep, setNextStep] = useState('landing');
  const [data, setData] = useState({});

  const updateData = (step, newData) => {
    setData({
      ...data,
      [step]: newData,
    });
  }

  const handleProgress = () => {
    setStep(nextStep);
  }

  const renderStep = () => {
    switch(step) {
      case 'start':
        return <QuizPageStart onUpdate={updateData}/>;
      case 'landing':
        return <QuizPageLanding onUpdate={updateData}/>;
      default:
        return <div>Default</div>;
    }
  } 

  return (
    <div>
      {
        renderStep()
      }
      <button
        onClick={handleProgress}
        className={step === nextStep ? 'inactive' : 'active'} 
      >
        Go next!
      </button>
    </div>
  )
}