#!/usr/bin/python
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
board = CircuitPlayground(port)

# Define function that will be called when data is received from the light sensor.
def light_data(data):
    # Print out the raw light sensor ADC value (data[2] holds the value).
    print('Light sensor: {0}'.format(data[2]))
    if data[2] <= 200:
        board.set_pixel(0, 255, 255, 255)
        board.set_pixel(1, 0, 0, 255)
        board.set_pixel(2, 255, 0, 0)
        board.set_pixel(3, 255, 255, 255)
        board.set_pixel(4, 0, 0, 255)
        board.set_pixel(5, 255, 255, 255)
        board.set_pixel(6, 0, 0, 255)
        board.set_pixel(7, 255, 0, 0)
        board.set_pixel(8, 255, 255, 255)
        board.set_pixel(9, 0, 0, 255)
        board.show_pixels()
    else:
    	board.clear_pixels()

# Setup Firmata to listen to light sensor analog input (A5).
# The callback function will be called whenever new data is available.
board.set_pin_mode(5, board.INPUT, board.ANALOG, light_data)

# Loop forever printing light values as they change.
print('Printing light sensor values (Ctrl-C to quit)...')
while (True):
    time.sleep(1)  # Do nothing and just sleep.  When data is available the callback
                   # functions above will be called.




