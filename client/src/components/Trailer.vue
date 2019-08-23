<template>
  <Window title="Trailer" :items="[
    'general', 
    'chassis', 
    'hook', 
    'wheels', 
    'damage'
  ]">
    <template v-slot:general>
      <div class="general list">
        <div><b>Brand:</b><span>{{brand.name || brand.id}}</span></div>
        <div><b>Model:</b><span>{{model.name || model.id}}</span></div>
        <div><b>Accessory ID:</b><span>{{accessoryId}}</span></div>
        <div><b>Body type:</b><span>{{bodyType}}</span></div>
        <div><b>Chain type:</b><span>{{chainType}}</span></div>
        <div><b>License plate:</b><span>{{licensePlate.value}} ({{licensePlate.country.name}})</span></div>
        <div><b>Attached:</b><span>{{attached ? "YES" : "NO"}}</span></div>
      </div>
    </template>

    <template v-slot:chassis>
      <div class="chassis list">
        <div><b>Position X:</b><span>{{position.X}}</span></div>
        <div><b>Position Y:</b><span>{{position.Y}}</span></div>
        <div><b>Position Z:</b><span>{{position.Z}}</span></div>
        <div><b>Orientation heading:</b><span>{{orientation.heading}}</span></div>
        <div><b>Orientation pitch:</b><span>{{orientation.pitch}}</span></div>
        <div><b>Orientation roll:</b><span>{{orientation.roll}}</span></div>
        <div><b>Linear velocity X:</b><span>{{acceleration.linearVelocity.X}}</span></div>
        <div><b>Linear velocity Y:</b><span>{{acceleration.linearVelocity.Y}}</span></div>
        <div><b>Linear velocity Z:</b><span>{{acceleration.linearVelocity.Z}}</span></div>
        <div><b>Angular velocity X:</b><span>{{acceleration.angularVelocity.X}}</span></div>
        <div><b>Angular velocity Y:</b><span>{{acceleration.angularVelocity.Y}}</span></div>
        <div><b>Angular velocity Z:</b><span>{{acceleration.angularVelocity.Z}}</span></div>
        <div><b>Linear acceleration X:</b><span>{{acceleration.linearAcceleration.X}}</span></div>
        <div><b>Linear acceleration Y:</b><span>{{acceleration.linearAcceleration.Y}}</span></div>
        <div><b>Linear acceleration Z:</b><span>{{acceleration.linearAcceleration.Z}}</span></div>
        <div><b>Angular acceleration X:</b><span>{{acceleration.angularAcceleration.X}}</span></div>
        <div><b>Angular acceleration Y:</b><span>{{acceleration.angularAcceleration.Y}}</span></div>
        <div><b>Angular acceleration Z:</b><span>{{acceleration.angularAcceleration.Z}}</span></div>
      </div>
    </template>

    <template v-slot:hook>
      <div class="hook list">
        <div><b>Position X:</b><span>{{hook.position.X}}</span></div>
        <div><b>Position Y:</b><span>{{hook.position.Y}}</span></div>
        <div><b>Position Z:</b><span>{{hook.position.Z}}</span></div>
      </div>
    </template>

    <template v-slot:wheels>
      <div class="wheels">
        <Wheel v-for="wheel, i in wheels" v-bind="{...wheel, id: i+1}"/>
      </div>
    </template>

    <template v-slot:damage>
      <div class="damages list">
        <div class="damage" v-for="key in Object.keys(damage)">
          <b>{{key}}</b><div>{{(100 * damage[key]).toFixed()}}%</div>
        </div>
      </div>
    </template>
  </Window>
</template>

<script>
  import Window from '@/components/Window.vue'
  import Wheel  from '@/components/Wheel.vue'

  export default {
    name: 'Trailers',

    components: {Window, Wheel},

    props: [
      "brand",
      "model",
      "accessoryId",
      "bodyType",
      "chainType",
      "licensePlate",
      "attached",
      "wheels",
      "position",
      "orientation",
      "acceleration",
      "hook",
      "damage"
    ],
  }
</script>

<style scoped>
  .wheels {
    display: grid;
    justify-items: center;
    grid-gap: var(--spacing);
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));    
  }
</style>