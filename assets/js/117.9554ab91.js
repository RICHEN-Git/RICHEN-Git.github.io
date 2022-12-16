(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{542:function(s,t,e){"use strict";e.r(t);var n=e(19),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("📖 "+s._s(s.$page.readingTime.text)+"    🔡 "+s._s(s.$page.readingTime.words)),e("br")])]),s._v(" "),e("h1",{attrs:{id:"git-restore-restore-working-tree-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-restore-restore-working-tree-files"}},[s._v("#")]),s._v(" 📌 git restore - Restore working tree files")]),s._v(" "),e("h2",{attrs:{id:"s"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#s"}},[s._v("#")]),s._v(" 🔹 -s")]),s._v(" "),e("p",[e("strong",[s._v("1. Usage scenario: How to reset all files from working directory but not from staging area?")])]),s._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[s._v("💯Score: 21    🔗Associated commands: [ None ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/57066072",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),e("OutboundLink")],1)])],1)]),s._v(" "),e("p",[e("strong",[s._v("Example:")])]),s._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[s._v("▲ How to use it (man page)\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# restore working tree from HEAD content, without touching the index/staging area")]),s._v("\ngit restore \n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# restore working tree from master content, without touching the index/staging area")]),s._v("\ngit restore -s master\n\n▲ Details from Git sources\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[e("strong",[s._v("2. Usage scenario: HOW TO - Move git to another computer")])]),s._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[s._v("💯Score: 3    🔗Associated commands: [ None ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/61893797",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),e("OutboundLink")],1)])],1)]),s._v(" "),e("p",[e("strong",[s._v("Example:")])]),s._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[s._v("git restore -s@ -W -- .\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("3. Usage scenario: How to create new branch with with previous changes, current changes and new file from another branch?")])]),s._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[s._v("💯Score: 3    🔗Associated commands: [ "),e("RouterLink",{attrs:{to:"/richen/git-switch.html"}},[s._v("git switch")]),s._v(" ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/63517232",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),e("OutboundLink")],1)],1)],1)]),s._v(" "),e("p",[e("strong",[s._v("Example:")])]),s._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[s._v("git switch -c newBranch validation\ngit restore -s <oldSHA1> -SW -- helloworld.go\ngit restore -s <oldSHA1> -SW -- main.js\ngit restore -s <oldSHA1> -SW -- newone.c\n\ngit switch -c newBranch <oldSHA1>\ngit restore -s validation -SW -- index.htm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[e("strong",[s._v("4. Usage scenario: Git: Merge Specific File from Specific Commit")])]),s._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[s._v("💯Score: 2    🔗Associated commands: [ "),e("RouterLink",{attrs:{to:"/richen/git-switch.html"}},[s._v("git switch")]),s._v(", "),e("RouterLink",{attrs:{to:"/richen/git-commit.html"}},[s._v("git commit")]),s._v(", "),e("RouterLink",{attrs:{to:"/richen/git-merge.html"}},[s._v("git merge")]),s._v(" ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/67543513",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),e("OutboundLink")],1)],1)],1)]),s._v(" "),e("p",[e("strong",[s._v("Example:")])]),s._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[s._v('  git switch -c tmp\n\n  git restore -s abc123 -SW -- aFile\n  git commit -m "restore old version of a file\n\n  git switch main (or master)\n  git merge tmp\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[e("strong",[s._v("5. Usage scenario: Git fetch and git pull didn't copy files from remote repo")])]),s._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[s._v("💯Score: 1    🔗Associated commands: [ None ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/59553120",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),e("OutboundLink")],1)])],1)]),s._v(" "),e("p",[e("strong",[s._v("Example:")])]),s._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[s._v("git restore -s@ -SW -- yourFile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("6. Usage scenario: Git restore file deleted in local branch")])]),s._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[s._v("💯Score: 1    🔗Associated commands: [ None ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/60573119",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),e("OutboundLink")],1)])],1)]),s._v(" "),e("p",[e("strong",[s._v("Example:")])]),s._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[s._v(" git restore -s master -- /path/to/MyMissingFile\n\ngit restore -s master -SW -- /path/to/MyMissingFile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"source"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#source"}},[s._v("#")]),s._v(" 🔹 --source")]),s._v(" "),e("p",[e("strong",[s._v("1. Usage scenario: Git reset all files with particular extension")])]),s._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[s._v("💯Score: 8    🔗Associated commands: [ "),e("RouterLink",{attrs:{to:"/richen/git-checkout.html"}},[s._v("git checkout")]),s._v(", "),e("RouterLink",{attrs:{to:"/richen/git-ls-files.html"}},[s._v("git ls-files")]),s._v(" ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/58409702",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),e("OutboundLink")],1)],1)],1)]),s._v(" "),e("p",[e("strong",[s._v("Example:")])]),s._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[s._v("git ls-files master -- *.scss.d.ts\n\ngit checkout master -- $(git ls-files master -- *.scss.d.ts)\n\ngit restore --source=master "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*.scss.d.ts'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("strong",[s._v("2. Usage scenario: make git take changes without overwriting existing code")])]),s._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[s._v("💯Score: 3    🔗Associated commands: [ "),e("RouterLink",{attrs:{to:"/richen/git-merge.html"}},[s._v("git merge")]),s._v(", "),e("RouterLink",{attrs:{to:"/richen/git-checkout.html"}},[s._v("git checkout")]),s._v(", "),e("RouterLink",{attrs:{to:"/richen/git-commit.html"}},[s._v("git commit")]),s._v(" ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/67318009",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),e("OutboundLink")],1)],1)],1)]),s._v(" "),e("p",[e("strong",[s._v("Example:")])]),s._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# from branch B :")]),s._v("\ngit checkout B\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# start merging commit `x`, but don't commit anything :")]),s._v("\ngit merge --no-commit x\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# discard all changes and possible conflicts :")]),s._v("\ngit restore --source HEAD --staged --worktree -- .\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# this 'commit' action will create a merge commit, whose content is the same as `b` :")]),s._v("\ngit commit\n\ngit merge A\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[e("strong",[s._v("3. Usage scenario: How can I sync other branch with mine while keeping specific directories?")])]),s._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[s._v("💯Score: 2    🔗Associated commands: [ "),e("RouterLink",{attrs:{to:"/richen/git-fetch.html"}},[s._v("git fetch")]),s._v(", "),e("RouterLink",{attrs:{to:"/richen/git-commit.html"}},[s._v("git commit")]),s._v(" ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/67817733",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),e("OutboundLink")],1)],1)],1)]),s._v(" "),e("p",[e("strong",[s._v("Example:")])]),s._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[s._v("git fetch\ngit restore --source=origin/master .\ngit restore --source=my_branch my_dir/\ngit commit -am "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Resynced everything but my_dir with master"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("strong",[s._v("4. Usage scenario: How do I recover a file only saved to my local repo that was deleted during Git revert?")])]),s._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[s._v("💯Score: 1    🔗Associated commands: [ None ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/64214386",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),e("OutboundLink")],1)])],1)]),s._v(" "),e("p",[e("strong",[s._v("Example:")])]),s._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[s._v("git restore --source=<id-of-revert-commit>^ -- <path-to-file> <path-to-other-file>...\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("5. Usage scenario: How to update individual page in github project?")])]),s._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[s._v("💯Score: 1    🔗Associated commands: [ None ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/67380559",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),e("OutboundLink")],1)])],1)]),s._v(" "),e("p",[e("strong",[s._v("Example:")])]),s._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[s._v(" git restore --source <revision> --staged --worktree -- <yourfilepath>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"w"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#w"}},[s._v("#")]),s._v(" 🔹 -W")]),s._v(" "),e("p",[e("strong",[s._v("1. Usage scenario: HOW TO - Move git to another computer")])]),s._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[s._v("💯Score: 3    🔗Associated commands: [ None ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/61893797",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),e("OutboundLink")],1)])],1)]),s._v(" "),e("p",[e("strong",[s._v("Example:")])]),s._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[s._v("git restore -s@ -W -- .\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"worktree"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#worktree"}},[s._v("#")]),s._v(" 🔹 --worktree")]),s._v(" "),e("p",[e("strong",[s._v('1. Usage scenario: Is "git restore '),e("file",[s._v('" the same as "get checkout -- '),e("file",[s._v('"?')])],1)],1)]),s._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[s._v("💯Score: 4    🔗Associated commands: [ "),e("RouterLink",{attrs:{to:"/richen/git-checkout.html"}},[s._v("git checkout")]),s._v(" ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/57862407",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),e("OutboundLink")],1)],1)],1)]),s._v(" "),e("p",[e("strong",[s._v("Example:")])]),s._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[s._v("git restore <filename>\n\ngit checkout -- <filename>\n\ngit restore --source HEAD --staged --worktree <filename>\n\ngit checkout HEAD -- <filename>\n\ngit restore --source HEAD^ <filename>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h2",{attrs:{id:"staged"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#staged"}},[s._v("#")]),s._v(" 🔹 --staged")]),s._v(" "),e("p",[e("strong",[s._v("1. Usage scenario: How to resolve git stash conflict without commit?")])]),s._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[s._v("💯Score: 701    🔗Associated commands: [ "),e("RouterLink",{attrs:{to:"/richen/git-add.html"}},[s._v("git add")]),s._v(", "),e("RouterLink",{attrs:{to:"/richen/git-stash.html"}},[s._v("git stash")]),s._v(" ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/27382210",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),e("OutboundLink")],1)],1)],1)]),s._v(" "),e("p",[e("strong",[s._v("Example:")])]),s._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[s._v("▲ Don't follow other answers...\n▲ Clean solution\nUnmerged paths:\n  (use "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git restore --staged <file>..."')]),s._v(" to unstage)\n  (use "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add <file>..."')]),s._v(" to mark resolution)\n\n"),e("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git stash pop")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ...resolve conflict(s)")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git restore"),e("span",{pre:!0,attrs:{class:"token parameter"}},[s._v(" --staged")]),s._v(" .")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git stash drop")]),s._v("\n\n▲ Explanation of the default behavior\n▲ Merge tools\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[e("strong",[s._v("2. Usage scenario: How do you revert a git file to its staging area version?")])]),s._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[s._v("💯Score: 84    🔗Associated commands: [ "),e("RouterLink",{attrs:{to:"/richen/git-add.html"}},[s._v("git add")]),s._v(", "),e("RouterLink",{attrs:{to:"/richen/git-checkout.html"}},[s._v("git checkout")]),s._v(", "),e("RouterLink",{attrs:{to:"/richen/git-reset.html"}},[s._v("git reset")]),s._v(" ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/3044694",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),e("OutboundLink")],1)],1)],1)]),s._v(" "),e("p",[e("strong",[s._v("Example:")])]),s._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[s._v("▲ Prior to Git 2.23:\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# On branch master")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Changes to be committed:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   (use "git reset HEAD <file>..." to unstage)')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# modified:   a")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Changed but not updated:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   (use "git add <file>..." to update what will be committed)')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   (use "git checkout -- <file>..." to discard changes in working directory)')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# modified:   a")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n\n▲ Starting from Git 2.23:\nOn branch master\nChanges to be committed:\n  (use "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git restore --staged <file>..."')]),s._v(" to unstage)\n        modified:   a\n\nChanges not staged for commit:\n  (use "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add <file>..."')]),s._v(" to update what will be committed)\n  (use "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git restore <file>..."')]),s._v(" to discard changes in working directory)\n        modified:   a\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("h2",{attrs:{id:"ignore-unmerged"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ignore-unmerged"}},[s._v("#")]),s._v(" 🔹 --ignore-unmerged")]),s._v(" "),e("p",[e("strong",[s._v("1. Usage scenario: During merge, how can I reset all files while preserving MERGE_HEAD?")])]),s._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[s._v("💯Score: 1    🔗Associated commands: [ "),e("RouterLink",{attrs:{to:"/richen/git-add.html"}},[s._v("git add")]),s._v(", "),e("RouterLink",{attrs:{to:"/richen/git-commit.html"}},[s._v("git commit")]),s._v(", "),e("RouterLink",{attrs:{to:"/richen/gitk.html"}},[s._v("gitk")]),s._v(" ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/57737802",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),e("OutboundLink")],1)],1)],1)]),s._v(" "),e("p",[e("strong",[s._v("Example:")])]),s._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[s._v("git restore --source=HEAD --staged --worktree -- .\n\nvonc@VONC D:\\git\\git\n> git restore --source=@ --staged --worktree  --ignore-unmerged -- .\nwarning: path "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mru.h'")]),s._v(" is unmerged\nwarning: path "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t/t2028-worktree-move.sh'")]),s._v(" is unmerged\n\nvonc@VONC D:\\git\\git\n> git st\nOn branch master\nYour branch is up to date with "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'origin/master'")]),s._v(".\n\nAll conflicts fixed but you are still merging.\n  (use "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git commit"')]),s._v(" to conclude merge)\n\nChanges not staged for commit:\n  (use "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add <file>..."')]),s._v(" to update what will be committed)\n  (use "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git restore <file>..."')]),s._v(" to discard changes in working directory)\n        modified:   sha1collisiondetection (new commits)\n\nUntracked files:\n  (use "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add <file>..."')]),s._v(" to include in what will be committed)\n        mru.h\n        t/t2028-worktree-move.sh\n\n> dir .git\n Volume in drive D is data\n Volume Serial Number is xxx\n\n Directory of D:\\git\\git\\.git\n\n10/03/2019  20:04                 2 COMMIT_EDITMSG\n10/03/2019  20:06               593 config\n19/06/2016  09:15                73 description\n27/07/2019  08:55               483 FETCH_HEAD\n15/12/2017  07:28         5 324 666 gitk.cache\n27/07/2019  08:55                23 HEAD\n19/06/2016  09:15    <DIR>          hooks\n31/08/2019  13:54           358 360 index\n27/04/2019  18:25    <DIR>          info\n05/03/2018  23:34    <DIR>          lfs\n27/04/2019  18:25    <DIR>          logs\n31/08/2019  13:42                41 MERGE_HEAD   <===\n31/08/2019  13:42                 0 MERGE_MODE   <===\n31/08/2019  13:42             1 295 MERGE_MSG    <===\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br")])]),e("h2",{attrs:{id:"none"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#none"}},[s._v("#")]),s._v(" 🔹None")]),s._v(" "),e("p",[e("strong",[s._v("1. Usage scenario: How to unstage files on git using cli using git restore?")])]),s._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[s._v("💯Score: 1    🔗Associated commands: [ "),e("RouterLink",{attrs:{to:"/richen/git-diff.html"}},[s._v("git diff")]),s._v(", "),e("RouterLink",{attrs:{to:"/richen/git-rev-list.html"}},[s._v("git rev-list")]),s._v(", "),e("RouterLink",{attrs:{to:"/richen/git-config.html"}},[s._v("git config")]),s._v(", "),e("RouterLink",{attrs:{to:"/richen/git-checkout.html"}},[s._v("git checkout")]),s._v(" ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/66693776",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),e("OutboundLink")],1)],1)],1)]),s._v(" "),e("p",[e("strong",[s._v("Example:")])]),s._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[s._v("git config alias.restore "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'!f() { git checkout $(git rev-list -n 1 HEAD -- $1)~1 -- $(git diff --name-status $(git rev-list -n 1 HEAD -- $1)~1 | grep '")]),s._v("^D"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("' | cut -f 2); }; f'")]),s._v("\n\ngit restore yourFile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);