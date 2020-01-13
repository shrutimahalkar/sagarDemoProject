package com.meetingRoom.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.meetingRoom.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByEmail(String email);

	@Query(value = "select * from users where username=:username", nativeQuery = true)
	User findByEmailId(@Param("username") String username);

	
	@Query(value = "select * from users where email=:email", nativeQuery = true)
	User findByEmail123(@Param("email") String email);

	public Optional<User> findById(Long id);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);

	@Transactional
	@Modifying(clearAutomatically = true)
	@Query(value = "UPDATE users c SET c.email =:nemail WHERE c.email = :email", nativeQuery = true)
	void updatemail(@Param("email") String email, @Param("nemail") String nemail);

	@Transactional
	@Modifying(clearAutomatically = true)
	@Query(value = "UPDATE users c SET c.department =:newDept WHERE c.email = :email", nativeQuery = true)
	void updateDept(@Param("email") String email, @Param("newDept") String newDept);

}