<template>
  <v-app>
    <v-app-bar app elevation="0" color="transparent" dark>
      <v-spacer></v-spacer>
      <v-btn @click="goToProjects" target="_blank" text>
        <span class="mr-2 black--text">My Demo Projects</span>
        <v-icon color="black">mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    goToProjects() {
      this.$router.push({ name: "Projects" });
    },
  },
};
</script>
