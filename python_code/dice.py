# Basically rolling a dice dude
# import that module 
import random

# name those variables
# Dice have six sides

min = 1
max = 6

roll_again = "yes"

while roll_again == "yes" or roll_again == "y":
	print("Rolling Rolling Rollin")
	print("it is ...")
	print(random.randint (min,max))

	roll_again = input("To roll or not to roll that is the question")

else:
	print("Thanks")

#how to add dices?
# line 16 repeat duh