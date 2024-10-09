package org.gontar.todolistappv2.Service;

import org.gontar.todolistappv2.Model.AppUserDto;

public interface AppUserService {
    AppUserDto saveUser(AppUserDto appUserDto);
    boolean findByUsername(String username);
}
