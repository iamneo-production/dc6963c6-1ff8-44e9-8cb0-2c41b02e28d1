package com.examly.springapp.controllers;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.MyUserDetailsService;
import com.examly.springapp.models.AuthenticationResponse;
import com.examly.springapp.models.JwtUtil;
import com.examly.springapp.models.login;
import com.examly.springapp.models.user;
import com.examly.springapp.repositories.userRepo;
import com.examly.springapp.services.loginServ;
@RestController
public class loginCon {
	public login login;
	@Autowired
	public loginServ ls;
	@Autowired
	public userRepo ur;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private MyUserDetailsService userDetailsService;
	@Autowired
	private JwtUtil jwtTokenUtil;
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody user user) throws Exception {
		HashMap <String, String> h=new HashMap<>();
		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword())
			);
		}
		catch (BadCredentialsException e) {
			h.put("Status", "false");
			h.put("Message", "Invalid credentials");
			return ResponseEntity.ok(h);
		}


		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(user.getEmail());

		final String jwt = jwtTokenUtil.generateToken(userDetails);
		h.put("jwt", jwt);
		h.put("Status", "true");
		h.put("Message", "Logged in successfully");
		String username=ur.findById(user.getEmail()).get().getUsername();
		h.put("username",username);
		h.put("email",user.getEmail());
		return ResponseEntity.ok(h);
	}

}

