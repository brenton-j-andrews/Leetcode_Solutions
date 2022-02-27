# Given an integer x, return true if x is palindrome integer.

# An integer is a palindrome when it reads the same backward as forward.

class Solution(object):
    def isPalindrome(self, x):
        rev = 0
        input = x
        if x < 0:
            return False
        while x > 0:
            dig = x % 10
            x = (x - dig) / 10
            rev = (rev * 10) + dig
        
        if input == rev:
            return True
        else:
            return False