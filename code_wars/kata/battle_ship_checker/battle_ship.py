def validateBattlefield(field):
    # Check to see if ships are all there
    # and that there are no extras
    ships = [4,3,3,2,2,2,1,1,1,1]
    ships_on_board = []

    # loop to add ship values to ships_on_board
# 2 across
    for row in range(len(battleField[0])):
        for col in range(len(battleField)):
            if battleField[row][col] == 1:
                if battleField[row][col + 1] ==1:
                    if battleField[row][col - 1] == 0:
                        if battleField[row][col - 2] == 0:
                            if battleField[row -1][col-1] == 1:
                                print('nooooo')
                                ships_on_board.append(2)

    # 3 across
    for row in range(len(battleField[0])):
        for col in range(len(battleField)):
            if battleField[row][col] == 1:
                if battleField[row][col + 1] ==1:
                    if battleField[row][col + 2] ==1:
                        if battleField[row][col - 1] == 0:
                            if battleField[row][col + 3] == 0:
                                print("I'm a 3")
                                ships_on_board.append(3)

    # 4 down
    for row in range(len(battleField[0])):
        for col in range(len(battleField)):
            if battleField[row][col] == 1:
                if battleField[row + 1][col] ==1:
                    if battleField[row + 2][col] ==1:
                        if battleField[row + 3][col] ==1:
                            print(battleField[row][col])
                            ships_on_board.append(4)

    # 3 down
    for row in range(len(battleField[0])):
        for col in range(len(battleField)):
            if battleField[row][col] == 1:
                if battleField[row + 1][col] ==1:
                    if battleField[row + 2][col] ==1:
                        if battleField[row - 1][col] == 0:
                            if battleField[row + 3][col] ==0:
                                ships_on_board.append(3)
    # 2 down
    for row in range(len(battleField[0])):
        for col in range(len(battleField)):
            if battleField[row][col] == 1:
                if battleField[row + 1][col] ==1:
                    if battleField[row + 2][col] ==0:
                        if battleField[row - 1][col]== 0:
                            if battleField[row + 3] == 0:
                                if battleField[row -1][col-1] == 1:
                                    print('nooo')
                                ships_on_board.append(2)
    # 1 down and up
    for row in range(len(battleField[0])):
        for col in range(len(battleField)):
            if battleField[row][col] == 1:
                if battleField[row -1][col] == 0 and battleField[row][col -1] == 0:
                    if battleField[row + 1][col] == 0 and battleField[row][col +1] ==0:
                        ships_on_board.append(1)

    return ships, ships_on_board


# check if condtions are met
    # remove duplicates
def check_ships():
    ships, ships_on_board = validateBattlefield(battleField)
    print(ships)
    print(ships_on_board)
    for item in ships:
        try:
            ships_on_board.remove(item)
        except ValueError:
            pass
    # does the set of ships == ships_on_board?
    if (len(ships) == 0):
        print('True')
        print(ships_on_board)
        return True
    else:
        print('False')
        print(ships)
        print(ships_on_board)
        return False




battleField = [  [1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
                 [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                 [1, 0, 1, 0, 1, 1, 1, 0, 0, 0],
                 [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                 [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                 [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                 [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                 [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]]

check_ships()
