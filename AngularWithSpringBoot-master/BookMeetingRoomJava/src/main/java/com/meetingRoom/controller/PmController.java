package com.meetingRoom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.meetingRoom.message.ResponseMessage;
import com.meetingRoom.model.User;
import com.meetingRoom.model.mail_request;
import com.meetingRoom.repository.RoleRepository;
import com.meetingRoom.repository.UserRepository;
import com.meetingRoom.service.EmailSenderService;
import com.meetingRoom.service.MailRequestService;
import com.meetingRoom.service.RoomBookingService;
import com.meetingRoom.service.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class PmController {

	@Autowired
	UserService service;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	MailRequestService mailService;

	@Autowired
	RoomBookingService roomBookingService;

	@Autowired
	EmailSenderService emailSenderService;

	// get usermailrequest for tl
	@GetMapping(value = "/api/tlAllMailRequest")
	public List<mail_request> tlMailRequest() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userRepository.findByEmailId(auth.getName());
		List<mail_request> mail = mailService.listAllmailReqTl();
		System.out.println(mail);
		return mail;
	}

	// to pending tl request - tl
	@GetMapping("/api/tlAllPendingRequest")
	public List<mail_request> allpendingMailRequest() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userRepository.findByEmailId(auth.getName());
		String status = "PENDING";
		List<mail_request> mail = mailService.listpendingTL(status);
		System.out.println(mail);
		return mail;
	}

	// to get the mail confirm - tl
	@GetMapping("/api/tlAllConfirmRequest")
	public List<mail_request> allConfirmMailRequest() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userRepository.findByEmailId(auth.getName());
		String status = "CONFIRM";
		List<mail_request> mail = mailService.listpendingTL(status);
		System.out.println(mail);
		return mail;
	}

	// to get the mail cancel -tl
	@GetMapping("/api/tlAllCancelRequest")
	public List<mail_request> allCancelMailRequest() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userRepository.findByEmailId(auth.getName());
		String status = "CANCEL";
		List<mail_request> mail = mailService.listpendingTL(status);
		System.out.println(mail);
		return mail;
	}

	// to confirm tl request - tl
	@GetMapping(value = "/api/changeConfirmmailtl/{id}")
	public ResponseEntity<?> confirmMail(@PathVariable Long id) {

		String status = "CONFIRM";
		mailService.updateStatusmail(id, status);

		mail_request mail = mailService.get(id);
		String email = mail.getUser_mail();
		String nemail = mail.getNew_user_mail();

		service.updateemail(email, nemail);
		roomBookingService.updateemail(email, nemail);

		SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setTo(mail.getUser_mail());
		mailMessage.setSubject("Complete Password Reset!");
		mailMessage.setFrom("nairobley@gmail.com");
		mailMessage.setText("Mail has been changed successfully");

		emailSenderService.sendEmail(mailMessage);
		return new ResponseEntity<>(new ResponseMessage("Email Sent Successfull"), HttpStatus.OK);
	}

	// to confirm tl request - tl
	@GetMapping(value = "/api/changeCancelmailtl/{id}")
	public ResponseEntity<?> cancelMail(@PathVariable Long id) {

		String status = "CANCEL";
		mailService.updateStatusmail(id, status);

		mail_request mail = mailService.get(id);
		String email = mail.getUser_mail();
		String nemail = mail.getNew_user_mail();

		service.updateemail(email, nemail);
		roomBookingService.updateemail(email, nemail);

		SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setTo(mail.getUser_mail());
		mailMessage.setSubject("Complete Password Reset!");
		mailMessage.setFrom("nairobley@gmail.com");
		mailMessage.setText("Sorry your mail request has been cancel. Please try it out once again");

		emailSenderService.sendEmail(mailMessage);
		return new ResponseEntity<>(new ResponseMessage("Email Sent Successfull"), HttpStatus.OK);
	}

}
