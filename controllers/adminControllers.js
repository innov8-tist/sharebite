module.exports = {
    pagerender: (params) => {
        return new Promise((response, reject) => {
            console.log(params)
            response()
        })
    }
}
