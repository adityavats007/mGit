/**
 * Git function
 * @param repoName
 * @constructor
 */
function Git (repoName) {
    this.name = repoName;
    this.head = null;
}


function Commit(id, message) {
    this.id = id;
    this.message = message;
}

Git.prototype.GitCommit = function (commit) {
    if (commit.isPrototypeOf(Commit)) {
        this.commit = commit;
        this.prev = this.head;
    }
};

Git.prototype.commit = function (message) {
    const newCommitId = Math.random();
    return (this.head = this.GitCommit(new Commit(newCommitId, message)));
};

Git.prototype.log = function () {
    let iterator = this.head;

    while (iterator) {
        const cGist = `${iterator['commit']['id']} 
                -- ${iterator['commit']['message']}`;
        console.log(cGist);
        iterator = iterator['prev'];
    }
};