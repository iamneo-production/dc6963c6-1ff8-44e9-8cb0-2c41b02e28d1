package com.examly.springapp.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.*;

import com.examly.springapp.models.user;
import com.examly.springapp.repositories.userRepo;

@Service
public class userServ {
	@Autowired
	public userRepo ur;
	public user user;
	
	public List<user> getUser(){
		List<user> user=new ArrayList<>();
		ur.findAll().forEach(user::add);
		return user;
	}

	public List<user> getOnlineUser() {
		List<user> onlineuser=new ArrayList<>();
		ur.findByActive(true).forEach(onlineuser::add);
		return onlineuser;
	}

	public void userEditSave(user user) {
		ur.save(user);
	}

	public user userEdit(user user,String id) {
		ur.save(user);
		return ur.findByUsername(id);
	}

	public void userDelete(String id) {
		ur.deleteById(id);
	}
}