// test permissions via browser
function testDeviceOrientation() {
  
  // Not a function :(
  if (typeof DeviceOrientationEvent != 'function') {
    window.addEventListener('devicemotion', onClick);
    document.getElementById("myBtn").addEventListener("click", onClick); 
    return setResult('DeviceOrientationEvent NOT detected')
  }
  
  // If permission is needed
  if (typeof DeviceOrientationEvent.requestPermission == 'function'){
    // function to alert user and gain permission
    // user must click for api to work
    document.getElementById("myBtn").addEventListener("click", onClick); 

    return setResult(' Permission Needed. Click second button')
  }
  
  
  if (typeof DeviceMotionEvent == 'function'){
    // if no permission needed
    window.addEventListener('devicemotion', deviceMotionHandler);
    if (typeof DeviceOrientationEvent == 'function') {
      return setResult('DeviceOrientationEvent detected, Device Motion detected, and NO permission needed')
    }
    return setResult("Device Motion Event detected but no Device Orientation. Try Permissions.")
  }
  
  DeviceMotionEvent.requestPermission().then(function(result) {
    document.getElementById("myBtn").addEventListener("click", onClick); 

    return setResult(result);
  });
}

// return results of browser based permissions 
function setResult(result) {
  document.getElementById('result').innerHTML = 'RESULT: ' + result;
  setInterval(deviceMotionHandler, 900) 

}

// get user permission to allow device motion event api to work
function onClick() {
  console.log('clicked')
    // feature detect
    DeviceMotionEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
          const messageBoxMotion = document.querySelector("#messageMotion")
          messageBoxMotion.innerHTML = "Device Orientation Granted"
          window.addEventListener('devicemotion', deviceMotionHandler);
        }
      })
  setInterval(deviceMotionHandler, 900) 
}

// Track and show user's device info
function deviceMotionHandler(yourMotion){
  console.log('yoo')
  console.log(window.orientation)
  
  if (yourMotion != null){
    var x_accel = yourMotion.accelerationIncludingGravity.x
    var y_accel = yourMotion.accelerationIncludingGravity.y
    var z_accel = yourMotion.accelerationIncludingGravity.z
    var r_xrate = yourMotion.rotationRate.alpha
    console.log(yourMotion)

    
    if (x_accel != null){
    const accelX = document.querySelector("#x")
      accelX.innerHTML = "Your X Axis is: " + x_accel.toFixed(1)
    }
  
    
    if (y_accel != null){
      const accelY = document.querySelector("#y")
        accelY.innerHTML = "Your y Axis is: " + y_accel.toFixed(1)
    }

    if (z_accel != null){
      const accelZ = document.querySelector("#z")
        accelZ.innerHTML = "Your Z Axis is: " + z_accel.toFixed(1)
    } 
    if (r_xrate != null){
      const rotate_x = document.querySelector("#r_x")
      rotate_x.innerHTML = "Your Rotate Rate is: " + r_xrate.toFixed(1)
    }
    
  } else{
    console.log('not working')
  }
}



//window.navigator.vibrate([200, 100, 200]);

// var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

// function logBattery(battery) {
//     console.log(battery.level);
//     console.log(battery.charging);

//     battery.addEventListener('chargingchange', function() {
//         console.log('Battery chargingchange event: ' + battery.charging);
//     }, false);
  
//   const batteryStuff = document.querySelector("#battery")
//     batteryStuff.innerHTML = battery.level;
// }

// if (navigator.getBattery) {
//     navigator.getBattery().then(logBattery);
// } else if (battery) {
//     logBattery(battery);
// }