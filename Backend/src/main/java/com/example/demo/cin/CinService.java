package com.example.demo.cin;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CinService {

    private final CinRepository cinRepository;

    public List<Cin> getCins(){
        return cinRepository.findAll();
    }

    public void deleteCin(Long cinId) {
        boolean exists=cinRepository.existsById(cinId);
        if(!exists){
            throw new IllegalStateException("User with id"+cinId+" does not exists");
        }
        cinRepository.deleteById(cinId);
    }

    @Transactional
    public void updateCin(Long cinId, String lieu, String profession) {
        Cin cin1=cinRepository.findById(cinId).orElseThrow(()->new IllegalStateException(("User does not exist")));

        if(lieu !=null && lieu.length()>0 && !Objects.equals(cin1.getLieu(),lieu))
        {
            cin1.setLieu(lieu);
        }
        if(profession !=null && profession.length()>0 && !Objects.equals(cin1.getProfession(),profession))
        {
            cin1.setProfession(profession);
        }
    }

    public String saveCin(Cin cin){

        Optional<Cin> cinOptional= cinRepository.findCinByCin(cin.getCin());
        if(cinOptional.isPresent()){

            throw new IllegalStateException("Cin Exists");
        }
        cinRepository.save(cin);
        return cin.toString();
    }
}
