package com.example.colorshop.Repository;

import com.example.colorshop.entity.Color;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ColorRepository extends JpaRepository<Color,Integer> {

    @Query("SELECT c FROM Color c WHERE c.colorId IN :selectedColors")
    List<Color> findAllById(List<Color> selectedColors);
}
