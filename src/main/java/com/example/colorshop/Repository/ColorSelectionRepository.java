package com.example.colorshop.Repository;

import com.example.colorshop.entity.ColorSelection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColorSelectionRepository extends JpaRepository<ColorSelection,Integer> {
}
