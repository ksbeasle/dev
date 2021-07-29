import codewars_test as test
import math
from random import randint


def zero(op="none"):
    if op == "none":
        op = "none"
        val = 0
        return (op, val)
    else:
        op, val = op
    if op == "times":
        return 0 * val
    if op == "plus":
        return 0 + val
    if op == "minus":
        return 0 - val
    if op == "divide":
        return 0


def one(op="none"):
    if op == "none":
        op = "none"
        val = 1
        return (op, val)
    else:
        op, val = op
    if op == "times":
        return 1 * val
    if op == "plus":
        return 1 + val
    if op == "minus":
        return 1 - val
    if op == "divide":
        return (int(1 / val))


def two(op="none"):
    if op == "none":
        op = "none"
        val = 2
        return (op, val)
    else:
        op, val = op
    if op == "times":
        return 2 * val
    if op == "plus":
        return 2 + val
    if op == "minus":
        return 2 - val
    if op == "divide":
        return (int(2 / val))


def three(op="none"):
    if op == "none":
        op = "none"
        val = 3
        return (op, val)
    else:
        op, val = op
    if op == "times":
        return 3 * val
    if op == "plus":
        return 3 + val
    if op == "minus":
        return 3 - val
    if op == "divide":
        return (int(3 / val))


def four(op="none"):
    if op == "none":
        op = "none"
        val = 4
        return (op, val)
    else:
        op, val = op
    if op == "times":
        return 4 * val
    if op == "plus":
        return 4 + val
    if op == "minus":
        return 4 - val
    if op == "divide":
        return (int(4 / val))


def five(op="none"):
    if op == "none":
        op = "none"
        val = 5
        return (op, val)
    else:
        op, val = op
    if op == "times":
        return 5 * val
    if op == "plus":
        return 5 + val
    if op == "minus":
        return 5 - val
    if op == "divide":
        return (int(5 / val))


def six(op="none"):
    if op == "none":
        op = "none"
        val = 6
        return (op, val)
    else:
        op, val = op
    if op == "times":
        return 6 * val
    if op == "plus":
        return 6 + val
    if op == "minus":
        return 6 - val
    if op == "divide":
        return (int(6 / val))


def seven(op="none"):
    if op == "none":
        op = "none"
        val = 7
        return (op, val)
    else:
        op, val = op
    if op == "times":
        return 7 * val
    if op == "plus":
        return 7 + val
    if op == "minus":
        return 7 - val
    if op == "divide":
        return (int(7 / val))


def eight(op="none"):
    if op == "none":
        op = "none"
        val = 8
        return (op, val)
    else:
        op, val = op
    if op == "times":
        return 8 * val
    if op == "plus":
        return 8 + val
    if op == "minus":
        return 8 - val
    if op == "divide":
        return (int(8 / val))


def nine(op="none"):
    if op == "none":
        op = "none"
        val = 9
        return (op, val)
    else:
        op, val = op
    if op == "times":
        return 9 * val
    if op == "plus":
        return 9 + val
    if op == "minus":
        return 9 - val
    if op == "divide":
        return (int(9 / val))


def plus(func):
    op, val = func
    op = "plus"
    return (op, val)


def minus(func):
    op, val = func
    op = "minus"
    return (op, val)


def times(func):
    op, val = func
    op = "times"
    return (op, val)


def divided_by(func):
    op, val = func
    op = "divide"
    return (op, math.floor(val / 1))


print(seven(times(five())))
print(four(plus(nine())))
print(eight(minus(three())))
print(six(divided_by(two())))



test.describe('Basic Tests')
test.assert_equals(seven(times(five())), 35)
test.assert_equals(four(plus(nine())), 13)
test.assert_equals(eight(minus(three())), 5)
test.assert_equals(six(divided_by(two())), 3)

test.describe('Random Tests')

base=["zero","one","two","three","four","five","six","seven","eight","nine"]
basef=[zero,one,two,three,four,five,six,seven,eight,nine]

for _ in range(40):
    a,b=randint(0,9),randint(0,9)
    test.it("Testing for %s(plus(%s()))" %(base[a],base[b]))
    test.assert_equals(basef[a](plus(basef[b]())), a+b)
    a,b=randint(0,9),randint(0,9)
    test.it("Testing for %s(minus(%s()))" %(base[a],base[b]))
    test.assert_equals(basef[a](minus(basef[b]())), a-b)
    a,b=randint(0,9),randint(0,9)
    test.it("Testing for %s(times(%s()))" %(base[a],base[b]))
    test.assert_equals(basef[a](times(basef[b]())), a*b)
    a,b=randint(0,9),randint(1,9)
    test.it("Testing for %s(divided_by(%s()))" %(base[a],base[b]))
    test.assert_equals(basef[a](divided_by(basef[b]())), a//b)