package com.examly.springapp.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.models.*;
import com.examly.springapp.services.*;
import com.examly.springapp.repositories.*;

@Service
public class CommentService {
	
	
	@Autowired
	private commentRepository commentRepo;
	
	
	@Autowired
	private ImageService imageService;
	
	
	@Autowired
	private userServ userService;
	
	public Comment Comment(String content,String userId,String imageId) {
		
		
		
		Image image=imageService.getImageById(imageId);
		user User=userService.getUser(userId);
		Comment comment=new Comment();
		
		comment.setComment(content);
		comment.setImageId(image);
		comment.setUserId(User);
		
		return commentRepo.save(comment);
		
	}

    public void deleteComment(String commentId){


         commentRepo.deleteById(commentId);
    }

}
