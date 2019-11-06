<template lang="pug">
    section.home
        .about.content
            h1 Accessibility Hackathon
            h3 Lorem ipsum dolor sit amet

        .collaborators.content
            .collaborator( v-for="{ image, name, avatar } in Collaborators" )

</template>

<script>
    import Collaborators from '~/config/Collaborators.js'

    export default {
        data () {
            
        },

        async mounted ( ) {
            // console.log( await this.api('post/') )
        },
    }
</script>

<style lang="sass">
    section.home
        display: flex
        justify-content: center

        .about
            height: 30rem
            display: flex
            flex-direction: column
            justify-content: center
</style>
