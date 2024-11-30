import { expect } from 'chai';

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
};

describe('Calculator Tests', () => {
    it('should return the correct sum of two numbers', () => {
        const result = calculator.add(5, 3);
        expect(result).to.equal(8);
    });

    it('should return the correct difference of two numbers', () => {
        const result = calculator.subtract(10, 4);
        expect(result).to.equal(6);
    });

    it('should return the correct product of two numbers', () => {
        const result = calculator.multiply(6, 7);
        expect(result).to.equal(42);
    });
});
