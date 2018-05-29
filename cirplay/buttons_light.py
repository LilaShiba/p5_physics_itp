#!/usr/bin/python
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

# Define functions that will be called when the buttons change state.
def left_changed(data):
    # Check if left button digital input is high, i.e. button is pressed.
    # Note that data[2] contains the current digital input state.
    if data[2]:
        board.set_pixel(0, 0, 0, 0)
        board.set_pixel(1, 0, 0, 0)
        board.set_pixel(2, 0, 0, 0)
        board.set_pixel(3, 0, 0, 0)
        board.set_pixel(4, 0, 0, 0)
        board.set_pixel(5, 0, 0, 0)
        board.set_pixel(6, 0, 0, 0)
        board.set_pixel(7, 0, 0, 0)
        board.set_pixel(8, 0, 0, 0)
        board.set_pixel(9, 0, 0, 0)
        board.show_pixels()
    else:
        print('Left button released!')

def right_changed(data):
    # Check if right button digital input is high, i.e. button is pressed.
    # Note that data[2] contains the current digital input state.
    if data[2]:
        board.set_pixel(1, 0, 0, 255)
        board.set_pixel(2, 0, 0, 244)
        board.set_pixel(3, 244, 0, 255)
        board.set_pixel(4, 75, 0, 0)
        board.set_pixel(5, 255, 255, 255)
        board.show_pixels()
    else:
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

def switch_changed(data):
    # Check if slide switch is left (high level) or right (low/ground level).
    if data[2]:
        board.clear_pixels()
    else:
        print('Switch is on the right!')

# Setup Firmata to listen to button & switch changes.
# The buttons/switches on Circuit Playground use these pins:
#  - Left button = Digital pin 4
#  - Right button = Digital pin 19
#  - Switch = Digital pin 21
board.set_pin_mode(4, board.INPUT, board.DIGITAL, left_changed)
board.set_pin_mode(19, board.INPUT, board.DIGITAL, right_changed)
board.set_pin_mode(21, board.INPUT, board.DIGITAL, switch_changed)

# Loop forever waiting for buttons to be pressed or change state.
# When the button changes one of the callback functions above will be called.
print('Press the left button, right button, or slide switch (Ctrl-C to quit)...')
while (True):
    time.sleep(1)  # Do nothing and just sleep.  When changes happen the callback
                   # functions above will be called.