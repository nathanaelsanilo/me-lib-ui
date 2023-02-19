import type { App } from "vue";
import * as components from "./components";

const componentsList = components?.default as any;
const MeLibUi = {
  install(Vue: App) {
    Object.keys(componentsList).forEach((name) => {
      Vue.component(name, componentsList[name]);
    });
  },
};

export default MeLibUi;
