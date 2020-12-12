package com.memory.webservices.profile;

//package com.memory.webservices.profile.Profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
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

    @GetMapping("/users/{username}/profile/{id}")
    public Profile getProfile(@PathVariable String username, @PathVariable long id) {

        return profileService.findById(id);
    }

    // DELETE /users/{username}/profiles/{id}
    @DeleteMapping("/users/{username}/profile/{id}")
    public ResponseEntity<Void> deleteProfile(
            @PathVariable String username, @PathVariable long id) {
        Profile profile = profileService.deleteById(id);
        if(profile != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    /*Edit/Update a Profile
   PUT /users/{username}/profile/{id}*/
    @PutMapping("/users/{username}/profile/{id}")
    public ResponseEntity<Profile> updateProfile(
            @PathVariable String username,
            @PathVariable long id, @RequestBody Profile profile) {
        Profile profileUpdated = profileService.save(profile);
        return new ResponseEntity<>(profile, HttpStatus.OK);
    }


    // Create a new Profile
    // POST users/{username}/profile/
    @PostMapping("/users/{username}/profile")
    public ResponseEntity<Void> updateProfile(
            @PathVariable String username,
            @RequestBody Profile profile) {

        Profile createdProfile = profileService.save(profile);

        // Location
        // Get current resource url
        // {id}
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(createdProfile.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

}
