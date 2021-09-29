package com.examly.springapp.models;
import java.sql.Blob;
public class image {
    private String imageId;
	private String imageName;
	private Blob image;
	private comment comments;
	
	public image(String imageId, String imageName, Blob image, comment comments) {
		super();
		this.imageId = imageId;
		this.imageName = imageName;
		this.image = image;
		this.comments = comments;
	}
	
	public image() {
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
	public Blob getImage() {
		return image;
	}
	public void setImage(Blob image) {
		this.image = image;
	}
	public comment getComments() {
		return comments;
	}
	public void setComments(comment comments) {
		this.comments = comments;
	}
}
