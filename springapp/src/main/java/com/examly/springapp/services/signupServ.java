package com.examly.springapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import org.springframework.transaction.*;
import com.examly.springapp.models.login;
import com.examly.springapp.models.user;
import com.examly.springapp.repositories.loginRepo;
import com.examly.springapp.repositories.userRepo;
@Service
public class signupServ {
	@Autowired
	public userRepo ur;
	public user user;
	@Autowired
	public loginRepo lr;
	public boolean saveUser(user user) {
		if(lr.existsById(user.getEmail())) {
			return false;
		}
		else {
			ur.save(user);
			login l=new login(user.getEmail(),user.getPassword());
			lr.save(l);
			return true;
		}
	}

}
