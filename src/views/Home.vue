<template>
  <div>
    <div class="d-flex flex-column flex-md-row align-center">
      <v-avatar size="100">
        <img src="@/assets/profile_photo.jpg" alt="Carlos Castro" />
      </v-avatar>
      <div class="d-flex flex-column align-center align-md-start ml-5">
        <div class="display-1 font-weight-black no-line-height">
          Carlos Castro
        </div>
        <div class="subtitle-1 grey--text text--lighten-1 no-line-height">
          I'm a Software Engineer based on Mexico City
        </div>
      </div>
      <v-spacer />
      <div class="d-flex mt-3 mt-md-0">
        <v-btn
          class="mr-2"
          outlined
          color="grey"
          download
          href="@/assets/Cafeto CV Carlos Castro - English.pdf"
          >Download CV</v-btn
        >
        <v-btn color="blue" class="white--text"
          ><v-icon left>mdi-plus</v-icon>Follow</v-btn
        >
      </div>
    </div>
    <v-divider class="my-4"></v-divider>
    <div class="d-flex flex-column flex-md-row">
      <v-col cols="12" md="3" class="font-weight-bold"> About me </v-col>
      <v-col cols="12" md="9" class="font-weight-light">
        <p>
          I’m a Software Engineer based in Mexico City, I specialize in front
          end development and have more than five years of experience on it.
        </p>
        <p>
          I enjoy being challenged and engaging with projects that require me to
          work outside my comfort and knowledge set, as continuing to learn new
          languages and development techniques are really important for me.
        </p>
        <v-row
          no-gutters
          class="pa-3 blue lighten-4 rounded blue--text text--darken-2"
        >
          <v-col cols="12" md="3">
            <div class="caption">Location</div>
            <div>
              <v-row no-gutters align="center">
                <v-avatar size="18">
                  <img src="@/assets/mexico.png" alt="Carlos Castro" />
                </v-avatar>
                <div class="ml-2">Mexico, Mexico City</div>
              </v-row>
            </div>
          </v-col>
          <v-col cols="12" md="3" class="mt-3 mt-md-0">
            <div class="caption">LinkedIn</div>
            <a
              href="https://www.linkedin.com/in/carlos-castro-lara/"
              target="_blank"
              class="no-underline"
              >carlos-castro-lara<v-icon right small color="blue darken-2"
                >mdi-open-in-new</v-icon
              ></a
            >
          </v-col>
          <v-col cols="12" md="6" class="mt-3 mt-md-0">
            <div class="caption">Email</div>
            <a @click="copyToClipboard('carlos.castro.lara@outlook.com')"
              >carlos.castro.lara@outlook.com<v-icon
                right
                small
                color="blue darken-2"
                >mdi-content-copy</v-icon
              ></a
            >
          </v-col>
        </v-row>
      </v-col>
    </div>
    <v-divider class="my-4"></v-divider>
    <div class="d-flex flex-column flex-md-row">
      <v-col cols="12" md="3" class="font-weight-bold"> Experience </v-col>
      <v-col cols="12" md="9" class="font-weight-light">
        <v-row dense>
          <v-col
            cols="12"
            md="6"
            class="experience-module mb-2"
            v-for="exp in experience"
            :key="exp.name"
          >
            <v-card
              class="pa-2 d-flex align-start flex-column experience-module"
              outlined
            >
              <div class="mb-auto">
                <div class="d-flex flex-row">
                  <v-avatar size="40" class="mr-2">
                    <img :src="exp.logo" alt="logo" />
                  </v-avatar>
                  <div class="d-flex flex-column">
                    <div class="font-weight-bold">{{ exp.position }}</div>
                    <div class="caption">{{ exp.company }}</div>
                  </div>
                </div>
                <div class="mt-2 pl-3 d-flex flex-row overflow-hidden">
                  <v-tooltip top v-for="item in exp.stack" :key="item">
                    <template v-slot:activator="{ on }">
                      <div v-on="on">
                        <tech-icon class="mr-2" v-on="on">{{ item }}</tech-icon>
                      </div>
                    </template>
                    <span>{{ item }}</span>
                  </v-tooltip>
                </div>
              </div>

              <div class="caption grey--text text--lighten-1">
                {{ `${exp.beginingTerm} - ${exp.endTerm}` }}
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<script>
import { EXPERIENCE } from "@/data/curriculum-data.js";
import TechIcon from "@/components/TechIcon";

export default {
  name: "Home",
  components: {
    TechIcon,
  },
  data() {
    return {
      experience: EXPERIENCE,
    };
  },
  methods: {
    copyToClipboard(text) {
      let options = {
        x: "right",
        y: "top",
        color: "blue",
      };
      navigator.clipboard.writeText(text);
      this.$notify.toast(`${text} copied to clipboard`, options);
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.no-line-height {
  line-height: 1;
}
.no-underline {
  text-decoration: none;
}
.experience-module {
  height: 130px;
}
</style>
