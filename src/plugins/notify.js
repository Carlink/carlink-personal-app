// Minimal replacement for the "vuetify-notify" package, which was removed
// from npm in 2023. Keeps the same API used by the views:
//
//   this.$notify.toast("Text", { x: "right", y: "top", color: "green" })
//
// It shows a Vuetify snackbar mounted once at the end of <body>.
import { VSnackbar } from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

export default {
  install(Vue, { vuetify, options = {} } = {}) {
    const defaults = { x: "right", y: "top", color: "green", timeout: 3000, ...(options.toast || {}) };
    let vm = null;

    // Vuetify turns named colors into CSS classes, but this app does not load
    // the color classes, so pass a hex value instead (theme names included).
    function resolveColor(name) {
      if (!name || name.startsWith("#") || name.startsWith("rgb")) return name;
      const theme = vuetify && vuetify.framework && vuetify.framework.theme.currentTheme;
      if (theme && theme[name]) return theme[name];
      const key = name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      return colors[key] ? colors[key].base : name;
    }

    function snackbar() {
      if (vm) return vm;
      const el = document.createElement("div");
      document.body.appendChild(el);
      vm = new Vue({
        vuetify,
        data: () => ({ show: false, text: "", opts: defaults }),
        render(h) {
          const o = this.opts;
          return h(
            VSnackbar,
            {
              props: {
                value: this.show,
                color: resolveColor(o.color),
                timeout: o.timeout,
                top: o.y === "top",
                bottom: o.y === "bottom",
                right: o.x === "right",
                left: o.x === "left",
              },
              on: { input: (value) => (this.show = value) },
            },
            this.text
          );
        },
      }).$mount(el);
      return vm;
    }

    Vue.prototype.$notify = {
      toast(text, opts = {}) {
        const v = snackbar();
        v.show = false; // restart the timer if one is already showing
        v.$nextTick(() => {
          v.text = text;
          v.opts = { ...defaults, ...opts };
          v.show = true;
        });
      },
    };
  },
};
