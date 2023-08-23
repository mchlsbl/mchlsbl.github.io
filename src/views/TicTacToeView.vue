<script lang="ts">
import circle from "@/assets/circle.svg";
import cross from "@/assets/cross.svg";
import empty from "@/assets/empty.svg";

export default {
  data() {
    return {
      gameState: Array(9).fill("empty"),
      currentPlayer: "cross",
      winConditions: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
  },
  computed: {
    gameWon() {
      for (const value of this.winConditions) {
        if (
          this.gameState[value[0]] &&
          this.gameState[value[0]] !== "empty" &&
          this.gameState[value[0]] === this.gameState[value[1]] &&
          this.gameState[value[0]] === this.gameState[value[2]]
        ) {
          return this.gameState[value[0]];
        }
      }
      return "";
    },
    isDraw() {
      return this.gameState.every((cell) => cell !== "empty");
    },
  },
  methods: {
    initGame() {
      this.gameState = Array(9).fill("empty");
      this.currentPlayer = "cross";
    },
    setGameState(id: number) {
      if (this.gameState[id] === "empty" && !this.gameWon) {
        this.gameState[id] = this.currentPlayer;
        this.currentPlayer =
          this.currentPlayer === "circle" ? "cross" : "circle";
      }
    },
    getImage(value: string) {
      switch (value) {
        case "circle": {
          return circle;
        }
        case "cross": {
          return cross;
        }
        case "empty": {
          return empty;
        }
      }
    },
  },
};
</script>

<template>
  <div class="center-game">
    <div>
      <div class="grid">
        <img
          v-for="(value, index) in gameState"
          @click="setGameState(index)"
          :src="getImage(value)"
          class="rounded highlight"
        />
      </div>
      <div class="mt-5 justify text-center">
        <div v-if="gameWon !== ''" class="result">
          {{ gameWon === "circle" ? "O" : "X" }} hat gewonnen!
        </div>
        <div v-else-if="isDraw" class="result">Gleichstand!</div>
        <button
          v-if="gameWon !== '' || isDraw"
          @click="initGame"
          class="mt-4 btn btn-light"
        >
          Nochmal spielen
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.center-game {
  display: flex;
  justify-content: center;
}

.grid {
  gap: 8px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
