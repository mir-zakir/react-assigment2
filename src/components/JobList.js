import React from 'react';
import JobItem from './JobItem';

const JobList = ({ jobs, onJobSelect }) => {
  const renderedList = jobs.map(job => {
    return (
      <JobItem
        onJobSelect={onJobSelect}
        job={job}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default JobList;
