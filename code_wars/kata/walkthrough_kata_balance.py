def bal(left, right):
    # Store weights of arguments
    left_weight = 0
    right_weight = 0
    # Check weight of each argument
    for x in left:
        if x == '!':
            left_weight = left_weight + 2
        else:
            left_weight = left_weight + 3

    for y in right:
        if y == '!':
            right_weight = right_weight + 2
        else:
            right_weight = right_weight + 3

    print('Left Weight: %d'%(left_weight))
    print('Right Weight: %d'%(right_weight))
    # Checking weights
    if left_weight > right_weight:
        print('Left')
        return 'Left'
    elif right_weight > left_weight:
        print('Right')
        return 'Right'
    else:
        print('Balance')
        return 'Balance'






# ! = 2
# ? = 3
# Check to see if arguments are balanced
bal('!!', '??')  # Right heavy
