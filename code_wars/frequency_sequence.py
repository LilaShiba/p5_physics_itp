# Return an output string that translates an input string s by replacing 
#each character in s with a digit representing the number of times 
#that character occurs in s and separating digits with the character(s) sep.

def freq_seq(s, sep):
    done = []
    for x in s:
        done.append(str(s.count(x)))
    return sep.join(done)