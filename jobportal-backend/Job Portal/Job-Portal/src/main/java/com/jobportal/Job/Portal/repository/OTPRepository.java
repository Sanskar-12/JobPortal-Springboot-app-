package com.jobportal.Job.Portal.repository;

import com.jobportal.Job.Portal.entity.OTP;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OTPRepository extends MongoRepository<OTP, String> {
}
