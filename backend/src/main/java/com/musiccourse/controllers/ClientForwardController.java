package com.musiccourse.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api")
public class ClientForwardController {
    @Value("${CLOUD_FRONT_URL}")
    private String databaseUrl;


    @Autowired
    private Environment env;

    @GetMapping("/se")
    public String ping() {
        return "Hello";
    }

    @GetMapping("/video")
    public String getCloudFrontVideoUrl() {
        return databaseUrl+"/still_the_one.mp4";
    }

}
