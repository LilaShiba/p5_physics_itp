# Help Suzuki rake his garden! The monastery has a magnificent Zen garden made of white gravel and rocks 
# and it is raked diligently everyday by the monks. Suzuki having a keen eye is always on the 
# lookout for anything creeping into the garden that must be removed during the daily raking such as 
# insects or moss.

def rake_garden(garden):
	dic = {"slug":"gravel", "spider":"gravel", "snail":"gravel", "ant":"gravel", "moss":"gravel"} 
    for x, z in dic.iteritems():
        garden = garden.replace(x, z)
    return garden