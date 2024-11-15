package com.csy.dependencymanager.controllers;

import com.csy.dependencymanager.dto.NpmPackageRequest;
import com.csy.dependencymanager.dto.NpmPackageResponse;
import com.csy.dependencymanager.service.DependencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class DependencyController {

    @Autowired
    private DependencyService dependencyService;

    @PostMapping("/npm/getAllVersions")
    public NpmPackageResponse getPackageVersions(@RequestBody NpmPackageRequest npmPackageRequest) {
        return dependencyService.getNpmPackageVersions(npmPackageRequest.getPackageName(), npmPackageRequest.getCurrentVersion());
    }


}
