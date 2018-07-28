def numeric_palindrome(*args):
    args = list(args)
    args = sorted(args, key=int, reverse=True)
    args2 = sorted(args, key=int, reverse=True)
    highest = 0
    # if you have two numbers and one is zero
    if len(args) == 2 and args[0] == 0 or args[1] == 0:
        return 0
    # check from highest to lowest
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
        del args[-1]
    # check from lowest to highest
    while len(args2) > 1:
        ans = checker(args2)
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
        del args2[0]

    print "the highest is %d" %highest
    return highest
def checker(args):
    # method to join arrays into single int
    f_ans = lambda nums: int(''.join(str(i) for i in nums))
    # hash to store num occurance
    nums = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 0:0}
    # can't * by 0
    product = 1
    # get product
    for x in args:
        if x != 0:
            product *= x

    if product == 1:
        return 0
    # put into a list
    product = list(str(product))
    product = map(int, product)

    # update hash with values
    for x in product:
        if x in nums:
            nums[x] += 1
    print product
    # create two lists: start and end of palindrome
    end = []
    for x in nums:
        if nums[x] == 2 or nums[x] == 3:
            end.append(x)
            nums[x] -= 2
        if nums[x] == 4 or nums[x] == 5:
            end += 2 * [x]
            nums[x] -= 4
        if nums[x] == 6 or nums[x] == 7:
            end += 3 * [x]
            nums[x] -= 6
        if nums[x] == 8 or nums[x] == 9:
            end += 4 * [x]
            nums[x] -= 8

    start = sorted(end, key=int, reverse=True)

    # find highest single value
    highest_single = None
    for key, value in nums.iteritems():
        if value > 0 and key > highest_single:
            highest_single = key
    # add highest single if it is there
    if highest_single >= 0:
        start.append(int(highest_single))
    # return joined answer
    ans = start + end
    print f_ans(ans)
    return f_ans(ans)



numeric_palindrome(1,2,3,5,6,7,8,9)
