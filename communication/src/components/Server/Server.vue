<template>
  <li class="list-group-item" 
      :class="{ 'bg-primary': this.active == this.id }"
      @click="showServerDetails">Server #{{ id }}</li>
</template>

<script>
import { eventBus } from '../../main.js'

export default {
    props: {
        id: Number,
        status: String,
        isDetailed: Boolean,
        active: Number
    },
    methods: {
        showServerDetails() {
            eventBus.showDetails({ id: this.id, status: this.status })
        }
    }
}
</script>

<style>
.bg-primary {
    background-color: #337ab7;
}
</style>
