import re
import codewars_test as test

def solution(s):
    l = []
    if(len(s) == 0 ): return l
    if(len(s) == 1 ):
        single = s+"_"
        l.append(single)
        return l
    if((len(s) % 2) == 0):return re.findall('..', s)
    else:
        s = re.findall('..?', s)
        odd = s.pop()
        underscoreMe = odd+"_"
        s.append(underscoreMe)
        return s
    return len(s)


test.describe("Basic Tests")

tests = (
    ("asdfadsf", ['as', 'df', 'ad', 'sf']),
    ("asdfads", ['as', 'df', 'ad', 's_']),
    ("", []),
    ("x", ["x_"]),
)

for inp, exp in tests:
    test.assert_equals(solution(inp), exp)

test.describe("Random Tests")

from random import randint, choice
from string import ascii_lowercase

reference = lambda s, n=2: [''.join(e) for e in zip(*[iter(s + ['', '_'][len(s) % 2])] * 2)]

for _ in range(100):
    test_case = "".join(choice(ascii_lowercase) for _ in range(randint(0, 100)))
    test.assert_equals(solution(test_case), reference(test_case))