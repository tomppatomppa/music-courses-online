package com.musiccourse.controllers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api")
public class ClientForwardController {


    @GetMapping("/se")
    public String ping() {
        return "Hello";
    }


}
