import { HistoryItem } from "@/src/features/calculator/calculatorTypes";
import { StyleSheet, Text, View } from "react-native";
import { CalculatorHistory } from "./CalculatorHistory";

type CalculatorDisplayProps = {
    displayValue: string;
    history: HistoryItem[];
};

export function CalculatorDisplay({
    displayValue,
    history,
}: CalculatorDisplayProps) {
    return (
        <>  
        <View style={styles.topBar}>
            <View style={styles.lens} />

            <View>
            <Text style={styles.appTitle}>DexCalc</Text>
            <Text style={styles.appSubtitle}>Scientific Mode</Text>
            </View>
        </View>

        <View style={styles.displayContainer}>
            <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
            {displayValue}
            </Text>

            <CalculatorHistory history={history} />
        </View>
        </>
    );    
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: 12,
    },
    lens: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: "#38BDF8",
        borderWidth: 4,
        borderColor: "#E0F2FE",
    },
    appTitle: {
        color: "#FDE68A",
        fontSize: 22,
        fontWeight: "800",
        letterSpacing: 1,
    },
    appSubtitle: {
        color: "#FECACA",
        fontSize: 12,
        fontWeight: "600",
        textTransform: "uppercase",
    },
    displayContainer: {
        backgroundColor: "#111827",
        borderRadius: 18,
        borderWidth: 4,
        borderColor: "#1F2937",
        padding: 14,
        marginBottom: 14,
    },
    displayText: {
        color: "#A7F3D0",
        fontSize: 42,
        fontWeight: "800",
        textAlign: "right",
        fontFamily: "monospace",
    },
});