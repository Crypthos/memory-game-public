package com.memory.webservices.profile;

//package com.memory.webservices.profile.Profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    // DELETE /users/{username}/profiles/{id}
    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(
            @PathVariable String username, @PathVariable long id) {
        Profile profile = profileService.deleteById(id);
        if(profile != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

}
