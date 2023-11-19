const { Bingo } = require("./Bingo");
const { Card } = require("./Card");

const bingo = new Bingo([
  new Card(49, [2, 4, 11, 17, 25, 33, 39, 42, 46, 57, 62, 78, 76, 82, 90]),
  new Card(50, [9, 14, 20, 32, 38, 44, 48, 53, 60, 65, 69, 71, 74, 86, 89]),
  new Card(51, [3, 8, 15, 21, 27, 30, 36, 43, 59, 52, 64, 70, 79, 84, 88]),
  new Card(52, [7, 10, 16, 26, 22, 31, 37, 49, 47, 51, 55, 63, 66, 72, 83]),
  new Card(53, [5, 6, 12, 18, 24, 29, 35, 45, 41, 50, 58, 68, 73, 81, 87]),
  new Card(54, [1, 13, 19, 23, 28, 34, 40, 56, 54, 61, 67, 75, 77, 80, 85]),
  new Card(55, [1, 3, 15, 19, 21, 25, 37, 33, 41, 55, 57, 67, 69, 73, 89]),
  new Card(56, [7, 11, 12, 22, 26, 34, 48, 40, 53, 58, 63, 70, 74, 86, 82]),
  new Card(57, [8, 17, 20, 39, 32, 43, 47, 54, 66, 60, 72, 75, 88, 80, 85]),
  new Card(58, [6, 13, 14, 23, 29, 35, 42, 45, 50, 56, 61, 71, 76, 84, 87]),
  new Card(59, [4, 9, 10, 27, 28, 31, 36, 44, 46, 59, 52, 62, 65, 79, 83]),
  new Card(60, [2, 5, 16, 18, 24, 38, 30, 49, 51, 68, 64, 77, 78, 81, 90]),
  new Card(61, [6, 19, 23, 25, 34, 38, 44, 41, 50, 59, 69, 65, 77, 86, 87]),
  new Card(62, [5, 12, 17, 27, 30, 35, 43, 48, 55, 68, 76, 72, 73, 81, 84]),
  new Card(63, [1, 9, 11, 15, 22, 29, 33, 40, 52, 57, 64, 67, 78, 83, 90]),
  new Card(64, [3, 7, 10, 16, 21, 28, 32, 37, 49, 51, 53, 62, 70, 75, 82]),
  new Card(65, [4, 8, 18, 13, 24, 31, 39, 45, 46, 56, 66, 60, 74, 80, 88]),
  new Card(66, [2, 14, 20, 26, 36, 42, 47, 54, 58, 61, 63, 71, 79, 85, 89]),
  new Card(67, [6, 15, 18, 27, 32, 39, 44, 50, 55, 59, 68, 65, 72, 82, 86]),
  new Card(68, [3, 14, 17, 26, 33, 37, 31, 45, 48, 56, 60, 69, 74, 87, 90]),
  new Card(69, [1, 8, 13, 19, 28, 22, 35, 40, 41, 58, 54, 63, 67, 75, 81]),
  new Card(70, [4, 9, 12, 25, 21, 38, 30, 47, 49, 57, 61, 64, 73, 84, 89]),
  new Card(71, [5, 11, 16, 20, 23, 34, 46, 42, 53, 62, 70, 76, 77, 85, 88]),
  new Card(72, [2, 7, 10, 29, 24, 36, 43, 51, 52, 66, 78, 79, 71, 80, 83]),
]);

bingo.simulate();