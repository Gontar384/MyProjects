package org.gontar.todolistappv2.Service;

import org.gontar.todolistappv2.Config.MapperConfig.Mapper;
import org.gontar.todolistappv2.Model.AppUser;
import org.gontar.todolistappv2.Model.AppUserDto;
import org.gontar.todolistappv2.Repository.AppUserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AppUserServiceImpl implements AppUserService {

    private final AppUserRepository appUserRepository;
    private final Mapper<AppUser, AppUserDto> mapper;
    private final BCryptPasswordEncoder passwordEncoder;

    public AppUserServiceImpl(AppUserRepository appUserRepository, Mapper<AppUser, AppUserDto> mapper, BCryptPasswordEncoder passwordEncoder) {
        this.appUserRepository = appUserRepository;
        this.mapper = mapper;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public AppUserDto saveUser(AppUserDto appUserDto) {
        AppUser appUser = mapper.mapToEntity(appUserDto);
        appUser.setUsername(appUserDto.getUsername());
        appUser.setPassword(passwordEncoder.encode(appUserDto.getPassword()));
        AppUser savedAppUser = appUserRepository.save(appUser);
        return mapper.mapToDto(savedAppUser);
    }

    @Override
    public boolean findByUsername(String username) {
        return appUserRepository.existsByUsername(username);
    }
}
