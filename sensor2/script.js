let sensor = new Gyroscope();
sensor.start();

sensor.onreading = () => {
    console.log("Angular velocity around the X-axis " + sensor.x);
    console.log("Angular velocity around the Y-axis " + sensor.y);
    console.log("Angular velocity around the Z-axis " + sensor.z);
    var x_accel = sensor.x
    const accelX = document.querySelector("#x")
      accelX.innerHTML = "Your X Axis is: " + x_accel.toFixed(1)
};

sensor.onerror = event => console.log(event.error.name, event.error.message);

