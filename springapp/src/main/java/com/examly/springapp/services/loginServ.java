package com.examly.springapp.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import org.springframework.transaction.*;
import com.examly.springapp.models.login;
import com.examly.springapp.repositories.loginRepo;
import com.examly.springapp.repositories.userRepo;
@Service
public class loginServ {
	@Autowired
	public loginRepo lr;
	@Autowired
	public userRepo ur;
	public boolean checkUser(login login) {
		if(lr.existsById(login.getEmail())) {
			ur.setActiveForUser(login.getEmail());
			return true;
		}
		else
			return false;
	}
}
