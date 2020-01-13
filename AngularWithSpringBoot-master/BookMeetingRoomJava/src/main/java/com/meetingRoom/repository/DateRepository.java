package com.meetingRoom.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.meetingRoom.model.Date;

@Repository
public interface DateRepository extends JpaRepository<Date, Long> {

	@Query(value = "select * from date where email= :email", nativeQuery = true)
	public List<Date> AllRequest(@Param("email") String email);

	@Query(value = "select * from date ORDER BY ID DESC LIMIT 1", nativeQuery = true)
	public List<Date> AllRequestRecords();
}

