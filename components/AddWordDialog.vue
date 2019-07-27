<template>
<v-dialog width="400px" v-model="dialog">
  <template v-slot:activator="{ on }">
    <v-btn v-on="on" color="success">Adicionar palavra</v-btn>
  </template>
  <v-card>
    <v-card-title>Qual palavra você deseja adicionar?</v-card-title>
    <v-card-text>
      <v-text-field class="mt-5" solo v-model="input" label="Palavra a ser adicionada" @keyup.enter="submit" />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="submit" color="primary">Adicionar</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
export default {
  data: () => ({
    input: null,
    dialog: false
  }),
  methods: {
    submit() {
      this.addWord(this.input)
      this.input = null
      this.dialog = false
    },
    addWord(word) {
      this.$fireStore.collection('mimik').doc('portuguese').update({
        words: this.$fireStoreObj.FieldValue.arrayUnion(word)
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
