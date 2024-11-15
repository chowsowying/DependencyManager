package com.csy.dependencymanager.service;

import com.csy.dependencymanager.dto.NpmPackageResponse;

public interface DependencyService {
    NpmPackageResponse getNpmPackageVersions(String packageName, String currentVersion);
}
