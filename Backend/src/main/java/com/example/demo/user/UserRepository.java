package com.example.demo.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<Userego,Long> {

    @Query("SELECT s FROM Userego s where  s.email=?1")
    Optional<Userego> findUseregoByEmail(String email);
    Optional<Userego> findUseregoByCin(String cin);
    @Transactional
    @Modifying
    @Query("UPDATE Userego a " +
            "SET a.enabled = TRUE WHERE a.cin = ?1")
    int enableAppUser(String cin);

    @Query("SELECT s FROM Userego s where  s.id=?1")
    Optional<Userego> findUseregobyId(Long Id);
}
