import Vue         from 'vue'
import VueSocketIO from 'vue-socket.io'
import App         from './App.vue'

Vue.use(new VueSocketIO({
    debug:      false,
    connection: "http://localhost:3000",
}))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount("#app")
