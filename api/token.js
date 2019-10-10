module.exports = {
    set ( res, payload ) {
        res.cookie('discord_token', JSON.stringify(payload))
        return true
    },

    get ( req ) {
        try {
            return JSON.parse(req.cookies.discord_token)
        } catch {
            return false
        }
    }
}
