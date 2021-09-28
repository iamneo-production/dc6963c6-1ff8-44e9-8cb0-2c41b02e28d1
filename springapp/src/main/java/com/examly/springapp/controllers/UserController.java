package com.examly.springapp.controllers;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.models.user;
import com.examly.springapp.services.userServ;

@RestController
public class UserController {
	
	@Autowired
	public userServ us;
	
	@RequestMapping("/hello")
	public String hello(){
		return "HELLO!!";
	}
	
	@RequestMapping("/admin")
	public List<user> getUser(){
		return us.getUser();
	}
	@RequestMapping("/admin/onlineusers")
	List<user> getOnlineUser(){
		return us.getOnlineUser();
	}
	@RequestMapping(method=RequestMethod.PUT, value="/admin/userEdit/{id}")
	user userEdit(@RequestBody user user, @PathVariable String id) {
		//userEditSave(us.userEdit(id));
		return us.userEdit(user,id);
	}
	@RequestMapping(method=RequestMethod.POST, value="/admin/addUser")
	void userEditSave(@RequestBody user user){
		us.userEditSave(user);
	}
	@RequestMapping(method=RequestMethod.DELETE, value="/admin/delete/{id}")
	void userDelete(@PathVariable String id) {
		//userEditSave(us.userEdit(id));
		us.userDelete(id);
	}
}
