package com.example.colorshop.service;

import com.example.colorshop.entity.Color;
import com.example.colorshop.model.CartCTO;

import java.util.List;

public interface ColorSelectionService {
    String selectColors(Integer userId, List<Color> selectedColors);

    String selectColors1(Integer userId, List<String> selectedColors1);

    List<CartCTO> orders(Integer userId);

}
