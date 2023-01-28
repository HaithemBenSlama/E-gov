package com.example.demo.cin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
@Transactional
public interface CinRepository extends JpaRepository<Cin,Long> {

    Optional<Cin> findCinByCin(String cin);

}
