package com.example.demo.contratmariage;


import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@EqualsAndHashCode
@Entity
@Table(name="userContratMariage")
public class ContratMariage {

    @Id
    @SequenceGenerator(
            name="usermariage_sequence",
            sequenceName="usermariage_sequence",
            allocationSize=1
    )
    @GeneratedValue(
            strategy=GenerationType.SEQUENCE,
            generator="usermariage_sequence"
    )
    private Long id;
    private String cinH;
    private String cinF;
    private String firstNameH;
    private String lastNameH;
    private String firstNameF;
    private String lastNameF;
    private LocalDate dateMariage;
    private String lieu;

    public ContratMariage(String cinH, String cinF, String firstNameH, String lastNameH, String firstNameF, String lastNameF, LocalDate dateMariage, String lieu) {
        this.cinH = cinH;
        this.cinF = cinF;
        this.firstNameH = firstNameH;
        this.lastNameH = lastNameH;
        this.firstNameF = firstNameF;
        this.lastNameF = lastNameF;
        this.dateMariage = dateMariage;
        this.lieu = lieu;
    }

    public ContratMariage() {

    }
}
