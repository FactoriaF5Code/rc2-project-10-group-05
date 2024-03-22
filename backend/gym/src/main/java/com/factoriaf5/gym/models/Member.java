package com.factoriaf5.gym.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "members")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    String name;
    String lastName;
    Integer contact;
    
    public Member() {
    }
    
    public Member(Integer id, String name, String lastName, Integer contact) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.contact = contact;
    }
    
    public Integer getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    
    public String getLastName() {
        return lastName;
    }
    
    public Integer getContact() {
        return contact;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }
    
    
    public void setName(String name) {
        this.name = name;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setContact(Integer contact) {
        this.contact = contact;
    }
}
