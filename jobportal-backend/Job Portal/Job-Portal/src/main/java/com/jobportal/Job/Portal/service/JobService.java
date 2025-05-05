package com.jobportal.Job.Portal.service;

import com.jobportal.Job.Portal.dto.JobDTO;
import com.jobportal.Job.Portal.exception.JobPortalException;

public interface JobService {
    JobDTO postJob(JobDTO jobDTO) throws JobPortalException;
}
