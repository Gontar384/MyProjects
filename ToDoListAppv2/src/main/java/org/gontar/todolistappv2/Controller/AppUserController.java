package org.gontar.todolistappv2.Controller;

import org.gontar.todolistappv2.Model.AppUserDto;
import org.gontar.todolistappv2.Service.AppUserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:5174")
public class AppUserController {

    private final AppUserService appUserService;

    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @PostMapping("/api/auth/register")
    public AppUserDto register(@RequestBody AppUserDto appUserDto) {
        return appUserService.saveUser(appUserDto);
    }

    @GetMapping("/api/auth/register/check-username")
    public ResponseEntity<Map<String, Boolean>>checkByUsername(@RequestParam String username) {
        boolean exists = appUserService.findByUsername(username);
        Map<String, Boolean> response = new HashMap<>();
        response.put("exists", exists);
        return ResponseEntity.ok(response);
    }
}
