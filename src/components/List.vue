<template>
  <div class="list">
    <div v-for="item in items">
      <b>{{item.name}}:</b>
      <span>{{item.value}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "List",

    props: [
      "items"
    ]
  }
</script>

<style scoped lang="scss">
  .list,
  .list div {
    display: grid;
  }

  .list {
    grid-gap: .25em;
    align-content: start;
    overflow-y: auto;
    padding-right: 0.5em;
  }

  .list div {
    grid-template-columns: auto minmax(0, 1fr);
  }

  span {
    text-align: right;
  }
</style>