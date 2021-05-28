<template>
  <div id="dashboard" v-if="game?.sdkActive">
    <Game       id="game"       v-bind="{...game}" />
    <Job        id="job"        v-bind="{...job, game: game.game}"/>
    <Events     id="events"     v-bind="{telemetry}" />      
    <Controls   id="controls"   v-bind="{...controls, transmission: truck.transmission}" />
    <Truck      id="truck"      v-bind="{...truck}" />
    <Trailer    id="trailer"    v-bind="{...trailer}" />
    <Navigation id="navigation" v-bind="{...navigation, gameTime: game.time.unix, speed: truck.speed, scale: game.scale}"/>
  </div>
  
  <div id="waiting" v-else>
    <h1>Waiting for game to connect...</h1>
    <div>
      <b>If the game does not connect, these might be some of the possible issues</b>
      <ul>
        <li>- The game is not running</li>
        <li>- The scs-sdk-plugin is not installed</li>
        <li>- The scs-sdk-plugin is outdated</li>
      </ul>
    </div>
  </div>
</template>

<script>
import truckSimTelemetry from "trucksim-telemetry"

import Game       from '@/components/Game.vue'
import Job        from '@/components/Job.vue'
import Events     from '@/components/Events.vue'
import Controls   from '@/components/Controls.vue'
import Truck      from '@/components/Truck.vue'
import Trailer    from '@/components/Trailer.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',

  components: {
    Game,
    Job,
    Events,
    Controls,
    Truck,
    Trailer,
    Navigation
  },

  data: function() {
    return {
      game:       {},
      controls:   {},
      navigation: {},
      job:        {},
      truck:      {},
      trailer:    {},
      log:        [],
    }
  },

  computed: {
    telemetry: function() {
      return truckSimTelemetry()
    }
  },

  methods: {
    update: function(data) {
      for (const key of Object.keys(data)) {
        this[key] = data[key]
      }
    }
  },

  mounted: function() {
    this.telemetry.watch({interval: 10}, this.update)
  },

  unmounted: function() {
    this.telemetry.stop()
  }
}
</script>

<style lang="scss">
  :root {
    --color-bg:     #1E1D1F;
    --color-bg-2:   #2B2B2C;
    --color-bg-3:   #4A494A;

    --color-txt:    #DFDFDE;
    --color-txt-2:  #99989B;
  
    --color-white:  #FFFFFF;
    --color-red:    #E94D4B;
    --color-green:  #4BA164;
    --color-blue:   #3566AE;
    --color-purple: #43328A;
    --color-yellow: #E0E000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-txt);
    font-family: Roboto;
    font-size: 16px;
  }

  li {
    list-style: none;
  }

  #dashboard {
    display: grid;
    grid-template-columns: repeat(1, 100%);
    padding: 1em;
    grid-gap: 1em;
    border-top: .15em solid var(--color-green);
    justify-content: start;
  }

  #waiting {
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    align-content: center;
    grid-gap: 1em;
    border-top: .15em solid var(--color-red);
  }

  @media only screen and (min-width: 800px)  {
    #dashboard {
      grid-template-columns: repeat(2, minmax(0, 100%));
    }
  }

  @media only screen and (min-width: 1440px)  {
    #dashboard {
      grid-template-columns: repeat(3, minmax(0, 100%));
    }
  }
</style>
