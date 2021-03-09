import React from "react";

const JobDetail = ({ job }) => {
  if (!job) {
    return <div></div>;
  }

  return (
    <div>
      <div className="ui segment">
        <h4 className="ui header" style={{ textAlign: 'center' }}>{job.name} </h4>
        <h5 style={{ textAlign: 'center' }}>{job.location.city + ", " + job.location.country}</h5>
        <img src={job.logo} alt={""} className="" />
        <p>{job.description}</p>
        <div className="salary" style={{ textAlign: 'center' }}>Salary: {job.salary}</div>
      </div>
    </div>
  );
};

export default JobDetail;
