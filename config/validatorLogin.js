const joi = require('joi');

const validatorLogin = (req, res, next) => {

    const schema = joi.object({
        email: joi.string()
            .email({ minDomainSegments: 2 })
            .required()
            .messages({
                'string.email': 'The email format is incorrect.',
                'string.required': 'Please, enter your account email to login.',
            }),
        password: joi.string()
            .required()
            .messages({
                'string.required': 'Password field is required.'
            }),
        method: joi.string()
            .required()
            .messages({
                'string.required': 'The registration method is required.'
            })            
    });

    const validation = schema.validate(req.body, { abortEarly: false })  //abortEarly - when true, stops validation on the first error, otherwise returns all the errors found. Defaults to true.

    if (validation.error) {
        return res.json({
            success: false,
            from: 'Login Validator',
            message: validation.error.details,
            test: validation
        })
    }

    next();
}

module.exports = validatorLogin;