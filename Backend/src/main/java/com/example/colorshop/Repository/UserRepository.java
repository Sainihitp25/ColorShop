package com.example.colorshop.Repository;

import com.example.colorshop.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

    @Query(nativeQuery = true,value = "SELECT * FROM User WHERE email_id = ?1")
    Optional<User> fetchByEmailId(String emailId);

    @Query(nativeQuery = true,value = "SELECT * FROM User WHERE email_id =:emailId AND password =:password")
    User fetchUserByEmailIdAndPassword(String emailId, String password);
}
