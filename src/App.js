import "./styles.css";

import React, { useState } from "react";

function App() {
  const level_data = [
    {
      original_text: `Susie, forgive me Darling, for every word I say - my heart is full of you, none other than you is in my thoughts, yet
    when I seek to say to you something not for the world, words fail me. If you were here - and Oh that you were, my
    Susie, we need not take at all, our eyes would whisper for us, and your hand fast in mine.`,
      prompt: `Ahg! I accidentally sent the message with my ex's name!`,
      goal: `Replace instances of "Susie" with "Lisa".`,
      answer: `Lisa, forgive me Darling, for every word I say - my heart is full of you, none other than you is in my thoughts, yet
    when I seek to say to you something not for the world, words fail me. If you were here - and Oh that you were, my
    Lisa, we need not take at all, our eyes would whisper for us, and your hand fast in mine.`
    }
  ];

  const [userRegex, setUserRegex] = useState("");
  const [userSubst, setUserSubst] = useState("");
  const handleAnswerButtonClick = () => {
    // if (isCorrect === true) {
    //   setScore(score + 1);
    // }

    // const nextQuetions = currentQuestion + 1;
    // if (nextQuetions < questions.length) {
    //   setCurrentQuestion(nextQuetions);
    // } else {
    //   setShowScore(true);
    // }
    console.log(level_data[0].original_text.replace(userRegex, userSubst));
  };

  return (
    <>
      <h1 className="header">A bad name</h1>
      <div className="app">
        <p>
          {level_data[0].prompt}
          <br />
          <br />
          [Goal]: {level_data[0].goal}
        </p>
      </div>

      <br />

      <div className="app">
        <form>
          <label>
            Regex:
            <textarea value={userRegex} onChange={event => setUserRegex(event.target.value)} />
          </label>
          <label>
            Substitution:
            <textarea value={userSubst} onChange={event => setUserSubst(event.target.value)} />
          </label>
        </form>

        <button
                  onClick={() =>
                    handleAnswerButtonClick()
                  }
                >
                  Submit
                </button>
      </div>
      {userRegex}
    </>
  );
}

export default App;
