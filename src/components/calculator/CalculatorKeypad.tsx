import { StyleSheet, View } from "react-native";
import { CalculatorButton } from "./CalculatorButton";

type CalculatorKeypadProps = {
    buttons: string[][];
    onButtonPress: (value: string) => void;
};

export function CalculatorKeypad({
    buttons,
    onButtonPress,
}: CalculatorKeypadProps) {
    return (
        <View style={styles.keypad}>
        {buttons.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.buttonRow}>
            {row.map((buttonValue, buttonIndex) => (
                <CalculatorButton
                key={`${rowIndex}-${buttonIndex}`}
                value={buttonValue}
                onPress={onButtonPress}
                />
            ))}
            </View>
        ))}
        </View>
    );
}

const styles = StyleSheet.create({
    keypad: {
        gap: 8,
    },
    buttonRow: {
        flexDirection: "row",
        gap: 8,
    },
});