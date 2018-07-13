def next_smaller(num):
    strNum=str(num)
    length=len(strNum)
    ans = -1

    nums = [int(i) for i in str(num)]
    if length == 1 or nums == sorted(nums):
                print(-1)
                return(-1)

    for i in range(length-2, -1, -1):
        current=strNum[i]
        right=strNum[i+1]
        print("current %s" %(current))
        print("right %s" %(right))
        if current>right:

            

            print(ans)
            return(ans)

next_smaller(907)
next_smaller(312)
