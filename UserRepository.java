package com.example.Info.Repository;

import com.example.Info.Entity.EmpDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<EmpDetails, Integer> {

}
