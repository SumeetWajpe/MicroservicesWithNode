// can have multiple named exports
export function Add(x, y) {
  return x + y;
}

// there can only be one default export per module
export default function Product(x, y) {
  return x * y;
}
