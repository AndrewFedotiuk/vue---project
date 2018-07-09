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
          <v-layout row v-if="!loading && myAds.length !== 0">
            <v-flex xs4>
              <v-card-media
                :src="item.imageSrc"
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
          <v-layout v-else-if="!loading && myAds.length === 0">
            <v-flex xs12 class="text-xs-center">
              <h1>You have not ads</h1>
            </v-flex>
          </v-layout>

          <v-layout v-else>
            <v-flex xs12 class="text-xs-center">
              <v-progress-circular
                :size="100"
                :width="8"
                color="purple"
                indeterminate
              ></v-progress-circular>
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
      },
      loading(){
        return this.$store.getters.loading
      }
    }
  }
</script>

<style scoped>

</style>
