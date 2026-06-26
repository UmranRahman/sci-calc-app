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

    function isOperator(value: string): boolean {
        return ["+", "−", "×", "÷"].includes(value);
    }

    function getCurrentNumber(expression: string): string {
        const parts = expression.split(/[+−×÷]/);
        return parts[parts.length - 1];
    }

    function calculateUnaryOperation(expression: string, operation: string): string {
        const number = Number(expression);

        if (Number.isNaN(number)) {
            return expression;
        }

        switch (operation) {
            case "√":
            if (number < 0) {
                return "Error";
            }
            return String(Math.sqrt(number));

            case "x²":
            return String(number * number);

            default:
            return expression;
        }
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

    const lastCharacter = state.displayValue[state.displayValue.length - 1];

    if (isOperator(value) && isOperator(lastCharacter)) {
        return {
        displayValue: state.displayValue.slice(0, -1) + value,
        };
    }

    if (value === "." && getCurrentNumber(state.displayValue).includes(".")) {
        return state;
    }

    if (value === "√" || value === "x²") {
        return {
            displayValue: calculateUnaryOperation(state.displayValue, value),
        };
    }

    return {
        displayValue: state.displayValue + value,
    };
    }