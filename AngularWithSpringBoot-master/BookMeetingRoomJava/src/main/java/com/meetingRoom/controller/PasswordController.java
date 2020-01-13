package com.meetingRoom.controller;

import java.io.IOException;
import java.util.Calendar;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.meetingRoom.message.ResponseMessage;
import com.meetingRoom.model.ConfirmationToken;
import com.meetingRoom.model.User;
import com.meetingRoom.repository.ConfirmationTokenRepository;
import com.meetingRoom.repository.UserRepository;
import com.meetingRoom.service.EmailSenderService;
import com.meetingRoom.service.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class PasswordController {

	@Autowired
	BCryptPasswordEncoder encoder;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ConfirmationTokenRepository confirmationTokenRepository;

	@Autowired
	private EmailSenderService emailSenderService;

	@Autowired
	UserService userServiceImp;

	@PostMapping("/api/auth/forgot-password")
	public ResponseEntity<?> forgotUserPassword(@RequestBody String email) {
		User existingUser = userRepository.findByEmail(email).get();
		if (existingUser != null) {
			ConfirmationToken confirmationToken = new ConfirmationToken(existingUser);

			confirmationTokenRepository.save(confirmationToken);

			SimpleMailMessage mailMessage = new SimpleMailMessage();
			mailMessage.setTo(existingUser.getEmail());
			mailMessage.setSubject("Complete Password Reset!");
			mailMessage.setFrom("nairobley@gmail.com");
//			mailMessage.setText("To complete the password reset process, please click here: "
//					+ "http://10.0.100.202:8080/BookMeetingRoom/confirm-reset?token=" + confirmationToken.getConfirmationToken());

			mailMessage.setText("To complete the password reset process, please click here: "
					+ "http://localhost:8080/api/auth/confirm-reset?token=" + confirmationToken.getConfirmationToken());
			emailSenderService.sendEmail(mailMessage);
//			return new ResponseEntity<>(new ResponseMessage("message\",\n"
//					+ "					\"Request to reset password received. Check your inbox for the reset link.\""),
//					HttpStatus.OK);

		} else {
			return new ResponseEntity<>(new ResponseMessage("email sent successfully "), HttpStatus.OK);
		}
		return null;
	}

	@SuppressWarnings("unused")
	@RequestMapping(value = "/api/auth/confirm-reset", method = { RequestMethod.GET, RequestMethod.POST })
	public ResponseEntity<?> validateResetToken(@RequestParam("token") String confirmationToken,
			HttpServletRequest request, HttpServletResponse response) throws IOException {
		ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);

		Calendar calendar = Calendar.getInstance();
		if (calendar.getTime().getTime() - token.getCreatedDate().getTime() > (50 * 60 * 1000)) {
			return new ResponseEntity<>(new ResponseMessage("date is wrong"), HttpStatus.OK);
		} else if (token != null) {
			User user = userRepository.findByEmail(token.getUser().getEmail()).get();
			userRepository.save(user);
			String email = user.getEmail();

			response.sendRedirect("http://localhost:4200/api/auth/confirm-reset1?email=" + email);

			return new ResponseEntity<>(new ResponseMessage("email sent successfully"), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(new ResponseMessage("The link is invalid"), HttpStatus.OK);
		}
	}

	@PostMapping(value = "/api/auth/reset-password")
	public ResponseEntity<?> resetUserPassword(@RequestBody User user) {
		System.out.println(user.toString());

		if (user.getEmail() != null) {
			User tokenUser = userRepository.findByEmail123(user.getEmail());
			tokenUser.setPassword(encoder.encode(user.getPassword()));
			userRepository.save(tokenUser);
			return new ResponseEntity<>(
					new ResponseMessage("Password successfully reset. You can now log in with the new credentials."),
					HttpStatus.OK);
		} else {
			return new ResponseEntity<>(new ResponseMessage("Link is Broken or invalid "), HttpStatus.OK);
		}
	}

}