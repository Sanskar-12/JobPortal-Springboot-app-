package com.jobportal.Job.Portal.repository;

import com.jobportal.Job.Portal.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

// Repository gives in built methods for interacting with database
@Repository(value = "userRepo")
public interface UserRepository extends MongoRepository<User, Long> {
}
