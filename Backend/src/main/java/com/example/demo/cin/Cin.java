package com.example.demo.cin;


import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@EqualsAndHashCode
@Entity
@Table(name="userCin")
public class Cin {
    @Id
    @SequenceGenerator(
            name="usercin_sequence",
            sequenceName="usercin_sequence",
            allocationSize=1
    )
    @GeneratedValue(
            strategy=GenerationType.SEQUENCE,
            generator="usercin_sequence"
    )
    private Long id;
    private String cin;
    private String firstName;
    private String lastName;
    private LocalDate dateNaissance;
    private String fatherName;
    private String motherName;
    private String lieu;
    private String profession;

    public Cin(String cin, String firstName, String lastName, LocalDate dateNaissance, String fatherName, String motherName, String lieu,String profession) {
        this.cin = cin;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateNaissance = dateNaissance;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.lieu = lieu;
        this.profession=profession;
    }


    public Cin() {

    }
}
