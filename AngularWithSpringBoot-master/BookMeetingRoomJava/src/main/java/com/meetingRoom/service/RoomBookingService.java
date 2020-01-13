package com.meetingRoom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.meetingRoom.model.RoomBookingDetails;
import com.meetingRoom.repository.RoomBookingDetailsRepository;

@Service
public class RoomBookingService {

	@Autowired
	RoomBookingDetailsRepository repo;

	public void saveBookingRoom(RoomBookingDetails bookingDetails) {
		bookingDetails.setStatus("PENDING");
		repo.save(bookingDetails);
	}

	public List<RoomBookingDetails> listAll() {
		return repo.findAll();
	}

	public List<RoomBookingDetails> pendingStatus(String email) {

		return repo.pendingStatus(email);
	}

	public List<RoomBookingDetails> confirmStatus(String email) {

		return repo.confirmStatus(email);
	}

	public List<RoomBookingDetails> cancelStatus(String email) {

		return repo.cancelStatus(email);
	}

	public List<RoomBookingDetails> allStatus(String email) {
		return repo.allRequest(email);
	}

	public void updateStatus(Long booking_id, String status) {
		repo.updateStatus(booking_id, status);
	}

	public List<RoomBookingDetails> allPendingRequest() {
		return repo.allPendingRequest();
	}

	public List<RoomBookingDetails> allConfirmRequest() {
		return repo.allConfirmRequest();
	}

	public List<RoomBookingDetails> allCancelRequest() {
		return repo.allCancelRequest();
	}

	public void updateemail(String email, String nemail) {
		repo.updatemail(email, nemail);
	}

	public List<RoomBookingDetails> AllStatus(String user) {
		return repo.allRequest(user);
	}
	public List<RoomBookingDetails> allAdminStatus() {
		return repo.allAdminStatus();
	}

	public boolean delete(Long id) {
		repo.deleteById(id);
		return false;
	}

	
}
