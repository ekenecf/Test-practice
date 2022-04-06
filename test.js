const lib = require('./index.js');

test('gets length of a string', () => {
    expect(lib.stringLength('bag')).toBe(3);
    expect(lib.stringLength('greatness')).toBe(9);
    expect(() => lib.stringLength('ajnidwunc9noweec')).toThrow(Error);
  });

  test('reverse string', () => {
    expect(lib.reverseString('bag')).toBe('gab');
  });

  test('Capitalise string', () => {
    expect(lib.Capitalise('bag')).toBe('Bag');
    expect(lib.Capitalise('remit')).toBe('Remit');
  })

  describe('Calculator', () => { 
    const Calculator = new lib.Calculator(5, 5);
    test('add', () => {
      expect(Calculator.add()).toBe(10);
    });
  
    test('subtract', () => {
      expect(Calculator.subtract()).toBe(0);
    });
  
    test('multiply', () => {
      expect(Calculator.multiply()).toBe(25);
    });
  
    test('divide', () => {
      expect(Calculator.divide()).toBe(1);
    });
  
    test('Capitalise', () => {
      expect(Calculator.Capitalise('bag')).toBe('BAG');
    })
  })