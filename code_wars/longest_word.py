#First Idea

def longest(s):
    long = sorted(s, key=len)
    return len(long[-1])



# Better way:

def longest(s):
	return max(len(i) for i in s)