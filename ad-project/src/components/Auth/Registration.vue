<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
          <v-card class="elevation-12">
            <v-toolbar dark>
              <v-toolbar-title>Registration form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field prepend-icon="person" name="Email" label="Email" type="email"
                              v-model="email"
                              :rules="emailRules"
                ></v-text-field>
                <v-text-field id="password" prepend-icon="lock" name="password" label="Password"
                              type="password"
                              v-model="password"
                              :counter="6"
                              :rules="nameRules"

                ></v-text-field>

                <v-text-field id="confirmPassword" prepend-icon="done" name="confirm-password" label="Confirm password"
                              type="password"
                              v-model="confirmPassword"
                              :counter="6"
                              :rules="confirmPasswordNameRules"

                ></v-text-field>

              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark
                     @click="onSabmit"
                     :loading="loading"
                     :disabled="!valid || loading"
              >Create account!
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        confirmPassword: '',
        password: '',
        valid: false,
        nameRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 6) || 'Password must be more than 6 characters'
        ],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        confirmPasswordNameRules: [
          v => !!v || 'Password is required',
          v => v === this.password || 'Password should match'

        ]
      }
    },
    computed: {
      loading(){
        return this.$store.getters.loading
      }
    },
    methods: {
      onSabmit () {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password
          }
          this.$store.dispatch('registerUser', user)
            .then(()=>{
              this.$router.push('/')
            })
            .catch(()=>{})
        }
      }
    }
  }
</script>

<style scoped>

</style>
