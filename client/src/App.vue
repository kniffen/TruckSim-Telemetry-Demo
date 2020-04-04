<template>
  <div id="app" :class="`${game && game.game.id == 2 ? 'ats' : 'ets2'}`">
    <div id="waiting" v-if="!game || !game.sdkActive">
      <h1>Waiting on connection...</h1>
    </div>
    <main v-else>
      <h1>TruckSim-Telemetry Demo</h1>
      <Game       id="game"       v-bind="{...game}" />
      <Job        id="job"        v-bind="{...job, game: game.game}"/>
      <Events     id="events"     v-bind="{log}" />      
      <Controls   id="controls"   v-bind="{...controls, transmission: truck.transmission}" />
      <Truck      id="truck"      v-bind="{...truck}" />
      <Trailer    id="trailers"   v-bind="{...trailer}" />
      <Navigation id="navigation" v-bind="{...navigation, gameTime: game.time.unix, speed: truck.speed}"/>
    </main>
  </div>
</template>

<script>
  import Window     from '@/components/Window.vue'
  import Game       from '@/components/Game.vue'
  import Controls   from '@/components/Controls.vue'
  import Navigation from '@/components/Navigation.vue'
  import Job        from '@/components/Job.vue'
  import Truck      from '@/components/Truck.vue'
  import Trailer    from '@/components/Trailer.vue'
  import Events     from '@/components/Events.vue'

  export default {
    name: 'app',

    components: {
      Window,
      Game,
      Controls,
      Navigation,
      Job,
      Truck,
      Trailer,
      Events
    },

    data: function() {
      return {
        game:       null,
        controls:   null,
        navigation: null,
        job:        null,
        truck:      null,
        trailers:   [],
        log:        [],
      }
    },
    methods: {
      setSelected: function(selected) {
        this.selected = selected
      }
    },
    sockets: {
      connect: function() {
        //console.log("connected")
      },
      update: function(data) {
        for (const key of Object.keys(data)) {
          this[key] = data[key]
        }
      },
      log: function(log) {
        log.reverse()
        this.log = log
      }
    }
  }
</script>

<style lang="scss">
  :root {
    --spacing:         10px;
    --color-bg:        #000000;
    --color-window:    rgba(0, 0, 0, 0.5);
    --color-border:    rgba(114, 224, 209, 0.2);
    --color-text:      #FFFFFF;
    --color-highlight: rgba(114, 224, 209);
    --color-white:     #EAEAEA;
    --color-black:     #000000;
    --color-red:       #E00000;
    --color-green:     #00e070;
    --color-yellow:    #e0e000;
    --color-blue:      #0070e0;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html{
    height: 100%;
  }

  body,
  #app,
  main {
    height: calc(100% - var(--spacing) * 2);
  }

  body {
    background-color: var(--color-black);
    color: var(--color-text);
    word-wrap: break-word;
  }

  #app {
    background: url(assets/ets2.jpg) no-repeat center center fixed;
    background-size: cover;
    font-family: 'Inconsolata', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #app.ats {
    background: url(assets/ats.jpg) no-repeat center center fixed;
  }

  #waiting {
    background-color: var(--color-red);
    display: grid;
    justify-items: center;
    align-items: center;
  }

  main {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: 20px repeat(3, minmax(0, 1fr));
    margin: calc(var(--spacing) * 2);
    grid-gap: calc(var(--spacing) * 2);
  }

  main > h1 {
    grid-column: 1 / 4
  }

  #truck,
  #trailers {
    grid-row: span 2; 
  }

  #wheels {
    display: grid;
    grid-template-columns: repeat(auto-fill, 50px);
    grid-gap: 20px;
  }

  .list,
  .list > div {
    display: grid;
  }

  .list {
    grid-gap: var(--spacing);
  }

  .list > div {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
</style>
