import React, { useState, useEffect } from 'react'
import DashboardService from './DashboardService'
import DashboardTable from './DashboardTable';
import Commits from './Commits';
import { v4 as uuidv4 } from 'uuid';

const Dashboard = () => {
    const [gitHubData, setGitHubData] = useState([]);
    const [gitHubCommitData, setGitHubCommitData] = useState([]);
    const [lastUpdate, setLastUpdate] = useState();

    const REFRESH_RATE = 30000; //30 seconds

    // This is an alternative to using the componentDidMount() hook when using a functional component
    useEffect(() => {
        getGitHubData();
        getGitHubCommitData();
    }, []);

    // Set a 'data refresh' rate of 30 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            getGitHubData();
            getGitHubCommitData();
        }, REFRESH_RATE);

        return () => clearInterval(interval);
    }, []);

    const getGitHubData = () => {
        DashboardService.fetchAllGitHubData().then(data => {
            setGitHubData(data);
            setLastUpdate(new Date().toLocaleTimeString());
        },
            () => {
                // More advanced error handling should go here, such as setting a loading state to 'failed' or similar
                // and displaying an error message on the UI
                setGitHubData([]);
            });
    }

    const getGitHubCommitData = () => {
        DashboardService.fetchAllGitHubCommitData().then(data => {
            setGitHubCommitData(data);
            setLastUpdate(new Date().toLocaleTimeString());
        },
            () => {
                // Again, we would want more robust error handling in a production environment
                setGitHubCommitData([]);
            });
    }

    const getRecentCommits = commits => {
        return commits.slice(0, 3);
    }

    const displayRecentCommits = () => {
        return (
            <div className="recent-commits">
                {gitHubCommitData.map((commits, index) => (
                    <div key={uuidv4()}>
                        <h3>
                            {gitHubData[index].name}
                        </h3>
                        <div key={uuidv4()}>
                            <Commits commits={getRecentCommits(commits)} />
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="dashboard">
            <div>
                <h3>LaunchPad Lab Coding Challenge - Joe Stallano</h3>
                <span>Last Update: </span><span>{lastUpdate}</span>
            </div>
            <div>
                <h2>GitHub Statistics</h2>
                <DashboardTable gitHubData={gitHubData} />
            </div>
            <div>
                <h2>Recent Commits</h2>
                {gitHubCommitData.length && gitHubData.length && displayRecentCommits()}
            </div>
        </div>
    )
}

export default Dashboard
