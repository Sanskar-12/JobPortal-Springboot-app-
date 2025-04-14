package com.jobportal.Job.Portal.dto;

import com.jobportal.Job.Portal.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.index.Indexed;

// DTO (Data Transfer Object) used for storing the data inside the applications for temporary period of time

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private String id;
    private String name;
    private String email;
    private String password;
    private AccountType accountType;

    // method to convert from DTO to entity
    public User toEntity() {
        return new User(this.id,this.name,this.email,this.password,this.accountType);
    }
}
