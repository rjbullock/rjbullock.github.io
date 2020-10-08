<template>
<div>
        <b-card tag="article" class="mb-3 mr-3" bg-variant="info" text-variant="white" :header="player.name">
          <b-card-text class="text-left" >
            <b-form-checkbox :id="player.id-1" :value="categories[0].value" size="lg" v-model="cardGroups">{{categories[0].label}}</b-form-checkbox>
            <b-form-checkbox :id="player.id-2" :value="categories[1].value" size="lg" v-model="cardGroups">{{categories[1].label}}</b-form-checkbox>
            <b-form-checkbox :id="player.id-3" :value="categories[2].value" size="lg" v-model="cardGroups">{{categories[2].label}}</b-form-checkbox>
            <b-form-checkbox :id="player.id-4" :value="categories[3].value" size="lg" v-model="cardGroups">{{categories[3].label}}</b-form-checkbox>
            <b-form-checkbox :id="player.id-5" :value="categories[4].value" size="lg" v-model="cardGroups">{{categories[4].label}}</b-form-checkbox>
            <b-form-checkbox :id="player.id-6" :value="categories[5].value" size="lg" v-model="cardGroups">{{categories[5].label}}</b-form-checkbox>
            <p class="border border-light p-2 m-2 text-center bg-secondary"><strong>{{ card }}</strong></p>
          </b-card-text>
          <footer class="text-center">
            <button @click="$emit('del-player', player.id)" class="del">x</button>
          </footer>
      </b-card>
      
</div>
</template>

<script>
import json from '@/assets/stacks.json';

var cards = json;

export default {
  name: "Player",
  props: ["player", "categories"],
  data: function() {
    return {
      cardGroups: []

      }
  },
  methods: {
  
  },
computed: {
    card() {
      var _index = this.cardGroups.reduce((acc, item) => acc + parseInt(item, 10), 0);
      if(_index == 0 || _index > 52) {
        return "N/A";
      }
      else{
        return cards.cards[this.cardGroups.reduce((acc, item) => acc + parseInt(item, 10), 0)];  
      }
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
    padding: 1rem;
    font-weight: bold;
    border-radius: 20%;
    cursor: pointer;
  }
</style>