import React from "react";
import { Puzzle } from './puzzle';

const Fool = () => {
  return (
    <Puzzle
      level_data={{
        title: "The Fool",
        original_text: `Hi Dave,
I should have the initial draft of the project to you in 3 days.
I'll be able to get the finished version in 2 additional days.

-
Joe Marwin
Yes2You LLC`,
        prompt: `Ugh, I shouldn't have given firm dates. I have no idea how long this will actually take, and now I'll have to go crawling back a second time.`,
        goal: 'Replace instances of the numbers with "a few".',
        hint: `Regex patterns can contain special characters that match to groups of letters. Square brackets [] can be used to specify a set of characters to match against https://plainenglish.io/blog/regular-expressions-brackets-f2d6f69ffe13#-`,
        answer1: `Hi Dave,
I should have the initial draft of the project to you in a few days.
I'll be able to get the finished version in a few additional days.

-
Joe Marwin
Yesa fewYou LLC`,
        answer1_example: [/\d/g, 'a few'],
        response1: `Uh, sure Dave. What's up with your signature?`,
        answer2: `Hi Dave,
I should have the initial draft of the project to you in a few days.
I'll be able to get the finished version in a few additional days.

-
Joe Marwin
Yes2You LLC`,
        response2: `No problem, just get it to me as soon as it's ready.`,
        secret: `Those too weak to stand up for themselves should receive no pity.`,
      }}
    />
  );
};

export default Fool;
