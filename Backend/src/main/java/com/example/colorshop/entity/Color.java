package com.example.colorshop.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
@Data
public class Color {
    @Id
    @GeneratedValue
    private Long colorId;

    private String colorName;


}
