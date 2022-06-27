1.	git revert
(1)	ADECK
Usage scenario: Git revert merge to specific parent
Example: 
git revert -m 2 0ce2ca0b35f59af267241cf4d40d16a3e13ba6f3

Usage scenario: Git cancel a revert
Example: 
Username@Host MINGW64 /d/code/your-project (feature|REVERTING)
git reset --soft HEAD^ // discard the last commit, keeping all the changes after that
git reset --soft HEAD~3 // discart last 3 commits. Don't know if it works for commits of others.

Usage scenario: Rebase, but ignoring one upstream commit?
Example: 
git checkout map_dev
git merge master
git revert <sha1>
git checkout master -b temp
git revert <sha1 of code removal>
git checkout map_dev
git merge temp
git branch -d temp

(2)	Opiner

Usage scenario: Git - Undo pushed commits
Example: 
git revert <commit_hash>
git revert <oldest_commit_hash>..<latest_commit_hash>

Usage scenario: Revert a range of commits in git
Example: 
git revert B^..D 
git revert OLDER_COMMIT^..NEWER_COMMIT
git revert -n OLDER_COMMIT^..NEWER_COMMIT
git commit -m "revert OLDER_COMMIT to NEWER_COMMIT"

Usage scenario: Unmerge a git branch, keeping post-merge commits
Example: 
git revert -m 1 hash_of_merge_commit


2.	git reflog
(1)	ADECK
Usage scenario: Aborted old git rebase and lost commits since the rebase started
Example: 
# Suppose the old commit was HEAD@{2} in the ref log
git reset --hard HEAD@{2}

Usage scenario: Removing git repository objects entirely from all branches and tags and pushing changes to remote
Example: 
# Configure the repository to push all existing branches & tags
# when none are explicitly specified
git config --add remote.origin.push '+refs/tags/*:refs/tags/*'
git config --add remote.origin.push '+refs/heads/*:refs/heads/*'

# Make sure all local branches exist, so they get filtered
for remote_branch in `git branch --all | grep -v HEAD | sed -e 's/\*//'`; do local_branch=`echo $remote_branch | sed -e 's!remotes/origin/!!'`; git checkout $local_branch; done

# Prevent git <1.7.7.1 from complaining about dirty working directory
git update-index -q --ignore-submodules --refresh

# Do the filtering across --all branches and rewrite tags
# Note that this will necessarily remove signatures on tags
git filter-branch -f --tree-filter "git rm -rf --ignore-unmatch modules/custom/mymigration/data/photos/*" --tag-name-filter cat -- --all

# Remove the backed-up refs
git for-each-ref --format="%(refname)" refs/original/ | xargs -n 1 git update-ref -d

# Clear out the reflog and garbage-collect
git reflog expire --expire=now --all
git gc --aggressive --prune=now

# Push all changes to origin - pushes tags and branches
git push origin

Usage scenario: 'git reset --hard' Multiple Rebased Branches
Example: 
git push . +topic1@{1}:topic1
git push . +topic2@{1}:topic2

(2)	Opiner

Usage scenario: Does github keep deleted remote branches in history? If so, can those be restored?
Example: 
git reflog
git checkout -b branch_name HEAD@{27}
git checkout -b branch_name <commit id>

Usage scenario: Git refs/remotes/origin/master does not point to a valid object
Example: 
git gc
git fsck --full
git reflog expire --expire=0 --all
git update-ref -d 0d998c99b6d01e8aabca72b1934802acf90b8fc9
git gc --aggressive
git remote update –prune

