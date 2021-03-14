import React from 'react'
import Table from '../table/Table'

const GitHubTable = ({ gitHubData }) => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Framework',
                accessor: 'name'
            },
            {
                Header: 'Stargazers',
                accessor: 'stargazers_count'
            },
            {
                Header: 'Forks',
                accessor: 'forks'
            },
            {
                Header: 'Open Issues',
                accessor: 'open_issues'
            }
        ],
        []
    )

    return (
        <Table data={gitHubData} columns={columns} />
    )
}

export default GitHubTable
