
// Функция, возвращающая случайное целое число
const getRandom = (min, max) => {
  if (min > max || min < 0 || max < 0) {
    return null;
  }

  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin + 1)) + ceilMin;
};

getRandom(0, -1);


// Функция для проверки максимальной длины строки
const getMaxString = (str, maxLength) => str.length <= maxLength;

getMaxString('false', 20);
