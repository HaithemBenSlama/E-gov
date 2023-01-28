package com.example.demo.signin;


import com.example.demo.user.UserService;
import com.example.demo.user.Userego;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("api/v/signin")
public class SigninController {
    private final SigninService signinService;

    @Autowired
    public SigninController(SigninService signinService){
        this.signinService=signinService;
    }

    @PostMapping
    public Long signinUser(@RequestBody  SigninRequest signinrequest){

        return signinService.signinUSER(signinrequest);
    }



}
