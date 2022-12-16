(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{445:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("📖 "+t._s(t.$page.readingTime.text)+"    🔡 "+t._s(t.$page.readingTime.words)),e("br")])]),t._v(" "),e("h1",{attrs:{id:"git-bisect-use-binary-search-to-find-the-commit-that-introduced-a-bug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-bisect-use-binary-search-to-find-the-commit-that-introduced-a-bug"}},[t._v("#")]),t._v(" 📌 git bisect - Use binary search to find the commit that introduced a bug")]),t._v(" "),e("h2",{attrs:{id:"no-checkout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#no-checkout"}},[t._v("#")]),t._v(" 🔹 --no-checkout")]),t._v(" "),e("p",[e("strong",[t._v("1. Usage scenario: How to git clone without downloading the file objects")])]),t._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[t._v("💯Score: 10    🔗Associated commands: [ "),e("RouterLink",{attrs:{to:"/richen/git-clone.html"}},[t._v("git clone")]),t._v(" ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/59276976",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),e("OutboundLink")],1)],1)],1)]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[t._v("git clone <repo> --no-checkout\ngit bisect --no-checkout run my_script arguments\n\ngit clone <repo> --filter=blob:none --filter=tree:0 --no-checkout\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("h2",{attrs:{id:"none"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#none"}},[t._v("#")]),t._v(" 🔹None")]),t._v(" "),e("p",[e("strong",[t._v("1. Usage scenario: How to "),e("code",[t._v("git bisect")]),t._v(" only on one branch's commits?")])]),t._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[t._v("💯Score: 27    🔗Associated commands: [ "),e("RouterLink",{attrs:{to:"/richen/git-rev-list.html"}},[t._v("git rev-list")]),t._v(" ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/20249110",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),e("OutboundLink")],1)],1)],1)]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[t._v("git bisect start master f9d5924\n\nfor rev in $(git rev-list f9d5924..master --merges --first-parent); do\n  git rev-list $rev^2 --not $rev^\ndone | xargs git bisect skip\n\n"),e("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git bisect good")]),t._v("\nThere are only "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'skip'")]),t._v("ped commits left to test.\nThe first bad commit could be any of:\n0622204625d8817c5d8fd1a2a68b3aa91f2dcdf9\n0c771566b9e77e3bdc0a66a7404c8eae9f321a68\n5098b44f43f84b213eaab110073a6acd26a5cc02\n8b05a808d5e15852fbddaa529ba241fdac8ff693\nb0c755c3fa57e3c8d527e76fae38bc9925c01353\nWe cannot bisect more!\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br")])]),e("p",[e("strong",[t._v('2. Usage scenario: How do I get the current "status" of a git bisect?')])]),t._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[t._v("💯Score: 13    🔗Associated commands: [ None ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/37668768",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),e("OutboundLink")],1)])],1)]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git bisect visualize"),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v(" --oneline")]),t._v(" | wc"),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v(" -l")])]),t._v("\n21\n\n$ txr -P '(let* ((count (length\n                          (get-lines\n                            (open-command "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git bisect visualize --oneline"')]),t._v("))))\n                 (left (trunc count 2)))\n            `Bisecting: @left revisions left to test after this \\\n            \\ (roughly @(int-flo (log2 left)) steps)`)'\nBisecting: 10 revisions left to test after this (roughly 3 steps)\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("p",[e("strong",[t._v("3. Usage scenario: Git: Finding a deleted file in git, commits not in log")])]),t._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[t._v("💯Score: 4    🔗Associated commands: [ None ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/36973457",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),e("OutboundLink")],1)])],1)]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[t._v("▲ How to find when changes was made to the repository?\n▲ In depth explain:\n▲ Bisect run\ngit bisect run my_script arguments\n\n▲ \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[e("strong",[t._v("4. Usage scenario: Get last few revision SHA on a branch")])]),t._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[t._v("💯Score: 2    🔗Associated commands: [ None ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/51143763",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),e("OutboundLink")],1)])],1)]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git bisect start")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git bisect bad           # the current version is bad")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git bisect good v1.2.3   # v1.2.3 was good")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[e("strong",[t._v("5. Usage scenario: how to diagnose a problem in git commit history")])]),t._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[t._v("💯Score: 1    🔗Associated commands: [ None ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/69552997",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),e("OutboundLink")],1)])],1)]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[t._v("git bisect start\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("strong",[t._v("6. Usage scenario: Semi-reverting to master and checking changes")])]),t._v(" "),e("blockquote",[e("p",[e("font",{attrs:{size:"2"}},[t._v("💯Score: 1    🔗Associated commands: [ None ]    🌐"),e("a",{attrs:{href:"https://stackoverflow.com/questions/54602520",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details"),e("OutboundLink")],1)])],1)]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# to start the search")]),t._v("\ngit bisect start\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# to tag the present commit as "good"')]),t._v("\ngit bisect good\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# to tag the present commit as "bad"')]),t._v("\ngit bisect bad\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# to exit bisect mode and return to just before "bisect start"')]),t._v("\ngit bisect reset \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);