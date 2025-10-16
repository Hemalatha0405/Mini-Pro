package com.example.Info.Controller;


import com.example.Info.Entity.EmpDetails;
import com.example.Info.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
public class UserController {

    @Autowired
    UserService userService;



    @GetMapping("/")
    public List<EmpDetails> getAllUser(){
         return  userService.getAllUser();

    }

    @PostMapping("/")
    public String addUser(@RequestBody EmpDetails user){
        userService.addUser(user);
        return "submitted successfully";

    }

}
