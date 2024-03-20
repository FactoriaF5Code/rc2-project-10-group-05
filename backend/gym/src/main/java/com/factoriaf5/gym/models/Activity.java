package com.factoriaf5.gym.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "activities")
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    String name;
    String day;
    Integer max_member;
    
    public Activity() {
    }
    
    public Activity(Integer id, String name, String day, Integer max_member) {
        this.id = id;
        this.name = name;
        this.day = day;
        this.max_member = max_member;
       
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public Integer getMax_member() {
        return max_member;
    }

    public void setMax_member(Integer max_member) {
        this.max_member = max_member;
    }
    

}
