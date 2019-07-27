<template>
<v-dialog width="800px" v-model="dialog">
  <template v-slot:activator="{ on }">
    <v-btn v-on="on" color="success">Adicionar múltiplas palavras</v-btn>
  </template>
  <v-card>
    <v-card-title>Quais palavras você deseja adicionar à lista {{ list }}?</v-card-title>
    <v-card-text>
      <v-textarea class="mt-5" rows="32" solo v-model="input" label="Palavras a serem adicionadas" placeholder="Separe as palavras por parágrafos" />
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
  props: {
    list: String
  },
  methods: {
    submit() {
      for (let word of this.input.split('\n')) {
        this.addWord(word)
      }
      this.input = null
      this.dialog = false
    },
    addWord(word) {
      this.$fireStore.collection('mimik').doc(this.list).update({
        words: this.$fireStoreObj.FieldValue.arrayUnion(word)
      }).catch(error => {
        if (error.code === 'not-found') {
          this.$fireStore.collection('mimik').doc(this.list).set({
            words: [word]
          })
          this.submit()
        } else {
          console.error(error)
        }
      })
    }
  }
}
</script>
