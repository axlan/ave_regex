#!/usr/bin/env python

# https://xkcd.com/208/

# https://github.com/deadlockempire/deadlockempire.github.io
# https://medium.com/nerd-for-tech/simple-react-quiz-application-b9ac808e6100
# https://regex101.com/

# Allow sed for even more complicated replacements?
# Try for multiple paths. Either explicitly, by allowing some easier solutions, allowing flexibility, or through "secrets"

#Ave regex, gratia plena

import re
from typing import Optional
import urllib.parse

'''
Some people, when confronted with a problem, think
"I know, I'll use regular expressions."

Now they have two problems.
'''

'''

You are the newly born god of online messaging.  Your current calling is to respond to the prayers of those that hit the "send" button, but were immediately filled with regret.

You are a minor diety with limited power. Rather then directly stopping or editing these messages, you can only alter them with the arcane language of regular expression substitution.

While answering prayers look for more that might help your supplicants to increase their devotion. Extra honors are bestowed for the use of the smallest Regex pattern.
'''

'''
Levels of puzzles:
 * Straight match
 * Basic wildcard
 * Basic repetition
 * Set/negetive sets
 * Anchors
 * groups for replacement
 * groups for matching
 * `|` operator
 * look a heads https://www.rexegg.com/regex-lookarounds.html

 Use more complicated regex library for recursion/Atomic? https://stackoverflow.com/questions/26385984/recursive-pattern-in-regex

Additional Challenge:
 * Limited # of characters
'''

# Message 2

# The fool

# Explanation of sets of characters.

# He gave week estimates but needs them removed.

# Optional solve task? Sorting, checking passwords, formatting?

# Secret information in task data to format.

# Message 3

# Justice

#  wildcards


# Antagonist god of online drama?

# Have response shown and change based on solving sexond


data = [
    {
        'title': 'The Lovers',
        'original_text': 'Hey Susie! What time should I come over their and pick you up?',
        'prompt': '''AAAAAH!!! I just sent a message to Lisa calling her my Ex's name!''',
        'goal': 'Replace instances of "Susie" with "Lisa".',
        'hint': '''A Regex can be as simple as a basic find and replace. Aside from some reserved characters, a basic regex will just directly match the characters entered.''',
        'answer1': ('Susie', 'Lisa'),
        # Shorter if assuming no other capital S "S\w+"
        'response1': '''I'm free after 5. Pretty brave sending a typo to an editor though : p''',
        'answer2': ('Susie! What time should I come over their', 'Lisa! What time should I come over there'),
        'response2': '''I'm free after 5.''',
        'secret': '''Well that's boring.''',
    },
    {   'title': 'The Fool',
        'original_text': '''\
Hi Dave,

I should have the initial draft of the project to you in 3 days.
I'll be able to get the finished version in 2 additional days.

-
Joe Marwin
Yes2You LLC
''',
        'prompt': '''Ugh, I shouldn't have given firm dates. I have no idea how long this will actually take, and now I'll have to go crawling back a second time.''',
        'goal': 'Replace instances of the numbers with "a few".',
        'hint': '''Regex patterns can contain special characters that match to groups of letters. Square brackets \[\] can be used to specify a set of characters to match against https://plainenglish.io/blog/regular-expressions-brackets-f2d6f69ffe13#- ''',
        'answer1': ('\d', 'a few'),
        'response1': '''Uh, sure Dave. What's up with your signature?''',
        'answer2': ('\d ', 'a few '),
        'response2': '''No problem, just get it to me as soon as it's ready.''',
        'secret': '''Those too weak to stand up for themselves should receive no pity.''',
    },
    {   'title': 'Justice',
        'original_text': 'Hey Susie! What time should I come over their and pick you up?',
        'prompt': '''AAAAAH!!! I just sent a message to Lisa calling her my Ex's name!''',
        'goal': 'Replace instances of "Susie" with "Lisa".',
        'hint': '''A Regex can be as simple as a basic find and replace. Aside from some reserved characters, a basic regex will just directly match the characters entered.''',
        'answer1': ('Susie', 'Lisa'),
        # Shorter if assuming no other capital S "S\w+"
        'response1': '''I'm free after 5. Pretty brave sending a typo to an editor though : p''',
        'answer2': ('Susie! What time should I come over their', 'Lisa! What time should I come over there'),
        'response2': '''I'm free after 5.''',
    },
    {
        'original_text': '''\
[425, 57, 3027, 8242, 7072, 5, 9166, 12, 8732, 4007, 71, 465, 2523, 4406, 7626, 959, 3539, 305, 2866, 0, 1000]
''',
        'prompt': '''\
The missile detection system in a secret underground bunker is acting up! When birds fly by it's triggering the missile
detection threshold! Unfortunately, changing too many values will also trigger a tamper detection.

[Goal]: Given a in a comma separated list of integers. Divide values greater then 999 by 10 rounding down.
''',
        'answer': (r'(\d{3,})\d', r'\1')
        # Longer "(\d+\d{2})\d"
    },


]


def find_diff(a: str, b: str) -> Optional[int]:
    min_len = min(len(a), len(b))
    for i in range(min_len):
        if a[i] != b[i]:
            return i

    if len(a) != len(b):
        return min_len
    else:
        return None


def print_section(string: str, index: int, ellipse=True, before=10, after=10) -> str:
    ret = ''
    start = max(index-before, 0)
    end = index + after
    if ellipse and start != 0:
        ret += '...'
    ret += string[start:end]
    if ellipse and end < len(string) - 1:
        ret += '...'
    return ret


def run(level_data):
    print(level_data['prompt'])
    print(f"[Goal] {level_data['prompt']}")
    while True:
        find_re = input("Enter the Regex to find: ")
        replace_re = input("Enter the replacement string: ")

        substituted_text = re.sub(
            find_re, replace_re, level_data['original_text'])
        answer_text = re.sub(
            level_data['answer'][0], level_data['answer'][1], level_data['original_text'])

        answer_diff = find_diff(substituted_text, answer_text)

        if answer_diff is not None:
            start = max(answer_diff-10, 0)
            print('Original:', print_section(
                level_data['original_text'], answer_diff))
            print('Expected:', print_section(answer_text, answer_diff))
            print('Submitted:', print_section(substituted_text, answer_diff))
            print(
                f"Explanation: https://regex101.com/?regex={urllib.parse.quote(find_re)}&testString={urllib.parse.quote(print_section(level_data['original_text'], answer_diff, False))}&substitution={replace_re}")
            print('Try again.')
        else:
            print('Correct!')
            break


run(data[1])
