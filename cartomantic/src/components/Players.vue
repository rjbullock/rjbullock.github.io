<template>
  <b-row>
    <b-col v-bind:key="player.id" v-for="player in players" md="3">
      <Player v-bind:player="player" v-on:del-player="$emit('del-player', player.id)" />
    </b-col>
  </b-row>
</template>

<script>
import Player from './Player.vue';
export default {
  name: "Players",
  components: {
    Player
  },
  props: ["players"]
}
</script>

<style scoped>
</style>