package com.example.colorshop.serviceImpl;

import com.example.colorshop.Exception.ResourceNotFoundException;
import com.example.colorshop.Repository.UserRepository;
import com.example.colorshop.entity.User;
import com.example.colorshop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User registerUser(User user) {
         Optional<User> user1 = userRepository.fetchByEmailId(user.getEmailId());
        if(user1.isPresent())
        {
            throw new RuntimeException("User already exists...");
        }
        return userRepository.save(user);
    }

    @Override
    public User loginUser(User user) {
        String email = user.getEmailId();
        String password = user.getPassword();

        User user1 = null;
        if(email!= null && password!= null)
        {
            user1= userRepository.fetchUserByEmailIdAndPassword(email, password);
        }
        if(user1 == null)
        {
            throw new ResourceNotFoundException("Enter the Correct credentials");
        }
        return user1;

    }
}
