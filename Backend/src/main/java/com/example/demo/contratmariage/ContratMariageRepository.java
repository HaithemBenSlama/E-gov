package com.example.demo.contratmariage;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ContratMariageRepository extends JpaRepository<ContratMariage,Long> {

    Optional<ContratMariage> findContratMariageById(Long id);

    Optional<ContratMariage> findContratMariageByCinF(String cin);
    Optional<ContratMariage> findContratMariageByCinH(String cin);
}
