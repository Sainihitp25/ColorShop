package com.example.colorshop.service.impl;

import com.example.colorshop.Repository.ColorRepository;
import com.example.colorshop.entity.Color;
import com.example.colorshop.service.ColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ColorServiceImpl implements ColorService {

    @Autowired
    private ColorRepository colorRepository;

    @Override
    public List<Color> getAllColors() {
        return colorRepository.findAll();
    }

    @Override
    public String addColors(List<Color> colors) {
        for(Color color: colors)
        {
            colorRepository.save(color);
        }
        return "colors are added";
    }
}
