# 1. git revert

Usage scenario: How do I revert a Git repository to a previous commit?
Example:
▲ Temporarily switch to a different commit
# This will detach your HEAD, that is, leave you with no branch checked out:
git checkout 0d1d7fc32

git checkout -b old-state 0d1d7fc32

▲ Hard delete unpublished commits
# This will destroy any local modifications.
# Don't do it if you have uncommitted work you want to keep.
git reset --hard 0d1d7fc32

# Alternatively, if there's work to keep:
git stash
git reset --hard 0d1d7fc32
git stash pop
# This saves the modifications, then reapplies that patch after resetting.
# You could get merge conflicts, if you've modified things which were
# changed since the commit you reset to.

▲ Undo published commits with new commits
# This will create three separate revert commits:
git revert a867b4af 25eee4ca 0766c053

# It also takes ranges. This will revert the last two commits:
git revert HEAD~2..HEAD

#Similarly, you can revert a range of commits using commit hashes (non inclusive of first hash):
git revert 0d1d7fc..a867b4a

# Reverting a merge commit
git revert -m 1 <merge_commit_sha>

# To get just one, you could use `rebase -i` to squash them afterwards
# Or, you could do it manually (be sure to do this at top level of the repo)
# get your index and work tree into the desired state, without changing HEAD:
git checkout 0d1d7fc32 .

# Then commit. Be sure and write a good message describing what you just did
git commit


Usage scenario: Revert a range of commits in git
Example:
git revert B^..D 

git revert OLDER_COMMIT^..NEWER_COMMIT

git revert -n OLDER_COMMIT^..NEWER_COMMIT
git commit -m "revert OLDER_COMMIT to NEWER_COMMIT"

Usage scenario: Reverting specific commits from git
Example:
$ git revert --no-commit b49eb8e 1d8b062
# Files that were modified in those 2 commits will be changed in your working directory
# If any of those 2 commits had changed the file 'a' then you could discard the revert for it:
$ git checkout a
$ git commit -a -m "Revert commits b49eb8e and 1d8b062"

# 2. git reflog

Usage scenario: How to undelete a branch on github?
Example:
git reflog

git checkout fd0e4da 

git checkout HEAD@{14}

git branch my-recovered-branch

git push origin my-recovered-branch:my-recovered-branch


Usage scenario: How to re-commit a past commit if someone overwrote my commit
Example:
▲ You can do that typing the following commands:
$ git reflog

$ git cherry-pick <'ID'>

▲ Now check if anything is still remaining by:
$ git status

▲ If anything is in unstaged commit, then add it by the following commands and commit:
$ git add -A //Any other option or the name of the file with the path that you want to commit
$ git commit -m "Your message here for that commit"
$ git push

Usage scenario: find out when a git branch was created (not the first commit to that branch)
Example:
:: git reflog show --date=iso bar
7d9b83d bar@{2013-08-16 12:23:28 -0400}: branch: Created from master

:: git co -b bar
Switched to a new branch 'bar'
:: git reflog show --date=iso bar
d6970ef bar@{2013-08-16 12:30:50 -0400}: branch: Created from HEAD

# 3. git stash

Usage scenario: How to recover a dropped stash in Git?
Example:
git stash apply $stash_hash

git branch recovered $stash_hash

git fsck --no-reflog | awk '/dangling commit/ {print $3}'

git fsck --no-reflog | select-string 'dangling commit' | foreach { $_.ToString().Split(" ")[2] }

gitk --all $( git fsck --no-reflog | awk '/dangling commit/ {print $3}' )


Usage scenario: How can I rename a git stash?
Example:
$ git stash list
stash@{0}: WIP on master: Add some very important feature 
stash@{1}: WIP on master: Fix some silly bug

$ git stash drop stash@{1}
Dropped stash@{1} (af8fdeee49a03d1b4609f294635e7f0d622e03db)

$ git stash store -m "Very descriptive message" af8fdeee49a03d1b4609f294635e7f0d622e03db

$ git stash list
stash@{0}: Very descriptive message
stash@{1}: WIP on master: Add some very important feature

Usage scenario: How to commit my current changes to a different branch in Git
Example:
▲ The other answers suggesting checking out the other branch, then committing to it, only work
 if the checkout is possible given the local modifications. If not, you're in the most common
  use case for git stash:
