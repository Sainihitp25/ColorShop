package com.example.colorshop.service;

import com.example.colorshop.entity.Color;
import com.example.colorshop.entity.ColorSelection;

import java.util.List;

public interface ColorSelectionServie {
    public String selectColors(Integer userId, List<Color> selectedColors);
    public String selectColor(Integer userId, Integer colorId);
}
