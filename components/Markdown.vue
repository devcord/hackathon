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

        h1
            margin-top: 3rem

        h1, h2, h3, h4, h5, h6
            margin-top: 2rem

        h2, h3, h4, h5, h6
            color: rgba(white, 0.9)
            margin-bottom: 0.1rem

        hr
            opacity: 0
            height: 2rem

        p
            color: rgba(white, 0.7)
            max-width: 60rem

        a
            color: rgba(white, 0.7)
            border-bottom: 1px solid rgba(white, 0.7)

            &:hover
                border-color: #f0134d
                color: #f0134d
</style>
