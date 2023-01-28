package com.example.demo.dashboard;


import com.example.demo.user.UserRepository;
import com.example.demo.user.Userego;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class DashboardService {
    private final UserRepository userRepository;


    public Optional<Userego> getUser(Long id){
        return userRepository.findUseregobyId(id);
    }
}
