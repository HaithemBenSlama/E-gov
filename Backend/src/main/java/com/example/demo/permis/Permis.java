package com.example.demo.permis;

import com.example.demo.user.Userego;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@EqualsAndHashCode
@Entity
@Table(name="userPermis")
public class Permis {

    @Id
    @SequenceGenerator(
            name="userpermis_sequence",
            sequenceName="userpermis_sequence",
            allocationSize=1
    )
    @GeneratedValue(
            strategy=GenerationType.SEQUENCE,
            generator="userpermis_sequence"
    )
    private Long id;
    private String cin;
    private String firstName;
    private String lastName;
    private String numero;
    private LocalDate dateNaissance;

    //@OneToOne
    //private Userego user;

    public Permis(String cin, String firstName, String lastName, String numero, LocalDate dateNaissance) {
        this.cin = cin;
        this.firstName = firstName;
        this.lastName = lastName;
        this.numero = numero;
        this.dateNaissance = dateNaissance;
    }

    public Permis() {

    }
}
