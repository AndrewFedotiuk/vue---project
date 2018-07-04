<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-list
          subheader
          three-line
        >
          <v-list-tile
          avatar
          v-for="order in orders"
          :key="order.id"
          >
            <v-list-tile-action>
              <v-checkbox
                color="success"
                :input-value="order.done"
                @change="markDone(order)"
              ></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click.prevent="notifications = !notifications">
              <v-list-tile-title>{{order.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{order.phone}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn class="primary"
                :to="'/Add/' + order.idAd"
                >Open</v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  export default {
    data () {
      return {
        orders: [
          {
            id: '654',
            name: 'TestName',
            phone: '8-093-285-10-95',
            idAd: '654',
            done: false
          }
        ]
      }
    },
    methods: {
      markDone (order) {
        order.done = true
      }
    }
  }
</script>

<style scoped>

</style>
