package com.memory.webservices.profile;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProfileHCService {

    private static List<Profile> profiles = new ArrayList();
    private static int idCounter = 0;

    static{
        profiles.add(new Profile(++idCounter, "Team08", "Name : ", "Team08" ));
        profiles.add(new Profile(++idCounter, "Team08", "Email : ", "team08@hva.nl" ));
        profiles.add(new Profile(++idCounter, "Team08", "About Me : ", "Developer" ));
    }

    public List<Profile> findAll() {
        return profiles;
    }

    public Profile deleteById(long id) {
        Profile profile = findById(id);

        if (profile == null) return null;

        if (profiles.remove(profile)) {
            return profile;
        }
        return null;
    }


    public Profile findById(long id) {
        for(Profile profile:profiles){
            if(profile.getId() == id){
                return profile;
            }
        }
        return null;
    }


}
