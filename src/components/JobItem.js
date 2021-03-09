import "./JobItem.css";
import React from "react";

const JobItem = ({ job, onJobSelect }) => {
  return (
    <div onClick={() => onJobSelect(job)} className="job-item item">
      <div className="ui segment">
        <h4>{job.name}</h4>
        <h5>{job.location.city + ", " + job.location.country}</h5>
        <img src={job.logo} alt={""} className="ui image" />
        <p>{job.description}</p>
        <div className="salary">Salary: {job.salary}</div>
      </div>
    </div>
  );
};

export default JobItem;
