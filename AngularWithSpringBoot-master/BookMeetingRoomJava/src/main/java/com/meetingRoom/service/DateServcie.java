package com.meetingRoom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.meetingRoom.model.Date;
import com.meetingRoom.repository.DateRepository;

public class DateServcie {

	@Autowired
	private DateRepository repo;

	public List<Date> date(String email) {
		return repo.AllRequest(email);
	}
}
