<template lang="pug">
    section
</template>

<script>
    export default {
        async mounted ( ) {
            const { success, user, message } = await this.api( 'discord/refresh' )

            if ( success ) {
                console.log( user )
                this.$router.replace( '/' )
            } else {
                console.error( message )
            }
        }
    }
</script>
