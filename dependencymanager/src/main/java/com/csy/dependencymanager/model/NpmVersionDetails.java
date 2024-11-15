package com.csy.dependencymanager.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Map;


@Getter
@Setter
@NoArgsConstructor
public class NpmVersionDetails {
    private Dist distTags;
    private Dist dist;
}



