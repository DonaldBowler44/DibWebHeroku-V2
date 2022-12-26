import { useState } from 'react';
import "./quiz.css"

function Quiz() {
     const [showResults, setShowResults] = useState(false);
     const [currentQuestion, setCurrentQuestion] = useState(0);
     const [score, setScore] = useState(0);

    const questions = [
    {
        text: "Are 45 years or older?",
        options: [
            { id: 0, text: "Yes", isIncrem: true },
            { id: 1, text: "No", isIncrem: false }
        ], 
    },
    {
        text: "Are you at risk of being obese or considered overweight?",
        options: [
            { id: 0, text: "Yes", isIncrem: true },
            { id: 1, text: "No", isIncrem: false }
        ], 
    },
    {
        text: "Have a sibling, parent, or family member with type 2 diabetes?",
        options: [
            { id: 0, text: "Yes", isIncrem: true },
            { id: 1, text: "No", isIncrem: false }
        ], 
    },
    {
        text: "Are physically less active less than 3 times a week?",
        options: [
            { id: 0, text: "Yes", isIncrem: true },
            { id: 1, text: "No", isIncrem: false }
        ], 
    },
    {
        text: "Have ever had gestational diabetes or given birth to a baby weighing over 9 pounds?",
        options: [
            { id: 0, text: "Yes", isIncrem: true },
            { id: 1, text: "No", isIncrem: false }
        ], 
    },
    {
        text: "Have been diagnosed with non-alocholic fatty liver disease?",
        options: [
            { id: 0, text: "Yes", isIncrem: true },
            { id: 1, text: "No", isIncrem: false }
        ], 
    },
    {
        text: "Have a diet mostly filled with processed and high in sugar/fat foods?",
        options: [
            { id: 0, text: "Yes", isIncrem: true },
            { id: 1, text: "No", isIncrem: false }
        ], 
    },
    {
        text: "Pleae choose what ethnicity group you belong to",
        options: [
            { id: 0, text: "African American", isIncrem: true },
            { id: 1, text: "Asian", isIncrem: true },
            { id: 2, text: "Alaskan Native", isIncrem: true},
            { id: 3, text: "American Indian", isIncrem: true},
            { id: 4, text: "Other", isIncrem: false}

        ], 
    },

    ];

     /* a possible answer was clicked */
     const optionsClicked = (isIncrem) => {
        if(isIncrem){
            setScore(score + 1);
        }

        if(currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        }
        else{
            setShowResults(true);
        }
     };

     /* resets quiz back to default */
     const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
     };

    return (
      <div className="quizStyle">
        {/* Header */}
        <h1 className='HDB'>Diabetes Risk Quiz</h1>

        {/* current score */}
        <h2 className='HDB'>Score: {score}</h2>

        {/* Show results or show question game */}
        {showResults ? (
            <div className='final-results'>
             <h1>Final Results</h1>
             <h2>
                {score} out of {questions.length} symptoms - (
                    {(score / questions.length) *100}%)
             </h2>
             <button className='buttonSty' onClick={() => restartGame()}>Restart Quiz</button>
            </div>
        ) : (
            <div className='question-card'>
                {/* current question */}
                <h2>
                    Question: {currentQuestion + 1} out of {questions.length}
                </h2>
                <h3 className='question-test'>{questions[currentQuestion].text}</h3>

                {/* list of possible answers */}
                <ul>
                    {questions[currentQuestion].options.map((option) => {
                        return(
                        <li
                            key={option.id}
                            onClick={() => optionsClicked(option.isIncrem)}
                            >
                                {option.text}
                            </li>
                        );
                    })}
                </ul>
            </div>
        )}
      </div>
    );
  }
  
  export default Quiz;