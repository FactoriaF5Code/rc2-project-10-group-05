package com.factoriaf5.gym.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.factoriaf5.gym.models.Member;
import com.factoriaf5.gym.repository.MemberRepository;

public class MemberService {
@Autowired
private MemberRepository memberRepository;

public Member save(Member member) {
    return memberRepository.save(member);
}
}
