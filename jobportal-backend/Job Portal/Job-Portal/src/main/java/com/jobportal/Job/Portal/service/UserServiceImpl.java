package com.jobportal.Job.Portal.service;

import com.jobportal.Job.Portal.dto.UserDTO;
import com.jobportal.Job.Portal.entity.User;
import com.jobportal.Job.Portal.exception.JobPortalException;
import com.jobportal.Job.Portal.repository.UserRepository;
import com.jobportal.Job.Portal.utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service(value = "userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepo;

    @Override
    public UserDTO registerUser(UserDTO userDTO) throws JobPortalException {
        userDTO.setId(Utilities.getNextSequence("users"));
        // Converting to User Entity because so that we can save the user into the database
        User user = userDTO.toEntity();
        user = userRepo.save(user);
        return user.toDTO();
    }

}
