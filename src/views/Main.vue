<template>
    <div>
        <router-view/>
        <BarraBaja/>
    </div>
</template>

<script>
import BarraBaja from '@/components/BarraBaja.vue'
export default {
    components:{
        BarraBaja
    }
}
</script>