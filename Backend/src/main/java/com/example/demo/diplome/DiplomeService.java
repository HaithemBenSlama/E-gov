package com.example.demo.diplome;


import com.example.demo.user.UserRepository;
import com.example.demo.user.Userego;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@AllArgsConstructor
public class DiplomeService {
    private final UserRepository userRepository;

    private final DiplomeRepository diplomeRepository;

    public List<Diplome> getDiploms(){
        return diplomeRepository.findAll();
    }

    public void deleteDiplome(Long diplomeId) {
        boolean exists=diplomeRepository.existsById(diplomeId);
        if(!exists){
            throw new IllegalStateException("Diplome with id"+diplomeId+" does not exists");
        }
        Diplome diplomee= diplomeRepository.findDiplomeById(diplomeId).orElseThrow(()->new IllegalStateException(("Diplome does not exist")));
        Userego user= userRepository.findUseregoByCin(diplomee.getCin()).orElseThrow(()->new IllegalStateException(("User does not exist")));
        user.setDiplome(null);
        diplomeRepository.deleteById(diplomeId);
    }

    @Transactional
    public void updateDiplome(Long diplomeId, String lastName, String firstName) {
        Diplome diplome1=diplomeRepository.findById(diplomeId).orElseThrow(()->new IllegalStateException(("Diplome does not exist")));

        if(lastName !=null && lastName.length()>0 && !Objects.equals(diplome1.getLastName(),lastName))
        {
            diplome1.setLastName(lastName);
        }
        if(firstName !=null && firstName.length()>0 && !Objects.equals(diplome1.getFirstName(),diplome1))
        {

            diplome1.setFirstName(firstName);
        }
    }

    public String saveDiplome(Diplome diplome){

        //Diplome diplomeOptional=diplomeRepository.findDiplomeByCin(diplome.getCin()).orElseThrow(()->new IllegalStateException(("Diplome does not exist")));
        Optional<Diplome> diplomeOptional= diplomeRepository.findDiplomeByCin(diplome.getCin());
        Userego user= userRepository.findUseregoByCin(diplome.getCin()).orElseThrow(()->new IllegalStateException(("User does not exist")));
        if(diplomeOptional.isPresent()){

            throw new IllegalStateException("Diplome Exists");
        }
        user.setDiplome(diplome);
        diplomeRepository.save(diplome);

        return diplome.toString();
    }


}
