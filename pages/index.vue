<template>
<v-carousel v-model="carouselTab" :show-arrows="false" hide-delimiters cycle>
  <v-layout fill-height justify-center align-center wrap>
    <v-carousel-item>
      <custom-words class="ma-3" />
    </v-carousel-item>
    <v-carousel-item v-for="(list, index) in ['animais', 'filmes', 'objetos']" :key="index">
      <from-existing-list class="ma-3" :list="list" />
    </v-carousel-item>
  </v-layout>
</v-carousel>
</template>

<script>
import CustomWords from '../components/CustomWords.vue'
import FromExistingList from '../components/FromExistingList.vue'

export default {
  components: {
    CustomWords,
    FromExistingList,
  },
  data: () => ({
    carouselTab: 0
  })
}
</script>
