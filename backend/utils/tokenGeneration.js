import jwt  from "jsonwebtoken";

const generateToken = (res, userId) => {
    const token = jwt.sign({userId}, process.env.JWT, {
        expiresIn: '5d'
    });

    res.cookie('jwt', token, {
        httpOnly : true,
        secure : process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 5*24*60*60*1000
    });
};

export default generateToken;