Usage scenario: Garbage collect commits in git
Example: 
rm -rf .git/refs/original/*
git reflog expire --all --expire-unreachable=0
git repack -A -d
git prune


3.	git stash
ADECK
Usage scenario: How would I extract a single file (or changes to a file) from a git stash?
Example: 
$ git diff stash@{0}^1 stash@{0} -- <filename>
$ git diff stash@{0}^! -- <filename>
$ git checkout stash@{0} -- <filename>
$ git show stash@{0}:<full filename>  >  <newfile>
$ git show stash@{0}:./<relative filename> > <newfile>

Usage scenario: Git stash: "Cannot apply to a dirty working tree, please stage your changes"
Example: 
$ git stash show -p | git apply -3 && git stash drop
$ git config --global --replace-all alias.unstash \
   '!git stash show -p | git apply -3 && git stash drop'
$ git unstash


Usage scenario: Why does 'git stash apply' stage my changes?
Example: 
git reset HEAD


Opiner

Usage scenario: How to recover a dropped stash in Git?
Example: 
git stash apply $stash_hash
git branch recovered $stash_hash
git fsck --no-reflog | awk '/dangling commit/ {print $3}'
git fsck --no-reflog | select-string 'dangling commit' | foreach { $_.ToString().Split(" ")[2] }
gitk --all $( git fsck --no-reflog | awk '/dangling commit/ {print $3}' )

Usage scenario: Is it possible to preview stash contents in git?
Example: 
git stash show -p
git stash show -p stash@{2}

Usage scenario: How to Git stash pop specific stash in 1.8.3?
Example: 
git stash apply n
git stash list
git stash apply stash@{n}


4.	git clean
ADECK
Usage scenario: Can I restore deleted files (undo a `git clean -fdx`)?
Example: 
git clean -fdxn
git clean -fdx

Usage scenario: git clean: What does "Would not remove" mean?
Example: 
------------
  *** Commands ***
  1: clean                2: filter by pattern    3: select by numbers
  4: ask each             5: quit                 6: help
  What now> 1
------------
clean::
filter by pattern::
select by numbers
ask each::
quit::
help::

Usage scenario: Why is it necessary to lose untracked files when you set up github pages?
Example: 
cd /path/to/fancypants
git symbolic-ref HEAD refs/heads/gh-pages
rm .git/index
echo "My GitHub Page" > index.html
git add index.html
git commit -a -m "First pages commit"
git push origin gh-pages


Opiner

Usage scenario: git clean is not removing a submodule added to a branch when switching branches
Example: 

$ git --version
git version 1.7.5.4 # Note, different git-version. 

git init submod
cd submod
echo "This is a submodule" > README.txt
git add .
git commit -m "Initial commit"
cd ..
git init prog
cd prog
echo "This is a program" > README.txt
git add .
git commit -a -m "Initial commit"

git checkout -b topic1
git submodule add /Users/simont/sandbox/SOTESTING/Subdir-testing/submod
git commit -m "Added submodule"

$ git checkout master
warning: unable to rmdir submod: Directory not empty
Switched to branch 'master'

git status
# On branch master
# Untracked files:
#   (use "git add ..." to include in what will be committed)
#
#       submod/
#nothing added to commit but untracked files present (use "git add" to track)

git clean -fd
#Removing submod/

git status
# On branch master
# Untracked files:
#   (use "git add ..." to include in what will be committed)
#
#       submod/
#nothing added to commit but untracked files present (use "git add" to track)

$ # As we can see, we haven't actually removed anything yet. 
$ ls
README.txt  submod

$ git clean -f -f -d submod
Removing submod/

$ ls
README.txt

$ git status
# On branch master
nothing to commit (working directory clean)


Usage scenario: git clean does not clean unwanted folder
Example: 
git clean -fdx

Usage scenario: git root branches... how do they work?
Example: 
$ cd /path/to/fancypants
$ git symbolic-ref HEAD refs/heads/gh-pages
$ rm .git/index
$ git clean -fdx



5.	git reset
ADECK
Usage scenario: How to undo 'git reset'?
Example: 
git reset 'HEAD@{1}'
git reflog
$ git reflog
3f6db14 HEAD@{0}: HEAD~: updating HEAD
d27924e HEAD@{1}: checkout: moving from d27924e0fe16776f0d0f1ee2933a0334a4787b4c
[...]
$ git reflog show master
c24138b master@{0}: merge origin/master: Fast-forward
90a2bf9 master@{1}: merge origin/master: Fast-forward
[...]

Usage scenario: Git Svn dcommit error - restart the commit
Example: 
$ git checkout -b backup    # create a local backup branch with all your work
$ git checkout master   
$ git checkout -b backup2   # 2nd copy just to be safe
$ git checkout master
$ git reset --hard <this is the revision of the last svn-id> # clean up master to make the svn merge easier
$ git svn fetch    # this should update to the current version on the svn server
$ git rebase master backup  # may get a conflict here, fix and commit
... # after conflict is fixed and commited
$ git checkout master 
$ git merge backup --ff  # merge in your local commits
$ git svn dcommit        # push back to the svn




Usage scenario: What is the difference between "git checkout -- ." and "git reset HEAD --hard"?
Example: 
git checkout master
git checkout -- master
  HEAD       index    work-tree
-------------------------------
README.md  README.md  README.md
file.txt   file.txt   file.txt
           new.txt    new.txt
rmd.txt
                      untr.txt
$ git rev-parse --show-toplevel
/home/torek/src/kernel.org/git
$ pwd
/home/torek/src/kernel.org/git/Documentation
$ git rev-parse --show-cdup
../



Opiner

Usage scenario: How do I undo 'git add' before commit?
Example: 
git reset <file>
git reset

Usage scenario: How to resolve "Error: bad index – Fatal: index file corrupt" when using Git
Example: 
rm -f .git/index
git reset
del .git\index
git reset

Usage scenario: brew update: The following untracked working tree files would be overwritten by merge:
Example: 
cd /usr/local/Homebrew
git fetch origin
git reset --hard origin/master
sudo chown -R `whoami` /usr/local/Homebrew
cd /usr/local/Homebrew
git reset --hard origin/master



6.	git help
ADECK
Usage scenario: Where is my git alias stored?
Example: 
   For reading options: read only from global ~/.gitconfig rather than from
   all available files.
   For reading options: read only from system-wide $(prefix)/etc/gitconfig
   rather than from all available files.
grep subaddvim .git/config ~/.gitconfig /etc/gitconfig


Usage scenario: Git switch file from one to another: Can't push
Example: 
git config --global push.default simple

Usage scenario: Git fatal: failed to launch browser
Example: 
C:\Users\Владик>git help -w add
Launching default browser to display HTML ...
fatal: failed to launch browser for C:\Users\Владик\AppData\Local\Programs\Git\mingw32/share/doc/git-doc/git-add.html


Opiner

Usage scenario: Git equivalent of which/whence
Example: 
PATH=$(git --exec-path):$PATH which git-checkout
f() { PATH=$(git --exec-path)${PATH+:$PATH} which git-$1 2>&- || git help $1; }

Usage scenario: gitbash error -- sh.exe SSH_ENV ambiguous redirect
Example: 
************* ERROR LOOKS LIKE THIS ***********
Run 'git help git' to display the help index.
Run 'git help <command>' to display help for specific commands.
sh.exe": /c/Documents: No such file or directory
Usage: grep [OPTION]... PATTERN [FILE]...
Try `grep --help' for more information.
Initializing new SSH agent...

Usage scenario: Git fatal: failed to launch browser
Example: 
C:\Users\Владик>git help -w add
Launching default browser to display HTML ...
fatal: failed to launch browser for C:\Users\Владик\AppData\Local\Programs\Git\mingw32/share/doc/git-doc/git-add.html


7.	gitk
ADECK
Usage scenario: Viewing full version tree in git
Example: 
gitk --all
gitk master origin/master origin/experiment
gitk --simplify-by-decoration –all

Usage scenario: How to view complete commits when tracking history of a single file in Git?
Example: 
git log -p --full-diff file.txt

Usage scenario: Starting gitk Error
Example: 
export PATH=/opt/local/bin:/opt/local/sbin:$PATH
export PATH=$PATH:/opt/local/bin:/opt/local/sbin

Opiner

Usage scenario: How can I revert a single file to a previous version?
Example: 
git log path/to/file
git log -p path/to/file
gitk path/to/file
# get the version of the file from the given commit
git checkout <commit> path/to/file
# and commit this modification
git commit


Usage scenario: gitignore all files in folders but keep folder structure
Example: 
/foo/**
!/foo/**/
!/foo/**/.gitkeep
/foo/** 
!**/.gitkeep
git check-ignore -v -- /path/to/.gitkeep

Usage scenario: Possibly lost some changes via git
Example: 
git reflog
git rev-list --all --header HEAD
git branch my temporary
gitk --all


8.	git mergetool
ADECK

Usage scenario: Redo merge of just a single file
Example: 
git checkout -m <file>

Usage scenario: How to configure kdiff3 instead of emerge as a git mergetool?
Example: 
$ git config --global merge.tool kdiff3
$ git config --global mergetool.kdiff3.path /Applications/kdiff3.app/Contents/MacOS/kdiff3

