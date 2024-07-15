package com.example.colorshop.model;

import lombok.*;

@Getter
@Setter
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Colors {

    private Integer colorId;
    private String colorName;
    private Integer colorCount;
}
