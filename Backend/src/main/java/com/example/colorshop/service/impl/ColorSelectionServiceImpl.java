package com.example.colorshop.service.impl;

import com.example.colorshop.Exception.ResourceNotFoundException;
import com.example.colorshop.Repository.ColorRepository;
import com.example.colorshop.Repository.ColorSelectionRepository;
import com.example.colorshop.Repository.UserRepository;
import com.example.colorshop.entity.Color;
import com.example.colorshop.entity.ColorSelection;
import com.example.colorshop.entity.User;
import com.example.colorshop.model.CartCTO;
import com.example.colorshop.service.ColorSelectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
public class ColorSelectionServiceImpl implements ColorSelectionService {

    @Autowired
    private ColorSelectionRepository colorSelectionRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ColorRepository colorRepository;

    @Override
    public String  selectColors(Integer userId, List<Color> selectedColors) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

//        List<Color> colors = colorRepository.findAllById(selectedColors);
        if (selectedColors.size() > 3) {
            throw new ResourceNotFoundException("User can select up to three colors");
        }

        // Save the selection in the database
        for (Color color : selectedColors) {
            ColorSelection userColorSelection = new ColorSelection();
            userColorSelection.setUser(user);
            userColorSelection.setColor(color);
            colorSelectionRepository.save(userColorSelection);
        }
        return "Colors added to the cart successfully";
    }

    @Override
    public String selectColors1(Integer userId, List<String> selectedColors1) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        // Save the selection in the database
        for (String color : selectedColors1) {
            Optional<Color> color1 = colorRepository.findByName(color);
            ColorSelection userColorSelection = new ColorSelection();
            if (color1.isPresent()) {
                userColorSelection.setUser(user);
                userColorSelection.setColor(color1.get());
                colorSelectionRepository.save(userColorSelection);
            }
        }
        return "Colors added to the cart successfully";
    }

    @Override
    public List<CartCTO> orders(Integer userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        List<ColorSelection> colorSelections = colorSelectionRepository.findByUserId(userId);
        System.out.println(colorSelections);
        HashSet<CartCTO> cartCTOS = new HashSet<>();
        for (ColorSelection colorSelection : colorSelections) {
            Integer purchasedCount = colorSelectionRepository.countByUserIdAndColorId(colorSelection.getUser().getUserId(), colorSelection.getColor().getColorId());
            var cto = CartCTO.builder().colorId(colorSelection.getColor().getColorId())
                    .colorName(colorSelection.getColor().getColorName())
                    .purchasedCount(purchasedCount).build();
            cartCTOS.add(cto);
        }

        return cartCTOS.stream().toList();
    }


}

