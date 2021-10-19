package com.examly.springapp.models;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity

public class Likes {
	
	@Id
	@Column(name="like_id")
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid")   
	private String likeId;
	@JsonIgnore
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="user_id",referencedColumnName="id")
	private user userId;
	@JsonIgnore
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="image_id",referencedColumnName="image_id")
	private Image imageId;
	
	
	public Likes(){
		
		
	}
	
	public Likes(user userId,Image imageId) {
		this.userId=userId;
		this.imageId=imageId;
	}

	public String getLikeId() {
		return likeId;
	}

	public void setLikeId(String likeId) {
		this.likeId = likeId;
	}

	public user getUserId() {
		return userId;
	}

	public void setUserId(user userId) {
		this.userId = userId;
	}

	public Image getImageId() {
		return imageId;
	}

	public void setImageId(Image imageId) {
		this.imageId = imageId;
	}
	
	
	
	

}
