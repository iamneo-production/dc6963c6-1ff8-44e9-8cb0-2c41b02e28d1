package com.examly.springapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.models.login;
import com.examly.springapp.services.loginServ;
@RestController
public class loginCon {
	public login login;
	@Autowired
	public loginServ ls;
	@RequestMapping(method=RequestMethod.POST,value="/login")
	boolean checkUser(@RequestBody login login) {
		return ls.checkUser(login);
	}
}
