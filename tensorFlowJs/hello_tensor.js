function setup(){
  createCanvas(500,500);

  const values = []; // data in matrix

  for (let i = 0; i < 30; i++){
    values[i] = random(0, 100);
  }

  const shape = [2,5,3]; //shape of matrix
  const data = tf.tensor3d(values, shape)


  //const data = tf.tensor([0,2,123,224, 100, 255, 20, 30], [2,2,2]);
  data.print();
  //console.log(data) to see object info
  // tensors have values = numbers, shape = define dimensions, and dtype = what goes in (int, floats, bool)
  // rank 0 tf.scalar = a number
  // rank 1 tf.tensor1d = vector
  // rank 2 tf.tensor2d = matrix
  // rank 3 tf.tensor3d = 3d matrix
}
