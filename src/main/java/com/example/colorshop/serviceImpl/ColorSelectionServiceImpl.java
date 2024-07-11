package com.example.colorshop.serviceImpl;

import com.example.colorshop.Repository.ColorSelectionRepository;
import com.example.colorshop.entity.Color;
import com.example.colorshop.entity.ColorSelection;
import com.example.colorshop.entity.User;
import com.example.colorshop.service.ColorSelectionServie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ColorSelectionServiceImpl implements ColorSelectionServie {

    @Autowired
    private ColorSelectionRepository colorSelectionRepository;


    @Override
    public void selectedColors(User user, List<Color> selectedColors) {
        if (selectedColors.size() != 3) {
            throw new IllegalArgumentException("User must select exactly three colors");
        }

        // Save the selection in the database
        for (Color color : selectedColors) {
            ColorSelection userColorSelection = new ColorSelection();
            userColorSelection.setUser(user);
            userColorSelection.setColor(color);
            colorSelectionRepository.save(userColorSelection);
        }
    }
}

