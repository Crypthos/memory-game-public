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
        profiles.add(new Profile(++idCounter, "Team08", "Email", "team08@hva.nl" ));
        profiles.add(new Profile(++idCounter, "Team08", "Password", "*****" ));
    }

    public List<Profile> findAll() {
        return profiles;
    }
}
