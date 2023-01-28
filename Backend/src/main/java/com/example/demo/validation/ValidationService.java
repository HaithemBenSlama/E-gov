package com.example.demo.validation;


import com.example.demo.cin.CinService;
import com.example.demo.declarationnaissance.NaissanceService;
import com.example.demo.diplome.DiplomeService;
import com.example.demo.email.EmailSender;
import com.example.demo.permis.PermisService;
import com.example.demo.user.UserRepository;
import com.example.demo.user.UserService;
import com.example.demo.user.Userego;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ValidationService {

    private final ValidationRepository validationRepository;
    private final EmailSender emailSender;

    private final UserRepository userRepository;

    private final UserService userService;
    private final PermisService permisService;
    private final DiplomeService diplomeService;
    private final CinService cinService;
    private final NaissanceService naissanceService;

    public List<Validation> getValidationRequests(){
        return validationRepository.findAll();
    }

    public List<Validation> getUserRequests(Long id){
        return validationRepository.getUserValidationRequests(id);
    }

    public Optional<Validation> getValidationById(Long id){
        return validationRepository.findValidationById(id);
    }

    public List<Validation> getTypeRequests(ValidationType type){
        return validationRepository.getTypeValidationRequests(type);
    }

    public void deleteValidationRequest(Long validationId) {
        boolean exists=validationRepository.existsById(validationId);
        if(!exists){
            throw new IllegalStateException("Validation with id"+validationId+" does not exists");
        }
        validationRepository.deleteById(validationId);
    }

    @Transactional
    public void updateValidationState(Long ValiadtionId, Etat etat) {
        Validation validation=validationRepository.findById(ValiadtionId).orElseThrow(()->new IllegalStateException(("Validation does not exist")));
        Userego user= userRepository.findUseregobyId(validation.getUserV()).orElseThrow(()->new IllegalStateException(("User does not exist")));
        validation.setEtat(etat);
        if (etat==Etat.VALIDEE)
            emailSender.send(user.getEmail(),buildEmail2(user.getFirstName(),"Validated"));
        else
            emailSender.send(user.getEmail(),buildEmail2(user.getFirstName(),"Refused"));

    }

    @Transactional
    public String addRequest(Validation validation){

        Optional<Validation> validationOptional= validationRepository.findValidationById(validation.getId());
        Userego user= userRepository.findUseregobyId(validation.getUserV()).orElseThrow(()->new IllegalStateException(("User does not exist")));
        if(validationOptional.isPresent()){

            throw new IllegalStateException("Request Exists");
        }
        validationRepository.save(validation);
        return validation.toString();
    }













    private String buildEmail2(String name, String Etat) {
        return "<div style=\"font-family:Helvetica,Arial,sans-serif;font-size:16px;margin:0;color:#0b0c0c\">\n" +
                "\n" +
                "<span style=\"display:none;font-size:1px;color:#fff;max-height:0\"></span>\n" +
                "\n" +
                "  <table role=\"presentation\" width=\"100%\" style=\"border-collapse:collapse;min-width:100%;width:100%!important\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n" +
                "    <tbody><tr>\n" +
                "      <td width=\"100%\" height=\"53\" bgcolor=\"#0b0c0c\">\n" +
                "        \n" +
                "        <table role=\"presentation\" width=\"100%\" style=\"border-collapse:collapse;max-width:580px\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\">\n" +
                "          <tbody><tr>\n" +
                "            <td width=\"70\" bgcolor=\"#0b0c0c\" valign=\"middle\">\n" +
                "                <table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\n" +
                "                  <tbody><tr>\n" +
                "                    <td style=\"padding-left:10px\">\n" +
                "                  \n" +
                "                    </td>\n" +
                "                    <td style=\"font-size:28px;line-height:1.315789474;Margin-top:4px;padding-left:10px\">\n" +
                "                      <span style=\"font-family:Helvetica,Arial,sans-serif;font-weight:700;color:#ffffff;text-decoration:none;vertical-align:top;display:inline-block\">Request Result</span>\n" +
                "                    </td>\n" +
                "                  </tr>\n" +
                "                </tbody></table>\n" +
                "              </a>\n" +
                "            </td>\n" +
                "          </tr>\n" +
                "        </tbody></table>\n" +
                "        \n" +
                "      </td>\n" +
                "    </tr>\n" +
                "  </tbody></table>\n" +
                "  <table role=\"presentation\" class=\"m_-6186904992287805515content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse;max-width:580px;width:100%!important\" width=\"100%\">\n" +
                "    <tbody><tr>\n" +
                "      <td width=\"10\" height=\"10\" valign=\"middle\"></td>\n" +
                "      <td>\n" +
                "        \n" +
                "                <table role=\"presentation\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\n" +
                "                  <tbody><tr>\n" +
                "                    <td bgcolor=\"#1D70B8\" width=\"100%\" height=\"10\"></td>\n" +
                "                  </tr>\n" +
                "                </tbody></table>\n" +
                "        \n" +
                "      </td>\n" +
                "      <td width=\"10\" valign=\"middle\" height=\"10\"></td>\n" +
                "    </tr>\n" +
                "  </tbody></table>\n" +
                "\n" +
                "\n" +
                "\n" +
                "  <table role=\"presentation\" class=\"m_-6186904992287805515content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse;max-width:580px;width:100%!important\" width=\"100%\">\n" +
                "    <tbody><tr>\n" +
                "      <td height=\"30\"><br></td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "      <td width=\"10\" valign=\"middle\"><br></td>\n" +
                "      <td style=\"font-family:Helvetica,Arial,sans-serif;font-size:19px;line-height:1.315789474;max-width:560px\">\n" +
                "        \n" +
                "            <p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\">Hi " + name + ",</p><p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\"> I hope you are doing well . Im here to inform you that you validation request is :"+Etat+" </p><blockquote style=\"Margin:0 0 20px 0;border-left:10px solid #b1b4b6;padding:15px 0 0.1px 15px;font-size:19px;line-height:25px\"><p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\"> <h2 " + Etat + "</h2> </p></blockquote>\n Contact us for more details. <p>See you soon</p>" +
                "        \n" +
                "      </td>\n" +
                "      <td width=\"10\" valign=\"middle\"><br></td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "      <td height=\"30\"><br></td>\n" +
                "    </tr>\n" +
                "  </tbody></table><div class=\"yj6qo\"></div><div class=\"adL\">\n" +
                "\n" +
                "</div></div>";
    }
}
