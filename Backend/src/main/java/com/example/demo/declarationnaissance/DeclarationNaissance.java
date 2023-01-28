package com.example.demo.declarationnaissance;


import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@EqualsAndHashCode
@Entity
@Table(name="userNaissance")
public class DeclarationNaissance {
    @Id
    @SequenceGenerator(
            name="usernaissance_sequence",
            sequenceName="usernaissance_sequence",
            allocationSize=1
    )
    @GeneratedValue(
            strategy=GenerationType.SEQUENCE,
            generator="usernaissance_sequence"
    )
    private Long id;
    private String cinH; //cin du proprietaire

    private String firstNameH;
    private String lastNameH;
    private String firstNameF;
    private String lastNameF;
    private String firstNameJ;
    private String lastNameJ;
    private JuniorGender juniorGender;
    private LocalDate dateNaissance;
    private String lieu;

    public DeclarationNaissance(String cinH,String firstNameH, String lastNameH, String firstNameF, String lastNameF, String firstNameJ, String lastNameJ, JuniorGender juniorGender, LocalDate dateNaissance, String lieu) {
        this.cinH = cinH;
        this.firstNameH = firstNameH;
        this.lastNameH = lastNameH;
        this.firstNameF = firstNameF;
        this.lastNameF = lastNameF;
        this.firstNameJ = firstNameJ;
        this.lastNameJ = lastNameJ;
        this.juniorGender = juniorGender;
        this.dateNaissance = dateNaissance;
        this.lieu = lieu;
    }

    public DeclarationNaissance() {

    }
}
