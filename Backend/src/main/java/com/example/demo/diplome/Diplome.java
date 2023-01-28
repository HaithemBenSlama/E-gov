package com.example.demo.diplome;


import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@EqualsAndHashCode
@Entity
@Table(name="userDiplome")
public class Diplome {
    @Id
    @SequenceGenerator(
            name="userdiplome_sequence",
            sequenceName="userdiplome_sequence",
            allocationSize=1
    )
    @GeneratedValue(
            strategy=GenerationType.SEQUENCE,
            generator="userdiplome_sequence"
    )
    private Long id;
    private String cin;
    private String firstName;
    private String lastName;
    private LocalDate dateNaissance;
    private Titre titre;
    private Mention mention;

    public Diplome(String cin, String firstName, String lastName, LocalDate dateNaissance, Titre tire, Mention mention) {
        this.cin = cin;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateNaissance = dateNaissance;
        this.titre = tire;
        this.mention = mention;
    }

    public Diplome() {

    }
}
