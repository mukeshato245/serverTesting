const {check, validationResult} = require('express-validator')

exports.contactRules = [
    check('name',"Name is required").notEmpty()
    .isLength({min:3}).withMessage("Name must be at least 3 characters")
    .not().matches(/[0-9]/).withMessage("Name must not contain numbers"),
    check('email',"Email is required").notEmpty()
    .isEmail().withMessage("Incorrect email format"),
    check('subject',"Subject is required").notEmpty()
    .isLength({min:3}).withMessage("Subject must be at least 3 characters"),    
    check('phone',"Phone is required").notEmpty()    
    .isLength({max:15}).withMessage("Phone number not be greater than 15 digits"),
    check('message',"Message is required").notEmpty()
]

exports.validate = (req, res, next) => {
    const errors = validationResult(req)
    if(errors.isEmpty()){
        next()
    }
    else{
        return res.status(400).json({error: errors.array()[0].msg})
        // return res.status(400).json({error: errors.array().map(err=>err.msg)})
    }
}