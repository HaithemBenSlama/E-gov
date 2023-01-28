package com.example.demo.declarationnaissance;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class NaissanceConfig {
/*
    @Bean
    CommandLineRunner commandLinerRunner3(NaissanceRepository repository){
        return args ->{
            DeclarationNaissance nmariam=new DeclarationNaissance("12876936",
                     "Chokri", "jegham", "sawsen", "farjal","mariem","jegham",JuniorGender.FEMELLE,
                    LocalDate.of(2001, Month.AUGUST, 10),
                    "sousse");

            DeclarationNaissance nwadi=new DeclarationNaissance("14876936",
                     "mohamed", "jari", "sameh", "few","wadi","jari",JuniorGender.MALE,
                    LocalDate.of(1951, Month.AUGUST, 10),
                    "tunis");

            DeclarationNaissance nslim=new DeclarationNaissance("13876936",
                     "imed", "chiboub", "eya", "slimen","slim","chiboub",JuniorGender.MALE,
                    LocalDate.of(2021, Month.AUGUST, 10),
                    "sousse");

            repository.saveAll(
                    List.of(nmariam,nwadi,nslim)
            );

        };

    }*/

}
