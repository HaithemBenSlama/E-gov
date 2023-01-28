package com.example.demo.declarationnaissance;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface NaissanceRepository extends JpaRepository<DeclarationNaissance,Long> {
    Optional<DeclarationNaissance> findDeclarationNaissanceById(Long id);

    Optional<DeclarationNaissance> findDeclarationNaissanceByCinH(String cin);
}
