<template>
  <Box title="Controls" :sections="['input', 'game', 'shifter']">
    <template v-slot:input>
      <div class="input">
        <div class="wheel" :style="`transform: rotate(${450 * input.steering * -1}deg);`">
          <span></span>
          <span></span>
        </div>
        <div class="bar throttle"><div :style="`height: ${100 * input.throttle}%;`"></div></div>
        <div class="bar brake"   ><div :style="`height: ${100 * input.brake}%;`"   ></div></div>
        <div class="bar clutch"  ><div :style="`height: ${100 * input.clutch}%;`"  ></div></div>
      </div>
    </template>

    <template v-slot:game>
      <div class="game">
        <div class="wheel" :style="`transform: rotate(${450 * game.steering * -1}deg);`">
          <span></span>
          <span></span>
        </div>
        <div class="bar throttle"><div :style="`height: ${100 * game.throttle}%;`"></div></div>
        <div class="bar brake"   ><div :style="`height: ${100 * game.brake}%;`"   ></div></div>
        <div class="bar clutch"  ><div :style="`height: ${100 * game.clutch}%;`"  ></div></div>
      </div>
    </template>

    <template v-slot:shifter>
      <List :items="shifterList"></List>
    </template>
  </Box>
</template>

<script>
  import Box  from "@/components/Box.vue"
  import List from "@/components/List.vue"

  export default {
    name: "Controls",

    components: {
      Box,
      List
    },

    props: [
      "input",
      "game",
      "transmission"
    ],

    computed: {
      shifterList: function() {
        return [
          {name: "Slot num",             value: this.transmission.slot},
          {name: "Slot handle position", value: this.transmission.slots[this.transmission.slot].handlePosition},
          {name: "Slot selector",        value: this.transmission.slots[this.transmission.slot].selector},
          {name: "Slot gear",            value: this.transmission.slots[this.transmission.slot].gear},
          {name: "Type",                 value: this.transmission.shifterType},
          {name: "Selector",             value: `${this.transmission.selector[0]} ${this.transmission.selector[1]}`},
          {name: "Selectors",            value: this.transmission.selectors}
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .input,
  .game {
    display: grid;
    grid-template-columns: 112px 36px 36px 36px;
    grid-gap: 1em;
    justify-content: center;
    margin: auto;
  }

  .wheel {
    position: relative;
    width: 5em;
    height: 5em;
    border-radius: 50%;
    border: 0.3em solid var(--color-red);
    
    span {
      position: absolute;
      background-color: var(--color-txt);
      z-index: 10;
    }
    
    span:nth-child(1) {
      height: 0.4em;
      width: calc(100% + 0.4em);
      left: -0.2em;
      top: calc(50% - 0.2em);
    }
    span:nth-child(2) {
      height: calc(50% + 0.2em);
      width: 0.4em;
      top: 50%;
      left: calc(50% - 0.2em);  
    }
  }

  .bar{
    position: relative;
    border: 0.1em solid var(--color-txt);
    width: 2em;
    height: calc(100% - 0.4em);
    
    div {
      background-color: var(--color-txt);
      position: absolute;
      height: attr(data-height);
      width: 100%;
      bottom: 0px;
    }
  }
  
  .throttle div { background-color: var(--color-green); }
  .brake div { background-color: var(--color-red); }
  .clutch div { background-color: var(--color-yellow); }
</style>