//import "./styles.css";

import React, { useState } from "react";

function findDiff(str1, str2) {
  const min_len = Math.min(str1.length, str2.length)
  for (let i = 0; i < min_len; i++) {
    if (str1[i] !== str2[i]) {
      return i;
    }
  }

  if (str1.length !== str2.length) {
    return min_len;
  }
  else {
    return null;
  }
}

function printSection(string, index, ellipse = true, before = 10, after = 10) {
  let ret = '';
  const start = Math.max(index - before, 0);
  const end = index + after;
  if (ellipse && start !== 0) {
    ret += '...';
  }
  ret += string.slice(start, end);
  if (ellipse && end < string.length - 1) {
    ret += '...'
  }
  return ret;
}

export function Puzzle({ level_data }) {
  const [userRegex, setUserRegex] = useState("");
  const [userSubst, setUserSubst] = useState("");
  const [modifiedText, setModifiedText] = useState("");
  const [answerText, setAnswerText] = useState("");
  const example_answer = level_data.original_text.replaceAll(level_data.answer1_example[0], level_data.answer1_example[1]);
  const handleAnswerButtonClick = () => {
    const answer = level_data.original_text.replaceAll(RegExp(userRegex, "g"), userSubst);
    setModifiedText(answer);

    if (answer.match(level_data.answer2)) {
      setAnswerText((
        <>
          <h1 className="header">{level_data.response2}</h1>
          <br />
          <h1 className="header">{level_data.secret}</h1>
        </>
      ));
    }
    else if (answer.match(level_data.answer1)) {
      setAnswerText((
        <>
          <h1 className="header">{level_data.response1}</h1>
        </>
      ));
    }
    else {
      const answer_diff = findDiff(answer, example_answer);
      const explanation_url = `https://regexr.com/?expression=${encodeURIComponent(userRegex)}&text=${encodeURIComponent(printSection(level_data.original_text, answer_diff, false))}&tool=replace&input=${encodeURIComponent(userSubst)}`
      setAnswerText((
        <>
          <h1 className="header">Original: {printSection(level_data.original_text, answer_diff)}</h1>
          <h1 className="header">Expected: {printSection(example_answer, answer_diff)}</h1>
          <h1 className="header">Submitted: {printSection(answer, answer_diff)}</h1>
          <h1 className="header">Explanation: <a href={explanation_url} target="_blank" rel="noreferrer">{explanation_url}</a></h1>
        </>
      ));
    }
  };

  return (
    <>
      <h1 className="header">{level_data.title}</h1>
      <div className="app">
        <p>
          {level_data.prompt}
          <br />
          <br />
          [Goal]: {level_data.goal}
          <br />
          <br />
          [Hint]: {level_data.hint}
          <br />
          <br />
          [Source]: {level_data.original_text}
          <br />
          <br />
          [Modified]: {modifiedText}
        </p>
      </div>

      <br />

      <div className="app">
        <form>
          <label>
            Regex:
            <textarea value={userRegex} onChange={event => setUserRegex(event.target.value)} />
          </label>
          <br />
          <label>
            Substitution:
            <textarea value={userSubst} onChange={event => setUserSubst(event.target.value)} />
          </label>
        </form>
        <br />
        <button
          onClick={() =>
            handleAnswerButtonClick()
          }
        >
          Submit
        </button>
        {answerText}
      </div>
    </>
  );
}
