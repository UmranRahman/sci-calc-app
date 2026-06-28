import { handleCalculatorInput, initialCalculatorState } from "@/src/features/calculator/calculatorEngine";
import { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const calculatorButtons = [
  ["sin", "cos", "tan", "log"],
  ["ln", "√", "x²", ""],
  ["π", "e", "C", "⌫"],
  ["7", "8", "9", "÷"],
  ["4", "5", "6", "×"],
  ["1", "2", "3", "−"],
  ["0", ".", "=", "+"],
];

export default function HomeScreen() {
  const [calculatorState, setCalculatorState] = useState(initialCalculatorState);

  function handleButtonPress(value: string) {
    setCalculatorState((currentState) =>
      handleCalculatorInput(currentState, value)
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.calculator}>
        <View style={styles.displayContainer}>
          <Text style={styles.appTitle}>Scientific Calculator</Text>

          <Text
            style={styles.displayText}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {calculatorState.displayValue}
          </Text>

          {calculatorState.history.length > 0 && (
            <View style={styles.historyContainer}>
              <Text style={styles.historyTitle}>History</Text>

              <ScrollView style={styles.historyList}>
                {calculatorState.history.map((item, index) => (
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
          )}
        </View>

        <View style={styles.keypad}>
          {calculatorButtons.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.buttonRow}>
              {row.map((buttonValue, buttonIndex) => (
                <Pressable
                  key={`${rowIndex}-${buttonIndex}`}
                  style={[
                    styles.button,
                    buttonValue === "" && styles.emptyButton,
                    ["÷", "×", "−", "+", "="].includes(buttonValue) &&
                      styles.operatorButton,
                    ["C", "⌫"].includes(buttonValue) &&
                      styles.utilityButton,
                  ]}
                  onPress={() => handleButtonPress(buttonValue)}
                  disabled={buttonValue === ""}
                >
                  <Text style={styles.buttonText}>{buttonValue}</Text>
                </Pressable>
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
    padding: 16,
    justifyContent: "flex-end",
  },
  displayContainer: {
    marginBottom: 16,
  },
  appTitle: {
    color: "#9CA3AF",
    fontSize: 16,
    marginBottom: 8,
  },
  displayText: {
    color: "#F9FAFB",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "right",
  },
  historyContainer: {
    marginTop: 12,
    maxHeight: 80,
  },
  historyTitle: {
    color: "#9CA3AF",
    fontSize: 13,
    marginBottom: 4,
  },
  historyList: {
    maxHeight: 64,
  },
  historyItem: {
    color: "#D1D5DB",
    fontSize: 13,
    textAlign: "right",
    marginBottom: 3,
  },
  keypad: {
    gap: 8,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    flex: 1,
    height: 56,
    borderRadius: 16,
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
    fontSize: 20,
    fontWeight: "600",
  },
});