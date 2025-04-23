package com.jobportal.Job.Portal.service;

import com.jobportal.Job.Portal.dto.LoginDTO;
import com.jobportal.Job.Portal.dto.ResponseDTO;
import com.jobportal.Job.Portal.dto.UserDTO;
import com.jobportal.Job.Portal.exception.JobPortalException;

// Service is like Controller where business logics are written
public interface UserService {
    public UserDTO registerUser(UserDTO userDTO) throws JobPortalException;

    UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException;

    ResponseDTO sendOtp(String email) throws  JobPortalException;
}
