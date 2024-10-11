package org.gontar.todolistappv2.Controller;

import org.gontar.todolistappv2.Model.AppUserDto;
import org.gontar.todolistappv2.Service.AppUserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class AppUserController {

    private final AppUserService service;

    public AppUserController(AppUserService service) {
        this.service = service;
    }

    @PostMapping("/auth/register")
    public ResponseEntity<?> register(@RequestBody AppUserDto appUserDto) {
        service.save(appUserDto);
        return ResponseEntity.ok("User saved");
    }

    @PostMapping("/auth/login")
    public String login(@RequestBody AppUserDto appUserDto) {
        return service.authenticate(appUserDto);
    }

    @GetMapping("/auth/register/check-username")
    public ResponseEntity<Map<String, Boolean>> checkByUsername(@RequestParam String username) {
        boolean exists = service.findByUsername(username);
        Map<String, Boolean> response = new HashMap<>();
        response.put("exists", exists);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/user-info")
    public AppUserDto getUserInfo() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();

        return service.findUserByUsername(username);
    }
}