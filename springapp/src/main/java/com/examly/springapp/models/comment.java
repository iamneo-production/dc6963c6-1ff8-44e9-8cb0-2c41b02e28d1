package com.examly.springapp.models;
public class comment {
    private String commentId;
	private String comment;
	private user userId;
	
	
	public comment(String commentId, String comment, user userId) {
		super();
		this.commentId = commentId;
		this.comment = comment;
		this.userId = userId;
	}
	
	public comment() {
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
}
