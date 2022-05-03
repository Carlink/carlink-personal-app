<template>
  <div>
    <!-- <i :class="{ [techClass]: techClass, colored: colored }"></i> -->
    <img height="25px" :src="source" />
  </div>
</template>

<script>
import "devicon/devicon.min.css";
import iconCatalog from "devicon/devicon.json";
// Devicon Library https://devicon.dev/

export default {
  props: {
    colored: {
      type: Boolean,
      required: false,
    },
    customColor: {
      required: false,
      default: false,
    },
  },
  computed: {
    source() {
      let url = new URL(
        `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${this.icon}/${this.icon}-${this.version}.svg`
      );
      return url;
    },
    icon() {
      return this.$slots?.default[0]?.text;
    },
    version() {
      return (
        (this.icon &&
          iconCatalog.find((icon) => icon.name === this.icon).versions
            .svg[0]) ||
        "none"
      );
    },
  },
};
</script>
