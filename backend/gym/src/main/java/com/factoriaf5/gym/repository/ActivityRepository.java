package com.factoriaf5.gym.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.factoriaf5.gym.models.Activity;

public interface ActivityRepository extends JpaRepository<Activity, Integer> {
    
}
