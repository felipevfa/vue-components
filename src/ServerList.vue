<template>
    <ul class="list-group">
        <li class="list-group-item" :key="index" v-for="index in 5">
            <server :id="index"></server>
        </li>
    </ul>
</template>

<script>
import Servers from './Servers.vue'

export default {
    components: {
        'server': Servers
    }
}
</script>

<style>

</style>
