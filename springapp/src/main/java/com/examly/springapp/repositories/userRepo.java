package com.examly.springapp.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.examly.springapp.models.user;

public interface userRepo extends CrudRepository<user, String> {
	public List<user> findByActive(boolean active);
	public user findByUsername(String username);
}