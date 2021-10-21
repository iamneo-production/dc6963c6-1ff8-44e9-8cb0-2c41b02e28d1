package com.examly.springapp.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.http.ResponseEntity;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity(name = "Image")
public class Image {

	@Id
	@Column(name = "image_id")
	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "uuid")
	private String imageId;
	@OneToMany(mappedBy = "imageId" , cascade = CascadeType.PERSIST)
	private List<Likes> likes;
	@Column(name = "image_name")
	private String imageName;
	@Column(name = "image_tag")
	private String imageTag;
	@Column(name = "image")
	@Lob
	private Byte[] image;
	@OneToMany(mappedBy = "imageId", cascade = CascadeType.PERSIST)
	private List<Comment> comments;
	@JsonIgnore
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private user userId;
	
	private String user;
	



	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public Image(String imageId, String imageName, String imageTag, Byte[] image, List<Comment> comments, List<Likes> likes) {
		super();
		this.imageId = imageId;
		this.imageName = imageName;
		this.imageTag = imageTag;
		this.image = image;
		this.comments = comments;
		this.likes = likes;
		this.user=userId.getEmail();
	}

	public Image() {
	}

	public String getImageId() {
		return imageId;
	}

	public void setImageId(String imageId) {
		this.imageId = imageId;
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public String getImageTag() {
		return imageTag;
	}

	public void setImageTag(String imageTag) {
		this.imageTag = imageTag;
	}

	public Byte[] getImage() {
		return image;
	}

	public void setImage(Byte[] image) {
		this.image = image;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	public user getUserId() {
		return userId;
	}

	public void setUserId(user userId) {
		this.userId = userId;
	}

	public List<Likes> getLikes() {
		return likes;
	}

	public void setLikes(List<Likes> likes) {
		this.likes = likes;
	}



}

