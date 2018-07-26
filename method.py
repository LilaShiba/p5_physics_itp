def all_times(args, remove_i):
    highest = -1
    while len(args) > 1:
        ans = checker(args)
        print ans
        if ans > highest:
            ansl = list(str(ans))
            if len(ansl) == 1:
                highest = ans
            if len(ansl) > 2:
                highest = ans
            if len(ansl) == 2 and ansl[0] != ansl[1]:
                highest = highest
            if len(ansl) == 2 and ansl[0] == ansl[1]:
                highest = ans
        del args[remove_i]
    return highest
