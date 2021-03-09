import React from "react";
import SearchBar from "./SearchBar";
import Jobs from "../jobs.json";
import JobList from "./JobList";
import JobDetail from "./JobDetail";

class App extends React.Component {
  state = { jobs: Jobs, selectedJob: null};

  onTermSubmit = (term) => {
    console.log(term);
    const result = Jobs.filter(job => job.name.toLowerCase().match(term.toLowerCase()));
    this.setState({
      jobs: result,
      selectedJob: null
    });
  
  };

  onJobSelect = (job) => {
    this.setState({ selectedJob: job });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="four wide column">
              <JobList onJobSelect={this.onJobSelect} jobs={this.state.jobs} />
            </div>
            <div className="eleven wide column">
              <JobDetail job={this.state.selectedJob} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
