package com.jobportal.Job.Portal.entity;

import com.jobportal.Job.Portal.dto.Certifications;
import com.jobportal.Job.Portal.dto.Experience;
import com.jobportal.Job.Portal.dto.ProfileDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "profiles")
public class Profile {
    @Id
    private Long id;
    private String name;
    private String email;
    private String jobTitle;
    private String company;
    private String location;
    private String about;
    private List<String> skills;
    private List<Experience> experience;
    private List<Certifications> certifications;

    public ProfileDTO toDTO() {
        return new ProfileDTO(this.id,this.name,this.email,this.jobTitle,this.company,this.location,this.about,this.skills,this.experience,this.certifications);
    }
}
