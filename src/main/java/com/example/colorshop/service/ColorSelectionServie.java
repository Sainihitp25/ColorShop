package com.example.colorshop.service;

import com.example.colorshop.entity.Color;
import com.example.colorshop.entity.User;

import java.util.List;

public interface ColorSelectionServie {
    public void selectedColors(User user, List<Color> selectedColors);
}
