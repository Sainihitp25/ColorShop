package com.example.colorshop.controller;

import com.example.colorshop.entity.Color;
import com.example.colorshop.model.CartCTO;
import com.example.colorshop.service.ColorSelectionService;
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
    private ColorSelectionService colorSelectionService;

    @PostMapping("/colors/{userId}")
    public ResponseEntity<String> selectColors(@PathVariable Integer userId, @RequestBody List<Color> selectedColors) {
        try {
            var result = colorSelectionService.selectColors(userId, selectedColors);
            return new ResponseEntity<>(result, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            return new ResponseEntity<>("Colors are not added to the cart successfully" + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/colors-string/{userId}")
    public ResponseEntity<String> selectColors1(@PathVariable Integer userId, @RequestBody List<String> selectedColors1) {
        try {
            var result = colorSelectionService.selectColors1(userId, selectedColors1);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Colors added to the cart successfully" + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/orders/{userId}")
    public List<CartCTO> orders(@PathVariable Integer userId) {
        return colorSelectionService.orders(userId);
    }


}
