var list = [1, 2, 3, 4];
ln = list.length;

for (var z = 0; z < ln; z++){
  for (var x = 0; x < ln; x++) {
    setTimeout(
      function (y) {
        console.log("here" + x);
        console.log("value of z : "+z)
        list[y] += 10;
        console.log(y[0]+ " & "+ y[1] + " => " + list[y]);
      },
      x * 1000,
      [x,z]
    );
  }
}


