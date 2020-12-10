<template>
  <div class="container-dice">
    <div id="cube" @click="rollDice" :style="style">
      <FrontDice />
      <BackDice />
      <RightDice />
      <LeftDice />
      <TopDice />
      <BottomDice />
    </div>
  </div>
</template>

<script>
import TopDice from '../components/dice_components/TopDice.vue'
import RightDice from '../components/dice_components/RightDice.vue'
import LeftDice from '../components/dice_components/LeftDice.vue'
import FrontDice from '../components/dice_components/FrontDice.vue'
import BottomDice from '../components/dice_components/BottomDice.vue'
import BackDice from '../components/dice_components/BackDice.vue'

export default {
  name: 'Dice',
  data () {
    return {
      style: {}
    }
  },
  components: {
    TopDice,
    RightDice,
    LeftDice,
    FrontDice,
    BottomDice,
    BackDice
  },
  methods: {
    rollDice () {
      const y = this.randomize(10, 20)
      const x = this.randomize(10, 20)
      console.log(this.getDiceNumber(x, y))
      this.style = {
        transform: `rotateX(${x}deg) rotateY(${y}deg)`
      }
    },
    randomize (min, max) {
      return (Math.ceil(Math.random() * (max - min)) + max) * 90
    },
    mod (n, m) {
      return ((n % m) + m) % m
    },
    getDiceNumber (x, y) {
      const countX = this.mod(x / 90, 4)
      if (countX === 1) {
        // Bottom face
        return 6
      }
      if (countX === 3) {
        // Top face
        return 5
      }
      const countY = this.mod(y / 90 + countX, 4)
      return [1, 4, 2, 3][countY]
    }
  },
  watch: {
    style (value) {
      // console.log(value)
      this.style = value
    }
  }
}
</script>

<style>
  #cube .front {
    transform: translateZ(100px);
  }

  #cube .back {
    transform:
    rotateX(-180deg)
    translateZ(100px);
  }

  #cube .right {
    transform:
      rotateY(90deg)
      translateZ(100px);
  }

  #cube .left {
    transform:
      rotateY(-90deg)
      translateZ(100px);
  }

  #cube .top {
    transform:
      rotateX(90deg)
      translateZ(100px);
  }

  #cube .bottom {
    transform:
      rotateX(-90deg)
      translateZ(100px);
  }

  .container-dice {
    width: 200px;
    height: 200px;
    position: relative;
    margin: 0 auto 40px;
    border: 1px solid #FFF;
    perspective: 1000px;
    perspective-origin: 50% 100%;
  }

  #cube {
    width: 100%;
    height: 100%;
    top: 100px;
    position: absolute;
    transform-style: preserve-3d;
    transition: transform 6s;
  }

  #cube:hover {
    cursor: pointer;
  }

  #cube div {
    background: hsla(0, 85%, 50%, 0.8);
    display: block;
    position: absolute;
    width: 200px;
    height: 200px;
    border: 2px solid #ab1a1a;
    margin: 0 auto;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 500%;
    text-align: center;
    padding: 50px 0;
  }

  .dot {
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 15px;
  }
</style>
