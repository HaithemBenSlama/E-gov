package com.example.demo.validation;


import com.example.demo.permis.Permis;
import com.example.demo.user.Userego;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface ValidationRepository extends JpaRepository<Validation,Long> {

    Optional<Validation> findValidationById(Long id);

    @Query("SELECT s FROM Validation s where  s.type=?1")
    List<Validation> getTypeValidationRequests(ValidationType type);

    @Query("SELECT s FROM Validation s where  s.userV=?1")
    List<Validation> getUserValidationRequests(Long iduser);

    @Transactional
    @Modifying
    @Query("UPDATE Validation a " +
            "SET a.type = ?1 WHERE a.id = ?2")
    int ChangeValidationState(String state,Long id);
}
