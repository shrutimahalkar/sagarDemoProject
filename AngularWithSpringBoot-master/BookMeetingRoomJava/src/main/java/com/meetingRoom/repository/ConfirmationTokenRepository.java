package com.meetingRoom.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.meetingRoom.model.ConfirmationToken;
import com.meetingRoom.model.Date;

public interface ConfirmationTokenRepository extends CrudRepository<ConfirmationToken, String> {
	ConfirmationToken findByConfirmationToken(String confirmationToken);
	
	@Query(value = "select * from confirmation_token where email= :email", nativeQuery = true)
	public List<Date> AllRequest(@Param("email") String email);

}