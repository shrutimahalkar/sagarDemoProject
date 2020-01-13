package com.meetingRoom.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.meetingRoom.model.Room;
import com.meetingRoom.service.RoomService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class RoomController {

	@Autowired
	private RoomService service;

	// to get all room - admin panel
	@GetMapping("/api/room/getAllRoom")
	public List<Room> getAllRoom() {
		List<Room> listRoom = service.listAll();
		return listRoom;
	}

	// used to get room for id - update query
	@GetMapping("/api/room/{id}")
	public Room getRoomById(@PathVariable Long id) {
		return service.get(id);
	}

	// used to save room -update
	@PutMapping("/api/room/{id}")
	public ResponseEntity<Room> updateSaveRoom(@PathVariable long id, @RequestBody Room room) {
		service.save(room);
		return new ResponseEntity<Room>(room, HttpStatus.OK);
	}

	// delete room in admin panel- admin panel
	@DeleteMapping("/api/room/delete/{id}")
	public boolean deleteRoom(@PathVariable Long id) {
		service.delete(id);
		return true;
	}

	//to create a room - admin panel 
	@PostMapping("/api/room/add")
	public Room createRoom(@Valid @RequestBody Room room) {
		System.out.println(room.toString());
		room.getId();
		room.getLocation();
		room.getName();
		room.getFacility();
		return service.save(room);
	}
}
