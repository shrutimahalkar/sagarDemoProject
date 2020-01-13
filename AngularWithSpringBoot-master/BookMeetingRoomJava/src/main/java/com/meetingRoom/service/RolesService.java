package com.meetingRoom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.meetingRoom.model.Role;
import com.meetingRoom.repository.RoleRepository;

@Service
public class RolesService {

	@Autowired
	private RoleRepository repo;

	public List<Role> listAll() {
		return repo.findAll();
	}
}
