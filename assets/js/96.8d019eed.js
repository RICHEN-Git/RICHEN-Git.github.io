(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{524:function(t,e,s){"use strict";s.r(e);var n=s(19),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("📖 "+t._s(t.$page.readingTime.text)+"    🔡 "+t._s(t.$page.readingTime.words)),s("br")])]),t._v(" "),s("h1",{attrs:{id:"git-p4-import-from-and-submit-to-perforce-repositories"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-p4-import-from-and-submit-to-perforce-repositories"}},[t._v("#")]),t._v(" 📌 git p4 - Import from and submit to Perforce repositories")]),t._v(" "),s("h2",{attrs:{id:"clone"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clone"}},[t._v("#")]),t._v(" 🔹 clone")]),t._v(" "),s("p",[s("strong",[t._v("1. Usage scenario: git clone multiple p4 paths in one git repo")])]),t._v(" "),s("blockquote",[s("p",[s("font",{attrs:{size:"2"}},[t._v("💯Score: 4    🔗Associated commands: [ "),s("RouterLink",{attrs:{to:"/richen/git-remote.html"}},[t._v("git remote")]),t._v(", "),s("RouterLink",{attrs:{to:"/richen/git-merge.html"}},[t._v("git merge")]),t._v(", "),s("RouterLink",{attrs:{to:"/richen/git-commit.html"}},[t._v("git commit")]),t._v(", "),s("RouterLink",{attrs:{to:"/richen/git-version.html"}},[t._v("git version")]),t._v(", "),s("RouterLink",{attrs:{to:"/richen/git-init.html"}},[t._v("git init")]),t._v(", "),s("RouterLink",{attrs:{to:"/richen/git-mv.html"}},[t._v("git mv")]),t._v(" ]    🌐"),s("a",{attrs:{href:"https://stackoverflow.com/questions/50029650",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),s("OutboundLink")],1)],1)],1)]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git p4 clone //depot/Projects/A@all\ngit p4 clone //depot/Projects/C@all\n\nmkdir project\ncd project\ngit init\n\ngit remote add -f a ../A\ngit remote add -f c ../C\n\ngit merge --allow-unrelated-histories a/master\n\nmkdir dir_a\nfind . -maxdepth 1 -not -name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".git"')]),t._v(" -and -not -name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dir_a"')]),t._v(" -exec git mv {} dir_a/ \\;\n\ngit commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Merge Project A"')]),t._v("\n\ngit merge --allow-unrelated-histories c/master\nmkdir dir_c\nfind . -maxdepth 1 -not -name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".git"')]),t._v(" -and -not -name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dir_a"')]),t._v(" -and -not -name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dir_c"')]),t._v(" -exec git mv {} dir_c/ \\;\ngit commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Merge Project C"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git"),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v(" --version")])]),t._v("\ngit version 2.14.1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br")])]),s("p",[s("strong",[t._v("2. Usage scenario: How to git-p4 clone from the middle of a perforce repo?")])]),t._v(" "),s("blockquote",[s("p",[s("font",{attrs:{size:"2"}},[t._v("💯Score: 2    🔗Associated commands: [ None ]    🌐"),s("a",{attrs:{href:"https://stackoverflow.com/questions/11978694",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),s("OutboundLink")],1)])],1)]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git p4 clone --verbose --use-client-spec --detect-branches //depot@32668,#head repo\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("3. Usage scenario: Migrate multiple branches from Perforce to Git")])]),t._v(" "),s("blockquote",[s("p",[s("font",{attrs:{size:"2"}},[t._v("💯Score: 1    🔗Associated commands: [ "),s("RouterLink",{attrs:{to:"/richen/git-config.html"}},[t._v("git config")]),t._v(" ]    🌐"),s("a",{attrs:{href:"https://stackoverflow.com/questions/44327058",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),s("OutboundLink")],1)],1)],1)]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git config --add git-p4.branchList main:branch1\ngit config --add git-p4.branchList branch1:branch2\n\ngit p4 clone --detect-branches //depot/path/...@all\n\ngit config --add git-p4.branchList project_root:project_root/Folder1/SubFolder1\ngit config --add git-p4.branchList project_root:project_root/Folder1/SubFolder2\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);