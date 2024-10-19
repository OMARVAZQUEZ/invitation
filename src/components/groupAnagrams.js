function groupAnagrams(words) {
  const map = new Map();

  for (const word of words) {
    // Normalizamos la palabra: ignoramos mayúsculas y ordenamos las letras
    const sortedWord = word.toLowerCase().split('').sort().join('');

    // Agrupamos en el mapa las palabras que comparten la misma clave ordenada
    if (!map.has(sortedWord)) {
      map.set(sortedWord, []);
    }
    map.get(sortedWord).push(word);
  }

  // Convertimos el mapa en un array de arrays
  return Array.from(map.values());
}

// Ejemplo de uso
const words = ["listen", "silent", "enlist", "hello", "elloh", "world", "dolor"];
console.log(groupAnagrams(words));
