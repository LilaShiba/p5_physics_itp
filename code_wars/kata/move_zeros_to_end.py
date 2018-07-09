def move_zeros(array):
    zeros = []
    for x in array:
        if x == 0 or x == 0.0:
            zeros.append(0)
            array.remove(x)
    ans = array + zeros
    print(ans)
move_zeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9])
move_zeros(['a', 'b', None, 'c', 'd', 1, 1, 3, [], 1, 9, 0, 0, {}, 0, 0, 9, 0, 0, False, 0, 0, 0, 0])
move_zeros([false,1,0,1,2,0,1,3,"a"])
