const config = require("./config.json");
const { Card } = require("./Card");

class Bingo {
  /** @type {Card[]} Participantes (cartelas) */
  #participants;

  /** @type {number[]} Números restantes para serem sorteados */
  #remainingNumbers;

  /** @type {number[]} Números já sorteados */
  #drawnNumbers;

  /**
   * Jogo de Bingo
   *
   * @param {Card[]} participants Participantes
   */
  constructor(participants) {
    this.#participants = participants;
    this.reset();
  }

  /**
   * Restaura o jogo
   */
  reset() {
    this.#remainingNumbers = [];
    this.#drawnNumbers = [];

    for (const participant of this.#participants) {
      participant.reset();
    }

    for (
      let n = config.BINGO_LOWEST_NUMBER;
      n <= config.BINGO_HIGHEST_NUMBER;
      n++
    ) {
      this.#remainingNumbers.push(n);
    }
  }

  /**
   * Sorteia um número
   *
   * @returns {number} Lista de vencedores
   */
  pickNumber() {
    // shuffle (powered by chat-gpt)
    for (let i = this.#remainingNumbers.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      const j = Math.floor(Math.random() * (i + 1));

      // Swap elements at i and j
      [this.#remainingNumbers[i], this.#remainingNumbers[j]] = [
        this.#remainingNumbers[j],
        this.#remainingNumbers[i],
      ];
    }

    const randomIndex = Math.floor(
      Math.random() * this.#remainingNumbers.length
    );
    const [drawnNumber] = this.#remainingNumbers.splice(randomIndex, 1);
    this.#drawnNumbers.push(drawnNumber);

    return drawnNumber;
  }

  /**
   * Notifica os participantes sobre o número sorteado
   *
   * @param {number} drawnNumber Número sorteado
   * @returns {Card[]} Lista de vencedores
   */
  notifyParticipants(drawnNumber) {
    const winners = [];
    for (const participant of this.#participants) {
      participant.markNumber(drawnNumber);
      if (
        this.#drawnNumbers.length >= config.CARD_NUMBERS &&
        participant.isBingo()
      ) {
        winners.push(participant);
      }
    }

    return winners;
  }

  /**
   * Roda uma simulação e retorna os ganhadores
   * @returns {Promise<Card[]>} Promise de ganhadores
   */
  async simulate() {
    console.log("Simulando...");

    for (
      let i = config.BINGO_LOWEST_NUMBER;
      i <= config.BINGO_HIGHEST_NUMBER;
      i++
    ) {
      const drawnNumber = this.pickNumber();
      console.log("🍀 Número sorteado:", drawnNumber);

      const winners = this.notifyParticipants(drawnNumber);
      if (winners.length) {
        console.log("------------------------------------");
        console.log(
          "🕹 Jogo finalizado com",
          this.#drawnNumbers.length,
          "números sorteados."
        );
        console.log("🌐 Números sorteados:", this.#drawnNumbers.toString());
        console.log("------------------------------------");
        console.log(
          "🙌 Temos",
          winners.length,
          winners.length > 1 ? "vencedores!" : "vencedor!"
        );

        for (const winner of winners) {
          console.log(
            "♦ Cartela vencedora no.",
            winner.id,
            "com os números:",
            winner.numbers.toString()
          );
        }

        break;
      }
    }
  }
}

module.exports = { Bingo };
