let sensor = new Gyroscope();
sensor.start();

sensor.onreading = () => {
    console.log("Angular velocity around the X-axis " + sensor.x);
    console.log("Angular velocity around the Y-axis " + sensor.y);
    console.log("Angular velocity around the Z-axis " + sensor.z);
    var x_accel = sensor.x
    const accelX = document.querySelector("#x")
      accelX.innerHTML = "Your X Axis is: " + x_accel.toFixed(1)
    var y_accel = sensor.y
    const accely = document.querySelector("#y")
      accely.innerHTML = "Your y Axis is: " + y_accel.toFixed(1)
    var z_accel = sensor.z
    const accelz = document.querySelector("#z")
      accelz.innerHTML = "Your z Axis is: " + z_accel.toFixed(1)
};

sensor.onerror = event => console.log(event.error.name, event.error.message);

