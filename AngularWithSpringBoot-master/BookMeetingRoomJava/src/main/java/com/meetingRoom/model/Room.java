package com.meetingRoom.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "room_detail")
public class Room {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "room_id")
	private Long id;

	@Column(name = "room_name")
	private String name;

	private String location;

	@ManyToMany(cascade = CascadeType.MERGE)
	@JoinTable(name = "room_detail_facility", joinColumns = @JoinColumn(name = "room_id"), inverseJoinColumns = @JoinColumn(name = "facility_id"))
	private Set<Facility> facility;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Set<Facility> getFacility() {
		return facility;
	}

	public void setFacility(Set<Facility> facility) {
		this.facility = facility;
	}

	@Override
	public String toString() {
		return "Room [id=" + id + ", name=" + name + ", location=" + location + ", facility=" + facility + "]";
	}

	public Room() {

	}

}