const handler = (script, imports) => async (req, res) => {
    try {
        await require('./routes/' + script)( req, res, imports )
    } catch (error) {
        res.json({
            code: '500',
            message: 'Internal Server Error',
            success: false
        })

        console.error(error)
    }
}

module.exports = ({ app }, imports) => {
    for (const [route, script] of Object.entries( require('./routes') )) {
        const [method, path] = route.split(' ')

        switch ( method ) {
            case 'get':
                app.get( '/' + path, handler(script, imports) )
                break

            case 'post':
                script.middleware
                    ? app.post( '/' + path, script.middleware, handler(script.route, imports) )
                    : app.post( '/' + path, handler(script, imports) )
                break

            default:
                throw new Error( 'Unknown method: ' + method )
        }
    }
}
