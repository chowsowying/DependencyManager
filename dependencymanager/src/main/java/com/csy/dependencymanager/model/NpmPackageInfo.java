package com.csy.dependencymanager.model;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
@NoArgsConstructor
public class NpmPackageInfo {
    private Map<String, NpmVersionDetails> versions;
}

