import itertools
def numeric_palindrome(*args):
    args = list(args)
    meow = len(args)
    args1 = sorted(args, key=int, reverse=True)
    if len(args) == 2 and args[0] == 0 or args[1] == 0:
        return 0
    if len(args) == 2:
        highest = all_times(args1, 0)

    highest1 = all_times(args1, 0)
    args1 = sorted(args, key=int, reverse=True)
    highest2 = all_times(args1, 1)
    args1 = sorted(args, key=int, reverse=True)
    highest3 = all_times(args1, -1)
    args1 = sorted(args, key=int, reverse=True)
    highest4 = all_times(args1, -2)

    highest6 = -1
    for x in range(len(args1)):
        args1 = sorted(args, key=int, reverse=True)
        highest5 = all_times(args1, 0)
        if highest5 > highest6:
            highest6 = highest5
    c = list(itertools.combinations(args, meow))
    unq = set(c)
    highest7 = -1
    for x in c:
        args1 = c

        highest8 = all_times(args1, -1)
        if highest8 > highest7:
            highest8 = highest7




    all_them = [highest1, highest2, highest3, highest4, highest5, highest8]
    highest = max(all_them)

    print "the highest is ", highest
    return highest


def all_times(args, remove_i):
    highest = -1
    while len(args) > 1:
        ans = checker(args)
        print "this is the ans", ans
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

def checker(args):
    # method to join arrays into single int
    f_ans = lambda nums: int(''.join(str(i) for i in nums))
    # hash to store num occurance
    nums = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 0:0}
    # can't * by 0
    product = 1
    # TODO cycle through all permutations
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

    # highest single value
    highest_single = None
    for key, value in nums.iteritems():
        if value > 0 and key > highest_single:
            highest_single = key

    if highest_single >= 0:
        start.append(int(highest_single))

    ans = start + end
    print f_ans(ans)
    return f_ans(ans)


numeric_palindrome(492, 45206, 761, 326, 64, 3453,234)
