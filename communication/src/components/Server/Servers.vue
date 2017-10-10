<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server v-for="server in servers"
                        :key="server.id" 
                        :id="server.id"
                        :status="server.status"
                        :active="activeServer" />
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
                { id: 1, status: 'Normal' },
                { id: 2, status: 'Critical' },
                { id: 3, status: 'Unknown' },
                { id: 4, status: 'Normal' },
                { id: 5, status: 'Down' }
            ],
            activeServer: 0
        }
    },
    components: {
        'app-server': AppServer
    },
    created() {
        eventBus.$on("setActiveServer", (serverId) => {
            this.activeServer = serverId
        }),
        eventBus.$on("serverNormal", () => {
            let server = this.servers[this.activeServer-1]
            server.status = 'Normal'
            eventBus.showDetails({ id: server.id, status: server.status })
        }),
        eventBus.$on("serverUnknown", () => {
            let server = this.servers[this.activeServer-1]
            server.status = 'Unknown'
            eventBus.showDetails({ id: server.id, status: server.status })
        }),
        eventBus.$on("serverDisabled", () => {
            let server = this.servers[this.activeServer-1]
            server.status = 'Disabled'
            eventBus.showDetails({ id: server.id, status: server.status })
        }),
        eventBus.$on("reset", () => {
            let server = this.servers[this.activeServer-1]
            server.status = 'Normal'
            eventBus.showDetails({ id: server.id, status: server.status })
        }),
        eventBus.$on("reset", () => {
            this.servers = [
                                { id: 1, status: 'Normal' },
                                { id: 2, status: 'Critical' },
                                { id: 3, status: 'Unknown' },
                                { id: 4, status: 'Normal' },
                                { id: 5, status: 'Down' }
                           ]
            let server = this.servers[this.activeServer-1]
            eventBus.showDetails({ id: server.id, status: server.status })
        })
    }
}
</script>

<style>

</style>
