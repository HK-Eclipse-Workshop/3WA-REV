const Add = {
    a: 0,
    b: 0,
    numbers: [],
  
    sum: function() {
      if (Array.isArray(this.numbers) && this.numbers.length > 0) {
        return this.numbers.reduce((total, number) => total + number, 0);
      } else {
        return this.a + this.b;
      }
    },
  
    reset: function() {
      this.numbers = [];
    }
};
  
Add.a = 10;
Add.b = 20;

console.log(Add.sum()); // 30

Add.numbers = [1, 2, 4];

console.log(Add.sum()); // 7

Add.reset();

Add.numbers = [1, 2, 4];

console.log(Add.sum()); // 7
  