<template>
  <b-col class="player">
      <b-card
      tag="article"
      style="max-width: 20rem;"
      class="mb-3">
      <b-card-text>
        <h4>{{player.name}}</h4>
        <b-form-checkbox :id="player.id-1" value=1 v-model="cardGroups">Adventurous</b-form-checkbox>
        <b-form-checkbox :id="player.id-2" value=2 v-model="cardGroups">Enterprising</b-form-checkbox>
        <b-form-checkbox :id="player.id-3" value=4 v-model="cardGroups">Practical</b-form-checkbox>
        <b-form-checkbox :id="player.id-4" value=8 v-model="cardGroups">Loyal</b-form-checkbox>
        <b-form-checkbox :id="player.id-5" value=16 v-model="cardGroups">Artistic</b-form-checkbox>
        <b-form-checkbox :id="player.id-6" value=32 v-model="cardGroups">Conventional</b-form-checkbox>
        <button @click="$emit('del-player', player.id)" class="del">x</button>
        <br>
        <span><strong>Card:</strong> {{ card }}</span>
    </b-card-text>
  </b-card>
  </b-col>
</template>

<script>
import json from '@/assets/stacks.json';

var cards = json;

export default {
  name: "Player",
  props: ["player"],
  data: function() {
    return {
      cardGroups: []
      }
  },
  methods: {
  
  },
computed: {
    card() {
      return cards.cards[this.cardGroups.reduce((acc, item) => acc + parseInt(item, 10), 0)];
    }
  }
}
</script>

<style scoped>
  .player {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }
  .is-complete {
    text-decoration: line-through;
  }
  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>