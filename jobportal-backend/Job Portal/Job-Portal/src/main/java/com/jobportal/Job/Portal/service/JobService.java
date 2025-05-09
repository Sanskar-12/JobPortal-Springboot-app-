package com.jobportal.Job.Portal.service;

import com.jobportal.Job.Portal.dto.JobDTO;
import com.jobportal.Job.Portal.exception.JobPortalException;

import java.util.List;

public interface JobService {
    JobDTO postJob(JobDTO jobDTO) throws JobPortalException;

    List<JobDTO> getAllJobs();

    JobDTO getJob(Long id) throws JobPortalException;
}
