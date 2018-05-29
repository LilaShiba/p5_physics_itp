#In this little assignment you are given a string of space separated numbers, 
#and have to return the highest and lowest number.


def high_and_low(num):
  num = num.split()
  num = [int(i) for i in num]
  return str(max(num))+" "+str(min(num))
