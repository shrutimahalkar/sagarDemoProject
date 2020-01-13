package com.meetingRoom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.meetingRoom.message.ResponseMessage;
import com.meetingRoom.model.Date;
import com.meetingRoom.model.RoomBookingDetails;
import com.meetingRoom.model.User;
import com.meetingRoom.repository.DateRepository;
import com.meetingRoom.repository.UserRepository;
import com.meetingRoom.service.RoomBookingService;
import com.meetingRoom.service.RoomService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class BookingController {

	@Autowired
	RoomBookingService roomBookingService;

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	DateRepository dateRepository;

	@Autowired
	RoomService roomSertvice;
	

	@PostMapping("/api/room/bookRoom")
	public ResponseEntity<?> bookRoom(@RequestBody RoomBookingDetails room) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userRepository.findByEmailId(auth.getName());
		System.out.println(auth.getName());
		System.out.println(user.toString());
		String email = user.getEmail();
		room.setUser_mail(email);
		List<Date> date = dateRepository.AllRequestRecords();
		String date1 = date.get(0).getDate1();
		String date2 = date.get(0).getDate2();
		room.setBookingDateFrom(date1);
		room.setBookingDateTo(date2);
		roomBookingService.saveBookingRoom(room);
		System.out.println(room.toString());
		System.out.println("Book Room Succe");
		return new ResponseEntity<>(new ResponseMessage("Book Room Successfull"), HttpStatus.OK);
	}

	//to get the confirm book room - admin panel
	@GetMapping("/api/room/bookRoom/confirmRequest/{booking_id}/{id}")
	public ResponseEntity<?> confirmRequest(@PathVariable(name = "booking_id") Long booking_id,
			@PathVariable(name = "id") Long room_id) {
		String status = "CONFIRM";
		roomBookingService.updateStatus(booking_id, status);
		return new ResponseEntity<>(new ResponseMessage("Confirm Room Successfull"), HttpStatus.OK);

	}

	//to get the cancel book room - admin panel
	@GetMapping("/api/room/bookRoom/cancelRequest/{booking_id}/{id}")
	public ResponseEntity<?> cancelRequest(@PathVariable(name = "booking_id") Long booking_id,
			@PathVariable(name = "id") Long room_id) {
		String status = "CANCEL";
		roomBookingService.updateStatus(booking_id, status);
		return new ResponseEntity<>(new ResponseMessage("Cancel Room Successfull"), HttpStatus.OK);
	}

	@GetMapping("/api/getUserRoom/getAllBookRoom")
	public List<RoomBookingDetails> getAllBookRoom() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userRepository.findByEmailId(auth.getName());
		String email = user.getEmail();
		List<RoomBookingDetails> listAllBookRoom = roomBookingService.allStatus(email);
		return listAllBookRoom;
	}

	@GetMapping("/api/getUserRoom/pendingStatus")
	public List<RoomBookingDetails> pendingStatus() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userRepository.findByEmailId(auth.getName());
		String email = user.getEmail();
		List<RoomBookingDetails> list = roomBookingService.pendingStatus(email);
		return list;
	}

	@GetMapping("/api/getUserRoom/confirmStatus")
	public List<RoomBookingDetails> confirmStatus(Authentication authentication) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userRepository.findByEmailId(auth.getName());
		String email = user.getEmail();
		List<RoomBookingDetails> list = roomBookingService.confirmStatus(email);
		return list;
	}

	@GetMapping(value = "/api/getUserRoom/cancelStatus")
	public List<RoomBookingDetails> cancelStatus(Authentication authentication) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userRepository.findByEmailId(auth.getName());
		String email = user.getEmail();
		List<RoomBookingDetails> list = roomBookingService.cancelStatus(email);
		return list;
	}

	// to show admin confirm cancel and pending records - admin panel 
	@GetMapping("/api/bookRoom/getAllBookRoom")
	public List<RoomBookingDetails> getAllAdminBookRoom() {
		List<RoomBookingDetails> listAllBookRoom = roomBookingService.allAdminStatus();
		return listAllBookRoom;
	}

}
