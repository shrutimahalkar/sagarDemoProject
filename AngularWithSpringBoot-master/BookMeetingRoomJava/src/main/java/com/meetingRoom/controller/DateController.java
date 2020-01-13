package com.meetingRoom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.meetingRoom.message.ResponseMessage;
import com.meetingRoom.model.Date;
import com.meetingRoom.model.Room;
import com.meetingRoom.model.User;
import com.meetingRoom.repository.DateRepository;
import com.meetingRoom.repository.UserRepository;
import com.meetingRoom.service.RoomBookingService;
import com.meetingRoom.service.RoomService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class DateController {

	@Autowired
	RoomBookingService roomBookingService;

	@Autowired
	UserRepository userRepository;

	@Autowired
	DateRepository dateRepository;

	@Autowired
	RoomService roomSertvice;

	// to get the date - user, pm, tl
	@PostMapping("/api/bookRoomForm/Datetime")
	public ResponseEntity<?> bookRoomByDate(@RequestBody Date date) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userRepository.findByEmailId(auth.getName());
		String email = user.getEmail();
		Date datetime = new Date(email, date.getDate1(), date.getDate2());
		dateRepository.save(datetime);
		return new ResponseEntity<>(new ResponseMessage("Room Book By Date Successfull"), HttpStatus.OK);
	}

	//to confirm the book room - user,pm,tl
	@GetMapping("/api/bookRoomForm/Datetime")
	public List<Room> bookRoomByDatetime() {
		String status = "CONFIRM";
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userRepository.findByEmailId(auth.getName());
		String email = user.getEmail();
		List<Date> date = dateRepository.AllRequest(email);
		System.out.println(date.get(0).getDate1());
		System.out.println(date.get(0).getDate2());
		List<Room> list = roomSertvice.availableRoomByDate(date.get(0).getDate1(), date.get(0).getDate2(), status);
		System.out.println(list);
		return list;
	}

	//to confirm room by date - user, pm , tl
	@GetMapping("/api/confirmDate")
	public List<Date> confirmRoomByDate(){
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userRepository.findByEmailId(auth.getName());
		String email = user.getEmail();
		List<Date> date = dateRepository.AllRequestRecords();
		return date;
	}

}
