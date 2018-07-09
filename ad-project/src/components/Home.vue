<template>
  <div v-if="!loading">

  <v-container fluid>
    <v-layout row>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="item in promo"
            :src="item.imageSrc"
            :key="item.id"
          >
            <div class="car-item">
              <v-btn class="error" :to="'/Add/' + item.id">{{item.title}}</v-btn>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>

  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex
        xs12
        sm6
        md4
        v-for="item in ads"
        :key="item.id"
      >
        <v-card>
          <v-card-media src="/static/doc-images/cards/desert.jpg"
                        :src="item.imageSrc"
                        height="200px"
          >
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{item.title}}</h3>
              <div>{{item.description}}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat :to="'/Add/' + item.id">Open</v-btn>
            <v-btn reised class="primary">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>

  </div>
  <div v-else>
    <v-container>
      <v-layout row>
        <v-flex xs12 class="text-xs-center pt-5">
          <v-progress-circular
            :size="100"
            :width="8"
            color="purple"
            indeterminate
          ></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </div>

</template>

<script>
  export default {
    computed: {
      promo (){
        return this.$store.getters.promo
      },
      ads (){
        return this.$store.getters.ads
      },
      loading(){
        return this.$store.getters.loading
      }
    }
  }
</script>
<style scoped>
  .car-item{
    position: absolute;
    bottom: 60px;
    left: 50%;
    background: rgba(0,0,0, .5);
    transform: translate(150%,0);
    padding: 10px 20px;
    border-radius: 5px;
  }
</style>
