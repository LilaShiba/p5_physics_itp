def numeric_palindrome(*args):
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

    # if a double digit is the same
    if len(product) <= 2:
        if product[0] == product[1]:
            print f_ans(product)
            return f_ans(product)
        else:
            print max(product)
            return max(product)

    # update hash with values
    for x in product:
        if x in nums:
            nums[x] += 1
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
            end += 4 * [x]
            nums[x] -= 6

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
