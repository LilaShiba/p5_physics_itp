class PVector {
  float x;
  float y;

  PVector(float x_, float y_){
    x = x_;
    y = y_;
  }

  void add(PVector v){
    y = y + v.y;
    x = x + v.x;
  }
}

PVector location = new PVector(100, 100);
PVector velocity = new PVector(1, 3.3);
