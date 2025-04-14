package com.jobportal.Job.Portal.dto;

import lombok.Data;
import org.springframework.data.mongodb.core.index.Indexed;

@Data
public class UserDTO {
    private String id;
    private String name;
    private String email;
    private String password;
    private AccountType accountType;
}
