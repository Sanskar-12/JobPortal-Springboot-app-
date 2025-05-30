package com.jobportal.Job.Portal.api;

import com.jobportal.Job.Portal.dto.*;
import com.jobportal.Job.Portal.entity.Job;
import com.jobportal.Job.Portal.exception.JobPortalException;
import com.jobportal.Job.Portal.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/getall/jobs")
    public ResponseEntity<List<JobDTO>> getAllJobs() throws JobPortalException {
        List<JobDTO> jobs = jobService.getAllJobs();
        return new ResponseEntity<>(jobs,HttpStatus.OK);
    }

    @GetMapping("/get/job/{id}")
    public ResponseEntity<JobDTO> getJob(@PathVariable Long id) throws JobPortalException {
        JobDTO job = jobService.getJob(id);
        return new ResponseEntity<>(job,HttpStatus.OK);
    }

    @PostMapping("/apply/{id}")
    public ResponseEntity<ResponseDTO> postJob(@PathVariable Long id, @RequestBody ApplicantDTO applicantDTO) throws JobPortalException {
        ResponseDTO res = jobService.applyJob(applicantDTO,id);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/postedBy/{id}")
    public ResponseEntity<List<JobDTO>> getJobPostedBy(@PathVariable Long id) throws JobPortalException {
        List<JobDTO> res = jobService.getJobsPostedBy(id);
        return new ResponseEntity<>(res,HttpStatus.OK);
    }

    @PostMapping("/changeAppStatus")
    public ResponseEntity<ResponseDTO> changeAppStatus(@RequestBody ApplicationDTO applicationDTO) throws JobPortalException {
        ResponseDTO res = jobService.changeAppStatus(applicationDTO);
        return new ResponseEntity<>(res,HttpStatus.OK);
    }
}
