package org.gontar.todolist.service;

import org.gontar.todolist.model.dto.TaskDto;

import java.util.List;

public interface TaskService {
    List<TaskDto> getAllTasks(String username);

    TaskDto saveTask(String username, TaskDto task);

    TaskDto editTask(String username, Long id, TaskDto taskDto);

    TaskDto patchTask(String username, Long id, TaskDto taskDto);

    void deleteTask(String username, Long id);

    TaskDto getTask(String username, Long id);
}
