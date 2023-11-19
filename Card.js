const config = require("./config.json");

class Card {
  #id;
  #numbers;
  #result = {};

  /**
   * Cartela de Bingo
   *
   * @param {number} id Id da cartela
   * @param {number[]} numbers Números da cartela
   */
  constructor(id, numbers) {
    if (numbers.length !== config.CARD_NUMBERS) {
      throw new Error("Quantidade de número por cartela inválido.");
    }

    this.#id = id;
    this.#numbers = numbers;
  }

  /**
   * Reseta a cartela para estado inicial
   */
  reset() {
    for (const number of this.#numbers) {
      this.#result[number] = false;
    }
  }

  /**
   * Marca o número sorteado se ele existe na cartela
   *
   * @param {number} drawnNumber Número sorteado
   */
  markNumber(drawnNumber) {
    if (this.#result[drawnNumber] === false) {
      console.log("✔ Cartela", this.#id, ": Marcou o número", drawnNumber);
      this.#result[drawnNumber] = true;
    }
  }

  /**
   * Verifica se todos os números da cartela foram sorteados
   *
   * @returns {boolean}
   */
  isBingo() {
    return Object.values(this.#result).every((r) => r);
  }

  get id() {
    return this.#id;
  }

  get numbers() {
    return this.#numbers;
  }

  get result() {
    return this.#result;
  }
}

module.exports = { Card };
