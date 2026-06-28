export type HistoryItem = {
    expression: string;
    result: string;
};

export type CalculatorState = {
    displayValue: string;
    history: HistoryItem[];
};