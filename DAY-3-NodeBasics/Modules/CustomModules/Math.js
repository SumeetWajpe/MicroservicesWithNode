function Add(x, y) {
  return x + y;
}

function Multiply(x, y) {
  return x * y;
}

// module.exports.Add = Add;
// module.exports.Multiply = Multiply;

// module.exports = { Add: Add, Multiply: Multiply };
// Enhanced Object Literal Syntax
module.exports = { Add, Product: Multiply };
