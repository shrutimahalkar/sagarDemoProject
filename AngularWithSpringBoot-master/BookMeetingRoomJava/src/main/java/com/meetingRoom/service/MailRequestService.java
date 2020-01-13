package com.meetingRoom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.meetingRoom.model.mail_request;
import com.meetingRoom.repository.MailRequestRepository;

@Service
public class MailRequestService {

	@Autowired
	MailRequestRepository repo;

	public void savemailreq(mail_request req) {
		repo.save(req);
	}

	public void updateStatusmail(Long id, String status) {
		repo.updatestatus(id, status);

	}

	public mail_request get(Long id) {
		return repo.findById(id).get();
	}

	public List<mail_request> listpendingPM(String status) {

		return repo.selectPendingmailPM(status);
	}

	public List<mail_request> listpendingUser(String department, String status) {

		return repo.selectPendingmailUser(department, status);
	}

	public List<mail_request> listpendingTL(String status) {

		return repo.selectPendingmailTL(status);
	}

	public List<mail_request> listAllPMMail() {

		return repo.listAllPMMail();
	}

	public List<mail_request> AllMailReq(String email, String status) {

		return repo.AllMailReq(email, status);
	}

	public List<mail_request> listAllMailuser(String dept) {
		return repo.listAllMailuser(dept);

	}

	public List<mail_request> listAllmailReqTl() {
		return repo.listAllMailTl();
	}
}
