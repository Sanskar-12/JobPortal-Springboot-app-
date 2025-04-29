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
    private Long id;
    @NotBlank(message = "{user.name.absent}")
    private String name;
    @NotBlank(message = "{user.email.absent}")
    @Email(message = "{user.email.invalid}")
    private String email;
    @NotBlank(message = "{user.password.absent}")
    @Pattern(
            regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,15}$",
            message = "{user.password.invalid}"
    )
    private String password;
    private AccountType accountType;
    private Long profileId;

    // method to convert from DTO to entity
    public User toEntity() {
        return new User(this.id,this.name,this.email,this.password,this.accountType,this.profileId);
    }
}
