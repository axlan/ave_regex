import React from "react";
import { Puzzle } from './puzzle';


const Lovers = () => {
  return (
    <Puzzle
      level_data={{
        title: "The Lovers",
        original_text: 'Hey Susie! What time should I come over their and pick you up?',
        prompt: `AAAAAH!!! I just sent a message to Lisa calling her my Ex's name!`,
        goal: 'Replace instances of "Susie" with "Lisa".',
        hint: `A Regex can be as simple as a basic find and replace. Aside from some reserved characters, a basic regex will just directly match the characters entered.`,
        answer1: `Hey Lisa! What time should I come over their and pick you up?`,
        answer1_example: [/Susie/g, 'Lisa'],
        response1: `I'm free after 5. Pretty brave sending a typo to an editor though : p`,
        answer2: 'Hey Lisa! What time should I come over there and pick you up?',
        response2: `I'm free after 5 : )`,
        secret: `Well that's boring.`,
      }}
    />
  );
};

export default Lovers;
