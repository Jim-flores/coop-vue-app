<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer theme="dark" rail permanent>
        <v-list-item
          nav
          prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            value="dashboard"
          ></v-list-item>

          <v-list-item prepend-icon="mdi-forum" value="messages"></v-list-item>
          <v-list-item
            prepend-icon="mdi-logout"
            value="logout"
            class="bg-red mt-12"
            @click="salir()"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-navigation-drawer permanent>
        <v-list v-model="tab">
          <v-list-item title="Customers" value="customers"></v-list-item>

          <v-list-item title="Payments" value="payments"></v-list-item>

          <v-list-item title="Settings" value="settings"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh" v-model="tab">
        <Customer value="customers" />
        <Payments value="payments" />
      </v-main>
    </v-layout>
  </v-card>
  <!-- <div>
    <button class="h-[10px] w-[30px] bg-red" @click="salir()">Salir</button>
  </div> -->
</template>
<script setup>
import Customer from "@/components/Customers.vue";
import Payments from "@/components/Customers.vue";
</script>
<script>
import router from "@/router";
import { mapState } from "vuex";
export default {
  data: () => ({}),
  methods: {
    salir() {
      localStorage.removeItem("token");
      router.push({ name: "Home" });
    },
  },
  computed: {
    ...mapState("auth", { name: (state) => state.name }),
  },
  actions: {},
};
</script>
<style></style>
