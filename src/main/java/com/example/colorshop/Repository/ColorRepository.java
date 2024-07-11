package com.example.colorshop.Repository;

import com.example.colorshop.entity.Color;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColorRepository extends JpaRepository<Color,Integer> {
}
