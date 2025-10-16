package com.example.Info.Service;

import com.example.Info.Entity.UserLogin;
import com.example.Info.Repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public UserLogin createUser(UserLogin loginUser) {
        return loginRepository.save(loginUser);
    }

    public UserLogin getUserBYId(Long id){
        return loginRepository.findById(id).orElseThrow(()-> new RuntimeException("User not found"));

    }


}
