#Your task is to convert strings to how they would be written by Jaden Smith. 
#The strings are actual quotes from Jaden Smith, but they are not capitalized 
#in the same way he originally typed them.



def toJadenCase(s):
    jaden = ' '.join(s[0].upper() + s[1:] for s in s.split())
    return jaden