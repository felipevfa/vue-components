<template>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>All Servers are managed here</p>
                    <button @click="repairServer" class="btn btn-primary">Set to Normal</button>
                    <button @click="declareStatusUnknown" class="btn btn-warning">Set to Unknown</button>
                    <button @click="disableServer" class="btn btn-danger">Set to Disabled</button>
                    <button @click="reset" class="btn btn-link">Reset Servers</button>
                </footer>
            </div>
        </div>
</template>

<script>
import { eventBus } from '../../main.js'

export default {
    data: function() {
        return {

        }
    },
    methods: {
        repairServer() {
            eventBus.setNormal()
        },
        declareStatusUnknown() {
            eventBus.setUnknown()
        },
        disableServer() {
            eventBus.setDisabled()
        },
        reset() {
            eventBus.reset()
        }
    }
}
</script>

<style>

</style>
