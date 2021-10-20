package com.examly.springapp.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.models.*;

public interface commentRepository extends JpaRepository<Comment,String>{

}
