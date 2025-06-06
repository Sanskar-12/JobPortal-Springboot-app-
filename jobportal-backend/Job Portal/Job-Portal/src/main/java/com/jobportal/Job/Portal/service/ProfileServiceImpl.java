package com.jobportal.Job.Portal.service;

import com.jobportal.Job.Portal.dto.ProfileDTO;
import com.jobportal.Job.Portal.entity.Profile;
import com.jobportal.Job.Portal.exception.JobPortalException;
import com.jobportal.Job.Portal.repository.ProfileRepository;
import com.jobportal.Job.Portal.utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service(value = "profileService")
public class ProfileServiceImpl implements ProfileService{

    @Autowired
    private ProfileRepository profileRepository;

    @Override
    public Long createProfile(String email, String name) throws JobPortalException {
        Profile profile = new Profile();
        profile.setId(Utilities.getNextSequence("profiles"));
        profile.setEmail(email);
        profile.setName(name);
        profile.setCompany("Not Set");
        profile.setLocation("Not Set");
        profile.setJobTitle("Not Set");
        profile.setSkills(new ArrayList<>());
        profile.setExperience(new ArrayList<>());
        profile.setCertifications(new ArrayList<>());

        profileRepository.save(profile);

        return profile.getId();
    }

    @Override
    public ProfileDTO getProfile(Long id) throws JobPortalException {
        Profile profile = profileRepository.findById(id).orElseThrow(()->new JobPortalException("PROFILE_NOT_FOUND"));

        return profile.toDTO();
    }

    @Override
    public ProfileDTO updateProfile(ProfileDTO profileDTO) throws JobPortalException {
        profileRepository.findById(profileDTO.getId()).orElseThrow(()->new JobPortalException("PROFILE_NOT_FOUND"));

        profileRepository.save(profileDTO.toEntity());

        return profileDTO;
    }

    @Override
    public List<ProfileDTO> getAllProfile() throws JobPortalException {
        return profileRepository.findAll().stream().map((x)->x.toDTO()).toList();
    }
}
