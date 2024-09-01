package org.gontar.todolist.service;

import org.gontar.todolist.model.dto.TaskDto;

import java.util.List;

public interface TaskService {
    List<TaskDto> getAllTasks(String username);

    TaskDto findByUserAndId(String username, Long id);

    TaskDto saveTask(String username, TaskDto task);

    TaskDto editTask(TaskDto taskDto);

    TaskDto patchTask(TaskDto taskDto);

    void deleteTask(String username, Long id);
}
