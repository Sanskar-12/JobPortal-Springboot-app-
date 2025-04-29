package com.jobportal.Job.Portal.api;

import com.jobportal.Job.Portal.dto.ProfileDTO;
import com.jobportal.Job.Portal.exception.JobPortalException;
import com.jobportal.Job.Portal.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@Validated
@CrossOrigin
@RequestMapping("/profiles")
public class profileAPI {

    @Autowired
    private ProfileService profileService;

    @GetMapping("/getprofile/{id}")
    public ResponseEntity<ProfileDTO> getUserProfile(@PathVariable Long id) throws JobPortalException {
        ProfileDTO profileDTO = profileService.getProfile(id);
        return new ResponseEntity<>(profileDTO, HttpStatus.OK);
    }

    @PutMapping("/updateprofile")
    public ResponseEntity<ProfileDTO> updateUserProfile(@RequestBody ProfileDTO profileDTO) throws JobPortalException {
        ProfileDTO profileDTORes = profileService.updateProfile(profileDTO);
        return new ResponseEntity<>(profileDTORes, HttpStatus.OK);
    }
}
