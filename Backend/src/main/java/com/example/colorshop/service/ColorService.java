package com.example.colorshop.service;

import com.example.colorshop.entity.Color;

import java.util.List;

public interface ColorService {
    List<Color> getAllColors();
    String addColors(List<Color> colors);
}
