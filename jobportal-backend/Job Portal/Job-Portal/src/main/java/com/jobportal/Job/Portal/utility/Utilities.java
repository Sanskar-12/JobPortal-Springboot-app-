package com.jobportal.Job.Portal.utility;

import com.jobportal.Job.Portal.entity.Sequence;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

public class Utilities {

    private static MongoOperations mongoOperations;

    public void setMongoOperations(MongoOperations mongoOperations) {
        Utilities.mongoOperations=mongoOperations;
    }

    // Its auto increment sequence generator method
    public static Long getNextSequence(String key) throws Exception {
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
            throw new Exception("Unable to get sequence id for key : " + key);
        }
        return seq.getSeq();
    }

}
