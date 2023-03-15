let MathModule = (function () {
  const PI = 3.14;
  function Add(x, y) {
    return x + y;
  }

  function Product(x, y) {
    return x * y;
  }

  return {
    Add: Add,
  };
})();
