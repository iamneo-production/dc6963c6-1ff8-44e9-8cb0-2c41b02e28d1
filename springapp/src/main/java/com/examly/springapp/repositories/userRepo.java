package com.virtusa.hackathon.repositories;

import java.util.List;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.virtusa.hackathon.models.user;

public interface userRepo extends CrudRepository<user, String> {
	public List<user> findByActive(boolean active);
	public user findByUsername(String username);
	@Modifying
	@Transactional
	@Query("update user u set u.active=1 where u.email=?1")
	void setActiveForUser(String email);
}