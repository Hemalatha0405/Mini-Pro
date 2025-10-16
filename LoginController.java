package com.example.Info.Controller;
import com.example.Info.Entity.UserLogin;
import com.example.Info.Repository.LoginRepository;
import com.example.Info.Service.LoginService;
import com.example.Info.Utils.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5174")
@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class LoginController {
    private final LoginService loginService;
    private final LoginRepository loginRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;





    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String password = passwordEncoder.encode(body.get("password"));

        if (loginRepository.findByUsername(username).isPresent()) {
            return new ResponseEntity<>("Username already exists", HttpStatus.CONFLICT);

        }
        loginService.createUser(UserLogin.builder().username(username).password(password).build());
        return new ResponseEntity<>("Successfully Registered", HttpStatus.CREATED);


    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String password = body.get("password");

        var loginUserOptional = loginRepository.findByUsername(username);
        if (loginUserOptional.isEmpty()) {
            return new ResponseEntity<>("Username not registered", HttpStatus.UNAUTHORIZED);
        }
        UserLogin loginUser = loginUserOptional.get();
        if (!passwordEncoder.matches(password, loginUser.getPassword())) {
            return new ResponseEntity<>("Invalid Username", HttpStatus.UNAUTHORIZED);

        }
        String token =jwtUtil.generateToken(username);
        return ResponseEntity.ok(Map.of("token",token,"username",username)
        );


    }
}





