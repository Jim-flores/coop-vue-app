<template>
  <v-card>
    <v-card-title>
      Registered Customers
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="customers"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          align: "start",
          key: "name",
          sortable: false,
          title: "Name",
        },
        { key: "age", title: "Age" },
        { key: "country", title: "Country" },
        { key: "condition", title: "Condition" },
      ],
      customers: [
        {
          name: "Erick",
          age: 36,
          country: "Brasil",
          condition: "Enable",
        },
        {
          name: "Ana",
          age: 23,
          country: "Peru",
          condition: "Disable",
        },
        {
          name: "Elard",
          age: 26,
          country: "Mexico",
          condition: "Unknown",
        },
        {
          name: "Cecil",
          age: 30,
          country: "Argentina",
          condition: "Enable",
        },
        {
          name: "Gared",
          age: 35,
          country: "El Salvador",
          condition: "Disable",
        },
        {
          name: "Jelly",
          age: 37,
          country: "Chile",
          condition: "Enable",
        },
        {
          name: "Lonne",
          age: 39,
          country: "Honduras",
          condition: "Enable",
        },
        {
          name: "Honnye",
          age: 40,
          country: "Peru",
          condition: "Disable",
        },
        {
          name: "Donna",
          age: 42,
          country: "Brasil",
          condition: "Enable",
        },
        {
          name: "Kittye",
          age: 28,
          country: "Venezuela",
          condition: "Disable",
        },
      ],
    };
  },
};
</script>
