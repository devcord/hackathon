import Vue from 'vue'

Vue.mixin({
    mounted () {
        this.api = async (url, options) => {
            const { data } = await this.$axios({
                url: `${ window.location.origin }/api/${ url }${ /\?/.test(url) ? '&' : '?' }origin=${ encodeURIComponent( window.location.origin ) }`,
                ...options
            })

            return data
        }
    }
})
