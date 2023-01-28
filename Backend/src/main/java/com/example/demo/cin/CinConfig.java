package com.example.demo.cin;


import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class CinConfig {

    /*
    @Bean
    CommandLineRunner commandLinerRunner1(CinRepository repository){
        return args ->{
            Cin cmariam=new Cin("12876936",
                    "Mariam","jegham", LocalDate.of(2001, Month.AUGUST,10),
                    "chokri","olfa","sousse");

            Cin cwadi=new Cin("14876939",
                    "Wadi","jari", LocalDate.of(2001, Month.AUGUST,10),
                    "kamel","wafa","sousse");

            Cin cslim=new Cin("12876937",
                    "Slim","Chiboub", LocalDate.of(2001, Month.AUGUST,10),
                    "ahmed","sana","sousse");

            repository.saveAll(
                    List.of(cmariam,cwadi,cslim)
            );

        };

    }*/


}
