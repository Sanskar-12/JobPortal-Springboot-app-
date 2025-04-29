package com.jobportal.Job.Portal.service;

import com.jobportal.Job.Portal.exception.JobPortalException;

public interface ProfileService {
    public Long createProfile(String email) throws JobPortalException;
}
