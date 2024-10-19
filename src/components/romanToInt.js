function romanToInt(roman) {
  const romanMap = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50,
    'C': 100, 'D': 500, 'M': 1000
  };

  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentValue = romanMap[roman[i]];
    const nextValue = romanMap[roman[i + 1]];

    // Si el valor actual es menor que el siguiente, restamos; de lo contrario, sumamos
    if (nextValue && currentValue < nextValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
  }

  return total;
}

// Ejemplo de uso
console.log(romanToInt("III"));     // 3
console.log(romanToInt("IV"));      // 4
console.log(romanToInt("IX"));      // 9
console.log(romanToInt("LVIII"));   // 58
console.log(romanToInt("MCMXCIV")); // 1994
