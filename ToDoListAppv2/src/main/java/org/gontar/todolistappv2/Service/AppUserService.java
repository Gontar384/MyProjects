package org.gontar.todolistappv2.Service;

import org.gontar.todolistappv2.Model.AppUserDto;

public interface AppUserService {
    void save(AppUserDto appUserDto);
    String authenticate (AppUserDto appUserDto);
    boolean findByUsername(String username);
    AppUserDto findUserByUsername(String username);
}
