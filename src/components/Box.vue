<template>
  <div class="box">
    <header>
      <h3>{{title}}</h3>
    </header>

    <nav>
      <span v-for="section in sections" :class="selected == section ? 'selected' : ''" v-on:click="setSelected(section)">{{section}}</span>
    </nav>

    <section v-for="section in sections" :class="selected == section ? 'active' : ''">
      <slot :name="section"></slot>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Box",

    props: ["title", "sections"],

    data: function() {
      return {
        selected: this.sections[0]
      }
    },

    methods: {
      setSelected: function(section) {
        this.selected = section
      }
    }
  }
</script>

<style scoped lang="scss">
  .box {
    display: grid;
    background-color: var(--color-bg-2);
    grid-gap: .25em;
    padding: 1em;
    grid-template-rows: auto auto minmax(0, 1fr);
    min-height: 200px;
  }

  header,
  nav {
    text-transform: uppercase;    
  }

  nav {
    display: inline-flex;
    flex-wrap: wrap;
    font-size: .75em;
    margin: -.5em 0 0 -.5em;

    span {
      color: var(--color-txt-2);
      margin: .5em 0 0 .5em;
      cursor: pointer;
    
      &.selected,
      &:hover {
        color: var(--color-txt);
      }
    }
  }

  section {
    display: none;
    margin-top: 1em;
    min-height: 100%;
    max-height: calc(100% - 2em);
    overflow-y: auto;
  }

  section.active {
    display: grid;
  }
</style>