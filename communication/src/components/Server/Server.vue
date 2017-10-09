<template>
  <li class="list-group-item" 
      :class="{ 'bg-primary': isDetailed }"
      @click="showServerDetails">Server #{{ id }}</li>
</template>

<script>
import { eventBus } from '../../main.js'

export default {
    props: {
        id: Number,
        status: String,
        isDetailed: Boolean
    },
    methods: {
        showServerDetails() {
            eventBus.showDetails({ id: this.id, status: this.status })
        }
    }
}
</script>

<style>

</style>