git stash
git checkout other-branch
git stash pop

▲ On the other hand, if you've really messed up, and your work tree has a mix of changes for
 the two branches, and the conflicts are just in the ones you want to commit back on the
  original branch, you can save some work. As usual, there are a lot of ways to do this.
   Here's one, starting from after you pop and see the conflicts:
# Unstage everything (warning: this leaves files with conflicts in your tree)
git reset

# Add the things you *do* want to commit here
git add -p     # or maybe git add -i
git commit

# The stash still exists; pop only throws it away if it applied cleanly
git checkout original-branch
git stash pop

# Add the changes meant for this branch
git add -p
git commit

# And throw away the rest
git reset --hard

▲ Alternatively, if you realize ahead of the time that this is going to happen, simply commit
 the things that belong on the current branch. You can always come back and amend that commit:

git add -p
git commit
git stash
git checkout other-branch
git stash pop

# 4. git clean

Usage scenario: How to remove local (untracked) files from the current Git working tree
Example:
# Print out the list of files and directories which will be removed (dry run)
git clean -n -d

# Delete the files from the repository
git clean -f


Usage scenario: git: undo all working dir changes including new files
Example:
git reset --hard # removes staged and working directory changes

## !! be very careful with these !!
## you may end up deleting what you don't want to
## read comments and manual.
git clean -f -d # remove untracked
git clean -f -x -d # CAUTION: as above but removes ignored files like config.
git clean -fxd :/ # CAUTION: as above, but cleans untracked and ignored files through the entire repo (without :/, the operation affects only the current directory)

Usage scenario: Git: Exclude a file with git clean
Example:
git clean -x -n -e local_settings.py # Shows what would remove (-n flag)
git clean -x -f -e local_settings.py # Removes it (note the -f flag)


# 5. git reset

Usage scenario: Reset local repository branch to be just like remote repository HEAD
Example:
git fetch origin
git reset --hard origin/master

git commit -a -m "Saving my work, just in case"
git branch my-saved-work


Usage scenario: Undo a Git merge that hasn't been pushed yet
Example:
git reset --hard commit_sha

git reset --hard HEAD~1

git reset --hard ORIG_HEAD

git reset --merge ORIG_HEAD

Usage scenario: How to undo 'git reset'?
Example:
▲ Short answer:
git reset 'HEAD@{1}'

▲ Long answer:
git reflog

$ git reflog
3f6db14 HEAD@{0}: HEAD~: updating HEAD
d27924e HEAD@{1}: checkout: moving from d27924e0fe16776f0d0f1ee2933a0334a4787b4c
[...]

$ git reflog show master
c24138b master@{0}: merge origin/master: Fast-forward
90a2bf9 master@{1}: merge origin/master: Fast-forward
[...]

# 6. git help

Usage scenario: How can I generate the difference between 2 commits which ignore spaces
Example:
git diff --ignore-all-space 0984 e564

git help diff

Usage scenario: Using github locally without publishing to github servers
Example:
cd <mycodedirectory>
git init

git add <file1> <file2> *.c *.h
git commit -m"starting commit"

git help
git help -a 
git help -g

Usage scenario: (Git) How can I set parameters using alias
Example:
$ git help am

NAME
   git-am - Apply a series of patches from a mailbox

# 7. gitk

Usage scenario: How to clone all remote branches in Git?
Example:
▲ First, clone a remote Git repository and cd into it:
$ git clone git://example.com/myproject
$ cd myproject

$ git branch
* master

$ git branch -a
* master
  remotes/origin/HEAD
  remotes/origin/master
  remotes/origin/v1.0-stable
  remotes/origin/experimental

▲ If you just want to take a quick peek at an upstream branch, you can check it out directly:
$ git checkout origin/experimental

▲ But if you want to work on that branch, you'll need to create a local tracking branch which is done automatically by:
$ git checkout experimental

Branch experimental set up to track remote branch experimental from origin.
Switched to a new branch 'experimental'

▲ Now, if you look at your local branches, this is what you'll see:
$ git branch
* experimental
  master

$ git remote add win32 git://example.com/users/joe/myproject-win32-port
$ git branch -a
* master
  remotes/origin/HEAD
  remotes/origin/master
  remotes/origin/v1.0-stable
  remotes/origin/experimental
  remotes/win32/master
  remotes/win32/new-widgets

