package com.jobportal.Job.Portal.entity;

import com.jobportal.Job.Portal.dto.AccountType;
import com.jobportal.Job.Portal.dto.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

// Entity will be mapped with Database
// Entity is like making Schema for database

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "users")
public class User {
    @Id
    private Long id;
    private String name;
    @Indexed(unique = true)
    private String email;
    private String password;
    private AccountType accountType;
    private Long profileId;

    // method to convert Entity to UserDTO
    public UserDTO toDTO() {
        return new UserDTO(
                this.id,this.name,this.email,this.password,this.accountType,this.profileId
        );
    }
}
