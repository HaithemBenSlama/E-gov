package com.example.demo.validation;


import com.example.demo.user.Userego;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@EqualsAndHashCode
@Entity
@Table(name="userValidation")
public class Validation {

    @Id
    @SequenceGenerator(
            name="userValidation_sequence",
            sequenceName="userValidation_sequence",
            allocationSize=1
    )
    @GeneratedValue(
            strategy=GenerationType.SEQUENCE,
            generator="userValidation_sequence"
    )
    private Long id;

    //ATTENTION OBLIGATOIRE
    @Column(nullable = false)
    private Long userV;

    //ATTENTION OBLIGATOIRE
    @Column(nullable = false)
    private ValidationType type;
    private Etat etat;
    private LocalDate dateEmission;

    private String userPhone;
    private String userEmail;
    private String userPassword;

    private String numeroPermis;

    private String diplomeFirstName;
    private String diplomeLastName;

    private String NaissanceFirstName;
    private String NaissanceLastName;

    private String cinLieu;
    private String cinProfession;

    public Validation(Long userV, ValidationType type, String userPhone, String userEmail, String userPassword, String numeroPermis, String diplomeFirstName, String diplomeLastName, String naissanceFirstName, String naissanceLastName, String cinLieu, String cinProfession) {
        this.userV = userV;
        this.type = type;
        this.userPhone = userPhone;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.numeroPermis = numeroPermis;
        this.diplomeFirstName = diplomeFirstName;
        this.diplomeLastName = diplomeLastName;
        NaissanceFirstName = naissanceFirstName;
        NaissanceLastName = naissanceLastName;
        this.cinLieu = cinLieu;
        this.cinProfession = cinProfession;
        this.etat=Etat.ENCOURS;
        this.dateEmission=LocalDate.now();
    }


    public Validation() {

    }
}
