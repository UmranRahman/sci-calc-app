import { Pressable, StyleSheet, Text } from "react-native";

type CalculatorButtonProps = {
    value: string;
    onPress: (value: string) => void;
};

export function CalculatorButton({ value, onPress }: CalculatorButtonProps) {
    const isOperator = ["÷", "×", "−", "+", "="].includes(value);
    const isUtility = ["C", "⌫"].includes(value);
    const isEmpty = value === "";

    return (
        <Pressable
        style={[
            styles.button,
            isOperator && styles.operatorButton,
            isUtility && styles.utilityButton,
            isEmpty && styles.emptyButton,
        ]}
        onPress={() => onPress(value)}
        disabled={isEmpty}
        >
        <Text style={[styles.buttonText, isUtility && styles.utilityButtonText]}>
            {value}
        </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        height: 54,
        borderRadius: 12,
        backgroundColor: "#E5E7EB",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: "#6B7280",
    },
    operatorButton: {
        backgroundColor: "#FBBF24",
        borderColor: "#92400E",
    },
    utilityButton: {
        backgroundColor: "#111827",
        borderColor: "#374151",
    },
    emptyButton: {
        backgroundColor: "transparent",
        borderColor: "transparent",
    },
    buttonText: {
        color: "#111827",
        fontSize: 18,
        fontWeight: "800",
    },
    utilityButtonText: {
        color: "#F9FAFB",
    },
});