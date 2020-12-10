package com.memory.webservices.profile;

//package com.memory.webservices.profile.Profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ProfileResource {

    @Autowired
    private ProfileHCService profileService;

    @GetMapping("/users/{username}/profile")
    public List<Profile> getAllProfiles(@PathVariable String username) {
        return profileService.findAll();
    }
}
