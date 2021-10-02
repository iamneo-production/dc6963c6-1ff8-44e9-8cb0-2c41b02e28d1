package com.examly.springapp.models;

import javax.persistence.*;

@Entity
public class user {
	
	@Column(name="username")
	private String username;
	@Id
	@Column(name="email")
	private String email;
	@Column(name="password")
	private String password;
	@Column(name="mobile_number")
	private String mobileNumber;
	@Column(name="active")
	private boolean active=true;
	@Column(name="role")
	private String role="ROLE_USER";
	
	
	public user(String email, String password, String username, String mobileNumber, boolean active, String role) {
		super();
		this.email = email;
		this.password = password;
		this.username = username;
		this.mobileNumber = mobileNumber;
		this.active = active;
		this.role = role;
		//this.id=id;
	}
	public user() {
		
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumbner(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}

	//Test
	
	
}
