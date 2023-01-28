package com.example.demo.user;


import com.example.demo.registration.token.ConfirmationToken;
import com.example.demo.registration.token.ConfirmationTokenService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ConfirmationTokenService confirmationTokenService;
    public List<Userego> getUsers(){
        return userRepository.findAll();
    }



    public void deleteUser(Long userId) {
        boolean exists=userRepository.existsById(userId);
        if(!exists){
            throw new IllegalStateException("User with id"+userId+" does not exists");
        }
        userRepository.deleteById(userId);
    }

    @Transactional
    public void updateUser(Long userId, String phone, String email, String password) {
        Userego user=userRepository.findById(userId).orElseThrow(()->new IllegalStateException(("User does not exist")));

        if(phone !=null && phone.length()>0 && !Objects.equals(user.getPhone(),phone))
        {
            user.setPhone(phone);
        }
        if(email !=null && email.length()>0 && !Objects.equals(user.getEmail(),email))
        {
            Optional<Userego> userOptional =userRepository.findUseregoByEmail(email);
            if(userOptional.isPresent())
            {
                throw new IllegalStateException("email taken");
            }
            user.setEmail(email);
        }
        if(password !=null && password.length()>7 && !Objects.equals(user.getPassword(),password))
        {
            String encodedPassword=bCryptPasswordEncoder.encode(password);
            user.setPassword(encodedPassword);
        }

    }

    public String signupUser(Userego user){

            Optional<Userego> useregoOptional= userRepository.findUseregoByCin(user.getCin());
            if(useregoOptional.isPresent()){
                // TODO if email not confirmed send confirmation email.
                // TODO check of attributes are the same
                throw new IllegalStateException("User Exists");
            }

            String encodedPassword=bCryptPasswordEncoder.encode(user.getPassword());

            user.setPassword(encodedPassword);
            userRepository.save(user);

        String token=UUID.randomUUID().toString();

        ConfirmationToken confirmationToken=new ConfirmationToken(token, LocalDateTime.now(),LocalDateTime.now().plusMinutes(15),user);
        confirmationTokenService.saveConfirmationToken(confirmationToken);

        //TODO : SEND EMAIL

            return token;
    }
    public int enableAppUser(String cin) {
        return userRepository.enableAppUser(cin);
    }


    @Override
    public UserDetails loadUserByUsername(String cin) throws UsernameNotFoundException {
        return userRepository.findUseregoByCin(cin).orElseThrow(()-> new UsernameNotFoundException("User not found"));
    }

    public Userego getUser(Long userId) {
        Userego user=userRepository.findById(userId).orElseThrow(()->new IllegalStateException(("User does not exist")));
        return user;
    }
}
