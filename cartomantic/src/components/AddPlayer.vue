<template>
  <div>
    <b-row class="text-center">
      <b-col>
        <b-form inline @submit="addPlayer" class="mb-3">
          <b-form-group>
            <b-form-input size="small" v-model="name" name="name" placeholder="Player Name..."></b-form-input>
            <b-button variant="success" type="submit">Add Player</b-button>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "AddPlayer",
  data() {
    return {
      name: ''
    }
  },
  methods: {
    addPlayer(e) {
      e.preventDefault();
      const newPlayer = {
        id: uuidv4(),
        name: this.name
      }
      // Send up to parent
      this.$emit('add-player', newPlayer);
      this.name = '';
    }
  }
}
</script>

<style scoped>

</style>