package com.examly.springapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.models.user;
import com.examly.springapp.services.signupServ;

@RestController
public class signupCon {
	public user user;
	@Autowired
	public signupServ ss;
	@RequestMapping(method=RequestMethod.POST, value="/signup")
	boolean saveUser(@RequestBody user user) {
		return ss.saveUser(user);
	}
}