$ gitk --all &


Usage scenario: How to determine when a Git branch was created?
Example:
git show --summary `git merge-base foo master`
gitk --all --select-commit=`git merge-base foo master`

Usage scenario: How to search through all Git and Mercurial commits in the repository for a certain string?
Example:
git log -g --grep=search_for_this

git log -g -Ssearch_for_this
# this also works but may be slower, it only shows text-added results
git grep search_for_this $(git log -g --pretty=format:%h)

gitk --all $(git log -g --pretty=format:%h)

# 8. git mergetool

Usage scenario: How can I make WinMerge my git mergetool?
Example:
git config --global merge.tool winmerge
git config --replace --global mergetool.winmerge.cmd "\"C:\Program Files (x86)
  \WinMerge\WinMergeU.exe\" -e -u -dl \"Base\" -dr \"Mine\" \"$LOCAL\" \"$REMOTE\" \"$MERGED\""
git config --global mergetool.prompt false

git mergetool


Usage scenario: Git how to update local repository and keep my changes
Example:
git stash
git pull
git stash pop

git checkout -b my-new-branch
git add .
git commit -m "my changes"
git pull --rebase origin master # this will get the updates and place your changes on top of it

git mergetool


Usage scenario: "Move" files to their own branch in Git
Example:
▲ If the files are not modified (no conflict), you can solve this after the merge by reverting the deleting commit :
$ git merge feature # in master
$ git revert SHA-of-the-commit-deleting-your-file

▲ However, if there is a conflict, you might have to solve this manually (unless someone finds the perfect git command for this!) :
$ git merge feature # in master
$ git mergetool # use modified versions of files
$ git commit -m "Merge with deleted files solved"

# 9. git fetch

Usage scenario: How do I update or sync a forked repository on GitHub?
Example:
# Add the remote, call it "upstream":

git remote add upstream https://github.com/whoever/whatever.git

# Fetch all the branches of that remote into remote-tracking branches

git fetch upstream

# Make sure that you're on your master branch:

git checkout master

# Rewrite your master branch so that any commits of yours that
# aren't already in upstream/master are replayed on top of that
# other branch:

git rebase upstream/master

git push -f origin master

Usage scenario: Overwriting my local branch with remote branch
Example:
git branch fubar-pin

git fetch --all

git reset --hard origin/branch


Usage scenario: How to get rid of "would clobber existing tag"
Example:
git fetch --tags -f


# 10. git branch

Usage scenario: How to list branches that contain a given commit?
Example:
▲ From the git-branch manual page:
 git branch --contains <commit>

 git branch -r --contains <commit>

