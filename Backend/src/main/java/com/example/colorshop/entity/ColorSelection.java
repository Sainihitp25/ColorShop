package com.example.colorshop.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@Data
@ToString
public class ColorSelection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer colorSelectionId;

    @JoinColumn(name = "userId")
    @ManyToOne
    private User user;

    @JoinColumn(name = "colorId")
    @ManyToOne
    private Color color;
}
