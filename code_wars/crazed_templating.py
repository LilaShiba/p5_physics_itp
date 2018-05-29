#done borrowed this code so I can look over it and learn.
# many thanks, such beauty, very code


# Tests to Pass
test_list = ['war', 'rad', 'dad']
test.assert_equals(letter_pattern(test_list), "*a*")

test_list = ['general', 'admiral', 'piglets', 'secrets']
test.assert_equals(letter_pattern(test_list), "*******")

test_list = ['family']
test.assert_equals(letter_pattern(test_list), "family")


#Function Used

def letter_pattern(words):
    return "".join( x[0] if x.count(x[0]) == len(x) else "*" for x in zip(*words))


# Explain

	return "".join( ) 
    # returns output by printing all that follow parameters given

   
    #parameters

    return "".join( x[0] for x in zip(*words))
    # Returns first word 
    # changing x[1] returns second word etc.
    # Zip makes x word aka iterates
    

    return "".join( x[0] for x in (words))
    # Returns first letter in each word  
    # chaning x[1] returns set of second letters 
   

    
    x[0] if x.count(x[0]) == len(x)
    # return the iterated x if it's count is in each word thanks to the handy zip and * (unpacking) function
    # zip deals with iterating over sets





    else "*" for x in zip(*words))