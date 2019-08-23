<template>
  <Window title="Navigation" :items="['info']">
    <template v-slot:info>
      <div class="info">
        <div>
          <div><b>Next rest stop:</b><div>{{formatNextRestStop()}}</div></div>
          <div><b>Distance:</b><div>{{(distance / 1000).toFixed().toLocaleString()}}km / {{(distance * 0.0006213712).toFixed()}}Miles</div></div>
          <div><b>ETA</b><div>{{formatETA()}}</div></div>
          <div><b>Speed</b><div>{{speed.kph}}kph / {{speed.mph}}mph</div></div>
        </div>
        <div class="speedLimitKPH">{{speedLimit.kph}}</div>        
        <div class="speedLimitMPH">{{speedLimit.mph}}</div>
      </div>
    </template>
  </Window>
</template>

<script>
  import Window from '@/components/Window.vue'

  export default {
    name: 'Navigation',

    components: {Window},

    props: [
      "nextRestStop", 
      "distance", 
      "time", 
      "speedLimit",
      "gameTime",
      "speed"
    ],

    data: function() {
      return {

      }
    },

    methods: {
      formatTime: function(time) {
        const hours = Math.floor(time / 3600000)
        const min   = Math.floor(time % 3600000 / 60000)

        return `${hours}h ${min}min`
      
      },
      formatNextRestStop: function() {
        return this.formatTime(this.nextRestStop)
      },
      formatETA: function() {
        const eta = this.formatTime(this.time)
        const date = new Date(this.gameTime + this.time)

        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        
        return `${days[date.getUTCDay()]} ${date.getUTCHours()}:${date.getUTCMinutes()} / ${eta}`
      }
    }
  }
</script>

<style scoped lang="scss">
  .info {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 120px;
  }

  .info > div:nth-child(1) {
    grid-row: 1 / 3;
    display: grid;
  }


  .speedLimits {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 120px 120px;
    grid-gap: var(--spacing);
  }

  .speedLimits span:nth-child(1) {
    grid-column: 1 / 3;
  }

  .speedLimitKPH,
  .speedLimitMPH {
    background-color: var(--color-white);    
    color: black;
    width: 80px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 50px;
    font-weight: bold;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  .speedLimitKPH {
    border: 10px solid var(--color-red);
    border-radius: 50%;
  }

  .speedLimitMPH {
    border: 10px solid var(--color-black);
    border-radius: 20px;
  }
</style>