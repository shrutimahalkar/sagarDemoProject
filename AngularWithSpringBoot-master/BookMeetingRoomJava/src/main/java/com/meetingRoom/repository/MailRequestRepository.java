package com.meetingRoom.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.meetingRoom.model.mail_request;

@Repository
public interface MailRequestRepository extends JpaRepository<mail_request, Long> {

	@Query(value = "select * from mail_request where status=:status && role='ROLE_PM'", nativeQuery = true)
	public List<mail_request> selectPendingmailPM(@Param("status") String status);

	@Transactional
	@Modifying(clearAutomatically = true)
	@Query(value = "UPDATE mail_request c SET c.status =:status WHERE c.mailrequest_id = :mailrequest_id", nativeQuery = true)
	int updatestatus(@Param("mailrequest_id") Long mailrequest_id, @Param("status") String status);

	@Query(value = "select * from mail_request where status=:status && department=:department && role='ROLE_USER'", nativeQuery = true)
	public List<mail_request> selectPendingmailUser(@Param("department") String department,
			@Param("status") String status);

	@Query(value = "select * from mail_request where status=:status && role='ROLE_TL'", nativeQuery = true)
	public List<mail_request> selectPendingmailTL(@Param("status") String status);

	@Query(value = "select * from mail_request where role='ROLE_PM'", nativeQuery = true)
	public List<mail_request> listAllPMMail();

	@Query(value = "select * from mail_request where user_mail=:email && status=:status", nativeQuery = true)
	public List<mail_request> AllMailReq(@Param("email") String email, @Param("status") String status);

	@Query(value = "select * from mail_request where department=:department && role='ROLE_USER'", nativeQuery = true)
	public List<mail_request> listAllMailuser(@Param("department") String department);

	@Query(value = "select * from mail_request where role='ROLE_TL'", nativeQuery = true)
	public List<mail_request> listAllMailTl();

}