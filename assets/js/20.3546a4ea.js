(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{449:function(e,t,s){"use strict";s.r(t);var n=s(19),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("📖 "+e._s(e.$page.readingTime.text)+"    🔡 "+e._s(e.$page.readingTime.words)),s("br")])]),e._v(" "),s("h1",{attrs:{id:"git-bundle-move-objects-and-refs-by-archive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-bundle-move-objects-and-refs-by-archive"}},[e._v("#")]),e._v(" 📌 git bundle - Move objects and refs by archive")]),e._v(" "),s("h2",{attrs:{id:"create"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create"}},[e._v("#")]),e._v(" 🔹 create")]),e._v(" "),s("p",[s("strong",[e._v("1. Usage scenario: Find size of Git repository")])]),e._v(" "),s("blockquote",[s("p",[s("font",{attrs:{size:"2"}},[e._v("💯Score: 295    🔗Associated commands: [ "),s("RouterLink",{attrs:{to:"/richen/git-gc.html"}},[e._v("git gc")]),e._v(" ]    🌐"),s("a",{attrs:{href:"https://stackoverflow.com/questions/8185326",target:"_blank",rel:"noopener noreferrer"}},[e._v("Details"),s("OutboundLink")],1)],1)],1)]),e._v(" "),s("p",[s("strong",[e._v("Example:")])]),e._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[e._v("git bundle create tmp.bundle --all\ndu -sh tmp.bundle\n\ngit gc\ndu -sh .git/\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[s("strong",[e._v("2. Usage scenario: how to grab only first few commits with Git bundle create")])]),e._v(" "),s("blockquote",[s("p",[s("font",{attrs:{size:"2"}},[e._v("💯Score: 1    🔗Associated commands: [ None ]    🌐"),s("a",{attrs:{href:"https://stackoverflow.com/questions/44957141",target:"_blank",rel:"noopener noreferrer"}},[e._v("Details"),s("OutboundLink")],1)])],1)]),e._v(" "),s("p",[s("strong",[e._v("Example:")])]),e._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[e._v("git bundle create a_to_c.bundle C\n\ngit bundle create d_to_f.bundle C..F\n\ngit bundle create d_to_f.bundle ^C F\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h2",{attrs:{id:"verify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verify"}},[e._v("#")]),e._v(" 🔹 verify")]),e._v(" "),s("p",[s("strong",[e._v("1. Usage scenario: Fetch the next N commits from a remote repository")])]),e._v(" "),s("blockquote",[s("p",[s("font",{attrs:{size:"2"}},[e._v("💯Score: 1    🔗Associated commands: [ "),s("RouterLink",{attrs:{to:"/richen/git-pull.html"}},[e._v("git pull")]),e._v(", "),s("RouterLink",{attrs:{to:"/richen/git-remote.html"}},[e._v("git remote")]),e._v(", "),s("RouterLink",{attrs:{to:"/richen/git-clone.html"}},[e._v("git clone")]),e._v(" ]    🌐"),s("a",{attrs:{href:"https://stackoverflow.com/questions/48375298",target:"_blank",rel:"noopener noreferrer"}},[e._v("Details"),s("OutboundLink")],1)],1)],1)]),e._v(" "),s("p",[s("strong",[e._v("Example:")])]),e._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[e._v("git bundle verify clone.bundle\n...\nclone.bundle is okay\n\ngit clone clone.bundle linux\n\ncd linux\ngit remote remove origin\ngit remote add origin https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git\ngit pull origin master\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);