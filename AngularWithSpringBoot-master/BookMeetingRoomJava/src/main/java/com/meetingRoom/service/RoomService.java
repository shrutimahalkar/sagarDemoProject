package com.meetingRoom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.meetingRoom.model.Room;
import com.meetingRoom.repository.RoomRepository;

@Service
public class RoomService {

	@Autowired
	private RoomRepository repo;

	public List<Room> listAll() {
		return repo.findAll();
	}

	public Room save(Room room) {
		return repo.save(room);
	}

	public Room get(Long id) {
		return repo.findById(id).get();
	}

	public boolean delete(Long id) {
		repo.deleteById(id);
		return false;
	}

	public boolean isUserAlreadyPresent(Room room) {
		// TODO Auto-generated method stub
		return false;
	}

	public Room SaveEditRoom(Room room) {
		return repo.save(room);
	}

	public List<Room> selectAvailable() {

		return repo.selectAvailable();
	}

	public void updateStatusPending(Long id, String status) {

		repo.updateStatus(id, status);

	}

	public List<Room> availableRoomByDate(String date1, String date2, String status) {
		System.out.println("in available");
		System.out.println(status);

		return repo.availableRoomByDate(date1, date2, status);
	}
	
	

}
