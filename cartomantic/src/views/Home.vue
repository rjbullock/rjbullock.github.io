<template>
  <div id="app">
    <b-container>
      <b-row>
        <AddPlayer v-on:add-player="addPlayer" />
        <b-col class="text-right"><a :href="pdfLink" class="btn btn-primary" download="download">Download Card Charts PDF</a></b-col>
      </b-row>
      <Players v-bind:players="players" v-on:del-player="deletePlayer" />
    </b-container>
  </div>
</template>

<script>
import Players from '../components/Players';
import AddPlayer from '../components/AddPlayer';

export default {
  name: 'Home',
  components: {
    Players,
    AddPlayer
  },
  data() {
    return {
      players: [],
      pdfLink: require("@/assets/charts.pdf")
    }
  },
  methods: {
    deletePlayer(id) {
      this.players = this.players.filter(player => player.id !== id);
    },
    addPlayer(newPlayer) {
      this.players = [...this.players, newPlayer];
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    
  }
  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }
</style>
