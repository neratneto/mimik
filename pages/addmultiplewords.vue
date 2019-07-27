<template>
<v-container fill-height fluid class="pa-0" justify-center align-center>
  <v-card>
    <v-card-title>Quantidade de palavras na lista {{ list }}: {{ listLength }}</v-card-title>
    <v-card-text>
      <v-text-field v-model="list" label="Nome da lista" filled @keyup.enter="getWords" />
    </v-card-text>
    <v-card-actions>
      <add-multiple-words :list="list" />
    </v-card-actions>
  </v-card>
</v-container>
</template>

<script>
import AddMultipleWords from '../components/AddMultipleWords.vue'

export default {
  components: {
    AddMultipleWords
  },
  data: () => ({
    list: 'filmes',
    listLength: null
  }),
  methods: {
    getWords() {
      this.$fireStore.collection('mimik').doc(this.list).onSnapshot(response => {
        this.listLength = response.exists ? response.data().words.length : '-'
      })
    }
  },
  mounted() {
    this.getWords()
  }
}
</script>

<style lang="css" scoped>
</style>
