function setup(){
  createCanvas(500,500);
  const values = [];
  for(i = 0; i < 15; i++){
    values[i] = random(0, 100);
  }
  const shapeA = [5,3];
  const shapeB =[3,5];
  const a = tf.tensor2d(values, shapeA, 'int32');
  const b = tf.tensor2d(values,shapeA,'int32');
  const bb =b.transpose();
  // make tensor into a var
  // const tense_v = tf.variable(tense);
  //tense.print();
  //console.log(a.get(0,0,2));

  // matrix mult
  e = a.matMul(bb)
  e.print();
}
