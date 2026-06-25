import { CalculatorState } from "./calculatorTypes";

export const initialCalculatorState: CalculatorState = {
    displayValue: "0",
};

export function handleCalculatorInput(
    state: CalculatorState,
    value: string
): CalculatorState {
    if (value === "") {
        return state;
    }

    if (value === "C") {
        return initialCalculatorState;
    }

    if (value === "⌫") {
        if (state.displayValue.length === 1) {
        return initialCalculatorState;
        }

        return {
        displayValue: state.displayValue.slice(0, -1),
        };
    }

    if (value === "=") {
        return state;
    }

    if (state.displayValue === "0") {
        return {
        displayValue: value,
        };
    }

    return {
        displayValue: state.displayValue + value,
    };
}