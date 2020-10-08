<template>
  <div id="app">
    <b-container>
      <b-row>
        <AddPlayer v-on:add-player="addPlayer" />
      </b-row>
      <b-row>
      <Players v-bind:players="players" v-on:del-player="deletePlayer" />
      </b-row>
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
      players: []
    }
  },
  methods: {
    deletePlayer(id) {
      this.players = this.players.filter(player => player.id !== id);
    },
    addPlayer(newPlayer) {
      this.players = [...this.players, newPlayer];
    },
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
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
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
