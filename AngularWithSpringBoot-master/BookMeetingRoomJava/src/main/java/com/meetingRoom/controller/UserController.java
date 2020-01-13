package com.meetingRoom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.meetingRoom.model.User;
import com.meetingRoom.model.mail_request;
import com.meetingRoom.repository.RoleRepository;
import com.meetingRoom.repository.UserRepository;
import com.meetingRoom.service.MailRequestService;
import com.meetingRoom.service.RoomBookingService;
import com.meetingRoom.service.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UserController {

	@Autowired
	private UserService service;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	MailRequestService mailService;

	@Autowired
	RoomBookingService roomBookingService;

	@GetMapping("/api/user/getAllRoom")
	public List<User> getAllUser() {
		List<User> listUser = service.listAll();
		return listUser;
	}

	// used to get user for id - update query
	@GetMapping("/api/user/{id}")
	public User getUserById(@PathVariable Long id) {
		return service.get(id);
	}

	// used to save user -update
	@PutMapping("/api/user")
	public ResponseEntity<User> updateSaveUser(@RequestBody User user) {
		service.save(user);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

	@DeleteMapping("/api/user/delete/{id}")
	public boolean deleteRoom(@PathVariable Long id) {
		service.delete(id);
		return true;
	}

	@PostMapping("/api/user/role")
	public String updateRole(@RequestBody User user) {
		userRepository.save(user);
		return "user is updated";
	}

	// to get the profile in all - user, pm,tl,admin
	@GetMapping("/api/user/profile")
	public User userProfile() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userRepository.findByEmailId(auth.getName());
		User userDetails = new User(user.getId(), user.getUsername(), user.getEmail(), user.getRoles(),
				user.getDepartment());
		return userDetails;
	}

	// to change mail id
	@PostMapping(value = "/api/editMailSave")
	public ResponseEntity<mail_request> changeMail(@RequestBody String newmail) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userRepository.findByEmailId(auth.getName());
		String email = user.getEmail();
		String roles = user.getRoles().stream().findFirst().get().toString();
		String dept = user.getDepartment();
		mail_request mail = new mail_request();
		mail.setUser_mail(email);
		mail.setDepartment(dept);
		mail.setRole(roles);
		mail.setNew_user_mail(newmail);
		mailService.savemailreq(mail);
		System.out.println(mail);
		return new ResponseEntity<mail_request>(mail, HttpStatus.OK);
	}

}
