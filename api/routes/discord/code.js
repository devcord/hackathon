module.exports = async ( req, res, { discord, mongo, encrypt, token } ) => {
    const {
        query, 
        fingerprint,
    } = req

    let response

    try {
        response = await discord.code({
            code: query.code,
            redirect_uri: req.query.origin + '/auth'
        })
    } catch {
        return res.json({
            error: 400,
            success: false,
            message: 'failed to authenticate'
        })
    }

    const {
        user: { id, },
        token: {
            refresh_token,
            access_token,
        },
    } = response

    const Users = mongo.collection('users')
    const Sessions = mongo.collection('sessions')

    let currentUser = await Users.find({ id })

    if (currentUser.length === 0) {
        currentUser = {
            created_at: Date.now(),
            last_signed_in: Date.now(),
            id,
            admin: false,
            verified: false,
        }

        await Users.insert(currentUser)
    }

    await Sessions.remove({
        fingerprint: fingerprint.hash
    })

    await Sessions.insert({
        fingerprint: fingerprint.hash,
        ...encrypt(refresh_token, access_token),
        id,
        date: Date.now()
    })

    token.set(res, {
        id,
        access_token
    })

    res.json({
        status: 200,
        success: true
    })
}
