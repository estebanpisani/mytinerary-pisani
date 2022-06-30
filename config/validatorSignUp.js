const joi = require('joi');

const validatorSignUp = (req, res, next) => {

    const schema = joi.object({
        email: joi.string()
            .email({ minDomainSegments: 2 })
            .required()
            .messages({
                'string.email': 'The email format is incorrect.',
                'string.empty': 'Please, enter a valid email.'
            }),
        password: joi.string()
            .min(4)
            .max(40)
            .required()
            .messages({
                'string.min': 'The password must have 4 characters at least',
                'string.max': 'The password must have 40 characters max.',
                'string.empty': 'Password field is required.'
            }),
        passwordRepeat: joi.string().required().valid(joi.ref('password')).messages({
            'string.empty': 'Please, repeat the password.',
            'any.only': 'Passwords doesn\'t match.'
        }),
        firstName: joi.string()
            .required()
            .messages({
                'string.empty': 'Please, enter your first name.'
            }),
        lastName: joi.string()
            .required()
            .messages({
                'string.empty': 'Please, enter your last name.'
            }),
        country: joi.string()
            .required()
            .messages({
                'string.empty': 'Please, enter your country.'
            }),
        method: joi.string()
            .required()
            .messages({
                'string.empty': 'The Registration method can\'t be empty.'
            }),
        userPhoto: joi.string()
            .allow(''),
        verified: joi.boolean()
    });

    const validation = schema.validate(req.body, { abortEarly: false })  //abortEarly - when true, stops validation on the first error, otherwise returns all the errors found. Defaults to true.

    if (validation.error) {
        let messages = validation.error.details.map(error=> error.message);
        return res.json({
            success: false,
            from: 'Sign Up Validator',
            message: messages,
            details: validation.error.details
        })
    }

    next();
}

module.exports = validatorSignUp;