Usage scenario: git mergetool with opendiff always moves me to "no branch"
Example: 
git rebase master tricoherence
git mergetool
# remember to delete the <file>.orig file made by opendiff
git add <file>
git rebase --continue

Opiner

Usage scenario: error: cannot overwrite multiple values with a single value
Example: 
git mergetool --tool=p4merge
git mergetool --tool-help
git config -l
git config --unset mergetool.p4merge.path
git config --add mergetool.p4merge.path "c:/somewhere/p4merge.exe"
git config --list
git config --global --list
git config --edit
git config --global --edit
git config --unset name
git config --global --unset name
git config --remove-section name
git config --global --remove-section name
git config merge.tool name
git config mergetool.name.property value
git config diff.tool name
git config difftool.name.property value


Usage scenario: git tells me that I Merge conflict, but also tells me that no files need merging
Example: 
$ git mergetool
$ git mergetool --tool=kdiff3

Usage scenario: Windows Subsystem for Linux git mergetool meld UnicodeDecodeError
Example: 
nano meld
#!/bin/bash

/mnt/c/Program\ Files\ \(x86\)/Meld/Meld.exe $@
sudo chmod +x meld
sudo mv meld /usr/bin
[merge]
    tool = meld
[mergetool "meld"]
    cmd = meld --diff \"$BASE\" \"$LOCAL\" \"$REMOTE\" --output \"$MERGED\"
git mergetool


9.	git fetch
ADECK

