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
import java.util.Optional;

@Service
public class ColorSelectionServiceImpl implements ColorSelectionServie {

    @Autowired
    private ColorSelectionRepository colorSelectionRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ColorRepository colorRepository;

    @Override
    public String  selectColors(Integer userId, List<Color> selectedColors) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

//        List<Color> colors = colorRepository.findAllById(selectedColors);
        if (selectedColors.size() > 3) {
            throw new IllegalArgumentException("User can select up to three colors");
        }

        // Save the selection in the database
        for (Color color : selectedColors) {
            Optional<Color> color1 = colorRepository.findById(color.getColorId());
            ColorSelection userColorSelection = new ColorSelection();
            userColorSelection.setUser(user);
            userColorSelection.setColor(color);
            colorSelectionRepository.save(userColorSelection);
        }
        return "Colors added to the cart successfully";
    }

    @Override
    public String selectColor(Integer userId, Integer colorId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));
        Optional<Color> color = colorRepository.findById(colorId);
        if (color.isPresent()) {
            ColorSelection userColorSelection1 = new ColorSelection();
            userColorSelection1.setUser(user);
            userColorSelection1.setColor(color.get());
            colorSelectionRepository.save(userColorSelection1);
            return "saved";
        }
        return "not saved";
    }
}