fetch = +refs/heads/*:refs/remotes/origin/*

▲ If you need to include other ref namespace (pull request, Gerrit, ...), you need to add that new refspec, and fetch again:
git config --add remote.origin.fetch "+refs/pull/*/head:refs/remotes/origin/pr/*"
git fetch
git branch -r --contains <commit>

$ git log -1 tests
commit d590f2ac0635ec0053c4a7377bd929943d475297
Author: Nick Quaranto <nick@quaran.to>
Date:   Wed Apr 1 20:38:59 2009 -0400

    Green all around, finally.

$ git branch --contains d590f2
  tests
* master

▲ Note: if the commit is on a remote tracking branch, add the -a option.
(as MichielB comments below)
git branch -a --contains <commit>

           __*__*__*__*__> <upstream>
          /
fork-point
          \__+__+__-__+__+__-__+__> <head>


Usage scenario: Using Git, show all commits that are in one branch, but not the other(s)
Example:
git branch --contains branch-to-delete


Usage scenario: Find out which remote branch a local branch is tracking
Example:
$ git branch -vv
  main   aaf02f0 [main/master: ahead 25] Some other commit
* master add0a03 [jdsumsion/master] Some commit

# 11. git config

Usage scenario: How to convert a normal Git repository to a bare one?
Example:
cd repo
mv .git ../repo.git # renaming just for clarity
cd ..
rm -fr repo
cd repo.git
git config --bool core.bare true

Usage scenario: How can I remove an entry in global configuration with git config?
Example:
git config --global --unset core.excludesfile

git config --global --edit


Usage scenario: How do you get git to always pull from a specific branch?
Example:
$ git config branch.master.remote origin
$ git config branch.master.merge refs/heads/master


# 12. git update-ref

Usage scenario: How to revert initial git commit?
Example:
git update-ref -d HEAD

Usage scenario: Remove refs/original/heads/master from git repo after filter-branch --tree-filter?
Example:
git update-ref -d refs/original/refs/heads/master

git for-each-ref --format="%(refname)" refs/original/ | xargs -n 1 git update-ref -d


Usage scenario: How can I uncommit the last commit in a git bare repository?
Example:
▲ You can use the git update-ref command. To remove the last commit, you would use:
$ git update-ref HEAD HEAD^

▲ Or if you're not in the branch from which you cant to remove the last commit:
$ git update-ref refs/heads/branch-name branch-name^

▲ You could also pass a sha1 if you want:
$ git update-ref refs/heads/branch-name a12d48e2

# 13. git pull

Usage scenario: How to `git pull` while ignoring local changes?
Example:
▲ If you mean you want the pull to overwrite local changes, doing the merge as
 if the working tree were clean, well, clean the working tree:
git reset --hard
git pull

▲ If on the other hand you want to keep the local modifications somehow, you'd
 use stash to hide them away before pulling, then reapply them afterwards:
git stash
git pull
git stash pop

Usage scenario: How to pull remote branch from somebody else's repo
Example:
git remote add coworker git://path/to/coworkers/repo.git
git fetch coworker
git checkout --track coworker/foo

git checkout foo
git pull

git branch --set-upstream foo colin/foo

git remote add colin git://path/to/colins/repo.git

Usage scenario: Resolve Git merge conflicts in favor of their changes during a pull
Example:
git pull -s recursive -X theirs <remoterepo or other repo>

git pull -X theirs

git checkout --theirs path/to/file

# 14. git  apply


Usage scenario: Create patch or diff file from git repository and apply it to another different git repository
Example:
git diff tag1..tag2 > mypatch.patch

git apply mypatch.patch


Usage scenario: How to apply a git patch when given a pull number
Example:
▲ Save the patch somewhere. If you're using linux you can use curl:
curl -L https://github.com/JustinTulloss/zeromq.node/pull/47.patch > /tmp/47.patch

▲ To apply the patch use git apply. You can see if the patch will apply cleanly
 with the check option. Change to your git directory and run:
git apply --check /tmp/47.patch

▲ If it looks like you want to apply the patch remove the check option
git apply /tmp/47.patch

Usage scenario: How do you apply patch file downloaded from gerrit?
Example:
base64 --decode c6a9dcdb.diff.base64 > c6a9dcdb.diff
git apply c6a9dcdb.diff


# 15. git rm

Usage scenario: How can I make Git "forget" about a file that was tracked, but is now in .gitignore?
Example:
git rm --cached <file>

git rm -r --cached <folder>

Usage scenario: How can I delete a file from a Git repository?
Example:
▲ If you want to remove the file from the Git repository and the filesystem, use:
git rm file1.txt
git commit -m "remove file1.txt"

▲ But if you want to remove the file only from the Git repository and not remove it from the filesystem, use:  
git rm --cached file1.txt
git commit -m "remove file1.txt"

git push origin branch_name

Usage scenario: How do I remove a submodule?
Example:
▲ Summary
1. mv a/submodule a/submodule_tmp

2. git submodule deinit -f -- a/submodule    
3. rm -rf .git/modules/a/submodule
4. git rm -f a/submodule
# Note: a/submodule (no trailing slash)

# or, if you want to leave it in your working tree and have done step 0
3.   git rm --cached a/submodule
3bis mv a/submodule_tmp a/submodule

▲ Explanation
git add mysubmodule/file.txt 
Path 'mysubmodule/file.txt' is in submodule 'mysubmodule'

git ${wt_prefix:+-C "$wt_prefix"} submodule--helper deinit \
  ${GIT_QUIET:+--quiet} \
  ${prefix:+--prefix "$prefix"} \
  ${force:+--force} \
  ${deinit_all:+--all} "$@"

# 16. git commit

Usage scenario: Pushing empty commits to remote
Example:
git commit --allow-empty -m "Trigger Build"

Usage scenario: How to change the commit author for one specific commit?
Example:
git commit --amend --author="Author Name <email@address.com>" --no-edit

Usage scenario: How to add the Signed-off-by field in the git patch
Example:
git commit -s

git commit --signoff

# 17. git checkout

Usage scenario: How do I check out a remote Git branch?
Example:
▲ With One Remote
git fetch
git checkout test

git checkout -b test <name of remote>/test

git checkout -t <name of remote>/test

▲ With >1 Remotes
git fetch origin

git branch -v -a

git checkout -b test origin/test


Usage scenario: How can I reset or revert a file to a specific revision?
Example:
git checkout c5f567 -- file1/to/restore file2/to/restore

git checkout c5f567~1 -- file1/to/restore file2/to/restore

Usage scenario: How do I fix a Git detached head?
Example:
▲ If you want to delete your changes associated with the detached HEAD
git checkout master

git checkout -- path/to/foo

▲ If you want to keep your changes associated with the detached HEAD

# 18. git show

Usage scenario: How can I view an old version of a file with Git?
Example:
$ git show REVISION:path/to/file

$ git show HEAD~4:src/main.c

Usage scenario: How to find a deleted file in the project commit history?
Example:
▲ If you do not know the exact path you may use
git log --all --full-history -- "**/thefile.*"

