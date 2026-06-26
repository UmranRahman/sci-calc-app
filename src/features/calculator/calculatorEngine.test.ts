import {
    handleCalculatorInput,
    initialCalculatorState,
} from "./calculatorEngine";

describe("calculator input handling", () => {
    test("starts with zero on the display", () => {
        expect(initialCalculatorState.displayValue).toBe("0");
    });

    test("replaces zero when entering the first number", () => {
        const nextState = handleCalculatorInput(initialCalculatorState, "7");

        expect(nextState.displayValue).toBe("7");
    });

    test("appends numbers to the display", () => {
        const state = { displayValue: "7" };

        const nextState = handleCalculatorInput(state, "5");

        expect(nextState.displayValue).toBe("75");
    });

    test("clears the display", () => {
        const state = { displayValue: "123" };

        const nextState = handleCalculatorInput(state, "C");

        expect(nextState.displayValue).toBe("0");
    });

    test("removes the last character with backspace", () => {
        const state = { displayValue: "123" };

        const nextState = handleCalculatorInput(state, "⌫");

        expect(nextState.displayValue).toBe("12");
    });

    test("backspace resets to zero when one character remains", () => {
        const state = { displayValue: "7" };

        const nextState = handleCalculatorInput(state, "⌫");

        expect(nextState.displayValue).toBe("0");
    });

    test("calculates addition when equals is pressed", () => {
        const state = { displayValue: "2+3" };

        const nextState = handleCalculatorInput(state, "=");

        expect(nextState.displayValue).toBe("5");
    });

    test("calculates subtraction when equals is pressed", () => {
        const state = { displayValue: "9−4" };

        const nextState = handleCalculatorInput(state, "=");

        expect(nextState.displayValue).toBe("5");
    });

    test("calculates multiplication when equals is pressed", () => {
        const state = { displayValue: "6×7" };

        const nextState = handleCalculatorInput(state, "=");

        expect(nextState.displayValue).toBe("42");
    });

    test("calculates division when equals is pressed", () => {
        const state = { displayValue: "8÷2" };

        const nextState = handleCalculatorInput(state, "=");

        expect(nextState.displayValue).toBe("4");
    });

    test("shows error when dividing by zero", () => {
        const state = { displayValue: "8÷0" };

        const nextState = handleCalculatorInput(state, "=");

        expect(nextState.displayValue).toBe("Error");
    });

    test("does not allow two operators in a row", () => {
        const state = { displayValue: "2+" };

        const nextState = handleCalculatorInput(state, "×");

        expect(nextState.displayValue).toBe("2×");
    });

    test("does not allow multiple decimals in the same number", () => {
        const state = { displayValue: "7.5" };

        const nextState = handleCalculatorInput(state, ".");

        expect(nextState.displayValue).toBe("7.5");
    });

    test("allows decimal in the second number", () => {
        const state = { displayValue: "7+2" };

        const nextState = handleCalculatorInput(state, ".");

        expect(nextState.displayValue).toBe("7+2.");
    });

    test("does not calculate incomplete expression", () => {
        const state = { displayValue: "7+" };

        const nextState = handleCalculatorInput(state, "=");

        expect(nextState.displayValue).toBe("7+");
    });

    test("calculates square root", () => {
        const state = { displayValue: "9" };

        const nextState = handleCalculatorInput(state, "√");

        expect(nextState.displayValue).toBe("3");
    });

    test("calculates square", () => {
        const state = { displayValue: "5" };

        const nextState = handleCalculatorInput(state, "x²");

        expect(nextState.displayValue).toBe("25");
    });

    test("shows error for square root of negative number", () => {
        const state = { displayValue: "-9" };

        const nextState = handleCalculatorInput(state, "√");

        expect(nextState.displayValue).toBe("Error");
    });

    test("enters pi constant", () => {
        const nextState = handleCalculatorInput(initialCalculatorState, "π");

        expect(nextState.displayValue).toBe(String(Math.PI));
    });

    test("enters e constant", () => {
        const nextState = handleCalculatorInput(initialCalculatorState, "e");

        expect(nextState.displayValue).toBe(String(Math.E));
    });

    test("calculates sine in degrees", () => {
        const state = { displayValue: "30" };

        const nextState = handleCalculatorInput(state, "sin");

        expect(nextState.displayValue).toBe("0.5");
    });

    test("calculates cosine in degrees", () => {
        const state = { displayValue: "60" };

        const nextState = handleCalculatorInput(state, "cos");

        expect(nextState.displayValue).toBe("0.5");
    });

    test("calculates tangent in degrees", () => {
        const state = { displayValue: "45" };

        const nextState = handleCalculatorInput(state, "tan");

        expect(nextState.displayValue).toBe("1");
    });
});