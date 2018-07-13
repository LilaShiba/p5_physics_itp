def next_smaller(n):
    nums = [int(i) for i in str(n)]
    print(nums)
    for x in nums:
        for y in nums:
            if x > y:
                print(y)


next_smaller(907)
