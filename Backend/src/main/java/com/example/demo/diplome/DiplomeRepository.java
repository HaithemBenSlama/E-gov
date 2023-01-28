package com.example.demo.diplome;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DiplomeRepository extends JpaRepository<Diplome,Long> {
    Optional<Diplome> findDiplomeById(long diplomeId);

    Optional<Diplome> findDiplomeByCin(String diplomecin);
}
