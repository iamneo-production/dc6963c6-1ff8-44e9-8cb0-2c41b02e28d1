package com.examly.springapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.repositories.*;
import com.examly.springapp.models.*;

@Service
public class LikesService {
	
	
	@Autowired
	private LikesRepository likesRepository;
	
	
	@Autowired
	private ImageService imageService;
	
	
	@Autowired
	private userServ userService;
	
	
	
	
	public Likes likes(String userId,String imageId) {
		
		
		
		Image image=imageService.getImageById(imageId);
		user User=userService.getUser(userId);
		Likes likes=new Likes(User,image);
		
		
		
		return likesRepository.save(likes);
		
	}

}
