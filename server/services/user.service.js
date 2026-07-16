import {getUsers, getUserById as getUserIdFromRepo} from '../repositories/user.repository.js';

export const getAllUsers = async () => {
    const users = await getUsers();
    return users;   
}

export const getUserById  = async (id) => {
    const user = await  getUserIdFromRepo(id);
    return user;
}


//bsiness logic
// Remove inactive users
// Sort users
// Calculate discounts
// Validate permissions

//it shouldn't access req and res 