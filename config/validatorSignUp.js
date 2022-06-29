const joi = require('joi');

const validatorSignUp = (req, res, next) => {

    const schema = joi.object({
        email: joi.string()
            .email({ minDomainSegments: 2 })
            .required()
            .messages({
                'string.email': 'The email format is incorrect.',
                'string.required': 'Please, enter your account email to login.',
            }),
        password: joi.string()
            .min(4)
            .max(40)
            .required()
            .messages({
                'string.min': 'The password must have 4 characters at least',
                'string.max': 'The password must have 40 characters max.',
                'string.required': 'Password field is required.'
            }),
        passwordRepeat: joi.ref('password'),
        firstName: joi.string()
            .required(),
        lastName: joi.string()
            .required(),
        country: joi.string()
            .required(),
        method: joi.string()
            .required(),
        userPhoto: joi.string()
            .required()
    });

    const validation = schema.validate(req.body, { abortEarly: false })  //abortEarly - when true, stops validation on the first error, otherwise returns all the errors found. Defaults to true.

    if (validation.error) {
        return res.json({
            success: false,
            from: 'Sign Up Validator',
            message: validation.error.details,
            test: validation
        })
    }

    next();
}

module.exports = validatorSignUp;