<template>
<v-card light>
  <v-card-title>
    Lista customizada
  </v-card-title>
  <v-card-text class="my-5 pa-5">
    <v-layout class="my-5 pa-5" justify-center align-center>
      <h1> {{ capitalize(currentWord) }}</h1>
    </v-layout>
  </v-card-text>
  <v-card-actions>
    <v-layout wrap>
      <v-flex xs12>
        <v-layout class="my-3" justify-center align-center>
          <v-btn @click="randomizeCurrentWord" color="primary">Próxima palavra</v-btn>
        </v-layout>
      </v-flex>
      <v-flex xs12 md6>
        <v-layout class="my-2" justify-center align-center>
          <delete-word-dialog :current-word="currentWord" />
        </v-layout>
      </v-flex>
      <v-flex xs12 md6>
        <v-layout class="my-2" justify-center align-center>
          <add-word-dialog />
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card-actions>
</v-card>
</template>

<script>
import firebase from 'firebase'
import AddWordDialog from '../components/AddWordDialog.vue'
import DeleteWordDialog from '../components/DeleteWordDialog.vue'
import _ from 'lodash'

export default {
  components: {
    AddWordDialog,
    DeleteWordDialog
  },
  data: () => ({
    wordsArray: [],
    currentWord: null,
    capitalize: _.capitalize
  }),
  methods: {
    getWords() {
      this.$fireStore.collection('mimik').doc('portuguese').onSnapshot(response => {
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
