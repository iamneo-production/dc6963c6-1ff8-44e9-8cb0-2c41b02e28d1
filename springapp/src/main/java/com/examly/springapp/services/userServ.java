package com.examly.springapp.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.*;
import com.examly.springapp.models.login;
import com.examly.springapp.models.user;
import com.examly.springapp.repositories.loginRepo;
import com.examly.springapp.repositories.userRepo;

@Service
public class userServ {
	@Autowired
	public userRepo ur;
	
	public user user;
	
	@Autowired
	public loginRepo lr;
	
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

	public ResponseEntity<?> userEditSave(user user) {
		HashMap<String, String> h=new HashMap<>();
		ur.save(user);
		login l=new login(user.getEmail(),user.getPassword());
		lr.save(l);
		h.put("Status", "true");
		h.put("Message", "User added successfully");
		return ResponseEntity.ok(h);
	}

	public user userEdit(user user,String id) {
		ur.save(user);
		login l=new login(user.getEmail(),user.getPassword());
		lr.save(l);
		return ur.findById(id).get();
	}

	public void userDelete(String id) {
		lr.deleteById(ur.findById(id).get().getEmail());
		ur.deleteById(id);
	}






//	---------------------------------------------------
	public user getUser(String id) {
		return ur.findById(id).orElse(null);
	}
	
	public List<String> getFriends(String id) {
		return ur.findById(id).orElse(null).getFriends();
	}
	
	public List<user> getSearchedList(String username) {
		
		
		
		return ur.findByusernameIgnoreCaseContaining(username);
	}
}
