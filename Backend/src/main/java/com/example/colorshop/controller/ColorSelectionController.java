package com.example.colorshop.controller;

import com.example.colorshop.entity.Color;
import com.example.colorshop.service.ColorSelectionServie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/color-selection")
public class ColorSelectionController {

    @Autowired
    private ColorSelectionServie colorSelectionServie;

    @PostMapping("/colors/{userId}")
    public String selectColors(@PathVariable Integer userId, @RequestBody List<Color> selectedColors)
    {
        colorSelectionServie.selectColors(userId,selectedColors);
        return "Colors added to the cart successfully";
    }

}
