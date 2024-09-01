package org.gontar.todolist.controller;


import org.gontar.todolist.model.dto.LoginDto;
import org.gontar.todolist.model.dto.UserDto;
import org.gontar.todolist.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/api/auth/register")
    public ResponseEntity<UserDto> register(@RequestBody UserDto userDto){
        return ResponseEntity.ok(userService.registerUser(userDto));
    }

    @PostMapping("/api/auth/login")
    public ResponseEntity<String> login(@RequestBody LoginDto loginDto){
        return ResponseEntity.ok(userService.loginUser(loginDto));
    }

    @GetMapping("/user/{username}")
    public ResponseEntity<UserDto> get(@PathVariable String username){
        return ResponseEntity.ok(userService.getUser(username));
    }

    @PutMapping("/user/{username}")
    public ResponseEntity<UserDto> edit(@PathVariable String username,
                                        @RequestBody UserDto userDto){
        return ResponseEntity.ok(userService.editUser(username, userDto));
    }

    @PatchMapping("/user/{username}")
    public ResponseEntity<UserDto> patch(@PathVariable String username,
                                         @RequestBody UserDto userDto){
        return ResponseEntity.ok(userService.patchUser(username, userDto));
    }

    @DeleteMapping("/user/{username}")
    public ResponseEntity<String> delete(@PathVariable String username){
        userService.deleteUser(username);
        return ResponseEntity.ok("User deleted successfully");
    }

}
