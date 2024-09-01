package org.gontar.todolist.config.mapper;

public interface Mapper <A, B>{
    B mapToDto(A a);
    A mapToEntity(B b);
}