▲ If you know the path the file was at, you can do this:
git log --all --full-history -- <path-to-file>

git show <SHA> -- <path-to-file>

Usage scenario: How do I list all of the files in a commit?
Example:
$ git diff-tree --no-commit-id --name-only -r bd61ad98
index.html
javascript/application.js
javascript/ie6.js

$ git show --pretty="" --name-only bd61ad98    
index.html
javascript/application.js
javascript/ie6.js

# 19. git difftool


Usage scenario: How to get directory git branch diff using kdiff
Example:
git difftool -d --tool=kdiff3 10c25f0da62929cca0b559095a313679e4c9800e..
  980de1bbe1f42c327ed3c9d70ac2ff0f3c2ed4e1


Usage scenario: How do I prevent an automerge using Git?
Example:
$ git checkout master
$ git difftool -t kdiff3 local-branch HEAD

Usage scenario: Finding diff between current and last version
Example:
▲ I don't really understand the meaning of "last version".
git diff HEAD^ HEAD

git diff @~..@

git show

▲ If you want to know the diff between head and any commit you can use:
git diff commit_id HEAD

▲ And this will launch your visual diff tool (if configured):
git difftool HEAD^ HEAD

git diff @^
git diff HEAD^
git diff commit_id

# 20. git status

Usage scenario: git: How to ignore all present untracked files?
Example:
▲ As already been said, to exclude from status just use:
git status -uno  # must be "-uno" , not "-u no"

▲ If you instead want to permanently ignore currently untracked files you can, from the root of your project, launch:
git status --porcelain | grep '^??' | cut -c4- >> .gitignore

▲ UPDATE: the above command has a minor drawback: if you don't have a .gitignore file yet your gitignore 
will ignore itself! This happens because the file .gitignore gets 
created before the git status --porcelain is executed. So if you don't have a .gitignore 
file yet I recommend using:
echo "$(git status --porcelain | grep '^??' | cut -c4-)" > .gitignore

git status --porcelain | sed -n -e 's/^?? //p' >> .gitignore

Usage scenario: How do I do a 'git status' so it doesn't display untracked files without using .gitignore?
Example:
git status -uno

git status --untracked-files=no


Usage scenario: git status - list last modified date
Example:
git status -s | while read mode file; do echo $mode $file $(stat -c %y $file); done

git status -s | while read mode file; do echo $mode $(date --reference=$file +"%Y-%m-%d %H:%M:%S") $file; done

git status -s | while read mode file; do echo $mode $(stat -f "%Sm" $file) $file; done|sort

# 21. git push

Usage scenario: How do I delete a Git branch locally and remotely?
Example:
▲ Executive Summary
$ git push -d <remote_name> <branchname>
$ git branch -d <branchname>

▲ Delete Local Branch
$ git branch -d <branch_name>
$ git branch -D <branch_name>

▲ Delete Remote Branch
$ git push <remote_name> --delete <branch_name>

$ git push <remote_name> :<branch_name>

▲ Delete Remote Branch [Original Answer from 5-Jan-2010]
$ git push origin :serverfix
To git@github.com:schacon/simplegit.git
 - [deleted]         serverfix

