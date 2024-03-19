package com.factoriaf5.gym.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.factoriaf5.gym.models.Member;
import com.factoriaf5.gym.services.MemberService;

public class MemberController {
    @Autowired
    private MemberService memberService;


   @PostMapping
   public Member create(@RequestBody Member member) {
    return memberService.save(member);
   }
 
}
