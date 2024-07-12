package com.example.colorshop.controller;

import com.example.colorshop.entity.Color;
import com.example.colorshop.service.ColorSelectionServie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/color-selection")
public class ColorSelectionController {

    @Autowired
    private ColorSelectionServie colorSelectionServie;

    @PostMapping("/colors/{userId}")
    public ResponseEntity<String> selectColors(@PathVariable Integer userId, @RequestBody List<Color> selectedColors) {
       try
       {
           colorSelectionServie.selectColors(userId, selectedColors);
           return new ResponseEntity<>("Colors are added to the cart successfully", HttpStatus.ACCEPTED);
       }catch (Exception e) {
           return new ResponseEntity<>("Colors added to the cart successfully" + e.getMessage(), HttpStatus.BAD_REQUEST);
       }
    }

    @PostMapping("/colors-string/{userId}")
    public ResponseEntity<String> selectColors1(@PathVariable Integer userId, @RequestBody List<String> selectedColors1) {
        try {
            colorSelectionServie.selectColors1(userId, selectedColors1);
            return new ResponseEntity<>("Colors are added to the cart successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Colors added to the cart successfully" + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
