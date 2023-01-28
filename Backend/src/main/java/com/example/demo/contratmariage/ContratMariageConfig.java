package com.example.demo.contratmariage;


import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class ContratMariageConfig {
/*
    @Bean
    CommandLineRunner commandLinerRunner2(ContratMariageRepository repository) {
        return args -> {
            ContratMariage contmariam = new ContratMariage("12876936",
                    "14876935", "kais", "hajri", "mariam", "jegham",
                    LocalDate.of(2028, Month.AUGUST, 10),
                    "sousse");

            ContratMariage contwadi = new ContratMariage("13976936",
                    "15576935", "wadi", "jari", "haifa", "haloul",
                    LocalDate.of(2031, Month.AUGUST, 10),
                    "moknine");

            ContratMariage contslim = new ContratMariage("16876939",
                    "19876930", "slim", "chiboub", "hanen", "alwen",
                    LocalDate.of(2031, Month.AUGUST, 10),
                    "ksar hlel");

            repository.saveAll(
                    List.of(contmariam, contwadi, contslim)
            );

        };


    }*/
}
