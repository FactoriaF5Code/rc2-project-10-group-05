package com.factoriaf5.gym.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.factoriaf5.gym.models.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {

    
} 