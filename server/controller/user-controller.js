
import User from '../model/userSchema.js';  




 export const userLogIn = async (request, response) => {
    try {
        const user = await User.findOne({ username: request.body.username });

        if (!user) {
            return response.status(401).json({ message: 'Invalid username or password' });
        }

        
        if (user.password !== request.body.password) {
            return response.status(401).json({ message: 'Invalid username or password' });
        }

     
        return response.status(200).json({ message: `${user.username} logged in successfully` });
    } catch (error) {
        return response.status(500).json({ message: 'Error logging in', error: error.message });
    }
};


export const userSignUp = async (request, response) => {
    try {
      
        const exist = await User.findOne({ username: request.body.username });
        if (exist) {
            return response.status(401).json({ message: 'User already exists' });
        }

    
        const user = new User(request.body);
        console.log(user);
        await user.save();

       
        return response.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        return response.status(500).json({ message: 'Error signing up', error: error.message });
    }
};





