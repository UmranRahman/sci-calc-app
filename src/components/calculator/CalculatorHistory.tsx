import { HistoryItem } from "@/src/features/calculator/calculatorTypes";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type CalculatorHistoryProps = {
    history: HistoryItem[];
};

export function CalculatorHistory({ history }: CalculatorHistoryProps) {
    if (history.length === 0) {
        return null;
    }

    return (
        <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>History</Text>

        <ScrollView style={styles.historyList}>
            {history.map((item, index) => (
            <Text
                key={`${item.expression}-${item.result}-${index}`}
                style={styles.historyItem}
                numberOfLines={1}
            >
                {item.expression} = {item.result}
            </Text>
            ))}
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    historyContainer: {
        marginTop: 10,
        maxHeight: 78,
        borderTopWidth: 1,
        borderTopColor: "#374151",
        paddingTop: 8,
    },
    historyTitle: {
        color: "#9CA3AF",
        fontSize: 12,
        marginBottom: 4,
        textTransform: "uppercase",
    },
    historyList: {
        maxHeight: 58,
    },
    historyItem: {
        color: "#D1FAE5",
        fontSize: 12,
        textAlign: "right",
        marginBottom: 3,
        fontFamily: "monospace",
    },
});