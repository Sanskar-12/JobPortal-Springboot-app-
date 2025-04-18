package com.jobportal.Job.Portal.service;

import com.jobportal.Job.Portal.dto.LoginDTO;
import com.jobportal.Job.Portal.dto.UserDTO;
import com.jobportal.Job.Portal.exception.JobPortalException;
import jakarta.validation.Valid;

// Service is like Controller where business logics are written
public interface UserService {
    public UserDTO registerUser(UserDTO userDTO) throws JobPortalException;

    UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException;
}
