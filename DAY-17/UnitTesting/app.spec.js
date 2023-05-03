function Add(x, y) {
  return x + y;
}

describe("Test suites for testing Add function", () => {
  it("should add two numbers", () => {
    let result; // arrange
    result = Add(20, 30); // act
    expect(result).toBe(50); //assert
  });
});
