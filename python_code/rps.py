import random

# how to make a more simple code?
player = input("Rock, Paper, Scissors?")
myLst = ["Rock", "Paper", "Scissors"]
computer = random.choice(myLst)
computer.lower()
player.lower()    


#nesting intro
if player == computer:
    print("Tie!")
elif player == "Rock" or "rock":
    if computer == "Paper":
        print("You lose!", computer, "covers", player)
    else:
        print("You win!", player, "smashes", computer)
elif player == "Paper" or "paper":
    if computer == "Scissors":
        print("You lose!", computer, "cut", player)
    else:
        print("You win!", player, "covers", computer)
elif player == "Scissors" or "scissors":
    if computer == "Rock":
        print("You lose...", computer, "smashes", player)
    else:
        print("You win!", player, "cut", computer)
else:
    print("That's not a valid play. Check your spelling!")
   