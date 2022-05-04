<template>
  <div>
    <v-btn text color="primary" @click="$router.push({ name: 'Home' })"
      ><v-icon>mdi-chevron-left</v-icon>Return</v-btn
    >
    <v-list three-line>
      <template v-for="(item, index) in projects">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.name"
          @click="goToProject(item.routeName)"
        >
          <v-list-item-avatar>
            <v-img :src="item.icon"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.name"></v-list-item-title>
            <v-list-item-subtitle
              v-html="item.description"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { header: "Demos" },
        {
          name: "Pokemon Demo",
          description:
            "Pokemon Listing making use of Pokemon API, showing data with different layouts",
          routeName: "Pokemon",
          icon: require("@/assets/pokeball.svg"),
        },
      ],
    };
  },
  methods: {
    goToProject(project) {
      this.$router.push({ name: project });
    },
  },
};
</script>
