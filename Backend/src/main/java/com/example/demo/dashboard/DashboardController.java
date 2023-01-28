package com.example.demo.dashboard;


import com.example.demo.user.UserService;
import com.example.demo.user.Userego;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("api/v/dashboard")
public class DashboardController {
    private final DashboardService dashbordService;

    @Autowired
    public DashboardController(DashboardService dashbordService){
        this.dashbordService=dashbordService;
    }

    @GetMapping(path ="{userId}")
    public Optional<Userego> getUser(@PathVariable("userId") Long userId){
        return dashbordService.getUser(userId);
    }


}
