///////////////////////////////////////////////////////////////////////////////
// Circuit Playrgound How Cold Is It - Simple Version
//
// Author: Carter Nelson
// MIT License (https://opensource.org/licenses/MIT)

#include <Adafruit_CircuitPlayground.h>

float temperatureC, temperatureF;
float minTempC, minTempF;
uint8_t temperatureDisplay;
boolean isNegative;

///////////////////////////////////////////////////////////////////////////////
void setup() {
  // Initialize Circuit Playground library.
  CircuitPlayground.begin();

  // Turn off all the NexPixels.
  for (int p=0; p<10; p=p+1) {
    CircuitPlayground.setPixelColor(p, 0, 0, 0);
  }

  // Initialize temperature values to current temperature
  minTempC = CircuitPlayground.temperature();
  minTempF = CircuitPlayground.temperatureF();
}

///////////////////////////////////////////////////////////////////////////////
void loop() {
  // Get current temperatures.
  temperatureC = CircuitPlayground.temperature();
  temperatureF = CircuitPlayground.temperatureF();

  // Update minimum temperatures.  
  if (temperatureC < minTempC) {
    minTempC = temperatureC;
  }
  if (temperatureF < minTempF) {
    minTempF = temperatureF;
  }
 
  // Use slide switch to choose temperature units.
  //    + (true)  = Fahrenheit
  //    - (false) = Celsius
  if (CircuitPlayground.slideSwitch() == true) {
    temperatureDisplay = uint8_t(abs(minTempF));
    if (minTempF < 0) {
      isNegative = true;
    } else {
      isNegative = false;
    }
  } else {
    temperatureDisplay = uint8_t(abs(minTempC));
    if (minTempC < 0) {
      isNegative = true;
    } else {
      isNegative = false;
    }
  }

  // Indicate sign of temperature on NeoPixel #8.
  if (isNegative == true) {
    // Blue light.
    CircuitPlayground.setPixelColor(8, 0, 0, 255);
  } else {
    // Off.
    CircuitPlayground.setPixelColor(8, 0, 0, 0);
  }

  // Display minimum temperature on NeoPixels #0-#7.
  for (int p=0; p<8; p=p+1) {
      // Is the least signficant bit a 1?
      if (temperatureDisplay & 0x01 == 1) {
        // Turn on the NeoPixel
        CircuitPlayground.setPixelColor(p, 255, 255, 255);
      } else {
        // Turn off the NeoPixel
        CircuitPlayground.setPixelColor(p, 0, 0, 0);
      }
      // Shift the value down to the next bit.
      temperatureDisplay = temperatureDisplay >> 1;    
  }
}
