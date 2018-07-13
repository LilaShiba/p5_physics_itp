# http://www.codewars.com/kata/pete-the-baker/train/python
def cakes(recipe, available):
    meow = {k: available[k]/recipe[k] for k in available.keys() & recipe}
    print(meow)

    min_key = min(meow, key=meow.get)
    min_ans = meow[min_key]
    ans = min_ans//1
    print(ans)
    return ans
    
recipe = {"flour": 500, "sugar": 200, "eggs": 1}
available = {"flour": 1200, "sugar": 1200, "eggs": 5, "milk": 200}

cakes(recipe,available)
