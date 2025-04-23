package com.jobportal.Job.Portal.utility;

import com.jobportal.Job.Portal.entity.Sequence;
import com.jobportal.Job.Portal.exception.JobPortalException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import java.security.SecureRandom;

@Component
public class Utilities {

    private static MongoOperations mongoOperations;

    @Autowired
    public void setMongoOperations(MongoOperations mongoOperations) {
        Utilities.mongoOperations=mongoOperations;
    }

    // Its auto increment sequence generator method
    public static Long getNextSequence(String key) throws JobPortalException {
        // Checks the document whose id is equal to key for eg "users"
        Query query = new Query(Criteria.where("_id").is(key));

        // increment sequence by 1
        Update update = new Update();
        update.inc("seq",1);

        // update inside mongo db and return updated document
        FindAndModifyOptions options = new FindAndModifyOptions();
        options.returnNew(true);

        Sequence seq = mongoOperations.findAndModify(query,update,options, Sequence.class);

        if(seq==null) {
            throw new JobPortalException("Unable to get sequence id for key : " + key);
        }
        return seq.getSeq();
    }

    // Generate Secure OTP
    public static String generateOTP() {
        StringBuilder otp = new StringBuilder();
        // SecureRandom generates cryptographic random numbers
        SecureRandom random = new SecureRandom();

        for(int i=0; i<6; i++) {
            // Will only generate 0 to 9 numbers
            otp.append(random.nextInt(10));
        }

        return otp.toString();
    }

}
