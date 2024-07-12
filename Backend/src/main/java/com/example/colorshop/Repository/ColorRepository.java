package com.example.colorshop.Repository;

import com.example.colorshop.entity.Color;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ColorRepository extends JpaRepository<Color,Integer> {

    @Query(nativeQuery = true, value = "SELECT * FROM Color WHERE color_name =:color")
    Optional<Color> findByName(String color);
}
