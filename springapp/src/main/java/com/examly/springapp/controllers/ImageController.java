package com.examly.springapp.controllers;

import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import com.examly.springapp.models.*;
import com.examly.springapp.services.*;
@RestController
@CrossOrigin(origins="*", allowedHeaders="*")
public class ImageController {

	@Autowired
	private ImageService imageService;
	
	@Autowired
	private userServ userService;
	
	
	@Autowired
	private CommentService commentService;
	
	@Autowired 
	private LikesService likesService;
	
    @RequestMapping(method=RequestMethod.POST,value="/addImage")
	public boolean addImage(@RequestParam("imageFile") MultipartFile file,@RequestParam("userId") String userId,@RequestParam("imageName") String imageName,@RequestParam("imageTag") String imageTag) {
		if(imageService.saveImage(file,userId,imageName,imageTag) instanceof Image) {
			return true;
		}
		return false;
	}

	@RequestMapping(method=RequestMethod.GET,value="/getImage")
	public List<Image> getImage(){
		
		try {
			List<Image> list=imageService.getImage();
			System.out.println(list.size());
			list.stream().forEach(image-> {image.setImage(null);image.setUser(image.getUserId().getEmail());});
			System.out.print(list.size());
			return list;
		}catch(Exception e) {
			
			
			System.out.println(e.getMessage());
			return null;
			}
		
	}
	@RequestMapping( method = { RequestMethod.GET, RequestMethod.POST },value="/image")
	public  ResponseEntity<byte[]> getRequiredImage(@RequestHeader("imageId")String imageId){
		  byte[] image = null;
		  Byte[] data =imageService.getImageById(imageId).getImage();
		   image=new byte[data.length];
		  for(int i=0;i<data.length;i++) {
			  image[i]=data[i];
		  }
		  System.out.println("Response Reeceived");
		return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(image);
	}

		
	@RequestMapping(method=RequestMethod.POST,value="/addComment")
	public boolean addComment(@RequestParam("comment") String  comment,@RequestParam("imageId") String  imageId,@RequestParam("userId") String  userId ) {
		
		if(commentService.Comment(comment,userId,imageId) instanceof Comment) {
			
			return true;
		}
		
		return  false;
	}

	
	@RequestMapping(method=RequestMethod.POST,value="/addLikes")
	public boolean addLikes(@RequestParam("imageId") String  imageId,@RequestParam("userId") String  userId ) {
		
		if(likesService.likes(userId, imageId) instanceof Likes) {
			
			return true;
		}
		return  false;
	}

	@RequestMapping(method=RequestMethod.GET,value="/getUser")
	public  userDetails getUserDetails(@RequestHeader("userId") String user){
		userDetails details=new userDetails();
		user User=userService.getUser(user);
		details.setEmail(User.getEmail());
		details.setUserName(User.getUsername());
		details.setPhonenumber(User.getMobileNumber());
		details.setFriendsList(userService.getFriends(user));
		List<Image> image=imageService.getImage(user, true);
		List<String> images=new ArrayList<>();
		image.stream().forEach(i-> {images.add(i.getImageId());});	
		details.setImages(images);
		return details;
	}
	@RequestMapping(method=RequestMethod.POST,value="/deleteLikes")
	public boolean deleteLikes(@RequestParam("likeId") String  likeId) {
		// imageService.deleteById(likeId);
		likesService.deleteLike(likeId);
		return  true;
	}
	// @RequestMapping(method=RequestMethod.POST,value="/deleteComment")
	// public boolean addComment(@RequestParam("commentId") String  commentId ) {
		
	// 	commentService.deleteComment(commentId);
		
	// return true;
	// }
}
