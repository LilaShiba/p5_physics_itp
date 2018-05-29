# http://anh.cs.luc.edu/python/hands-on/3.1/handsonHtml/functions.html

def mult(a, b):
	answer = a * b
	prompt = "The sum of {} and {} is {}.".format(a, b, answer)
	print(prompt)

def main ():
	a = int(input("what is the first number?"))
	b = int(input("what is the second number?"))
	mult(a, b)

main()

