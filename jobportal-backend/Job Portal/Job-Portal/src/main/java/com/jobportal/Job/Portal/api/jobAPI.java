package com.jobportal.Job.Portal.api;

import com.jobportal.Job.Portal.dto.JobDTO;
import com.jobportal.Job.Portal.dto.ProfileDTO;
import com.jobportal.Job.Portal.exception.JobPortalException;
import com.jobportal.Job.Portal.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@Validated
@CrossOrigin
@RequestMapping("/jobs")
public class jobAPI {

    @Autowired
    private JobService jobService;

    @PostMapping("/post/job")
    public ResponseEntity<JobDTO> postJob(@RequestBody JobDTO jobDTO) throws JobPortalException {
        JobDTO job = jobService.postJob(jobDTO);
        return new ResponseEntity<>(job, HttpStatus.OK);
    }
}
