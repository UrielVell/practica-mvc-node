const errorhandler = (error, req, res, next) =>{
    console.log("Error desde el middleware")
    const defaultMessage = "La aplicacion esta ocupada. Intentelo mas tarde"

    if (process.env.NODE_ENV === 'development') {
        const statusCode = error.statusCode || 500
        const message = error.message || defaultMessage
        res.status(statusCode).json({
            success: false,
            status: statusCode,
            message: message,
            stack: error.stack
        })
    } else {
        res.status(200).send(defaultMessage)
    }
}

module.exports = errorhandler