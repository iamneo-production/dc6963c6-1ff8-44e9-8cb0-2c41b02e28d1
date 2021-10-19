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
public class Comment {
	
	
	@Id
	@Column(name="comment_id")
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid")   
    private String commentId;
	@Column(name="comment")
	private String comment;
	@JsonIgnore
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="user_id",referencedColumnName="id")
	private user userId;
	@JsonIgnore
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="image_id",referencedColumnName="image_id")
	private Image imageId;
	
	public Comment(String commentId, String comment,user userId,Image imageId) {
		super();
		this.commentId = commentId;
		this.comment = comment;
		this.userId = userId;
		this.imageId=imageId;
	}
	
	public Comment() {
	}
	
	public String getCommentId() {
		return commentId;
	}
	public void setCommentId(String commentId) {
		this.commentId = commentId;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
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

