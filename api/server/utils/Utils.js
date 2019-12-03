export default class Util {
    constructor() {
        this.statusCode = null;
        this.type = null;
        this.data = null;
        this.message = null;
    }

    sendSuccessResponse(statusCode, message, data) {
        this.statusCode = statusCode;
        this.type = 'SUCCESS';
        this.message = message;
        this.data = data;

    }

    sendErrorResponse(statusCode, message) {
        this.statusCode = statusCode;
        this.type = 'ERROR';
        this.message = message;
    }
    
    send(res) {
        let { statusCode, type, message, data } = this;
        const result = {
            status: type,
            message: message,
            data: data
        }
        if(type === 'SUCCESS') {
            return res.status(statusCode).json(result);
        }
        return res.status(statusCode).json({
            status: type,
            message: message
        });
    }
}