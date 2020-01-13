package com.meetingRoom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.meetingRoom.model.Role;
import com.meetingRoom.service.RolesService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class RoleContoller {

	@Autowired
	private RolesService service;

	@GetMapping("/api/roles/getAllRoles")
	public List<Role> getAllRoom() {
		List<Role> listRole = service.listAll();
		return listRole;
	}

}
