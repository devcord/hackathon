import axios from 'axios'

const queue = []

const api = (url, options) => new Promise( resolve => {
    const next = async ( ) => {
        if ( queue.length > 0 ) {
            resolve(await queue[0]())
            queue.splice(0, 1)
            next()
        }
    }

    const request = async ( ) => {
        const { data } = await axios({
            url: `${ window.location.origin }/api/${ url }${ /\?/.test(url) ? '&' : '?' }origin=${ encodeURIComponent( window.location.origin ) }`,
            ...options
        })

        return data
    }

    queue.push(request)

    if (queue.length === 1) next()
})

export const state = () => ({
    user: null
})

export const methods = {
    set (state, payload) {
        Object.assign(state, payload)
    }
}

export const actions = {
    async autologin ({ commit }) {
        const { success, status, user, message } = await api( 'discord/refresh' )

        if ( success ) {
            commit('set', { user })
            return { user, success }
        } else {
            return { success, status, message }
        }
    }
}
