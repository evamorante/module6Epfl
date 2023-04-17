#Exercise 08. on module 6
def greet(name, age):
#   message = "Your name is" + name + " and you are " + int(age) + " years old."
    message = "Your name is " + name + " and you are " + age + " years old."
    return message

name = input("Enter your name: ")
age = input("Enter your age: ")

print(greet(name, age))
#no indication in the code editor for finding errors in the code
#let's run it & check with the indications in the terminal
#DONE IT !!





def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

num_one = input("Enter a number: ")
num_two = input("Enter another number: ")

#message = "The result of " + num_one + " + " num_two + " is " + add(num_one, num_two)
#message = "The result of " + num_one + " + " + num_two + " is " + add(num_one, num_two)
message = "The result of " + num_one + " + " + num_two + " is " + str(add(int(num_one), int(num_two)))
print(message)

message = "The result of " + num_one + " - " + num_two + " is " + str(subtract(int(num_one), int(num_two)))
print(message)
#tried to do by my own, finding some errors and trying to correct them, done it with help of Nico
#DONE IT !



def get_result(answer):
    if answer == "a":
        return True
    else:
        return False

print("Do you like programing?")
print("a. Yes")
print("b. No")
result = input("Enter a or b: ")

if get_result(result):
    print("Awesome! Programming is really fun!")
else:
    print("Hang in there! It's an acquired taste!")
#found the semi:colon errors, the indentation error, the case sensitive error 
#but noooot the value of answer as a string arrrrrrfffff
#DONE IT !







