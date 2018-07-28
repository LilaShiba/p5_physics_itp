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
        if n % 2 == 0:
            if x % 2 == 0:
                num.remove(x)
    for x in num:
        if n % 3 == 0:
            if x % 3 == 0:
                num.remove(x)
    for x in num:
        if n % 5 == 0:
            if x % 5 == 0:
                num.remove(x)

    print(num)
    ans = len(num)
    return(ans)



proper_fractions(2245245255)
