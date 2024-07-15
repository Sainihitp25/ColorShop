package com.example.colorshop.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(schema = "demo")
public class ColorSelection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer colorSelectionId;

    @JoinColumn(name = "user_id")
    @ManyToOne
    @JsonIgnore
    private User user;

    @JoinColumn(name = "color_id")
    @ManyToOne
    @JsonIgnore
    private Color color;
}
