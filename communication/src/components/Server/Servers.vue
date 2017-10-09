<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server v-for="server in servers"
                        :key="server.id" 
                        :id="server.id"
                        :status="server.status"
                        :isDetailed="server.isDetailed" />
        </ul>
    </div>
</template>

<script>
import AppServer from './Server.vue'
import { eventBus } from '../../main.js'

export default {
    data: function() {
        return {
            servers: [
                { id: 1, status: 'Normal', isDetailed: false },
                { id: 2, status: 'Critical', isDetailed: false },
                { id: 3, status: 'Unknown', isDetailed: false },
                { id: 4, status: 'Normal', isDetailed: false },
                { id: 5, status: 'Down', isDetailed: false }
            ]
        }
    },
    components: {
        'app-server': AppServer
    },
    created() {
        eventBus.$on("setActiveServer", (serverId) => {
            for (server in this.servers) {
                if (server.id == serverId) server.isDetailed = true
                else server.isDetailed = false
            }
        })
    }
}
</script>

<style>

</style>
