import React, { useState, useEffect } from 'react'
import DashboardService from './DashboardService'
import DashboardTable from './DashboardTable';
import Commits from './Commits';
import { v4 as uuidv4 } from 'uuid';

const Dashboard = () => {
    const [gitHubData, setGitHubData] = useState([]);
    const [gitHubCommitData, setGitHubCommitData] = useState([]);
    const [lastUpdate, setLastUpdate] = useState();
    const [loadingState, setLoadingState] = useState('loading');

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
            console.log(data);
            setGitHubData(data);
            setLastUpdate(new Date().toLocaleTimeString());
            setLoadingState('complete');
        }, () => {
            setLoadingState('error');
        });
    }

    const getGitHubCommitData = () => {
        DashboardService.fetchAllGitHubCommitData().then(data => {
            setGitHubCommitData(data);
            setLastUpdate(new Date().toLocaleTimeString());
            setLoadingState('complete');

        }, () => {
            setLoadingState('error');
        });
    }

    const getRecentCommits = commits => {
        return commits.slice(0, 3);
    }

    const displayRecentCommits = () => {
        return (
            <div className="recent-commits">
                {gitHubCommitData.map((commits, index) => (
                    // uuidv4() below generates unique IDs to assign to each array element being mapped over, in this case 'commits'
                    // Keys help React identify which elements have changed - to make DOM updates efficient 
                    <div key={uuidv4()}>
                        <h3>
                            {gitHubData[index].name}
                        </h3>
                        <div>
                            <Commits commits={getRecentCommits(commits)} />
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="dashboard">
            {loadingState === 'complete' &&
                <>
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
                        {displayRecentCommits()}
                    </div>
                </>
            }

            {loadingState === 'loading' &&
                <div>Loading...</div>
            }

            {loadingState === 'error' &&
                <div>Error fetching GitHub Data - potentially due to API rate limits :(</div>
            }
        </div>
    )
}

export default Dashboard
