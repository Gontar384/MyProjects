package org.gontar.carsold.Service;

import org.gontar.carsold.Model.UserDto;

public interface UserService {
    boolean findUsername(String username);
    boolean findEmail(String email);
    void saveUser(UserDto userDto);
}
