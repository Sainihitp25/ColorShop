package com.example.colorshop.Repository;

import com.example.colorshop.entity.ColorSelection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ColorSelectionRepository extends JpaRepository<ColorSelection, Integer> {

    @Query("SELECT COUNT(cs) FROM ColorSelection cs WHERE cs.user.id =:userId AND cs.color.id=:colorId")
    Integer countByUserIdAndColorId(Integer colorId, Integer userId);


    @Query("SELECT cs FROM ColorSelection cs WHERE cs.user.id =:userId")
    List<ColorSelection> findByUserId(Integer userId);
}
