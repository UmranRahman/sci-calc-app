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
});