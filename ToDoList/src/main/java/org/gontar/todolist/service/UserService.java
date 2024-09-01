package org.gontar.todolist.service;

import org.gontar.todolist.model.User;
import org.gontar.todolist.model.dto.LoginDto;
import org.gontar.todolist.model.dto.UserDto;

public interface UserService {
    UserDto registerUser(UserDto userDto);

    String loginUser(LoginDto loginDto);

    UserDto getUser(String username);

    UserDto editUser(String username, UserDto userDto);

    UserDto patchUser(String username, UserDto userDto);

    void deleteUser(String username);

    User findByUsername(String username);
}
