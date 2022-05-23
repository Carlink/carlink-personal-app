<template>
  <v-app>
    <v-app-bar app elevation="0" :color="topBarColor" dark>
      <v-spacer></v-spacer>
      <v-btn @click="goToHome" target="_blank" text>
        <span :class="`${buttonsColor}--text`">Home</span>
      </v-btn>
      <v-btn @click="goToProjects" target="_blank" text>
        <span :class="`${buttonsColor}--text`">My Demo Projects</span>
        <v-icon class="ml-2" :color="buttonsColor">mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main :class="backgroundColor">
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
  computed: {
    backgroundColor() {
      return this.$store.state.theme.backgroundColor;
    },
    buttonsColor() {
      return this.$store.state.theme.buttonsColor;
    },
    topBarColor() {
      return this.$store.state.theme.topBarColor;
    },
  },
};
</script>
