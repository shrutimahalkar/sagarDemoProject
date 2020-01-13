package com.meetingRoom.message;

import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

public class SignUpForm {

	@Size(min = 3, max = 50)
	private String username;

	@Size(max = 60)
	@Email
	private String email;

	private String department;

	private Set<String> role;

	@Size(min = 6, max = 40)
	private String password;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<String> getRole() {
		return this.role;
	}

	public void setRole(Set<String> role) {
		this.role = role;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

}
