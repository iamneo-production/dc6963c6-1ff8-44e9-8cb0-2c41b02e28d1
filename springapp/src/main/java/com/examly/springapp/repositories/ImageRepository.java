package com.examly.springapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.examly.springapp.models.*;


@Repository
public interface ImageRepository extends JpaRepository<Image,String> {

	//    @Query("SELECT i FROM Image i WHERE user_id =?1")
	//    List<Image> getByUserId(String Id);

}

