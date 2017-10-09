<template>
    <div class="col-xs-12 col-sm-6">
        <template v-if="this.id != null">
            <h1>Server #{{ id }}</h1>
            <h2>Server Status: {{ status }}</h2>
        </template>

        <p v-else>Currently not displaying server info.</p>
    </div>

</template>

<script>
import { eventBus } from '../../main.js'

export default {
    data: function() {
        return {
            id: null,
            status: null
        }
    },
    created() {
        eventBus.$on("showServerDetails", (server) => {
            this.id = server.id
            this.status = server.status
            eventBus.setActive(server.id)
        })
    }
}
</script>

<style>

</style>
