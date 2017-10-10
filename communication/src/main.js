import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    showDetails(data) {
      this.$emit("showServerDetails", data)
    },
    setActive(serverId) {
      this.$emit("setActiveServer", serverId)
    },
    setNormal() {
      this.$emit("serverNormal")
    },
    setUnknown() {
      this.$emit("serverUnknown")
    },
    setDisabled() {
      this.$emit("serverDisabled")
    },
    reset() {
      this.$emit("reset")
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
