/**
 * Git function
 * @param repoName
 * @constructor
 */
function Git (repoName) {
    this.name = repoName;
    this.head = null;
}


function Commit(id, message, prev) {
    this.id = id;
    this.message = message;
    this.prev = prev;
}

Git.prototype.commit = function (message) {
    const newCommitId = Math.random();
    return (this.head = (new Commit(newCommitId, message, this.head)));
};

Git.prototype.log = function () {
    let iterator = this.head;

    while (iterator) {
        const cGist = `${iterator['id']} 
                -- ${iterator['message']}`;
        console.log(cGist);
        iterator = iterator['prev'];
    }
};


/**
 * implementation
 * @type {Git}
 */
var repo = new Git('test');
repo.commit('new commit - 1');
repo.commit('new commit - 2');
repo.commit('new commit - 3');
repo.commit('new commit - 4');
repo.commit('new commit - 5');
repo.commit('new commit - 6');
repo.commit('new commit - 7');

repo.log();