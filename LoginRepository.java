package com.example.Info.Repository;

import com.example.Info.Entity.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LoginRepository extends JpaRepository<UserLogin,Long> {
   Optional<UserLogin> findByUsername(String Username);
}