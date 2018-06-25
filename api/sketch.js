// access_token = pk.eyJ1IjoicHJvZnNoaWJhIiwiYSI6ImNqaXVhdnBoazIwZDIzcHQ5MmdhZWpqcHcifQ.sVdG0OEXuaV5vYnOK4ju1A
// python -m SimpleHTTPServer 8000
// https://www.mapbox.com/api-documentation/#retrieve-a-static-map-from-a-style
var mapimg;

var clat = 0;
var clon = 0;

// 31.2304° N, 121.4737° E
// 40.6681° N, 73.9806° W
var lat = 40.6681;
var lon = -73.9806;

var zoom = 1;
var earthquakes;

function preload(){
  mapimg = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,"+zoom+",0,0/1024x512?access_token=pk.eyJ1IjoicHJvZnNoaWJhIiwiYSI6ImNqaXViNzdqNjE4aGUzbG8xODV0aTJwdXUifQ.e5B2bNSJuhmMhi0MFlBcyw");
  earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv');
}

// https://en.wikipedia.org/wiki/Web_Mercator

function mercX(lon){
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat){
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI/4 + lat/2);
  var c = PI - log(b);
  return a * c;
}

function setup(){
  createCanvas(1024,512);
  translate(width/2, height/2);
  imageMode(CENTER);
  image(mapimg,0,0);

  var cx = mercX(clon);
  var cy = mercY(clat);

  for (var i =0; i < earthquakes.length; i++){
    var data = earthquakes[i].split(/,/);
    var lat = data[1];
    var lon = data[2];
    var mag = data[4]
    mag = pow(mag,10);
    mag = sqrt(mag);
    var magmax = sqrt(pow(10,10));
    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;

    var d = map(mag, 0,magmax, 0, 180);
    fill(255,0,255,100);
    stroke(255,0,255);
    ellipse(x,y,d,d)
  }
}
