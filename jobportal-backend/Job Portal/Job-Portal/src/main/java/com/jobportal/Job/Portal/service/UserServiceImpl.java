package com.jobportal.Job.Portal.service;

import com.jobportal.Job.Portal.dto.LoginDTO;
import com.jobportal.Job.Portal.dto.UserDTO;
import com.jobportal.Job.Portal.entity.User;
import com.jobportal.Job.Portal.exception.JobPortalException;
import com.jobportal.Job.Portal.repository.UserRepository;
import com.jobportal.Job.Portal.utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service(value = "userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDTO registerUser(UserDTO userDTO) throws JobPortalException {

        // Checking if email exists in database or not
        Optional<User> optional = userRepo.findByEmail(userDTO.getEmail());
        if(optional.isPresent()) {
            throw new JobPortalException("USER_FOUND");
        }

        // Converting the id in mongodb to sequence number
        userDTO.setId(Utilities.getNextSequence("users"));

        // Encrypting the password
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));

        // Converting to User Entity because so that we can save the user into the database
        User user = userDTO.toEntity();
        user = userRepo.save(user);
        return user.toDTO();
    }

    @Override
    public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException {
        // Check email exists or not
        User user = userRepo.findByEmail(loginDTO.getEmail()).orElseThrow(()->new JobPortalException("USER_NOT_FOUND"));

        // Check Password with encrypted password
        if(!passwordEncoder.matches(loginDTO.getPassword(),user.getPassword())) {
            throw new JobPortalException("INVALID_CREDENTIALS");
        }

        // return user
        UserDTO userDTO = user.toDTO();

        return userDTO;
    }

}
