package com.jobportal.Job.Portal.repository;

import com.jobportal.Job.Portal.entity.OTP;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface OTPRepository extends MongoRepository<OTP, String> {
    public List<OTP> findByCreationTimeBefore(LocalDateTime expiry);
}
