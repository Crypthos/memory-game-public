package com.memory.webservices.profile;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProfileHCService {

    private static final List<Profile> profiles = new ArrayList();
    private static int idCounter = 0;

    static{
        profiles.add(new Profile(++idCounter, "Team08", "Gamer name", "Team08" ));
        profiles.add(new Profile(++idCounter, "Team08", "Email", "team08@hva.nl" ));
        profiles.add(new Profile(++idCounter, "Team08", "About Me", "Developer" ));
    }

    public List<Profile> findAll() {
        return profiles;
    }

    public Profile save(Profile profile) {

            if (profile.getId()==-1 || profile.getId()==0) {
                profile.setId(++idCounter);
                profiles.add(profile);
            } else {
                deleteById(profile.getId());
                profiles.add(profile);
            }
            return profile;
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
