package org.gontar.todolistappv2.Repository;

import org.gontar.todolistappv2.Model.AppUser;
import org.gontar.todolistappv2.Model.AppUserDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AppUserRepository extends JpaRepository <AppUser, Long> {
    boolean existsByUsername(String username);
    AppUser findByUsername(String username);
}
