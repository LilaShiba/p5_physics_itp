woof = '**ell**o'

def virus_check(dna):
    for i in range(1,len(dna),-1):
            # check behind        check in front    check current
	       if((dna[i-1] == '*' or dna[i+1] == '*') and dna[i] != '*'):
                        # from all        to none
		             dna = dna[:i] + '__' +dna[(i+1):]

    # deal with double **
    for i in range(len(dna)):
        if dna[i] == '*' and dna[i + 1] == '*':
            dna = dna[:i] + "_" +dna[(i + 1):]


    print(dna)

virus_check(woof)
