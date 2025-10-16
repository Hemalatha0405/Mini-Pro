package com.example.Info.Service;


import com.example.Info.Entity.EmpDetails;
import com.example.Info.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

@Autowired
UserRepository repo;
    public List<EmpDetails> getAllUser() {
        return repo.findAll();


    }

    public void addUser(EmpDetails user) {
        repo.save(user);
    }
}
