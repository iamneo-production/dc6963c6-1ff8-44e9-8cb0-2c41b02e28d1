package com.examly.springapp.models;

import javax.persistence.*;
import java.util.*;
import org.hibernate.annotations.GenericGenerator;

@Entity
public class user {
	@Id
	@GeneratedValue(generator="uuid")
	@GenericGenerator(name="uuid", strategy="uuid2")
	@Column(name="id")
	private String id;
	@Column(name="username")
	private String username;
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

	@ElementCollection
	@CollectionTable(name = "Friends", joinColumns = @JoinColumn(name = "id"))
	@Column(name = "friends")
	private List<String> friends;

	@OneToMany(mappedBy = "userId")
	private List<Comment> comment;
	@OneToMany(mappedBy = "userId")
	private List<Image> image;
	
	@OneToMany(mappedBy = "userId")
	private List<Likes> likes;
	
	
	public user(String id, String email, String password, String username, String mobileNumber, boolean active, String role) {
		super();
		this.email = email;
		this.password = password;
		this.username = username;
		this.mobileNumber = mobileNumber;
		this.active = active;
		this.role = role;
		this.id=id;
	}
	public user() {
		
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
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

	public List<Likes> getLikes() {
		return likes;
	}

	public void setLikes(List<Likes> likes) {
		this.likes = likes;
	}
	public List<String> getFriends() {
		return friends;
	}

	public void setFriends(List<String> friends) {
		this.friends = friends;
	}

	public List<Comment> getComment() {
		return comment;
	}

	public void setComment(List<Comment> comment) {
		this.comment = comment;
	}

	public List<Image> getImage() {
		return image;
	}

	public void setImage(List<Image> image) {
		this.image = image;
	}


	//Test
	
	
}
