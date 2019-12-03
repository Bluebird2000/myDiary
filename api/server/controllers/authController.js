import AuthService from '../services/authService';
import Util from '../utils/Utils';

const util = new Util();

export default class AuthController {
    async getAllRegisteredUser(req, res) {
        try {
            const users = await AuthService.getAllRegisteredUser();
            if(users.length > 0) {
                util.sendSuccessResponse(200, 'SUCCESS', users);
            } else {
                util.sendSuccessResponse(200, 'NO USER FOUND');
            }
        }catch(error) {
            util.sendErrorResponse(400, error);
        }
    }
}