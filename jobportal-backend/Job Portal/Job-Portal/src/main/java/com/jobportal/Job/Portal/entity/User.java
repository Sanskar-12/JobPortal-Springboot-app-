package com.jobportal.Job.Portal.entity;

import com.jobportal.Job.Portal.dto.AccountType;
import lombok.Data;

@Data
public class User {
    private String id;
    private String name;
    private String email;
    private String password;
    private AccountType accountType;
}
