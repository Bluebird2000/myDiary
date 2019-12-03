import db from '../../../models';

class AuthService {
    async getAllRegistedUsers() {
        try {
            return db.User.findAll();
        } catch(error) {
            throw error;
        } 
    }

    async createNewUserAccount(user) {
        try {
            return await db.User.create(user);
        }catch(error) {
            throw error;
        }
    }

    async getSingleUserById(id) {
        try {
            const user =  await db.User.findOne({
                where: { id: Number(id) }
            });
            return user;
        }catch(error) {
            throw error;
        }
    }
}

export default AuthService;