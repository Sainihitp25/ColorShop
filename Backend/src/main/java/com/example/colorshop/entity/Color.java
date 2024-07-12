package com.example.colorshop.entity;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Getter
@Setter
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Color {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer colorId;

    private String colorName;

    @Column()
    private String ColorCode;


}
