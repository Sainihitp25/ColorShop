package com.example.colorshop.service;

import com.example.colorshop.entity.User;

public interface UserService {

    User registerUser(User user);

    User loginUser(String emailId, String password);
}
