package com.example.colorshop.serviceImpl;

import com.example.colorshop.Repository.UserRepository;
import com.example.colorshop.entity.User;
import com.example.colorshop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public User loginUser(String emailId, String password ) {
        return userRepository.fetchUserByEmailIdAndPassword(emailId, password);
    }
}
