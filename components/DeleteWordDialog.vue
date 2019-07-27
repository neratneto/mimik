<template>
<v-dialog width="320px" v-model="dialog">
  <template v-slot:activator="{ on }">
    <v-btn v-on="on" color="error">Remover esta palavra</v-btn>
  </template>
  <v-card>
    <v-card-title>Deseja mesmo remover a palavra {{ currentWord }} da lista de palavras?</v-card-title>
    <v-card-actions>
      <v-btn @click="dialog = false" color="error">Não</v-btn>
      <v-spacer />
      <v-btn @click="submit" color="primary">Sim</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  }),
  props: {
    currentWord: String
  },
  methods: {
    submit() {
      this.removeWord(this.currentWord)
      this.dialog = false
    },
    removeWord(word) {
      this.$fireStore.collection('mimik').doc('portuguese').update({
        words: this.$fireStoreObj.FieldValue.arrayRemove(word)
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
