def capitals(word):
  up = []
  
  for i in range(len(word)):   # so as not to repeat first instance of cap
      if word[i].isupper():
          up.append(i)
  return up



  ### Much Better and use to teach enumerate + lambda function

  capitals = lambda word: [i for i,val in enumerate(word) if val.isupper()]
