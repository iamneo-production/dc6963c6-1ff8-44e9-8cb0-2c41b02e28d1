package com.examly.springapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.models.Comment;

public interface commentRepository extends JpaRepository<Comment,String>{

}
