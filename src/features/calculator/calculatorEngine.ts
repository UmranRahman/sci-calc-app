import { CalculatorState } from "./calculatorTypes";

export const initialCalculatorState: CalculatorState = {
    displayValue: "0",
};

function calculateBasicExpression(expression: string): string {
    const match = expression.match(/^(-?\d+(?:\.\d+)?)([+−×÷])(-?\d+(?:\.\d+)?)$/);

    if (!match) {
        return expression;
    }

    const leftNumber = Number(match[1]);
    const operator = match[2];
    const rightNumber = Number(match[3]);

    let result: number;

    switch (operator) {
        case "+":
        result = leftNumber + rightNumber;
        break;
        case "−":
        result = leftNumber - rightNumber;
        break;
        case "×":
        result = leftNumber * rightNumber;
        break;
        case "÷":
        if (rightNumber === 0) {
            return "Error";
        }
        result = leftNumber / rightNumber;
        break;
        default:
        return expression;
    }

    return String(result);
    }

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
        if (state.displayValue.length === 1 || state.displayValue === "Error") {
        return initialCalculatorState;
        }

        return {
        displayValue: state.displayValue.slice(0, -1),
        };
    }

    if (value === "=") {
        return {
        displayValue: calculateBasicExpression(state.displayValue),
        };
    }

    if (state.displayValue === "0" || state.displayValue === "Error") {
        return {
        displayValue: value,
        };
    }

    return {
        displayValue: state.displayValue + value,
    };
    }