import Joi from '@hapi/joi'

const registerValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(3).required()
            .email(),

        password: Joi.string().min(6).required(),

        faks: Joi.string().required()
    })

    return schema.validate(data)
}

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(3).required()
            .email(),

        password: Joi.string().min(6).required()
    })

    return schema.validate(data)
}

export { registerValidation, loginValidation }