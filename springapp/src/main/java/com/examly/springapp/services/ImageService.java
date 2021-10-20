package com.examly.springapp.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.examly.springapp.models.*;
import com.examly.springapp.repositories.*;
import com.examly.springapp.services.*;

@Service
public class ImageService {

	@Autowired
	private ImageRepository imageRepository;

	@Autowired
	userServ userService;
	// @Autowired
	// ImageService imageService;

	public Image saveImage(MultipartFile file, String userId, String name, String imageTag) {
		Image image = new Image();
		user user = userService.getUser(userId);
		image.setImageName(name);
		image.setUserId(user);
		image.setImageTag(imageTag);
		Byte[] byteObjects;
		try {
			byteObjects = new Byte[file.getBytes().length];
			int i = 0;
			for (byte b : file.getBytes()) {
				byteObjects[i++] = b;
			}
			image.setImage(byteObjects);
		} catch (IOException e) {
			e.printStackTrace();
		}

		return imageRepository.save(image);
	}

// 	public List<Image> saveImage(List<Image> image) {
// 		return imageRepository.saveAll(image);
// 	}


	// public List<Image> getImage(String id) {

	// 	List<Image> list = new ArrayList<>();
	// 	List<String> friends = userService.getFriends(id);

	// 	System.out.println("Friends Size "+friends.size());
	// 	for (int i = 0; i < friends.size(); i++) {

	// 		list = Stream.concat(list.stream(), imageService.getImage(friends.get(i),true).stream())
	// 				.collect(Collectors.toList());
	// 	}
	// 	return list;
	// }
	
	
	public List<Image> getImage(){
		return imageRepository.findAll();
	}

    
	public Image getImageById(String id) {
		return imageRepository.findById(id).orElse(null);
	}



// 	public List<Image> getImage(String id,boolean possible) {

		
// 		return imageRepository.getByUserId(id);
// 	}

// 	public Image getImageById(String id) {
// 		return imageRepository.findById(id).orElse(null);
// 	}

// 	public void deleteImage(String id) {
// 		imageRepository.deleteById(id);

// 	}

// 	public Image updateImage(Image image) {

// 		Image existingImage = imageRepository.findById(image.getImageId()).orElse(null);
// 		existingImage.setImage(image.getImage());
// //		existingImage.setComments(image.getComments());
// 		existingImage.setImageName(image.getImageName());
// 		existingImage.setImageTag(image.getImageTag());

// 		return imageRepository.save(existingImage);

// 	}

public Image saveImage(Image i) {
		
    return imageRepository.save(i);
}
}
