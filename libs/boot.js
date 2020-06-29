module.exports = async app => {

    await app.db.sync({ force: true })

    app.listen(app.get('port'), () => {
            console.log(`NTask API - porta ${app.get('port')}`)
    })
}
