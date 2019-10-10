module.exports = async (req, res, { discord }) => {
    const { params: { id } } = req
    
    res.json({
        success: true,
        user: await discord.user({ id })
    })
}
