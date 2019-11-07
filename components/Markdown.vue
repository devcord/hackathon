<template lang="pug">
    section
        .markdown( v-html="markdown.render(content)" )
</template>

<script>
    export default {
        props: {
            content: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="sass">
    .markdown
        *
            letter-spacing: 0.25px

        h1, h2, h3, h4, h5, h6
            margin-top: 3rem

        h2, h3, h4, h5, h6
            opacity: 0.9
            margin-bottom: 0.1rem

        hr
            opacity: 0
            height: 2rem

        p
            opacity: 0.7
            max-width: 60rem
            text-align: justify

        a
            color: white
            border-bottom: 1px solid white

            &:hover
                border-color:
</style>
