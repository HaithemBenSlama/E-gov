package com.example.demo.contratmariage;


import com.example.demo.user.UserRepository;
import com.example.demo.user.Userego;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ContratMariageService {

    private final UserRepository userRepository;
    private final ContratMariageRepository contratRepository;

    public List<ContratMariage> getContratMariages(){
        return contratRepository.findAll();
    }

    public void deleteContratMariage(Long contratId) {
        boolean exists=contratRepository.existsById(contratId);
        if(!exists){
            throw new IllegalStateException("Contrat Mariage with id"+contratId+" does not exists");
        }
        ContratMariage mariagee= contratRepository.findContratMariageById(contratId).orElseThrow(()->new IllegalStateException(("Contrat Mariage does not exist")));
        Userego user1= userRepository.findUseregoByCin(mariagee.getCinF()).orElseThrow(()->new IllegalStateException(("User does not exist")));
        Userego user2= userRepository.findUseregoByCin(mariagee.getCinH()).orElseThrow(()->new IllegalStateException(("User does not exist")));
        user1.setContratMariage(null);
        user2.setContratMariage(null);
        contratRepository.deleteById(contratId);
    }

    @Transactional
    public void updateContratMariage(Long contratId, LocalDate datem) {
        ContratMariage contrat=contratRepository.findById(contratId).orElseThrow(()->new IllegalStateException(("Contract does not exist")));

        if(datem !=null && !Objects.equals(contrat.getDateMariage(),datem))
        {
            contrat.setDateMariage(datem);
        }

    }

    public String saveContratMariage(ContratMariage contrat){

        Optional<ContratMariage> contratOptional= contratRepository.findContratMariageById(contrat.getId());
        Userego user1= userRepository.findUseregoByCin(contrat.getCinH()).orElseThrow(()->new IllegalStateException(("User does not exist")));
        Userego user2= userRepository.findUseregoByCin(contrat.getCinF()).orElseThrow(()->new IllegalStateException(("User does not exist")));
        if(contratOptional.isPresent()){

            throw new IllegalStateException("Contrat Exists");
        }
        user1.setContratMariage(contrat);
        user2.setContratMariage(contrat);
        contratRepository.save(contrat);
        return contrat.toString();
    }


}
