<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <header>
                    <h1>Server Status</h1>
                </header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <server-list></server-list>
            </div>
            <div class="col-xs-12 col-sm-6">
                <server-details></server-details>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <control-panel></control-panel>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
import ControlPanel from './ControlPanel.vue'
import ServerDetails from './ServerDetails.vue'
import ServerList from './ServerList.vue'

export default {
    components: {
        'control-panel': ControlPanel,
        'server-details': ServerDetails,
        'server-list': ServerList
    }
}

</script>

<style>

</style>
