<template lang="pug">
    section
</template>

<script>
    export default {
        mounted () {
            const { origin } = window.location
            window.location.href = `${ origin }/api/discord/login?origin=${ origin }`
        }        
    }
</script>
