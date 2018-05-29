#An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
#Implement a function that determines whether a string that contains only letters is an isogram. 
#Assume the empty string is an isogram. Ignore letter case.
def is_isogram(s):
  s = s.lower()
  for x in s:
      if s.count(x) > 1:
        return False
  return True