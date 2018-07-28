def anagrams(word, words):
    gold = word
    ans = []
    for x in words:
        if sorted(x) == sorted(gold):
            ans.append(x)
    print(ans)

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
