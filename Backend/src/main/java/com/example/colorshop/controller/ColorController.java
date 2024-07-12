package com.example.colorshop.controller;

import com.example.colorshop.entity.Color;
import com.example.colorshop.service.ColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/colors")
public class ColorController {

    @Autowired
    private ColorService colorService;

    @GetMapping("/get-all-colors")
    public ResponseEntity<List<Color>> getAllColors()
    {
        try
        {
            return new ResponseEntity<>((colorService.getAllColors()),HttpStatus.OK);
        }catch (Exception e)
        {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);

        }

    }

    @PostMapping("/add-colors")
    public ResponseEntity<String> addColors(@RequestBody List<Color> colors)
    {
        try{
            return new ResponseEntity<>((colorService.addColors(colors)), HttpStatus.CREATED);
        }catch (Exception e)
        {
            return new ResponseEntity<>("Failed to add colors: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
