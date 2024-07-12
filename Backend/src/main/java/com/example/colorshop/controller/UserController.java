package com.example.colorshop.controller;

import com.example.colorshop.entity.User;
import com.example.colorshop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user)
    {
        try
        {
            return new ResponseEntity<>(userService.registerUser(user),HttpStatus.OK);

        }catch (Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<User> loginUser(@RequestBody User user) throws Exception {
        try
        {
            return new ResponseEntity<>(userService.loginUser(user), HttpStatus.OK);
        }catch (Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
        }
    }
}
