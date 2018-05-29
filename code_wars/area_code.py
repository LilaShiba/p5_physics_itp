# find the area code in a string

def area_code(t):
   return t[t.index('(')+1:t.index(')')]