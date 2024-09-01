package org.gontar.todolist.controller;

import org.gontar.todolist.model.dto.TaskDto;
import org.gontar.todolist.service.TaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user/{username}")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/tasks")
    public ResponseEntity<List<TaskDto>> getAll(@PathVariable String username){
        return ResponseEntity.ok(taskService.getAllTasks(username));
    }

    @GetMapping("/tasks/{id}")
    public ResponseEntity<TaskDto> getById(@PathVariable String username,
                                           @PathVariable Long id){
        return ResponseEntity.ok(taskService.findByUserAndId(username, id));
    }

    @PostMapping("/tasks")
    public ResponseEntity<TaskDto> add(@PathVariable String username,
                                       @RequestBody TaskDto taskDto){
        return ResponseEntity.ok(taskService.saveTask(username, taskDto));
    }

    @PutMapping("/tasks/{id}")
    public ResponseEntity<TaskDto> edit(@PathVariable String username,
                                        @PathVariable Long id,
                                        @RequestBody TaskDto taskDto){
        taskService.findByUserAndId(username, id);
        return ResponseEntity.ok(taskService.editTask(taskDto));
    }

    @PatchMapping("/tasks/{id}")
    public ResponseEntity<TaskDto> patch(@PathVariable String username,
                                         @PathVariable Long id,
                                         @RequestBody TaskDto taskDto){
        taskService.findByUserAndId(username, id);
        return ResponseEntity.ok(taskService.patchTask(taskDto));
    }

    @DeleteMapping("/tasks/{id}")
    public ResponseEntity<String> delete(@PathVariable String username,
                                         @PathVariable Long id){
        taskService.deleteTask(username, id);
        return ResponseEntity.ok("Task deleted successfully");
    }
}
