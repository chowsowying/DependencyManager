package com.csy.dependencymanager.service.impl;

import com.csy.dependencymanager.dto.NpmPackageResponse;
import com.csy.dependencymanager.model.NpmPackageInfo;
import com.csy.dependencymanager.service.DependencyService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DependencyServiceImpl implements DependencyService {

    private static final String NPM_REGISTRY_API_URL = "https://registry.npmjs.org/";

    @Override
    public NpmPackageResponse getNpmPackageVersions(String packageName, String currentVersion) {
        String url = NPM_REGISTRY_API_URL + packageName;
        RestTemplate restTemplate = new RestTemplate();

        // Fetch package info from the NPM registry
        NpmPackageInfo npmPackageInfo = restTemplate.getForObject(url, NpmPackageInfo.class);
        if (npmPackageInfo == null || npmPackageInfo.getVersions() == null) {
            return null;  // or throw an exception based on your error handling approach
        }

        // Filter out non-production versions like alpha and beta
        List<String> filteredVersions = npmPackageInfo.getVersions().keySet().stream()
                .filter(version -> !version.contains("alpha") && !version.contains("beta"))
                .sorted((v1, v2) -> v2.compareTo(v1)) // Sort in descending order
                .collect(Collectors.toList());

        // Prepare the response object
        NpmPackageResponse response = new NpmPackageResponse();
        response.setLatest(filteredVersions.isEmpty() ? null : filteredVersions.get(0));
        response.setVersions(filteredVersions);

        return response;
    }
}
