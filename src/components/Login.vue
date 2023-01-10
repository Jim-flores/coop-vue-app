<template>
  <div class="backgruond"></div>
  <v-main class="d-flex justify-center align-center h-screen">
    <v-col cols="10" lg="4" class="mx-auto">
      <v-card class="pa-4" :elevation="15">
        <div class="text-center">
          <v-avatar size="100" color="info">
            <v-icon size="100" icon="mdi-account-circle"></v-icon>
          </v-avatar>
          <h2 class="indigo--text">
            Demo Aplication
            <v-tooltip :model-value="false" no-click-animation>
              <template v-slot:activator="{ props }">
                <v-icon
                  v-bind="props"
                  size="20"
                  icon="mdi-alert-circle"
                  color="red"
                ></v-icon>
                <!-- <v-btn v-bind="props" class="my-12"></v-btn> -->
              </template>
              <div>
                Email: test@gmail.com <br />
                Password: test123
              </div>
            </v-tooltip>
          </h2>
        </div>
        <v-form @submit.prevent="submitHandler" ref="form">
          <v-card-text>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              type="email"
              label="Email"
              prepend-inner-icon="mdi-account"
              required
              class="mr-10"
            />
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              :type="passwordShow ? 'text' : 'password'"
              label="Password"
              prepend-inner-icon="mdi-key"
              :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="passwordShow = !passwordShow"
              required
            />
            <v-switch label="Remember me" color="indigo"></v-switch>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn :loading="loading" type="submit" color="indigo">
              <span class="white--text px-8">Login</span>
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-main>
  <v-snackbar top color="green" v-model="snackbar"> Login success </v-snackbar>
  <v-snackbar top color="red" v-model="snackbarError">
    Access denied!
  </v-snackbar>
</template>
<script>
export default {
  data: () => ({
    authentication: false,
    loading: false,
    snackbar: false,
    snackbarError: false,
    passwordShow: false,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 6) || "Password must be 6  characters or more!",
    ],
  }),
  methods: {
    submitHandler() {
      if (this.email == "test@gmail.com" && this.password == "test123") {
        if (this.$refs.form.validate()) {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.snackbar = true;
            localStorage.setItem("token", 3874653891467);
            this.$router.push("/dashboard");
          }, 3000);
        }
      } else {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.snackbarError = true;
        }, 3000);
      }
    },
  },
};
</script>
<style>
.backgruond {
  background-image: url(../assets/logo.png) !important;
  height: 300px;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  background-size: cover;
}
</style>
