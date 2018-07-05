<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My ads</h1>
        <v-card
          v-for="item in myAds"
          :key="item.id"
          class="elevation-10 mb-3"
        >
          <v-layout row>
            <v-flex xs4>
              <v-card-media
                :src="item.src"
                height="155px"
              ></v-card-media>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2>{{item.title}}</h2>
                <p>{{item.description}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  :to="'/Add/' + item.id"
                  class="info"
                >Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  export default {
    computed: {
      myAds () {
        return this.$store.getters.myAds
      }
    }
  }
</script>

<style scoped>

</style>
