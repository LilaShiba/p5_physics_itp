#!/usr/bin/python
# import libs needed
import time
import sys

# Import CircuitPlayground class from the circuitplayground.py in the same directory.
from circuitplayground import CircuitPlayground


# Grab the serial port from the command line parameters.
if len(sys.argv) != 2:
    print('ERROR! Must specify the serial port as command line parameter.')
    sys.exit(-1)
port = sys.argv[1]

# Connect to Circuit Playground board on specified port.
# What board what port?
board = CircuitPlayground(port)

# Call Brightness 0-255
board.set_pixel_brightness(100)

# Call Pixel and Color via RGB Brightness
board.set_pixel(1, 250, 0, 0)
board.set_pixel(2, 0, 255, 0)
board.set_pixel(3, 0, 0, 250)
board.set_pixel(4, 250, 0, 0)
board.set_pixel(5, 250, 0, 0)
board.set_pixel(6, 250, 0, 0)
board.set_pixel(7, 250, 0, 0)
board.set_pixel(8, 250, 0, 0)
board.set_pixel(9, 250, 0, 0)

#Show those darn lights!
board.show_pixels()



#colors = [ (255,   0,   0),  # Red color (components are red, green, blue)
#          (255, 128,   0),  # Orange
#           (255, 255,   0),  # Yellow
#          (  0, 255,   0),  # Green
#          (  0,   0, 255),  # Blue
#          ( 75,   0, 130),  # Indigo
#          (143,   0, 255) ] # Violet