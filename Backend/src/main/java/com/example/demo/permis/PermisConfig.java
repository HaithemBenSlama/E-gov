package com.example.demo.permis;


import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class PermisConfig {
    /*

    @Bean
    CommandLineRunner commandLinerRunner5(PermisRepository repository){
        return args ->{
            Permis pmariam=new Permis("12876936",
                    "Mariam","jegham",
                    "9999999",LocalDate.of(2001, Month.AUGUST,10));

            Permis pwadi=new Permis("12876930",
                    "Wadi","jari",
                    "1111111",LocalDate.of(2011, Month.AUGUST,20));

            Permis pslim=new Permis("12876931",
                    "Slim","Chiboub",
                    "2222222",LocalDate.of(2021, Month.AUGUST,18));

            repository.saveAll(
                    List.of(pmariam,pwadi,pslim)
            );

        };

    }*/


}