# Fetch changes from all remotes and locally delete 
# remote deleted branches/tags etc
# --prune will do the job :-;
git fetch --all --prune

Usage scenario: With GitHub how do I push all branches when adding an existing repo?
Example:
▲ Note: git push --all won't push your tags, only your branches.
git push --all
git push --tags

▲ As mentioned in "How to make “git push” include tags within a branch?", git 1.8.3+ (May 2013) introduced:
git push --follow-tags

▲ Git 2.4.1+ (Q2 2015) will introduce the option push.followTags.


Usage scenario: How do you fork your own repository on GitHub?
Example:
git clone https://github.com/userName/Repo New_Repo
cd New_Repo
git remote set-url origin https://github.com/userName/New_Repo
git remote add upstream https://github.com/userName/Repo
git push origin master
git push --all

# 22. git diff-tree

Usage scenario: Export only modified and added files with folder structure in Git
Example:
git diff-tree -r --no-commit-id --name-only --diff-filter=ACMRT $commit_id
git diff-tree -r --no-commit-id --name-only --diff-filter=ACMRT $commit_id | tar -czf file.tgz -T -

Usage scenario: Get a list of changed files and their status for a specific Git commit
Example:
git diff-tree --no-commit-id --name-status -r <SHA>

Usage scenario: How to check/list all files changed in PR with multiple commits
Example:
git diff-tree --name-only $(git merge-base master HEAD) HEAD -- test-proxy

git diff-tree --quiet --exit-code $(git merge-base master HEAD) HEAD -- test-proxy

# 23. git format-patch

Usage scenario: How do I simply create a patch from my latest git commit?
Example:
git format-patch -n HEAD^

git show HEAD > some-patch0001.patch

Usage scenario: Apply patches created with git log -p
Example:
git format-patch -o <output_directory> <from_revision>..<to_revision> -- file-of-interest.txt


Usage scenario: Applying commits from one subtree to another in same repo
Example:
mkdir patches
git format-patch -o patches master..my_featureA_branch

git am patches/* -p3 --directory=repo/featureB

# 24. git merge

Usage scenario: How to undo a git merge with conflicts
Example:
▲ Latest Git:
git merge --abort

▲ Prior to version 1.7.4:
git reset --merge

▲ Prior to version 1.6.2:
git reset --hard

Usage scenario: git pull from master into the development branch
Example:
git checkout dmgr2      # gets you "on branch dmgr2"
git fetch origin        # gets you up to date with origin
git merge origin/master

git checkout dmgr2
git pull origin master

git fetch origin
git checkout master
git merge --ff-only origin/master
git checkout dmgr2
git merge --no-ff origin/master


Usage scenario: Make the current Git branch a master branch
Example:
git checkout better_branch
git merge --strategy=ours master    # keep the content of this branch, but record a merge
git checkout master
git merge better_branch             # fast-forward master up to the merge

git merge --strategy=ours --no-commit master
git commit          # add information to the template merge message


# 25. git add

Usage scenario: How can I stage and commit all files, including newly added files, using a single command?
Example:
git add -A && git commit -m "Your Message"

▲ Edit based on @thefinnomenon's answer below
git config --global alias.coa "!git add -A && git commit -m"

git coa "A bunch of horrible changes"

▲ Explanation

Usage scenario: How do I undo the most recent local commits in Git?
Example:
$ git commit -m "Something terribly misguided" # (0: Your Accident)
$ git reset HEAD~                              # (1)
[ edit files as necessary ]                    # (2)
$ git add .                                    # (3)
$ git commit -c ORIG_HEAD                      # (4)

Usage scenario: How do I "commit" changes in a git submodule?
Example:
$ cd path/to/submodule
$ git add <stuff>
$ git commit -m "comment"
$ git push

$ cd /main/project
$ git add path/to/submodule
$ git commit -m "updated my submodule"
$ git push

# 26. git log

Usage scenario: Git, see a list of comments of my last N commits
Example:
▲ If you want to use the command line you can use the --author=<your name>
git log -n 5 --author=Salvador

▲ If you want a simpler one line solution:
git log --oneline -n 5 --author=Salvador

▲ If you like the single line version, try creating an alias for git log like this (this is what I have for zsh)

alias glog="git log --graph --pretty=format:'%Cred%h%Creset 
  -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

glog -n 5

Usage scenario: How to find a deleted file in the project commit history?
Example:
▲ If you do not know the exact path you may use
git log --all --full-history -- "**/thefile.*"

