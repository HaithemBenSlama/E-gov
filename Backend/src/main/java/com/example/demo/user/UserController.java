package com.example.demo.user;


import com.example.demo.validation.Validation;
import com.example.demo.validation.ValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/v/user")
public class UserController {

    private final UserService userService;
    private final ValidationService validationService;

    @Autowired
    public UserController(UserService userService,ValidationService validationService){
        this.userService=userService;
        this.validationService=validationService;
    }

    @GetMapping
    public List<Userego> getUsers(){
        return userService.getUsers();
    }

    @PostMapping
    public void registerNewUser(@RequestBody Userego user){
        userService.signupUser(user);
    }

    @DeleteMapping(path="{userId}")
    public void deleteUser(@PathVariable("userId") Long userId){
        userService.deleteUser(userId);
    }

    @PutMapping(path ="{userId}")
    public void updateUser(
            @PathVariable("userId") Long userId,
            @RequestParam(required=false) String phone,
            @RequestParam(required=false) String email,
            @RequestParam(required=false) String password){
        userService.updateUser(userId,phone,email,password);
    }

    @GetMapping(path="validation/{userId}")
    public List<Validation> getUserValidationRequests(
            @PathVariable("userId") Long userId) {
        return validationService.getUserRequests(userId);
    }

    @GetMapping(path="{userId}")
    public Userego getUser(@PathVariable("userId") Long userId){
        return userService.getUser(userId);
    }






    }
