(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{481:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("📖 "+t._s(t.$page.readingTime.text)+"    🔡 "+t._s(t.$page.readingTime.words)),a("br")])]),t._v(" "),a("h1",{attrs:{id:"git-fast-import-backend-for-fast-git-data-importers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-fast-import-backend-for-fast-git-data-importers"}},[t._v("#")]),t._v(" 📌 git fast-import - Backend for fast Git data importers")]),t._v(" "),a("h2",{attrs:{id:"none"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#none"}},[t._v("#")]),t._v(" 🔹None")]),t._v(" "),a("p",[a("strong",[t._v("1. Usage scenario: Detach many subdirectories into a new, separate Git repository")])]),t._v(" "),a("blockquote",[a("p",[a("font",{attrs:{size:"2"}},[t._v("💯Score: 20    🔗Associated commands: [ "),a("RouterLink",{attrs:{to:"/richen/git-init.html"}},[t._v("git init")]),t._v(", "),a("RouterLink",{attrs:{to:"/richen/git-pull.html"}},[t._v("git pull")]),t._v(", "),a("RouterLink",{attrs:{to:"/richen/git-branch.html"}},[t._v("git branch")]),t._v(", "),a("RouterLink",{attrs:{to:"/richen/git-checkout.html"}},[t._v("git checkout")]),t._v(", "),a("RouterLink",{attrs:{to:"/richen/git-fetch.html"}},[t._v("git fetch")]),t._v(" ]    🌐"),a("a",{attrs:{href:"https://stackoverflow.com/questions/2989613",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),a("OutboundLink")],1)],1)],1)]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("cd origRepo\ngit subtree split -P apps/AAA -b aaa\ngit subtree split -P libs/XXX -b xxx\n\ncd ..\nmkdir aaaRepo\ncd aaaRepo\ngit init\ngit fetch ../origRepo aaa\ngit checkout -b master FETCH_HEAD\n\ncd ..\nmkdir xxxRepo\ncd xxxRepo\ngit init\ngit fetch ../origRepo xxx\ngit checkout -b master FETCH_HEAD\n\ncd ..\nmkdir newRepo\ncd newRepo\ngit init\ngit-stitch-repo ../aaaRepo:apps/AAA ../xxxRepo:libs/XXX | git fast-import\n\ngit checkout master-A\ngit pull . master-B\ngit checkout master\ngit branch -d master-A \ngit branch -d master-B\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br")])]),a("p",[a("strong",[t._v("2. Usage scenario: How to concatenate two git histories?")])]),t._v(" "),a("blockquote",[a("p",[a("font",{attrs:{size:"2"}},[t._v("💯Score: 12    🔗Associated commands: [ "),a("RouterLink",{attrs:{to:"/richen/git-init.html"}},[t._v("git init")]),t._v(", "),a("RouterLink",{attrs:{to:"/richen/git-rev-list.html"}},[t._v("git rev-list")]),t._v(", "),a("RouterLink",{attrs:{to:"/richen/git-filter-branch.html"}},[t._v("git filter-branch")]),t._v(", "),a("RouterLink",{attrs:{to:"/richen/git-fast-export.html"}},[t._v("git fast-export")]),t._v(", "),a("RouterLink",{attrs:{to:"/richen/git-fetch.html"}},[t._v("git fetch")]),t._v(", "),a("RouterLink",{attrs:{to:"/richen/git-rev-parse.html"}},[t._v("git rev-parse")]),t._v(" ]    🌐"),a("a",{attrs:{href:"https://stackoverflow.com/questions/3219820",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),a("OutboundLink")],1)],1)],1)]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git fetch ../old master:ancient_history\n\n"),a("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git rev-list master | tail"),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v(" -n")]),t._v(" 1")]),t._v("\nd7737bffdad86dc05bbade271a9c16f8f912d3c6\n\n"),a("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git rev-parse ancient_history")]),t._v("\n463d0401a3f34bd381c456c6166e514564289ab2\n\n$ echo d7737bffdad86dc05bbade271a9c16f8f912d3c6 \\\n       463d0401a3f34bd381c456c6166e514564289ab2 \\\n       > .git/info/grafts\n\necho $(git rev-list master | tail -n 1) $(git rev-parse ancient_history) > .git/info/grafts \n\n"),a("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git fast-export"),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v(" --all")]),t._v(" > ../export")]),t._v("\n\n$ mkdir ../nuevo-complete\n\n$ cd ../nuevo-complete\n\n"),a("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git init")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git fast-import < ../export")]),t._v("\ngit-fast-import statistics: [...]\n\ngit filter-branch $(git rev-parse ancient_history)..HEAD \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])]),a("p",[a("strong",[t._v("3. Usage scenario: Transferring history of CVS to GIT")])]),t._v(" "),a("blockquote",[a("p",[a("font",{attrs:{size:"2"}},[t._v("💯Score: 3    🔗Associated commands: [ None ]    🌐"),a("a",{attrs:{href:"https://stackoverflow.com/questions/25541345",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),a("OutboundLink")],1)])],1)]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("cat git-dump.bin git-blob.bin | git fast-import\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);