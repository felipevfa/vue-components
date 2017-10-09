import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    showDetails(data) {
      this.$emit("showServerDetails", data)
    },
    setActive(serverId) {
      this.$emit("setActiveServer", serverId)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
