const axios = require('axios')
const btoa = require('btoa')

const credentials = {
    id: '', /* Client ID */
    secret: '', /* Client Secret */
    token: '' /* Application's Bot Token, used for obtaining user info */
}

const api = async (path, Authorization, options = {}) => (await axios({
    url: `https://discordapp.com/api/${ path }`,
    headers: { 
        Authorization,
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    ...options,
})).data

const user = async ({ id, token }) => {
    const data = await (await api(
        `users/` + (token ? '@me' : id), 
        token ? `Bearer ${ token }` : `Bot ${ credentials.token }`
    ))

    if (data.error) throw data.error

    return {
        ...data,
        avatar_url: `https://cdn.discordapp.com/${
            data.avatar 
                ? `avatars/${ data.id }/${ data.avatar }`
                : `embed/avatars/${ data.discriminator % 5 }` 
        }.png`
    }
}

const code = async ({ code, redirect_uri }) => {
    const token = await api(
        `oauth2/token?grant_type=authorization_code&code=${ code }&redirect_uri=${ redirect_uri }`,
        `Basic ${ btoa(`${ credentials.id }:${ credentials.secret }`) }`, 
        { method: 'POST' }
    )

    if (token.error) throw token.error_description

    return {
        success: true,
        token,
        user: await user({
            token: token.access_token
        })
    }
}

const refresh = async ({ refresh_token, redirect_uri }) => {
    const token = await api(
        `oauth2/token?grant_type=refresh_token&refresh_token=${ refresh_token }&redirect_uri=${ redirect_uri }`,
        `Basic ${ btoa(`${ credentials.id }:${ credentials.secret }`) }`, 
        { method: 'POST' }
    )

    if (token.error) throw token.error_description

    return {
        success: true,
        token,
        user: await user({
            token: token.access_token
        })
    }
}

const init = _credentials => Object.assign(credentials, _credentials)

module.exports = {
    api,
    user,
    code,
    refresh,
    credentials,
    init
}
