<template>
  <div class="wheel">
    <b>Wheel #{{id}}</b>
    <div :style="`transform: rotate(${360 * rotation}deg);`"><div></div></div>
    <div :style="`transform: rotate(${180 * steering * -1}deg);`"></div>
    <div><b>Damage</b><div>{{Math.floor(100 * damage)}}%</div></div>
    <div><b>Susp Deflection</b><div>{{suspDeflection.toFixed(6)}}</div></div>
    <div><b>Velocity</b><div>{{velocity.toFixed(6)}}</div></div>
    <div><b>Lift</b><div>{{lift.toFixed(6)}}</div></div>
    <div><b>Lift Offset</b><div>{{liftOffset.toFixed(6)}}</div></div>
    <div><b>Substance</b><div>{{substance.name}}</div></div>
    <div><b>Steerable</b><div>{{steerable ? "YES" : "NO"}}</div></div>
    <div><b>Simulated</b><div>{{simulated ? "YES" : "NO"}}</div></div>
    <div><b>Powered</b><div>{{powered ? "YES" : "NO"}}</div></div>
    <div><b>Liftable</b><div>{{liftable ? "YES" : "NO"}}</div></div>
    <div><b>On Ground</b><div>{{onGround ? "YES" : "NO"}}</div></div>
  </div>
</template>

<script>
  export default {
    name: 'wheel',

    props: [
      "id",
      "rotation",
      "steering",
      "damage",
      "suspDeflection",
      "velocity",
      "lift",
      "liftOffset",
      "substance",
      "steerable",
      "simulated",
      "powered",
      "liftable",
      "onGround",
    ]
  }
</script>

<style scoped lang="scss">
  .wheel {
    display: grid;
    justify-items: center;
    grid-gap: 0.25em;
    text-align: center;
    font-size: .8rem;

    > div:nth-child(2) {
      background-color: var(--color-bg);
      position: relative;
      border: 2px solid var(--color-txt);
      width: 4em;
      height: 4em;
      border-radius: 50%;

      div {
        position: absolute;
        background-color: var(--color-red);
        height: 50%;
        width: 0.2em;
        top: 50%;
        left: calc(50% - 0.1em);
      }
    }

    > div:nth-child(3) {
      background-color: var(--color-bg);
      border: 2px solid var(--color-txt);
      width: 2em;
      height: 4em;
      border-radius: 0.5em;
    }
  }
</style>