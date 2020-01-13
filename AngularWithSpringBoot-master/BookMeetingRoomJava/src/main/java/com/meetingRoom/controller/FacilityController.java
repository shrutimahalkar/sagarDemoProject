package com.meetingRoom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.meetingRoom.model.Facility;
import com.meetingRoom.service.FacililtyService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class FacilityController {

	@Autowired
	private FacililtyService service;

	//to get the facility - admin panel 
	@GetMapping("/api/faciltiy/getAllFacility")
	public List<Facility> getAllFacility() {
		List<Facility> listFacility = service.listAll();
		return listFacility;
	}

}
