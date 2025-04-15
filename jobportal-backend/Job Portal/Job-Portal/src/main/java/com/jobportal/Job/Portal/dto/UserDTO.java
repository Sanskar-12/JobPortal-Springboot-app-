package com.jobportal.Job.Portal.dto;

import com.jobportal.Job.Portal.entity.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
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
    @NotBlank(message = "Name is null or blank")
    private String name;
    @NotBlank(message = "Email is null or blank")
    @Email(message = "Email is invaliduppa")
    private String email;
    @NotBlank(message = "Password is null or blank")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,15}$\n", message = "Password is invalid")
    private String password;
    private AccountType accountType;

    // method to convert from DTO to entity
    public User toEntity() {
        return new User(this.id,this.name,this.email,this.password,this.accountType);
    }
}
