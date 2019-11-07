<template lang="pug">
    section.home
        Markdown.about.content( :content="HomeContent" )

        .collaborators.content
            h2 Collaborators:

            a.collaborator.background--dark( 
                v-for="{ invite, name, icon } in Collaborators" 
                :href="invite" 
                target="__blank"
                :class="{ invite }" 
            )
                img( :src="icon" )
                p.name {{ name }}

</template>

<script>
    import Collaborators from '~/config/Collaborators.js'
    import HomeContent from '~/config/HomeContent.md'
    import Markdown from '~/components/Markdown'

    export default {
        components: {
            Markdown,
        },

        data () {
            return {
                Collaborators,
                HomeContent,
            }
        },
    }
</script>

<style lang="sass">
    section.home
        .about
            padding-top: 3rem
            padding-bottom: 5rem

        .collaborators
            display: flex
            flex-wrap: wrap
            justify-content: left
            padding-bottom: 4rem

            h2
                width: 100%
                text-align: left
                margin: 0.5rem

            .collaborator
                display: flex
                align-items: center
                justify-content: left
                width: 20rem
                height: 7rem
                padding: 1rem
                margin: 0.5rem
                border-radius: 5px

                &.invite
                    filter: brightness(100%)
                    transition: filter 0.2s

                    &:hover
                        filter: brightness(110%)

                img
                    height: 100%
                    margin-right: 1rem
                    border-radius: 5px

                .name
                    color: white
                    font-size: 1.2rem
                    font-weight: 600
                    pointer-events: none
</style>
