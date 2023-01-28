package com.example.demo.declarationnaissance;


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
public class NaissanceService {

    private final UserRepository userRepository;

    private final NaissanceRepository naissanceRepository;

    public List<DeclarationNaissance> getNaissances(){
        return naissanceRepository.findAll();
    }

    public void deleteNaissance(Long naissanceId) {
        boolean exists=naissanceRepository.existsById(naissanceId);
        if(!exists){
            throw new IllegalStateException("Declaration naissance with id"+naissanceId+" does not exists");
        }
        DeclarationNaissance naissancee= naissanceRepository.findDeclarationNaissanceById(naissanceId).orElseThrow(()->new IllegalStateException(("Diplome does not exist")));
        Userego user= userRepository.findUseregoByCin(naissancee.getCinH()).orElseThrow(()->new IllegalStateException(("User does not exist")));
        user.setDeclarationNaissance(null);
        naissanceRepository.deleteById(naissanceId);
    }

    @Transactional
    public void updateNaissance(Long naissanceId, String lastName, String firstName) {
        DeclarationNaissance naissance1=naissanceRepository.findById(naissanceId).orElseThrow(()->new IllegalStateException(("Declaration does not exist")));

        if(lastName !=null && lastName.length()>0 && !Objects.equals(naissance1.getLastNameJ(),lastName))
        {
            naissance1.setLastNameJ(lastName);
        }
        if(firstName !=null && firstName.length()>0 && !Objects.equals(naissance1.getFirstNameJ(),firstName))
        {
            naissance1.setFirstNameJ(firstName);
        }
    }

    public String saveNaissance(DeclarationNaissance naissance){

        Optional<DeclarationNaissance> naissanceOptional= naissanceRepository.findDeclarationNaissanceById(naissance.getId());
        Userego user= userRepository.findUseregoByCin(naissance.getCinH()).orElseThrow(()->new IllegalStateException(("User does not exist")));
        if(naissanceOptional.isPresent()){

            throw new IllegalStateException("Declaration naissance Exists");
        }
        user.setDeclarationNaissance(naissance);
        naissanceRepository.save(naissance);
        return naissance.toString();
    }

}
