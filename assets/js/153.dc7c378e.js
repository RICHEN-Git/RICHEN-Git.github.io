(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{582:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("📖 "+t._s(t.$page.readingTime.text)+"    🔡 "+t._s(t.$page.readingTime.words)),s("br")])]),t._v(" "),s("h1",{attrs:{id:"git-whatchanged-show-logs-with-difference-each-commit-introduces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-whatchanged-show-logs-with-difference-each-commit-introduces"}},[t._v("#")]),t._v(" 📌 git whatchanged - Show logs with difference each commit introduces")]),t._v(" "),s("h2",{attrs:{id:"none"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#none"}},[t._v("#")]),t._v(" 🔹None")]),t._v(" "),s("p",[s("strong",[t._v("1. Usage scenario: How to find the number of files changed from one commit to another in git")])]),t._v(" "),s("blockquote",[s("p",[s("font",{attrs:{size:"2"}},[t._v("💯Score: 67    🔗Associated commands: [ None ]    🌐"),s("a",{attrs:{href:"https://stackoverflow.com/questions/6584048",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),s("OutboundLink")],1)])],1)]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git whatchanged -1\n\ngit whatchanged -1 --format=oneline | wc -l\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("strong",[t._v("2. Usage scenario: Comparing changes in commits to the current file by Git")])]),t._v(" "),s("blockquote",[s("p",[s("font",{attrs:{size:"2"}},[t._v("💯Score: 62    🔗Associated commands: [ "),s("RouterLink",{attrs:{to:"/richen/git-diff.html"}},[t._v("git diff")]),t._v(" ]    🌐"),s("a",{attrs:{href:"https://stackoverflow.com/questions/1303394",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),s("OutboundLink")],1)],1)],1)]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# uncommited file to HEAD")]),t._v("\ngit diff <path>\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# uncommited file to before last commit")]),t._v("\ngit diff HEAD^ -- <path>\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#last commit to before last commit")]),t._v("\ngit diff HEAD^ HEAD -- <path>\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#difference between HEAD and n-th grandparent")]),t._v("\ngit diff HEAD~n HEAD -- <path>\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Another cool feature is whatchanged command")]),t._v("\ngit whatchanged -- <path>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("p",[s("strong",[t._v("3. Usage scenario: Generating release notes from git commits")])]),t._v(" "),s("blockquote",[s("p",[s("font",{attrs:{size:"2"}},[t._v("💯Score: 16    🔗Associated commands: [ "),s("RouterLink",{attrs:{to:"/richen/git-cherry-pick.html"}},[t._v("git cherry-pick")]),t._v(", "),s("RouterLink",{attrs:{to:"/richen/git-merge.html"}},[t._v("git merge")]),t._v(", "),s("RouterLink",{attrs:{to:"/richen/git-pull.html"}},[t._v("git pull")]),t._v(", "),s("RouterLink",{attrs:{to:"/richen/git-fetch.html"}},[t._v("git fetch")]),t._v(" ]    🌐"),s("a",{attrs:{href:"https://stackoverflow.com/questions/53234376",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),s("OutboundLink")],1)],1)],1)]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("▲ git tag\ngit pull = git fetch + git merge\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# "Merge" the last X commits based upon your previous tag')]),t._v("\ngit cherry-pick <tag_name>..master\n\n▲ git notes\n▲ git whatchanged\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Print out a list of files which was updated/added between the 2 commits")]),t._v("\ngit whatchanged <TAG_NAME>...HEAD\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[s("strong",[t._v("4. Usage scenario: How do I get the list of files about to be updated by "),s("code",[t._v("git pull")]),t._v(" without knowing the branch name or what it tracks?")])]),t._v(" "),s("blockquote",[s("p",[s("font",{attrs:{size:"2"}},[t._v("💯Score: 16    🔗Associated commands: [ "),s("RouterLink",{attrs:{to:"/richen/git-fetch.html"}},[t._v("git fetch")]),t._v(", "),s("RouterLink",{attrs:{to:"/richen/git-diff.html"}},[t._v("git diff")]),t._v(" ]    🌐"),s("a",{attrs:{href:"https://stackoverflow.com/questions/8522692",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),s("OutboundLink")],1)],1)],1)]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git fetch && git diff --name-only ..origin\n\ntemplates/shows/showBase.html\ntemplates/shows/showList.html\ntemplates/shows/showListEntry.htm\n\ngit fetch && git whatchanged --name-only ..origin\n\n"),s("span",{pre:!0,attrs:{class:"token commit-sha1"}},[t._v("commit fcb1b56d564fe85615ecd6befcd82f6fda5699ae")]),t._v("\nAuthor: Grambo <email@email>\nDate:   Mon Dec 12 23:36:38 2011 +0000\n\n    Hooked "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I\'ve Seen This"')]),t._v(" button up to "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Review Show"')]),t._v(" dialog\n\ntemplates/shows/showBase.html\ntemplates/shows/showList.html\ntemplates/shows/showListEntry.htm\n\ncommit xasdasdsada......\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("p",[s("strong",[t._v("5. Usage scenario: How do I list a directory in a Git repository together with the latest commit info for each directory entry?")])]),t._v(" "),s("blockquote",[s("p",[s("font",{attrs:{size:"2"}},[t._v("💯Score: 4    🔗Associated commands: [ None ]    🌐"),s("a",{attrs:{href:"https://stackoverflow.com/questions/6721524",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),s("OutboundLink")],1)])],1)]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git whatchanged -r --pretty=oneline | perl -ne "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'our %q; if (/^([0-9a-f]{40})/) {$c = $1} if (/:.{38}(.*)/) { $q{$1} = $c unless exists $q{$1} }; END { print map {\"$q{$_} $_\\n\"} (keys %q); }'")]),t._v("  | sort -k 2\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("6. Usage scenario: How do I view of commit history of file in different branch without checking out that branch?")])]),t._v(" "),s("blockquote",[s("p",[s("font",{attrs:{size:"2"}},[t._v("💯Score: 3    🔗Associated commands: [ None ]    🌐"),s("a",{attrs:{href:"https://stackoverflow.com/questions/12650003",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),s("OutboundLink")],1)])],1)]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git whatchanged branch filename\n\ngit whatchanged -p branch filename\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("strong",[t._v("7. Usage scenario: Get changed and new lines of code since a particular date in Git")])]),t._v(" "),s("blockquote",[s("p",[s("font",{attrs:{size:"2"}},[t._v("💯Score: 2    🔗Associated commands: [ None ]    🌐"),s("a",{attrs:{href:"https://stackoverflow.com/questions/24820988",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),s("OutboundLink")],1)])],1)]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git whatchanged --since="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1 month ago"')]),t._v(" -p\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("8. Usage scenario: How to find list of unique files that have changed")])]),t._v(" "),s("blockquote",[s("p",[s("font",{attrs:{size:"2"}},[t._v("💯Score: 2    🔗Associated commands: [ None ]    🌐"),s("a",{attrs:{href:"https://stackoverflow.com/questions/25289558",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),s("OutboundLink")],1)])],1)]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git whatchanged --oneline --name-only |\n    grep --extended-regexp --invert-match "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^[[:xdigit:]]{7,}'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("strong",[t._v("9. Usage scenario: How do I get the list of changed and added files since the creation of a branch in git by a specific author?")])]),t._v(" "),s("blockquote",[s("p",[s("font",{attrs:{size:"2"}},[t._v("💯Score: 1    🔗Associated commands: [ None ]    🌐"),s("a",{attrs:{href:"https://stackoverflow.com/questions/34096884",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),s("OutboundLink")],1)])],1)]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git whatchanged --author YOUR_EMAIL_HERE --since="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1 month ago"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("10. Usage scenario: Track a (once been deleted) file")])]),t._v(" "),s("blockquote",[s("p",[s("font",{attrs:{size:"2"}},[t._v("💯Score: 1    🔗Associated commands: [ "),s("RouterLink",{attrs:{to:"/richen/git-log.html"}},[t._v("git log")]),t._v(", "),s("RouterLink",{attrs:{to:"/richen/git-show.html"}},[t._v("git show")]),t._v(" ]    🌐"),s("a",{attrs:{href:"https://stackoverflow.com/questions/40669643",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),s("OutboundLink")],1)],1)],1)]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git whatchanged file.c\ngit show file.c\ngit log file.c\ngit log -p file.c\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);