package com.jobportal.Job.Portal.service;

import com.jobportal.Job.Portal.dto.*;
import com.jobportal.Job.Portal.entity.Applicant;
import com.jobportal.Job.Portal.entity.Job;
import com.jobportal.Job.Portal.exception.JobPortalException;
import com.jobportal.Job.Portal.repository.JobRepository;
import com.jobportal.Job.Portal.utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service(value = "jobService")
public class JobServiceImpl implements JobService{

    @Autowired
    private JobRepository jobRepository;

    @Override
    public JobDTO postJob(JobDTO jobDTO) throws JobPortalException {

        if(jobDTO.getId()==0) {
        jobDTO.setId(Utilities.getNextSequence("jobs"));
        jobDTO.setPostTime(LocalDateTime.now());


        } else {
            Job job = jobRepository.findById(jobDTO.getId()).orElseThrow(()->new JobPortalException("JOB_NOT_FOUND"));
            if(job.getJobStatus().equals(JobStatus.DRAFT) || job.getJobStatus().equals(JobStatus.CLOSED)) {
                jobDTO.setPostTime(LocalDateTime.now());
            }
        }
        jobRepository.save(jobDTO.toEntity());

        return jobDTO;
    }

    @Override
    public List<JobDTO> getAllJobs() {
        return jobRepository.findAll().stream().map((item)->item.toDTO()).toList();
    }

    @Override
    public JobDTO getJob(Long id) throws JobPortalException {
        return jobRepository.findById(id).orElseThrow(()->new JobPortalException("JOB_NOT_FOUND")).toDTO();
    }

    @Override
    public ResponseDTO applyJob(ApplicantDTO applicantDTO, Long id) throws JobPortalException {
        Job job = jobRepository.findById(id).orElseThrow(()->new JobPortalException("JOB_NOT_FOUND"));

        List<Applicant> applicants = job.getApplicants();

        if(applicants==null) {
            applicants = new ArrayList<>();
        }

        if(applicants.stream().filter((x)->x.getApplicantId()==applicantDTO.getApplicantId()).toList().size()>0) {
            throw new JobPortalException("JOB_APPLIED_ALREADY");
        }

        applicantDTO.setApplicationStatus(ApplicationStatus.APPLIED);

        applicants.add(applicantDTO.toEntity());

        job.setApplicants(applicants);

        jobRepository.save(job);

        return new ResponseDTO("Job Applied Successfully");
    }

    @Override
    public List<JobDTO> getJobsPostedBy(Long id) throws JobPortalException {
        return jobRepository.findByPostedBy(id).stream().map((x)->x.toDTO()).toList();
    }

    @Override
    public ResponseDTO changeAppStatus(ApplicationDTO applicationDTO) throws JobPortalException {
        Job job = jobRepository.findById(applicationDTO.getId()).orElseThrow(()->new JobPortalException("JOB_NOT_FOUND"));

        List<Applicant> applicants = job.getApplicants().stream().map((x)->{
            if(x.getApplicantId()==applicationDTO.getApplicantId()) {
                x.setApplicationStatus(applicationDTO.getApplicationStatus());

                if(applicationDTO.getApplicationStatus().equals(ApplicationStatus.INTERVIEWING)) {
                    x.setInterviewTime(applicationDTO.getInterviewTime());
                }

            }
            return x;
        }).toList();

        job.setApplicants(applicants);

        jobRepository.save(job);

        return new ResponseDTO("Application Status Changed Successfully");
    }


}
