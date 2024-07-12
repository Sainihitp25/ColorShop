package com.example.colorshop.controller;

import com.example.colorshop.entity.User;
import com.example.colorshop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService  userService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user)
    {
        return ResponseEntity.ok(userService.registerUser(user));
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody User user) throws Exception {
        String email = user.getEmailId();
        String password = user.getPassword();

        User user1 = null;
        if(email!= null && password!= null)
        {
            user1= userService.loginUser(email,password);
        }
        if(user1 == null)
        {
            throw new Exception("Enter the Correct credentials");
        }
        return user1;
    }
}
