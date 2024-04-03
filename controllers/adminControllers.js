const { userModel } = require("../models/userModel")

module.exports = {

    signup: async (body) => {
        let response = await new usermodel(body).save()
        return response
    },
    login: async (body) => {
        let userCheck = await userModel.findOne({ email: body.email, password: body.password })
        if (!userCheck) {
            return { status: false, }
        }
        return { ...userCheck, status: true }
    },
    pagerender: (params) => {
        return new Promise((response, reject) => {
            console.log(params)
            response()
        })
    }
}
