def numeric_palindrome(*args):
    #numpy.outer(args)
    product = 1
    # TODO cycle through all permutations
    for x in args:
        if x != 0:
            product *= x

    # put into list
    double_return = product
    product = list(str(product))
    print product
    # if a double digit is the same
    if len(product) <= 2:
        if product[0] == product[1]:
            print double_return
            return double_return
        else:
            print max(product)
            return max(product)

    # find repeats
    repeats = ([x for x in product if product.count(x) == 2])
    print repeats
    repeats_master = ([x for x in product if product.count(x) > 1])
    double_repeats = ([x for x in product if product.count(x) == 4])

    # set up to remove repeats
    nums = []
    dnums = []
    # turn str into int
    repeats = map(int, repeats)
    drepeats = map(int, double_repeats)

    # remove repeats
    # check for replacing sets of doubles
    for x in repeats:
        if x not in nums:
            nums.append(x)
    for x in drepeats:
        if x not in dnums:
            dnums.append(x)
    print dnums

    # split into two parts: low - high and high - low
    start = sorted(nums + dnums, key=int, reverse=True)
    end = sorted(nums + dnums, key=int)

    # find highest single digit
    for item in repeats_master:
        try:
            product.remove(item)
        except:
            pass

    # method to join arrays into single int
    f_ans = lambda nums: int(''.join(str(i) for i in nums))

    # if there is a highest single int
    if len(product) >= 1:
        highest_single = max(product)
        start.append(int(highest_single))
        ans = start + end
        print f_ans(ans)
        return f_ans(ans)
    else:
        ans = start + end
        print f_ans(ans)
        return f_ans(ans)


numeric_palindrome(492, 45206, 761, 326, 64)
