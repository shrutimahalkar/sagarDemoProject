package com.meetingRoom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.meetingRoom.model.Facility;
import com.meetingRoom.repository.FacilityRepository;

@Service
public class FacililtyService {

	@Autowired
	private FacilityRepository repo;

	public List<Facility> listAll() {
		return repo.findAll();
	}
}
