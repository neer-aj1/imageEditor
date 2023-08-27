const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if(err.name === 'CaseError' && err.kind === 'ObjectId'){
        statusCode = 404;
        message = 'Resource Not found';
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV !== "production" ? null : err.stack,
    });
}

const routeNotFound = (req, res, next) => {
    const error = new Error(`Route not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

export {errorHandler, routeNotFound};