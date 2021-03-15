const URL = {
    REACT: 'https://api.github.com/repos/facebook/react',
    ANGULARJS: 'https://api.github.com/repos/angular/angular.js',
    EMBER: 'https://api.github.com/repos/emberjs/ember.js',
    VUE: 'https://api.github.com/repos/vuejs/vue'
}

const COMMITS_SUFFIX = '/commits';

const GitHubService = {
    fetchData: url => {
        return fetch(url).then(response => {
            if (!response.ok) {
                throw new Error(response.error);
            }
            return response.json();
        });
    },

    fetchAllGitHubData: () => {
        return Promise.all([
            GitHubService.fetchData(URL.REACT),
            GitHubService.fetchData(URL.ANGULARJS),
            GitHubService.fetchData(URL.EMBER),
            GitHubService.fetchData(URL.VUE),
        ]);
    },

    fetchAllGitHubCommitData: () => {
        return Promise.all([
            GitHubService.fetchData(URL.REACT + COMMITS_SUFFIX),
            GitHubService.fetchData(URL.ANGULARJS + COMMITS_SUFFIX),
            GitHubService.fetchData(URL.EMBER + COMMITS_SUFFIX),
            GitHubService.fetchData(URL.VUE + COMMITS_SUFFIX)
        ]);
    }
}

export default GitHubService