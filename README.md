# sci-calc-app

A retro handheld-inspired scientific calculator built with React Native, Expo, and TypeScript.

The app includes a custom calculator interface, scientific functions, calculation history, input validation, and a tested calculator engine separated from the UI.

## Features

* Basic arithmetic: addition, subtraction, multiplication, and division
* Scientific functions:

  * Square root
  * Square
  * Sine, cosine, and tangent
  * Base-10 logarithm
  * Natural logarithm
* Constants:

  * π
  * e
* Degree-based trigonometric calculations
* Input validation for repeated operators and decimals
* Error handling for invalid calculations such as division by zero
* Formatted decimal results
* Calculation history
* Component-based React Native UI
* Unit-tested calculator logic with Jest

## Tech Stack

* React Native
* Expo
* TypeScript
* Jest
* Git/GitHub

## Project Structure

```text
app/
  index.tsx

src/
  components/
    calculator/
      CalculatorButton.tsx
      CalculatorDisplay.tsx
      CalculatorHistory.tsx
      CalculatorKeypad.tsx

  features/
    calculator/
      calculatorEngine.ts
      calculatorEngine.test.ts
      calculatorTypes.ts
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npx expo start
```

Run the test suite:

```bash
npm test
```

## Testing

The calculator engine is separated from the UI and tested independently. The Jest test suite covers:

* Initial calculator state
* Number input
* Clearing and backspace behavior
* Arithmetic operations
* Scientific functions
* Constants
* Decimal formatting
* Invalid input handling
* Calculation history

## Current Status

This project is a functional MVP scientific calculator. The main calculator logic, UI, history feature, and tests are complete.

## Future Improvements

* Add DEG/RAD mode toggle
* Add exponent operations such as xʸ
* Add eˣ and 10ˣ functions
* Add nth-root support
* Add fraction mode
* Add UI animations
* Add screenshots to the README
* Build an Android APK using EAS Build
