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
                <div className="commit" key={uuidv4()}>
                    <div>
                        <span className="bold">Author </span>
                        <span>{commit.commit.author.name}</span>
                    </div>
                    <div>
                        <span className="bold">Date/Time </span>
                        <span>{getDateTimeString(commit.commit.author.date)}</span>
                    </div>
                    <div>
                        <span className="bold">Description </span>
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
