function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function internal() {
    const added = add(this.internal.a, this.internal.b);
    const multiplied = multiply(added, this.internal.c);
    console.log(multiplied);
  }
  
  const example1 = {
    internal: {
      a: 2,
      b: 4,
      c: 8,
    },
    add,
    multiply,
  };
  
  const example2 = {
    internal: {
      a: 2,
      b: 2,
      c: 3,
    },
    add,
    multiply,
  };
  
  internal.call(example1);
  internal.call(example2);
  