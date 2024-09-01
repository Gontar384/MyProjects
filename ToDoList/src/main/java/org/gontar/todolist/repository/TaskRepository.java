package org.gontar.todolist.repository;

import org.gontar.todolist.model.Task;
import org.gontar.todolist.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findAllTasksByUser(User user);
    Optional<Task> findTaskByUserAndId (User user, Long id);
}
