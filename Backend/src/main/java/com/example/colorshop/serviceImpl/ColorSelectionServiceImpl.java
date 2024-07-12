package com.example.colorshop.serviceImpl;

import com.example.colorshop.Repository.ColorRepository;
import com.example.colorshop.Repository.ColorSelectionRepository;
import com.example.colorshop.Repository.UserRepository;
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

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ColorRepository colorRepository;

    @Override
    public void selectColors(Integer userId, List<Color> selectedColors) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        List<Color> colors = colorRepository.findAllById(selectedColors);
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

