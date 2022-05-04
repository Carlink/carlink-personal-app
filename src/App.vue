<template>
  <v-app>
    <v-app-bar app elevation="0" color="transparent" dark>
      <v-spacer></v-spacer>
      <v-btn @click="goToHome" target="_blank" text>
        <span class="primary--text">Home</span>
      </v-btn>
      <v-btn @click="goToProjects" target="_blank" text>
        <span class="mr-2 primary--text">My Demo Projects</span>
        <v-icon color="primary">mdi-open-in-new</v-icon>
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
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
