package com.examly.springapp.repositories;

import org.springframework.data.repository.CrudRepository;
import com.examly.springapp.models.login;

public interface loginRepo extends CrudRepository<login, String>  {
    public login deleteByEmail(String email);
}
