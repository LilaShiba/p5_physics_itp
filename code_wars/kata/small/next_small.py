def next_smaller(n):
    new_num = []
    nums = list(str(n))
    for i in reversed(range(len(nums[:-2]))):
        for j in reversed(range(i, len(nums))):
            print('nums[i]: %s' %(nums[i]))
            print('nums[j]: %s' %(nums[j]))
            if nums[i] > nums[j]:
                nums[i], nums[j] = nums[j], nums[i]
                new_num.append(nums[i])
                ans = int(''.join(nums))
    print(new_num)
    return -1

next_smaller(907)
next_smaller(312)
