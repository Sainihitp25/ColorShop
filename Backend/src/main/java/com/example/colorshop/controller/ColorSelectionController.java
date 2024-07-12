package com.example.colorshop.controller;

import com.example.colorshop.entity.Color;
import com.example.colorshop.service.ColorSelectionServie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/color-selection")
public class ColorSelectionController {

    @Autowired
    private ColorSelectionServie colorSelectionServie;

    @PostMapping("/colors/{userId}")
    public String selectColors(@PathVariable Integer userId, @RequestBody List<Color> selectedColors) {
        colorSelectionServie.selectColors(userId, selectedColors);
        return "Colors added to the cart successfully";
    }

    @PostMapping("/{userId}/color/{colorId}")
    public String selectColor(@PathVariable Integer userId, @PathVariable Integer colorId) {
        return colorSelectionServie.selectColor(userId, colorId);

    }

}
