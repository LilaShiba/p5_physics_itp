def proper_fractions(n):
    if n == 0:
        print(0)

    ans = []
    num = []
    count = 1

    while count < n:
        if count % n > 0:
            num.append(count)
        count = count + 1

    for x in num:
        if n % 2 == 0 and x % 2 == 0:
            num.remove(x)
        if n % 3 == 0 and  x % 3 == 0:
            num.remove(x)
        if n % 5 == x % 5 == 0:
            num.remove(x)

    ans = len(num)
    return(ans)



proper_fractions(25)
