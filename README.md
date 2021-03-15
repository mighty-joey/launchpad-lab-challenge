LaunchPad Lab Coding Challange - Joe Stallano

I’ve chosen to display the most relevant GitHub web framework data in a sortable table to make comparisons between frameworks simple. The data I believe to be most important are stargazers, forks, and open issues.

Stargazers - The level of interest the development community has in a given repository can be inferred from the number of ‘stargazers’. I believe it is fair to assume that developer interest (derived from the number of stars) follows how well liked a framework is, and we should aim to select a framework that makes developers productive and happy.
Forks - Generally speaking, the number of forks paints a pretty good picture of how active development is on a repository. This is because forking is an important and necessary part of the development process when using GitHub.
Open Issues - We want to work with a web framework that is free of bugs so that our end users interact with stable software.

The table can be sorted by clicking on the column header for the column you wish to sort by. The dashboard will automatically refresh every 30 seconds. There is a bug with table sorting on page refreshes. When the page refreshes the sorting order is lost.

A primary driver behind my decision to display the GitHub data in a table is ease of comparing the data. By sorting the data in ascending or descending order, it’s easy to compare the frameworks across different metrics. Also, the table allows for extensibility to include additional web frameworks.

Additionally, I’ve chosen to display the three most recent commits for each framework below the table. This data auto-updates as well. Recent commits give us an idea of what is currently being worked on by the development team of each framework. Also, I wanted to give the code reviewer an opportunity to review more of my code.

Given additional development time, there are a number of things that could be improved, such as:
- Adding more appealing styles
- Fixing a bug where sort order is lost on page refresh
- Fixing a bug where the table columns are ‘shifted’ when the table is sorted
- Making the dashboard mobile friendly
- Adding hide/show behavior to the commit descriptions instead of truncating after a fixed length
