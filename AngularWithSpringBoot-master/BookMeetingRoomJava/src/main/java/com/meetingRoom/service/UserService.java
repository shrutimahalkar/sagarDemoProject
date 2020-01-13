package com.meetingRoom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.meetingRoom.model.User;
import com.meetingRoom.repository.RoleRepository;
import com.meetingRoom.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repo;

	@Autowired
	RoleRepository roleRepository;

	public List<User> listAll() {
		return repo.findAll();
	}

	public User save(User user) {
		return repo.save(user);
	}

	public User get(Long id) {
		return repo.findById(id).get();
	}

	public User get(String email) {
		return repo.findByEmail(email).get();
	}

	public boolean delete(Long id) {
		repo.deleteById(id);
		return false;
	}

	public void updateemail(String email, String nemail) {
		repo.updatemail(email, nemail);
	}
}