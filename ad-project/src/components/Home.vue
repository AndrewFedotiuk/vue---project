<template>
  <div>

  <v-container fluid>
    <v-layout row>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="item in items"
            :src="item.src"
            :key="item.id"
          >
            <div class="car-item">
              <v-btn class="error" to="'/item/' + item.id">{{item.title}}</v-btn>
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
        v-for="item in items"
        :key="item.id"
      >
        <v-card>
          <v-card-media src="/static/doc-images/cards/desert.jpg"
                        :src="item.src"
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
            <v-btn flat>Open</v-btn>
            <v-btn reised class="primary">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>

  </div>

</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            title: 'First title',
            description: 'hello i am description',
            promo: false,
            src: 'http://bipbap.ru/wp-content/uploads/2017/09/Cool-High-Resolution-Wallpaper-1920x1080.jpg',
            id: 100
          },
          {
            title: 'Second title',
            description: 'hello i am description',
            promo: false,
            src: 'https://static.tumblr.com/c9a8fff286f068e0f951ca01aea3b4a2/lquyijk/58snseviz/tumblr_static_tumblr_static_filename_640.jpg',
            id: 101
          },
          {
            title: 'Third title',
            description: 'hello i am description',
            promo: false,
            src: 'https://www.look.com.ua/large/201210/53782.jpg',
            id: 102
          },
          {
            title: 'Four title',
            description: 'hello i am description',
            promo: false,
            src: 'http://minionomaniya.ru/wp-content/uploads/2016/01/%D0%BC%D0%B8%D0%BD%D1%8C%D0%BE%D0%BD%D1%8B-%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8B-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8.jpg',
            id: 103
          }
        ]
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
