package org.gontar.carsold.Controller;

import org.gontar.carsold.Model.UserDto;
import org.gontar.carsold.Service.UserServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserController {

    private final UserServiceImpl service;

    public UserController(UserServiceImpl service) {
        this.service = service;
    }

    @GetMapping("/auth/register/check-email")
    public ResponseEntity<Map<String,Boolean>> checkEmail(@RequestParam("email") String email){
        Map<String,Boolean> response = new HashMap<>();
        boolean exists = service.findEmail(email);
        response.put("exists", exists);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/auth/register/check-username")
    public ResponseEntity<Map<String,Boolean>> checkUsername(@RequestParam("username") String username) {
        Map<String,Boolean> response = new HashMap<>();
        boolean exists = service.findUsername(username);
        response.put("exists", exists);
        return ResponseEntity.ok(response);
    }

    @PostMapping("auth/register")
    public ResponseEntity<String> register(@RequestBody UserDto userDto){
        service.saveUser(userDto);
        return ResponseEntity.ok("User saved");
    }

}
