package com.factoriaf5.gym.controllers;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.factoriaf5.gym.models.Member;
import com.factoriaf5.gym.services.MemberService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping ("api/users")
public class MemberController {
    @Autowired
    private MemberService memberService;

    @GetMapping
    public List<Member> findAll() {
        return memberService.findAll();
    }


   @PostMapping
   public Member create(@RequestBody Member member) {
    return memberService.save(member);
   }
 
}
