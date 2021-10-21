package com.examly.springapp.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

import com.examly.springapp.models.*;
import com.examly.springapp.services.*;
import com.examly.springapp.repositories.*;

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

    public void deleteLike(String likeId){
likesRepository.deleteById(likeId);
        // likesRepository.get
        //  Likes likes=likesRepository.getById(likeId);
        //  Image image=likes.getImageId();
        //  List<Likes> list=image.getLikes();
        //   list.removeIf(like-> like.getLikeId().equals(likeId));
        //   image.setLikes(list);
		//   imageService.saveImage(image);
		
    }

}
