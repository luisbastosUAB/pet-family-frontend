import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueSimpleAlert from "vue-simple-alert";
import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/fontawesome-all.min.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/nice-select.css";
import "./assets/css/flaticon.css";
import "./assets/css/odometer.css";
import "./assets/css/jquery-ui.css";
import "./assets/css/slick.css";
import "./assets/css/default.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

Vue.use(BootstrapVue);
Vue.use(VueSimpleAlert);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
