import random



exponent = 5



for x in range(100):
    randomNumber = random.random()
    #print(randomNumber)
    if (pow(x,exponent)/pow(100,exponent) > randomNumber):
        print(x)
        break