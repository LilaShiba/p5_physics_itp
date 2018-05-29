# intro to loops
# Guessing Game: user guesses a number

import random

# Defining variables

n = random.randint(1, 100)
guess = int(input("Guess a number from 1 to 100"))

# Loop to keep Guessing

while n != "guess":
	print
	if guess < n:
		print("Think Higher Buddy")
		guess = int(input("Try again with that hint  "))
	elif guess > n:
		print("Got to get down to get right")
		guess = int(input("How low do you go?"))
	else:
		print("you got it! It was")
		print(n)
		break
	print