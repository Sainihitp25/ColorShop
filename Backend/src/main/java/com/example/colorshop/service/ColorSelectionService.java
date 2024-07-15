package com.example.colorshop.service;

import com.example.colorshop.entity.Color;

import java.util.List;

public interface ColorSelectionServie {
    public String selectColors(Integer userId, List<Color> selectedColors);

    public String selectColors1(Integer userId, List<String> selectedColors1);


}
