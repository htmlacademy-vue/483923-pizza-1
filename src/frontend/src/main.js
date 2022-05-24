import Vue from "vue"; //импортируем вью
import App from "./App.vue"; //импортируем апп встроенный потом

Vue.config.productionTip = false; // отключает стандартное предупреждение vue в консоли браузера о работе в режиме разработки.

new Vue({
  render: (h) => h(App), //h эквивалентна createElement
}).$mount("#app"); //$mount('#app') монтирует в элемент с id="app" наш компонент. При этом происходит замена #app.
