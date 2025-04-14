package com.jobportal.Job.Portal.service;

import com.jobportal.Job.Portal.dto.UserDTO;

// Service is like Controller where business logics are written
public interface UserService {
    public UserDTO registerUser(UserDTO userDTO);
}
