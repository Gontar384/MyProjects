package org.gontar.carsold.Service;

import org.gontar.carsold.Config.JwtConfig.JwtService;
import org.gontar.carsold.Config.MapperConfig.Mapper;
import org.gontar.carsold.Model.User;
import org.gontar.carsold.Model.UserDto;
import org.gontar.carsold.Repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository repository;
    private final Mapper<User, UserDto> mapper;
    private final BCryptPasswordEncoder encoder;
    private final JwtService jwtService;
    AuthenticationManager authenticationManager;

    public UserServiceImpl(UserRepository repository, Mapper<User, UserDto> mapper, BCryptPasswordEncoder encoder, JwtService jwtService) {
        this.repository = repository;
        this.mapper = mapper;
        this.encoder = encoder;
        this.jwtService = jwtService;
    }

    @Override
    public boolean findUsername(String username) {
        return repository.existsByUsername(username);
    }

    @Override
    public boolean findEmail(String email) {
        return repository.existsByEmail(email);
    }

    @Override
    public void saveUser(UserDto userDto) {
        User user = mapper.mapToEntity(userDto);
        user.setEmail(userDto.getEmail());
        user.setUsername(userDto.getUsername());
        user.setPassword(encoder.encode(userDto.getPassword()));
        repository.save(user);
    }
}
