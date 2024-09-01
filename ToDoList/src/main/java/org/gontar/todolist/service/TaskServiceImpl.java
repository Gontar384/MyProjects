package org.gontar.todolist.service;

import org.gontar.todolist.config.mapper.Mapper;
import org.gontar.todolist.error.ResourceNotFound;
import org.gontar.todolist.model.Task;
import org.gontar.todolist.model.User;
import org.gontar.todolist.model.dto.TaskDto;
import org.gontar.todolist.repository.TaskRepository;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;
    private final UserService userService;
    private final Mapper<Task, TaskDto> mapper;

    public TaskServiceImpl(TaskRepository taskRepository, UserService userService, Mapper<Task, TaskDto> mapper) {
        this.taskRepository = taskRepository;
        this.userService = userService;
        this.mapper = mapper;
    }


    @Override
    public List<TaskDto> getAllTasks(String username) {
        User user = userService.findByUsername(username);
        List<Task> allTasks = taskRepository.findByUser(user);
        return allTasks.stream()
                .map(mapper::mapToDto)
                .toList();
    }

    @Override
    public TaskDto findByUserAndId(String username, Long id) {
        User user = userService.findByUsername(username);
        Task task = taskRepository.findTaskByUserAndId(user, id)
                .orElseThrow(() -> new ResourceNotFound("Task not found"));
        return mapper.mapToDto(task);
    }

    @Override
    public TaskDto saveTask(String username, TaskDto taskDto) {
        User user = userService.findByUsername(username);
        Task task = mapper.mapToEntity(taskDto);
        task.setUser(user);
        task.setName(taskDto.getName());
        task.setDescription(taskDto.getDescription());
        task.setDone(taskDto.getDone());
        taskRepository.save(task);
        return mapper.mapToDto(task);
    }

    @Override
    public TaskDto editTask(TaskDto taskDto) {
        Task task = mapper.mapToEntity(taskDto);
        task.setName(taskDto.getName());
        task.setDescription(taskDto.getDescription());
        task.setDone(taskDto.getDone());
        taskRepository.save(task);
        return mapper.mapToDto(task);
    }

    @Override
    public TaskDto patchTask(TaskDto taskDto) {
        Task task = mapper.mapToEntity(taskDto);
        if (taskDto.getName() != null){
            task.setName(taskDto.getName());
        }
        if (taskDto.getDescription() != null){
            task.setDescription(taskDto.getDescription());
        }
        if (taskDto.getDone() != null){
            task.setDone(taskDto.getDone());
        }
        taskRepository.save(task);
        return mapper.mapToDto(task);
    }

    @Override
    public void deleteTask(String username, Long id) {
        User user = userService.findByUsername(username);
        Task task = taskRepository.findTaskByUserAndId(user, id)
                .orElseThrow(() -> new ResourceNotFound("Task not found"));
        taskRepository.delete(task);
    }
}
