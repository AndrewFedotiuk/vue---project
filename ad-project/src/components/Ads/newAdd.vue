<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new add</h1>

        <v-form ref="form" v-model="valid" validation class="mb-2">
          <v-text-field name="title"
                        label="Add title"
                        type="text"
                        v-model="title"
                        required
                        :rules="[v=> !!v || 'Title is required']"
          ></v-text-field>
          <v-text-field
                        multi-line
                        name="description"
                        label="Add description"
                        type="text"
                        v-model="description"
                        :rules="[v=> !!v || 'Description is required']"

          ></v-text-field>

          <v-btn class="warning">
            Upload
            <v-icon right dark>cloud_upload</v-icon>
          </v-btn>
        </v-form>
        <v-layout row>
          <v-flex xs12 sm6>
            <img src="" height="150">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm6>
            <v-switch
              color="primary"
              label="Add to promo"
              v-model="promo"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm6>
            <v-spacer></v-spacer>
            <v-btn
              :loading="loading"
              :disabled="!valid || loading"
              class="success"
              @click="createAd"
            >Create Add</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false
      }
    },
    computed:{
      loading(){
        return this.$store.getters.loading
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {

          const ad = {
            title: this.title,
            promo: this.promo,
            description: this.description,
            src: 'https://sabe.io/tutorials/getting-started-with-vue-js/hero.png'
          }

          this.$store.dispatch('createAd', ad)
            .then(()=>{
              this.$router.push('/list')
            })
            .catch(()=>{})

        }
      }
    }
  }
</script>

<style scoped>

</style>
