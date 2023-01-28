package com.example.demo.user;

import com.example.demo.permis.Permis;
import com.example.demo.permis.PermisRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class UserConfig {

//    @Bean
//    CommandLineRunner commandLinerRunner(UserRepository repository){
//        return args ->{
//            Userego mariam=new Userego("Mariam",
//                    "Jegham","Mariam@gmail.com", LocalDate.of(2001, Month.AUGUST,10),
//                    "12876901","53330321","password1",AppUserRole.USER);
//
//            Userego wadi=new Userego("Wadi",
//                    "Jari","Wadi@Jari.com", LocalDate.of(2001, Month.AUGUST,10),
//                    "12876902","73330321","password2",AppUserRole.USER);
//
//            Userego slim=new Userego("Slim",
//                    "Chiboub","Slim@chiboub.com", LocalDate.of(2001, Month.AUGUST,10),
//                    "12876903","93330321","password3",AppUserRole.USER);
//
//
//            repository.saveAll(
//                    List.of(mariam,wadi,slim)
//            );
//
//        };

//}
}
