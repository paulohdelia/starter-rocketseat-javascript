function pares(x, y) {
  let i = x + 1;
  while (i < y) {
    i % 2 == 0 && console.log(i);
    i++;
  }
}

pares(32, 321);