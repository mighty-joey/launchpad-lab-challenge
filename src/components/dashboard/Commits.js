import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const getDateTimeString = dateTimeString => {
    return new Date(dateTimeString).toLocaleString();
}

// This is a 'quick' approach to truncating a long GitHub commit message.
// Ideally, this could be achieved through by using a combination of CSS text-overflow: ellipsis and maybe a 'tooltip' on hover
const getTruncatedMessage = message => {
    return message.substring(0, 100);
}

const getIsMessageTruncated = message => {
    return message.length >= 100;
}

const Commits = ({ commits }) => {
    return (
        <>
            {commits.map(commit => (
                // uuidv4() below generates unique IDs to assign to each array element being mapped over, in this case 'commit'
                // Keys help React identify which elements have changed - to make DOM updates efficient 
                <div className="commit" key={uuidv4()}>
                    <div className="commit-row">
                        <span className="lighter">Author </span>
                        <span>{commit.commit.author.name}</span>
                    </div>
                    <div className="commit-row">
                        <span className="lighter">Date/Time </span>
                        <span>{getDateTimeString(commit.commit.author.date)}</span>
                    </div>
                    <div className="commit-row">
                        <span className="lighter">Description </span>
                        <span>{getTruncatedMessage(commit.commit.message)}
                            {getIsMessageTruncated(commit.commit.message) && "..."}
                        </span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Commits