▲ If you know the path the file was at, you can do this:
git log --all --full-history -- <path-to-file>

git show <SHA> -- <path-to-file>

Usage scenario: How to find the Git commit that introduced a string in any branch?
Example:
git log -S <whatever> --source --all

git log -S 'hello world' --source --all
git log -S "dude, where's my car?" --source --all

git log -G "^(\s)*function foo[(][)](\s)*{$" --source --all



# 27. git remote

Usage scenario: How to remove remote origin from a Git repository
Example:
git remote set-url origin git://new.url.here

git remote remove origin


Usage scenario: Cloning a repo from someone else's Github and pushing it to a repo on my Github
Example:
$ git remote set-url origin http://github.com/YOU/YOUR_REPO

$ git remote add personal http://github.com/YOU/YOUR_REPO

$ git remote rename origin upstream
$ git remote add origin http://github.com/YOU/YOUR_REPO

$ git fetch upstream


Usage scenario: How to change the URI (URL) for a remote Git repository?
Example:
git remote set-url origin new.git.url/here

# 28. git init


Usage scenario: How do you use "git --bare init" repository?
Example:
git init --bare test_repo.git

git config receive.denyCurrentBranch ignore

git init --bare --shared=group


Usage scenario: How do I do an initial push to a remote repository with Git?
Example:
mkdir my_project
cd my_project
touch .gitignore
git init
git add .
git commit -m "Initial commit"
git remote add origin youruser@yourserver.com:/path/to/my_project.git
git push origin master


Usage scenario: How do I create a master branch in a bare Git repository?
Example:
# initialize your bare repo
$ git init --bare test-repo.git

# clone it and cd to the clone's root directory
$ git clone test-repo.git/ test-clone
Cloning into 'test-clone'...
warning: You appear to have cloned an empty repository.
done.
$ cd test-clone

# make an initial commit in the clone
$ touch README.md
$ git add . 
$ git commit -m "add README"
[master (root-commit) 65aab0e] add README
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.md

# push to origin (i.e. your bare repo)
$ git push origin master
Counting objects: 3, done.
Writing objects: 100% (3/3), 219 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To /Users/jubobs/test-repo.git/
 * [new branch]      master -> master

# 29. git diff

Usage scenario: How to compare files from two different branches
Example:
git diff mybranch master -- myfile.cs

git diff mybranch..master -- myfile.cs


Usage scenario: Finding diff between current and last version
Example:
▲ I don't really understand the meaning of "last version".
git diff HEAD^ HEAD

git diff @~..@

git show

▲ If you want to know the diff between head and any commit you can use:
git diff commit_id HEAD

▲ And this will launch your visual diff tool (if configured):
git difftool HEAD^ HEAD

git diff @^
git diff HEAD^
git diff commit_id


Usage scenario: Ignore *all* whitespace changes with git-diff between commits
Example:
git config core.whitespace '-trailing-space,-indent-with-non-tab,-tab-in-indent'

git diff -w --word-diff-regex='[^[:space:]]'

git diff -w -U0 --word-diff-regex='[^[:space:]]'


# 30. git tag

Usage scenario: How to tag an older commit in Git?
Example:
git tag -a v1.2 9fceb02 -m "Message here"

Usage scenario: Replace remote tag with Git
Example:
git push origin :refs/tags/<tagname>

$ git push origin master :refs/tags/v0.5
To git@github.com:org_name/repo_name.git
- [deleted]         v0.5

git tag -fa <tagname>

$ git tag -fa "v0.5" -m "version 0.5"
Updated tag 'v0.5' (was f55c93f)

git push origin --tags

$ git push origin master --tags
Counting objects: 1, done.
Writing objects: 100% (1/1), 196 bytes | 0 bytes/s, done.
Total 1 (delta 0), reused 0 (delta 0)
To git@github.com:org_name/repo_name.git
* [new tag]         v0.5 -> v0.5

Usage scenario: Remove or edit an unpushed Git tag
Example:
git tag -d tag_name

git push origin :refs/tags/tag_name

git tag --list