Usage scenario: Does "git fetch --tags" include "git fetch"?
Example: 
git fetch <remote> 'refs/tags/*:refs/tags/*'
refs/tags/*:refs/tags/*
git fetch <remote> 'refs/tags/*:refs/tags/*'
It doesn't make sense to pull all tags; you probably meant:
      git fetch --tags
Test            HEAD^               HEAD
----------------------------------------------------------
5550.4: fetch   11.21(10.42+0.78)   0.08(0.04+0.02) -99.3%
fatal: multiple updates for ref 'refs/tags/v1.0.0' not allowed

Usage scenario: Git: What EXACTLY does "git pull" do?
Example: 
$ git cat-file -p HEAD | sed 's/@/ /g'
tree a15b54eb544033f8c1ad04dd0a5278a59cc36cc9
parent 951ea7656ebb3f30e6c5e941e625a1318ac58298
author Junio C Hamano <gitster pobox.com> 1494339962 +0900
committer Junio C Hamano <gitster pobox.com> 1494339962 +0900

Git 2.13

Signed-off-by: Junio C Hamano <gitster pobox.com>
$ git cat-file -p v2.13.0
object b06d3643105c8758ed019125a4399cb7efdcce2c
type commit
tag v2.13.0
[snip]

Usage scenario: Fetch and Merge into all Branches at once from Upstream Repository
Example: 
git fetch origin v1:v1 v2:v2



Opiner

Usage scenario: git pull fails "unable to resolve reference" "unable to update local ref"
Example: 
rm .git/refs/remotes/origin/master
git fetch

Usage scenario: Git says remote ref does not exist when I delete remote branch
Example: 
git fetch –prune

Usage scenario: Change remote repository credentials (authentication) on Intellij IDEA 14
Example: 
>git fetch
remote: HTTP Basic: Access denied
fatal: Authentication failed for 'http://gitlab.abc.net/V4/VH.git/'
Control Panel->User Accounts -> Windows Credentials


10.	git branch
ADECK

Usage scenario: There is no tracking information for the current branch
Example: 
git pull origin master
git branch --set-upstream-to=origin/master master
git pull

Usage scenario: error: pathspec 'test-branch' did not match any file(s) known to git
Example: 
git checkout test-branch
$ git checkout -b <branch> --track <remote>/<branch>
git checkout -b test_branch --track origin/test_branch

Usage scenario: Git list branches merged into a branch but not into another
Example: 
 comm -12 <(sort <(git branch --no-merged master)) <(sort <(git branch --merged integration))

Opiner

Usage scenario: Make an existing Git branch track a remote branch?
Example: 
git branch -u upstream/foo
git branch -u upstream/foo foo
git branch --set-upstream-to=upstream/foo

git branch --set-upstream-to=upstream/foo foo
git branch --set-upstream foo upstream/foo

Usage scenario: Why do I need to do `--set-upstream` all the time?
Example: 
git push -u origin my_branch
git push -u origin HEAD
git branch --set-upstream-to origin/my_branch
git branch -u origin/my_branch

Usage scenario: When does Git refresh the list of remote branches?
Example: 
git remote update origin --prune
git branch -a



11.	git config
ADECK

Usage scenario: Git push error: RPC failed; result=56, HTTP code = 200 fatal: The remote end hung up unexpectedly fatal
Example: 
git config http.postBuffer 524288000

Usage scenario: Git replaced all of my LF with CRLF - How do I fix this?
Example: 
git config --global core.autocrlf false

Usage scenario: When you set a global configuration option for git on Windows, where does it get written to?
Example: 
 git config --global --file myFile key value

Opiner

Usage scenario: How can I determine the URL that a local Git repository was originally cloned from?
Example: 
git config --get remote.origin.url
git remote show origin
C:\Users\jaredpar\VsVim> git remote show origin
* remote origin
  Fetch URL: git@github.com:jaredpar/VsVim.git
  Push  URL: git@github.com:jaredpar/VsVim.git
  HEAD branch: master
  Remote branches:

Usage scenario: Is there a way to cache https credentials for pushing commits?
Example: 
git config --global credential.helper cache
git config --global credential.helper "cache --timeout=3600"
git config --global credential.helper "cache --timeout=86400"
git config --global credential.helper osxkeychain
git config --global credential.helper wincred # obsolete
git config --global credential.helper manager
sudo dnf install git-credential-libsecret
git config --global credential.helper /usr/libexec/git-core/git-credential-libsecret
sudo apt-get install libsecret-1-0 libsecret-1-dev
cd /usr/share/doc/git/contrib/credential/libsecret
sudo make
git config --global credential.helper /usr/share/doc/git/contrib/credential/libsecret/git-credential-libsecret
https://you:password@github.com/you/example.git
git config remote.origin.url https://you:password@github.com/you/example.git
machine <hostname> login <username> password <password>
chmod 600 ~/.netrc


Usage scenario: LF will be replaced by CRLF in git - What is that and is it important?
Example: 
git config core.autocrlf true
core.autocrlf
$ git config --global core.autocrlf true
$ git config --global core.autocrlf input
$ git config --global core.autocrlf false


12.	git update-ref
ADECK

Usage scenario: Git refs/remotes/origin/master does not point to a valid object
Example: 
git gc
git fsck --full
git reflog expire --expire=0 --all
git update-ref -d 0d998c99b6d01e8aabca72b1934802acf90b8fc9
git gc --aggressive
git remote update –prune

Usage scenario: Repairing git branch: refs now show refs/remotes/branch and refs/remotes/origin/branch
Example: 
git update-ref -d refs/remotes/somebranch
ls .git/refs/remotes

Usage scenario: Why does git update-ref accepts non /refs references?
Example: 
git hash-object --stdin </dev/null | tr '[0-9a-f]' '0'  

Opiner

Usage scenario: Git refs/remotes/origin/master does not point to a valid object
Example: 
git gc
git fsck --full
git reflog expire --expire=0 --all
git update-ref -d 0d998c99b6d01e8aabca72b1934802acf90b8fc9
git gc --aggressive
git remote update –prune

Usage scenario: git update-ref appears to do nothing
Example: 
git update-ref --create-reflog \
  -m "Fix HEAD to be newmaster instead of non-existent master" \
  refs/remotes/origin/HEAD refs/remotes/origin/newmaster

Usage scenario: Why doesn't `git update-ref -d` delete empty parent directories?
Example: 
directory not created deleting packed ref':

git branch d1/d2/r1 HEAD &&
git pack-refs --all &&
test_path_is_missing .git/refs/heads/d1/d2 &&
git update-ref -d refs/heads/d1/d2/r1 &&
test_path_is_missing .git/refs/heads/d1/d2 &&
test_path_is_missing .git/refs/heads/d1  <==== grand-parent is gone


13.	git pull
ADECK

Usage scenario: What is a tracking branch?
Example: 
$ git checkout --track origin/serverfix
Branch serverfix set up to track remote branch refs/remotes/origin/serverfix.
Switched to a new branch "serverfix"
$ git checkout -b sf origin/serverfix
Branch sf set up to track remote branch refs/remotes/origin/serverfix.
Switched to a new branch "sf"
$ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)
$ git status
On branch dev
Your branch and 'origin/dev' have diverged,
and have 3 and 1 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)

Usage scenario: Error with 'Git push heroku master' command
Example: 
git pull heroku master
git push --force heroku master

Usage scenario: git command in rails controller
Example: 
def commit
 system "git pull origin development"
end

Opiner

Usage scenario: What is the best (and safest) way to merge a Git branch into master?
Example: 
git checkout master
git pull origin master
git merge test
git push origin master

Usage scenario: In what cases could `git pull` be harmful?
Example: 
git config --global pull.ff only
git pull --ff-only
git config --global alias.up '!git remote update -p; git merge --ff-only @{u}'
git config --global alias.up '!git remote update -p; git merge --ff-only @{u}'
git config --global alias.up 'pull --ff-only --all -p'
git config --global pull.ff only

Usage scenario: How do I ignore an error on 'git pull' about my local changes would be overwritten by merge?
Example: 
git checkout HEAD^ file/to/overwrite
git pull


14.	git apply
ADECK

Usage scenario: git: patch does not apply
Example: 
git apply --ignore-space-change --ignore-whitespace mychanges.patch

Usage scenario: Error in running 'git apply'
Example: 
git am -3

Usage scenario: Why is git apply not finding the file to patch in the current directory?
Example: 
git diff --full-index <SHAsum of commit A> <SHAsum of commit B> > change.patch     (full index for binary file)
git apply --check --verbose --summary change.patch  (check if it is in good patch or not)
git apply --verbose change.patch

Opiner

Usage scenario: git: patch does not apply
Example: 
git apply --ignore-space-change --ignore-whitespace mychanges.patch

Usage scenario: My diff contains trailing whitespace - how to get rid of it?
Example: 
git apply --whitespace=warn patchname.patch

Usage scenario: Apply github commit / pull request as a patch
Example: 
wget --output-document=issue1.patch https://github.com/JWalker1995/minisat/commit/a8cef9d932552b2ec155d5e0d44d8fe0efa3a235.patch
wget --output-document=issue2.patch https://github.com/niklasso/minisat/pull/17.patch
git apply issue1.patch


15.	git rm
ADECK

Usage scenario: Remove a file from a Git repository without deleting it from the local filesystem
Example: 
git rm --cached mylogfile.log
git rm --cached -r mydirectory

Usage scenario: Unable to remove fast many files in Git
Example: 
git add -u
for i in ` git st | grep deleted | awk ‘{print $3}’ ` ; do git rm $i; done
git st | grep deleted | gawk "{print \"git rm \"$3}" | cmd

Usage scenario: To remove a challenging-named file by Git rm
Example: 
git rm "\\033[A.tex"
git rm "\*A.tex" (assuming this pattern matches no other files)
git rm "*A.tex" (same assumption)

Opiner

Usage scenario: ignoring any 'bin' directory on a git project
Example: 
bin/
git rm -r --cached bin

Usage scenario: Can't ignore UserInterfaceState.xcuserstate
Example: 
git rm --cached [project].xcodeproj/project.xcworkspace/xcuserdata/[username].xcuserdatad/UserInterfaceState.xcuserstate
git commit -m "Removed file that shouldn't be tracked"

Usage scenario: Applying .gitignore to committed files
Example: 
apply-gitignore = !git ls-files -ci --exclude-standard -z | xargs -0 git rm --cached


16.	git commit
ADECK

Usage scenario: Git error: src refspec master does not match any
Example: 
 git add a_text_file.txt 
 git commit -m "Initial commit."

Usage scenario: git: pushing a new, empty branch for an empty project?
Example: 
git commit --allow-empty -m "initial commit"
git push -u origin testdev

Usage scenario: What to do after typing in commit message for git?
Example: 
git add file-name  
git commit -m "here goes my awesome commit message"  
git push  

Opiner

Usage scenario: Ignore files that have already been committed to a Git repository
Example: 
git rm -r --cached .
git add .
git commit -m ".gitignore is now working"

Usage scenario: How can I Remove .DS_Store files from a Git repository?
Example: 
find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch
.DS_Store
echo .DS_Store >> .gitignore
git add .gitignore
git commit -m '.DS_Store banished!'

Usage scenario: How to create file execute mode permissions in Git on Windows?
Example: 
C:\Temp\TestRepo>touch foo.sh

C:\Temp\TestRepo>git add foo.sh

C:\Temp\TestRepo>git ls-files --stage
100644 e69de29bb2d1d6434b8b29ae775ad8c2e48c5391 0       foo.sh
C:\Temp\TestRepo>git update-index --chmod=+x foo.sh

C:\Temp\TestRepo>git ls-files --stage
100755 e69de29bb2d1d6434b8b29ae775ad8c2e48c5391 0       foo.sh
C:\Temp\TestRepo>git commit -m"Executable!"
[master (root-commit) 1f7a57a] Executable!
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100755 foo.sh



17.	git checkout
ADECK

Usage scenario: Git - Checkout a remote tag when two remotes have the same tag name
Example: 
+refs/heads/*:refs/remotes/origin/*
+refs/tags/*:refs/rtags/origin/*
git checkout refs/rtag/stuff_from_bobs_computer/spinal_cord

Usage scenario: Working with multiple remotes in git
Example: 
git push origin
# or
git push remote2
git remote set-url --push origin user@example.com:repo.git
git checkout -b abranch remote2/abranch
$ git remote add upstream https://github.com/atom/atom
$ git fetch upstream
git checkout -b abranch origin/abranch
git rebase upstream/abranch
git push –force

Usage scenario: Can't do a checkout with multiple remotes
Example: 
[checkout]
    defaultRemote=origin

Opiner

Usage scenario: How do I force "git pull" to overwrite local files?
Example: 
git fetch --all
git branch backup-master
git reset --hard origin/master
git reset --hard origin/<branch_name>
git checkout master
git branch new-branch-to-save-current-commits
git fetch --all
git reset --hard origin/master
git stash
git stash pop


Usage scenario: What is the best (and safest) way to merge a Git branch into master?
Example: 
git checkout master
git pull origin master
git merge test
git push origin master

Usage scenario: Do a "git export" (like "svn export")?
Example: 
git archive master | tar -x -C /somewhere/else
git archive master | bzip2 >source-tree.tar.bz2
git archive --format zip --output /full/path/to/zipfile.zip master 
git checkout-index -a -f --prefix=/destination/path/


18.	git show
ADECK

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

Usage scenario: What is the easiest/fastest way to find out when a git branch was created?
Example: 
git show $(git merge-base master your-branch)

Usage scenario: git-checkout older revision of a file under a new name
Example: 
git --work-tree TEMP/ restore -s <commit> main.cpp
mv TEMP/main.cpp old_main.cpp
git show <commit>:main.cpp > old_main.cpp
# one time setup
mkdir WD2
cd WD2
echo gitdir: WD1 > .git

# operate freely here with an alternative file set while the same branch is checked out in git
git restore -s <commit> main.cpp

Opiner

Usage scenario: Simple tool to 'accept theirs' or 'accept mine' on a whole file using git
Example: 
git checkout HEAD -- <filename>
git checkout --ours -- <filename>
git show :2:<filename> > <filename> # (stage 2 is ours)
git checkout test-branch -- <filename>
git checkout --theirs -- <filename>
git show :3:<filename> > <filename> # (stage 3 is theirs)
git add <filename>

Usage scenario: Revert changes to a file in a commit
Example: 
git show some_commit_sha1 -- some_file.c | git apply -R

Usage scenario: When listing git-ls-remote why there's "^{}" after the tag name?
Example: 
$ git show-ref --tags
bb944682f7f65272137de74ed18605e49257356c    refs/tags/v0.1.6
a72251d945353a360087eb78ee75287c38a1c0e6    refs/tags/v0.1.7

$ git show-ref --tags --dereference
bb944682f7f65272137de74ed18605e49257356c    refs/tags/v0.1.6
771a930dc0ba86769d6862bc4dc100acc50170fa    refs/tags/v0.1.6^{}
a72251d945353a360087eb78ee75287c38a1c0e6    refs/tags/v0.1.7
d69e66d7c915b9682618b7f304b80cc0ae4c7809    refs/tags/v0.1.7^{}
$ git show 43f9a98886ba873c0468c608f24c408b9991414f
tag v0.1
Tagger: Ash <tuxdude@OptimusPrime>
Date:   Sun Jul 15 00:14:43 2012 -0700

Tagging Stable repo 0.1 :)
-----BEGIN PGP SIGNATURE-----
<PGP-SIGNATURE>
-----END PGP SIGNATURE-----

commit e55df25f2321a6b2c9a02fa80ccba7cbe3c38c08
Merge: 796efcd 58e3a4d
Author: Ash <tuxdude@OptimusPrime>
Date:   Sun Jul 15 00:02:44 2012 -0700

    Merge branch 'dev' into 'master' for stable 0.1.

$ git show e55df25f2321a6b2c9a02fa80ccba7cbe3c38c08
commit e55df25f2321a6b2c9a02fa80ccba7cbe3c38c08
Merge: 796efcd 58e3a4d
Author: Ash <tuxdude@OptimusPrime>
Date:   Sun Jul 15 00:02:44 2012 -0700

    Merge branch 'dev' into 'master' for stable 0.1.


19.	git difftool
ADECK

Usage scenario: git difftool, open all diff files immediately, not in serial
Example: 
#!/bin/sh
git diff --name-only "$@" | while read filename; do
    git difftool "$@" --no-prompt "$filename" &
done
git diffall
git diffall HEAD
git diffall --cached 
git diffall rev1..rev2
etc...

Usage scenario: Multiple diff Tools
Example: 
[diff]
    tool = vimdiff

[difftool "winmerge"]
    name = WinMerge
    trustExitCode = true
    cmd = "/c/Users/rkasten/Google\\ Drive/Apps/WinMerge/WinMergeU.exe" -u -e $LOCAL $REMOTE
alias gdt='git difftool'
alias gdtw='git difftool --tool=winmerge'
[difftool "Kaleidoscope"]
cmd = ksdiff –whatevs

Usage scenario: Git: reviewing changes to a branch
Example: 
git difftool master...experiment

Opiner

Usage scenario: Unable to diff files in two separate branches in Git
Example: 
prompt> git difftool somebranch:UNREADME otherbranch:README


Usage scenario: git, vimdiff and dirdiff
Example: 
[diff]
  tool = default-difftool

[difftool "default-difftool"]
  cmd = vim -f '+next' '+execute \"DirDiff\" argv(0) argv(1)' $LOCAL $REMOTE

[difftool]
  prompt = false
git diffall dev
git diffall --copy-back dev
[diff]
  tool = default-difftool
[difftool "default-difftool"]
  cmd = vim -f '+next' '+execute \"DirDiff\" argv(0) argv(1)' $LOCAL $REMOTE '+syntax off'
git difftool -d dev


Usage scenario: Git mergetool with Meld on Windows
Example: 
git config --global merge.tool meld
git config --global mergetool.meld.path "C:\Program Files (x86)\Meld\Meld.exe"
[merge]
  tool = meld
[mergetool "meld"]
  path = C:\\Program Files (x86)\\Meld\\Meld.exe
# 1. install meld
sudo apt update
sudo apt install meld
# 2. edit your ~/.gitconfig file (gedit GUI editor will open)
gedit ~/.gitconfig
[diff]
    tool = meld
# 1. See changes you've made since your last commit (do this in place of 
# `git diff`)
git difftool

# 2. Calling meld directly to compare two files:
meld path/to/file1.txt path/to/file2.txt
git fetch origin someone_elses_branch
git checkout someone_elses_branch
git difftool main...HEAD  # 3 dots, NOT 2!    
# 1. Fetch their remote changes to your local machine into your 
# locally-stored,remote-tracking hidden branch named
# `origin/someone_elses_branch`
git fetch origin someone_elses_branch
# 2. Check out this branch locally (this creates the locally-stored branch
# named `someone_elses_branch` from the locally-stored remote-tracking
# hidden branch named `origin/someone_elses_branch`)
git checkout someone_elses_branch
# 3. Do a difftool comparison (using meld now) to see the changes
# made on this branch from the point where they last checked out
# and forked off of `main`. This cmd (using 3 dots) is the equivalent of
# `git difftool $(git merge-base main HEAD) HEAD`.
git difftool main...HEAD  # 3 dots, NOT 2!


20.	git status
ADECK

Usage scenario: How to stop tracking and ignore changes to a file in Git?
Example: 
git update-index --assume-unchanged [path]

Usage scenario: Programmatic git status
Example: 
$ git diff HEAD
$ git ls-files -m
# On branch master
# Your branch is ahead of 'origin/master' by 11 commits.
#
* git-for-each-ref
git ls-files --exclude-per-directory=.gitignore --exclude-from=.git/info/exclude \
                    --others \
                    --modified \
                    -t


Usage scenario: git: Find all uncommitted locals repos in a directory tree
Example: 

$ for i in /data/*/; do (cd $i && (echo $i; git status)); done
$ for i in /data/*/; do (cd $i \
> && (git status | grep -qx 'nothing to commit (working directory clean)' \
> || (echo $i && git status))); done



Opiner

Usage scenario: What does the term "porcelain" mean in Git?
Example: 
git status --porcelain
git push --porcelain
git blame --porcelain
--porcelain
--porcelain
-p
--porcelain

Usage scenario: Git diff says subproject is dirty
Example: 
git status --ignore-submodules=dirty

Usage scenario: Git status - is there a way to show changes only in a specific directory?
Example: 
git status .
git status <directoryPath>
git status my/cool/path/here


21.	git push
ADECK

无

Opiner

Usage scenario: How do I delete a Git branch locally and remotely?
Example: 
$ git push -d <remote_name> <branchname>
$ git branch -d <branchname>
$ git branch -d <branch_name>
$ git branch -D <branch_name>
$ git push <remote_name> --delete <branch_name>
$ git push <remote_name> :<branch_name>
$ git push origin :serverfix
To git@github.com:schacon/simplegit.git
 - [deleted]         serverfix
# Fetch changes from all remotes and locally delete 
# remote deleted branches/tags etc
# --prune will do the job :-;
git fetch --all –prune


Usage scenario: How do you push a tag to a remote repository using Git?
Example: 
git push origin <tag_name>
# not recommended
git push –tags


Usage scenario: What is the best (and safest) way to merge a Git branch into master?
Example: 
git checkout master
git pull origin master
git merge test
git push origin master



22.	git diff-tree
ADECK

Usage scenario: Get a list of changed files and their status for a specific Git commit
Example: 
git diff-tree --no-commit-id --name-status -r <SHA>

Usage scenario: What to put into ~/.gitconfig to imply --show-signature for every git subcommand that supports it?
Example: 
log.showSignature

Usage scenario: How do I get a list of files that have changed in a git commit, but with an absolute path?
Example: 
git diff --name-only <commit-ish>^! | sed "s|^|$(git rev-parse --show-toplevel)/|"
git diff-tree --no-commit-id --name-only -r <commit-ish> | sed "s|^|$(git rev-parse --show-toplevel)/|"

Opiner

Usage scenario: How to 'git diff-tree' on a certain directory?
Example: 
<commit hash or name>:path/to/dir
git diff-tree --name-status -t \
    "upstream/$CI_MERGE_REQUEST_TARGET_BRANCH_NAME":resources \
    HEAD:resources
git diff-tree "upstream/$CI_MERGE_REQUEST_TARGET_BRANCH_NAME" HEAD – resources

Usage scenario: Why is the output of git diff-tree empty in my post-receive hook?
Example: 
#!/bin/sh

while read old new ref
do
    # Handle created or deleted branches.
    echo $old | grep -qsE '^0+$' && old=$(git hash-object -t tree /dev/null)
    echo $new | grep -qsE '^0+$' && new=$(git hash-object -t tree /dev/null)
    git diff-tree --no-commit-id --name-only -r "$old" "$new"
done

Usage scenario: BATCH script - FOR loop stops on IF test
Example: 
@Echo Off
SetLocal EnableExtensions EnableDelayedExpansion

Set "Max=10"
Set "Tab=   "

For /F "Delims=" %%A In ('git rev-list --max-count=%Max% HEAD') Do (
    Echo Checking revision %%A 
    For /F "Delims=" %%B In ('git diff-tree --no-commit-id --name-status -r %%A') Do (
        Set "String=%%~B"
        Echo %Tab%FileName: '!String:~2!'
        Echo %Tab%Status: !String:~,1!
        If /I "!String:~,1!"=="A" (
            Echo Added
        )
        If /I "!String:~,1!"=="M" (
            Echo Modified
        )
        If /I "!String:~,1!"=="D" (
            Echo Deleted
        )
    )
)
Pause



23.	git format-patch
ADECK

Usage scenario: How to apply a git patch from one repository to another?
Example: 
$ cat patch_file | git am     \ 
          -p1                 \ # remove 1 leading directory ('static/')
         --directory='lib/'     # prepend 'lib/'

Usage scenario: "git format-patch" equivalent for a single file?
Example: 
git format-patch commit_id file(s)

Usage scenario: Why doesn't git format-patch work for stashes?
Example: 
git format-patch stash@{0}{,^}
*   99aedb8 (refs/stash) WIP on master: 668ff36 initial commit
|\  
| * 6b8d77f index on master: 668ff36 initial commit
|/  
* 668ff36 (HEAD, master) initial commit

Opiner

Usage scenario: git: generate a single patch across multiple commits
Example: 
git format-patch cc1dde0dd^..6de6d4b06 --stdout > foo.patch
git am foo.patch

Usage scenario: git create patch from unpushed commits
Example: 
git format-patch origin/master -o patches/
git format-patch origin/master --stdout > patches_$(date -I).patch

Usage scenario: git format-patch X..Y for a specific author
Example: 
git log X..Y --author='<AUTHOR>' --format="%H" | sed 's/$/^!/g' | xargs -I{} git format-patch {}


24.	git merge
ADECK

Usage scenario: When would you use the different git merge strategies?
Example: 
commit ae632e99ba0ccd0e9e06d09e8647659220d043b9
Merge: f51262e... c9ce629... aa0f25d...

Usage scenario: Git history for branch after merge
Example: 
... <--1234567...   <--master
A <-B <-C <-D <-E <-F <-G   <--master
git log master
...--E--F--G------M   <-- master
         \       /
          H--I--J   <-- feature
A--B--C--D--E   <-- master

Usage scenario: Git merge conflicts resolved and there are no changes to commit
Example: 
Balls come in several colors.  Red is the most popular.
Balls come in several colours.  Green is the most popular.
Balls come in several colors.  Green is the most popular.
git rebase --skip

Opiner

Usage scenario: Git merge hotfix branch into feature branch
Example: 
git checkout feature1
git merge master
git checkout feature1
git merge --no-ff hotfix1


Usage scenario: Is there a "theirs" version of "git merge -s ours"?
Example: 
git checkout branchA
git merge -X theirs branchB
git rm {DELETED-FILE-NAME}

Usage scenario: Check if pull needed in Git
Example: 
#!/bin/sh

UPSTREAM=${1:-'@{u}'}
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse "$UPSTREAM")
BASE=$(git merge-base @ "$UPSTREAM")

if [ $LOCAL = $REMOTE ]; then
    echo "Up-to-date"
elif [ $LOCAL = $BASE ]; then
    echo "Need to pull"
elif [ $REMOTE = $BASE ]; then
    echo "Need to push"
else
    echo "Diverged"
fi

25.	git add
ADECK

Usage scenario: Add all files to a commit except a single file?
Example: 
git add -u
git reset -- main/dontcheckmein.txt

Usage scenario: Git error: src refspec master does not match any
Example: 
 git add a_text_file.txt 
 git commit -m "Initial commit."

Usage scenario: "git add" equivalent in svn?
Example: 
svn commit -m "my commit" file1.txt file2.txt

Opiner

Usage scenario: Gitignore not working
Example: 
git rm -rf --cached .
git add .

Usage scenario: The following untracked working tree files would be overwritten by merge, but I don't care
Example: 
git add * 
git stash
git pull

Usage scenario: Git: list only "untracked" files (also, custom commands)
Example: 
git ls-files --others --exclude-standard
git ls-files -z -o --exclude-standard | xargs -0 git add
au = !git add $(git ls-files -o --exclude-standard)


26.	git log
ADECK

Usage scenario: git log to return only the commits made to the master branch?
Example: 
git log --first-parent master

Usage scenario: What does git log show me?
Example: 
git log
git log HEAD
git log origin/master
git log ..origin/master
git log HEAD..origin/master
git log ^HEAD origin/master
git log --all
git log --all –sparse

Usage scenario: git pull --rebase lost commits after coworker's git push --force
Example: 
git rebase @{u}
git rebase --no-fork-point
 + 5122532...6f1308f pu         -> origin/pu  (forced update)
            D   <-- master
... <- C <- D   <-- master
...--o--o   <-- branch
A--B--C--D     <-- master
    \
     E--F--G   <-- branch
           E'  <-- (temporary)
          /
A--B--C--D     <-- master
    \
     E--F--G   <-- branch
           E'-F'-G'  <-- branch
          /
A--B--C--D           <-- master
    \
     E--F--G         [abandoned]
A--B--C--D     <-- master
    \
     E--F--G   <-- branch
git checkout branch; git rebase master
git rebase --onto <newbase> <upstream>
git merge-base $arg2 $(git log -g --format=%H $arg1)
...--o--B1--B2--B3--C--D    <-- upstream
                 \
                  E--F--G   <-- branch
...--o-------------C--D     <-- upstream
      \
       B1--B2--B3           <-- upstream@{1}
                \
                 E--F--G    <-- branch
...--o-------------C--D     <-- upstream
      \
       B1--B2--B3--E--F--G  <-- branch
$ arg1=origin/next
$ arg2=stash-exp
$ git merge-base --all $arg2 $(git log -g --format=%H $arg1)
3313b78c145ba9212272b5318c111cde12bfef4a
$ git merge-base --fork-point $arg1 $arg2
$ echo $?
1

Opiner

Usage scenario: How can I reconcile detached HEAD with master/origin?
Example: 
git branch temp
git checkout temp
git log --graph --decorate --pretty=oneline --abbrev-commit master origin/master temp
git diff master temp
git diff origin/master temp
git branch -f master temp
git checkout master
git branch -d temp
git push origin master

Usage scenario: Search all of Git history for a string
Example: 
git log -S password

Usage scenario: Unable to show a Git tree in terminal
Example: 
git log --graph --oneline --all
export LESS="-R"
git log --graph --pretty=oneline --abbrev-commit | tig   // Masi needed this 
git log --graph --pretty=oneline --abbrev-commit


27.	git remote
ADECK

Usage scenario: GitHub "fatal: remote origin already exists"
Example: 
$ git remote set-url origin git@github.com:ppreyer/first_app.git
$ git remote add github git@github.com:ppreyer/first_app.git
$ git remote set-url origin git@github.com:ppreyer/first_app.git

Usage scenario: Remote origin already exists on 'git push' to a new repository
Example: 
git remote add myorigin git@github.com:myname/oldrep.git  
git remote add testtest git@github.com:myname/oldrep.git
git remote rm origin
git remote rm upstream

Usage scenario: fatal: does not appear to be a git repository
Example: 
[user@]host.xz:path/to/repo.git/
git@skarp.beanstalkapp.com:/gittest.git
git remote set-url origin git@skarp.beanstalkapp.com:/gittest.git



Opiner

Usage scenario: Git push results in "Authentication Failed"
Example: 
git remote -v 
git remote remove origin 
git remote add origin git@github.com:user/repo.git  

Usage scenario: Remote origin already exists on 'git push' to a new repository
Example: 
git remote add myorigin git@github.com:myname/oldrep.git  
git remote add testtest git@github.com:myname/oldrep.git
git remote rm origin
git remote rm upstream

Usage scenario: Is it possible to cherry-pick a commit from another git repository?
Example: 
git remote add other https://example.link/repository.git
git fetch other


28.	git init
ADECK

Usage scenario: My Git repository is in the wrong root directory. Can I move it? (../ instead of ./)
Example: 
mv .git thecorrectfolder/
cd thecorrectfolder/
git init
git add .
git commit -am 'fixing things'
git push origin master
rename {ethanode/coffee => coffee}/app.coffee (100%)

Usage scenario: Is it possible to create a remote repo on GitHub from the CLI without opening browser?
Example: 
gh repo create
mkdir project
cd project
git init
touch file
git add file
git commit -m 'Initial commit'
gh repo create
git push -u origin master

Usage scenario: how to undo git init?
Example: 
 cd myFolder
 rm -rf .git

Opiner

Usage scenario: Convert Mercurial project to Git
Example: 
cd ~
git clone https://github.com/frej/fast-export.git
git init git_repo
cd git_repo
~/fast-export/hg-fast-export.sh -r /path/to/old/mercurial_repo
git checkout HEAD


Usage scenario: Git Push error: refusing to update checked out branch
Example: 
git init –bare

Usage scenario: Why does Git tell me "No such remote 'origin'" when I try to push to origin?
Example: 
git init
git commit -m "first commit"
nothing added to commit but untracked files present (use "git add" to track).
git add README.md
git commit -m "some descriptive message"
git remote add origin https://github.com/VijayNew/NewExample.git
git push -u origin master


29.	git diff
ADECK

Usage scenario: How can I generate a git diff of what's changed since the last time I pulled?
Example: 
git pull origin
git diff @{1}..
current=`git rev-parse HEAD`
git pull origin
git diff $current..
git config --global alias.lcrev 'log --reverse --no-merges --stat @{1}..

Usage scenario: Problems using git diff to create file list for deploy
Example: 
tar cjf ~/deploy.tar.bz2 \
`git diff --name-only 0abc 1def|sed -e "s/ /\\\ /g"`

Usage scenario: Beyond Compare 4 failing as git difftool on OSX when already running
Example: 
git config --global diff.tool bc3
git config --global merge.tool bc3
git config --global mergetool.bc3 trustExitCode true



Opiner

Usage scenario: See what's in a stash without applying it
Example: 
show [<stash>]
    Show the changes recorded in the stash as a diff between the stashed
    state and its original parent. When no <stash> is given, shows the
    latest one. By default, the command shows the diffstat, but it will
    accept any format known to git diff (e.g., git stash show -p stash@{1}
    to view the second most recent stash in patch form).
git stash list
git stash show
git stash show -p
git stash show -p stash@{1}

Usage scenario: How to compare files from two different branches
Example: 
git diff mybranch master -- myfile.cs
git diff mybranch..master -- myfile.cs


Usage scenario: Is there a git-merge --dry-run option?
Example: 
$ git merge --no-commit --no-ff $BRANCH
$ git diff --cached
$ git merge --abort


30.	git tag
ADECK

Usage scenario: Build sequencing when using distributed version control
Example: 
git init
git commit --allow-empty -m'Commit One.'
git tag -a -m'Tag One.' 1.2.3
git describe    # => 1.2.3
git commit --allow-empty -m'Commit Two.'
git describe    # => 1.2.3-1-gaac161d
git commit --allow-empty -m'Commit Three.'
git describe    # => 1.2.3-2-g462715d
git tag -a -m'Tag Two.' 2.0.0
git describe    # => 2.0.0

Usage scenario: Git is not restoring the working branch when switching branches
Example: 
git tag old_version_tag {older revision hash}
git branch old_version old_version_tag
git co old_version
git co -b old_version {older revision hash}

Usage scenario:github repos cloning, but no tags/branches recreated?
Example: 
git checkout -t origin/1.2.x
git branch -a
git tag     # Show bare list of tags.
git tag -n  # Show tags with first line of annotation specified at tag creation.
git tag -n4 # Show tags with 4 lines of annotation, if available.

Opiner

Usage scenario: How to list all Git tags?
Example: 
git tag
git tag -l <pattern>
git tag --sort=<type>
git show-ref --tags -d

Usage scenario: What is the difference between an annotated and unannotated tag?
Example: 
git tag light
cat .git/refs/tags/light
git tag -as -m msg annot
cat .git/refs/tags/annot
c1d7720e99f9dd1d1c8aee625fd6ce09b3a81fef
git cat-file -p c1d7720e99f9dd1d1c8aee625fd6ce09b3a81fef
object 4284c41353e51a07e4ed4192ad2e9eaada9c059f
type commit
tag annot
tagger Ciro Santilli <your@mail.com> 1411478848 +0200

msg
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1.4.11 (GNU/Linux)

<YOUR PGP SIGNATURE>
-----END PGP SIGNAT
git cat-file -t tag


Usage scenario: Do Git tags only apply to the current branch?
Example: 
git tag v1.0
git tag v1.0 name_of_other_branch
git tag v1.0 <sha1>



No Example!!!