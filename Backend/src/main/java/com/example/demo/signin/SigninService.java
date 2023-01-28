package com.example.demo.signin;

import com.example.demo.user.UserRepository;
import com.example.demo.user.Userego;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class SigninService {

    private final UserRepository userRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public Long signinUSER(SigninRequest sign) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        Userego useregoo= userRepository.findUseregoByCin(sign.getCin()).orElseThrow(()->new IllegalStateException("User not found"));

        if(encoder.matches(sign.getPassword(),useregoo.getPassword()))
        {return useregoo.getId();}
        else
        {
            return -1L;
        }
    }
}
