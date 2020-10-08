<template>
<div>
    <b-row>
    <b-card-group rows v-bind:key="player.id" v-for="player in players">
      <Player v-bind:player="player" v-bind:categories="categories" v-on:del-player="$emit('del-player', player.id)" />
    </b-card-group>
  </b-row>
  </div>
</template>


<script>
import Player from './Player.vue';
export default {
  name: "Players",
  components: {
    Player
  },
  data:
  function(){
    return {
      "categories": [
        {
          "label": "Group 1",
          "value": 1
        },
        {
          "label": "Group 2",
          "value": 2
        },
        {
          "label": "Group 3",
          "value": 4
        },
        {
          "label": "Group 4",
          "value": 8
        },
        {
          "label": "Group 5",
          "value": 16
        },
        {
          "label": "Group 6",
          "value": 32
        }
        ]
    }
  }
  ,
  props: ["players"]
}
</script>

<style scoped>
</style>