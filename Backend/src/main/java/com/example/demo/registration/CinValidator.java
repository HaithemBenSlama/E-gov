package com.example.demo.registration;

import org.springframework.stereotype.Service;

import java.util.function.Predicate;

@Service
public class CinValidator implements Predicate<String> {
    @Override
    public boolean test(String s) {
//          TODO:Regex to validate cin
        return true;
    }
}
