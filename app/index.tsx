import { CalculatorDisplay } from "@/src/components/calculator/CalculatorDisplay";
import { CalculatorKeypad } from "@/src/components/calculator/CalculatorKeypad";
import {
  handleCalculatorInput,
  initialCalculatorState,
} from "@/src/features/calculator/calculatorEngine";
import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

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
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.calculator}>
          <CalculatorDisplay
            displayValue={calculatorState.displayValue}
            history={calculatorState.history}
          />

          <CalculatorKeypad
            buttons={calculatorButtons}
            onButtonPress={handleButtonPress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#7F1D1D",
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: "#B91C1C",
  },
  calculator: {
    flexGrow: 1,
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 40,
    justifyContent: "space-between",
    backgroundColor: "#B91C1C",
    borderWidth: 6,
    borderColor: "#450A0A",
  },
});