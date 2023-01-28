package com.example.demo.permis;


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
public class PermisService {
    private final PermisRepository permisRepository;
    private final UserRepository userRepository;

    public List<Permis> getPermis(){
        return permisRepository.findAll();
    }

    public void deletePermis(Long permisId) {
        boolean exists=permisRepository.existsById(permisId);
        if(!exists){
            throw new IllegalStateException("Permis with id"+permisId+" does not exists");
        }
        Permis permiss= permisRepository.findPermisById(permisId).orElseThrow(()->new IllegalStateException(("Permis does not exist")));
        Userego user= userRepository.findUseregoByCin(permiss.getCin()).orElseThrow(()->new IllegalStateException(("User does not exist")));
        user.setPermis(null);
        permisRepository.deleteById(permisId);
    }

    @Transactional
    public void updatePermis(Long permisId, String numero) {
        Permis permis1=permisRepository.findById(permisId).orElseThrow(()->new IllegalStateException(("Permis does not exist")));

        if(numero !=null && numero.length()>0 && !Objects.equals(permis1.getLastName(),numero))
        {
            permis1.setNumero(numero);
        }
    }

    @Transactional
    public String savePermis(Permis permis){

        Optional<Permis> permisOptional= permisRepository.findPermisById(permis.getId());
        Userego user= userRepository.findUseregoByCin(permis.getCin()).orElseThrow(()->new IllegalStateException(("User does not exist")));
        if(permisOptional.isPresent()){

            throw new IllegalStateException("Permis Exists");
        }
        user.setPermis(permis);
        //permis.setUser(user);
        permisRepository.save(permis);

        return permis.toString();
    }
}
