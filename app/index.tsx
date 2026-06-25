import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const calculatorButtons = [
  ["C", "⌫", "%", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "−"],
  ["1", "2", "3", "+"],
  ["0", ".", "=", ""],
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.calculator}>
        <View style={styles.displayContainer}>
          <Text style={styles.appTitle}>Scientific Calculator</Text>
          <Text style={styles.displayText}>0</Text>
        </View>

        <View style={styles.keypad}>
          {calculatorButtons.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.buttonRow}>
              {row.map((buttonValue, buttonIndex) => (
                <View
                  key={`${rowIndex}-${buttonIndex}`}
                  style={[
                    styles.button,
                    buttonValue === "" && styles.emptyButton,
                    ["÷", "×", "−", "+", "="].includes(buttonValue) &&
                      styles.operatorButton,
                    ["C", "⌫", "%"].includes(buttonValue) &&
                      styles.utilityButton,
                  ]}
                >
                  <Text style={styles.buttonText}>{buttonValue}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#111827",
  },
  calculator: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-end",
  },
  displayContainer: {
    marginBottom: 24,
  },
  appTitle: {
    color: "#9CA3AF",
    fontSize: 18,
    marginBottom: 12,
  },
  displayText: {
    color: "#F9FAFB",
    fontSize: 56,
    fontWeight: "700",
    textAlign: "right",
  },
  keypad: {
    gap: 12,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    flex: 1,
    height: 72,
    borderRadius: 18,
    backgroundColor: "#374151",
    justifyContent: "center",
    alignItems: "center",
  },
  operatorButton: {
    backgroundColor: "#2563EB",
  },
  utilityButton: {
    backgroundColor: "#4B5563",
  },
  emptyButton: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "#F9FAFB",
    fontSize: 26,
    fontWeight: "600",
  },
});