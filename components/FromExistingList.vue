<template>
<v-card light>
  <v-card-title>
    {{ capitalize(list) }}
  </v-card-title>
  <v-card-text class="my-5 pa-5">
    <v-layout class="my-5 pa-5" justify-center align-center>
      <h1> {{ capitalize(currentWord) }}</h1>
    </v-layout>
  </v-card-text>
  <v-card-actions>
    <v-layout class="my-3" justify-center align-center>
      <v-btn @click="randomizeCurrentWord" color="primary">Próxima palavra</v-btn>
    </v-layout>
  </v-card-actions>
</v-card>
</template>

<script>
import firebase from 'firebase'
import _ from 'lodash'

export default {
  data: () => ({
    wordsArray: [],
    currentWord: null,
    capitalize: _.capitalize
  }),
  props: {
    list: String
  },
  methods: {
    getWords() {
      this.$fireStore.collection('mimik').doc(this.list).onSnapshot(response => {
        this.wordsArray = response.data().words
        this.randomizeCurrentWord()
      })
    },
    randomizeCurrentWord() {
      let word = this.wordsArray[Math.floor(Math.random() * (this.wordsArray.length - 0))]
      while (this.currentWord === word) {
        word = this.wordsArray[Math.floor(Math.random() * (this.wordsArray.length - 0))]
      }
      this.currentWord = word
    }
  },
  mounted() {
    this.getWords()
  }
}
</script>
