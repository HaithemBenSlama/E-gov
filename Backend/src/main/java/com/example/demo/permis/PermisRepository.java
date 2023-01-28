package com.example.demo.permis;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
@Transactional
public interface PermisRepository extends JpaRepository<Permis,Long> {

    Optional<Permis> findPermisById(Long id);

}
