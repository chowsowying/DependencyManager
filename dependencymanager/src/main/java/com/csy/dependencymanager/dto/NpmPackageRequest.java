package com.csy.dependencymanager.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class NpmPackageRequest {
    private String packageName;
    private String currentVersion;
}
