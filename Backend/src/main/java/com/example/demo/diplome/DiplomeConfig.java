package com.example.demo.diplome;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class DiplomeConfig {
    /*
    @Bean
    CommandLineRunner commandLinerRunner4(DiplomeRepository repository) {
        return args -> {
            Diplome dmariam = new Diplome("12876936",
                    "Mariam", "jegham", LocalDate.of(2021, Month.AUGUST, 12),
                    Titre.LICENCE, Mention.EXELLENT);

            Diplome dwadi = new Diplome("14876930",
                    "Wadi", "Jari", LocalDate.of(2011, Month.AUGUST, 14),
                    Titre.DOCTORAT, Mention.TRESBIEN);

            Diplome dslim = new Diplome("13876936",
                    "Slim", "Chiboub", LocalDate.of(2001, Month.AUGUST, 10),
                    Titre.BACCALAUREAT, Mention.BIEN);

            repository.saveAll(
                    List.of(dmariam, dwadi, dslim)
            );

        };
    }*/
}
