(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{558:function(s,e,t){"use strict";t.r(e);var a=t(19),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("📖 "+s._s(s.$page.readingTime.text)+"    🔡 "+s._s(s.$page.readingTime.words)),t("br")])]),s._v(" "),t("h1",{attrs:{id:"git-show-index-show-packed-archive-index"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-show-index-show-packed-archive-index"}},[s._v("#")]),s._v(" 📌 git show-index - Show packed archive index")]),s._v(" "),t("h2",{attrs:{id:"none"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#none"}},[s._v("#")]),s._v(" 🔹None")]),s._v(" "),t("p",[t("strong",[s._v("1. Usage scenario: How to list ALL git objects in the database?")])]),s._v(" "),t("blockquote",[t("p",[t("font",{attrs:{size:"2"}},[s._v("💯Score: 10    🔗Associated commands: [ "),t("RouterLink",{attrs:{to:"/richen/git-rev-parse.html"}},[s._v("git rev-parse")]),s._v(" ]    🌐"),t("a",{attrs:{href:"https://stackoverflow.com/questions/11956917",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),t("OutboundLink")],1)],1)],1)]),s._v(" "),t("p",[t("strong",[s._v("Example:")])]),s._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/sh")]),s._v("\n\nset -e\n\ncd "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$(git rev-parse --git-dir)"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Find all the objects that are in packs:")]),s._v("\n\nfind objects/pack -name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pack-*.idx'")]),s._v(" | while read p ; do\n    git show-index < $p | cut -f 2 -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v("\ndone\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# And now find all loose objects:")]),s._v("\n\nfind objects/ \\\n    | egrep "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[0-9a-f]{38}'")]),s._v(" \\\n    | grep -v /pack/ \\\n    | perl -pe "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s:^.*([0-9a-f][0-9a-f])/([0-9a-f]{38}):\\1\\2:'")]),s._v(" \\\n;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[t("strong",[s._v('2. Usage scenario: How can I recover my Git repository for a "missing tree" error?')])]),s._v(" "),t("blockquote",[t("p",[t("font",{attrs:{size:"2"}},[s._v("💯Score: 9    🔗Associated commands: [ "),t("RouterLink",{attrs:{to:"/richen/git-unpack-objects.html"}},[s._v("git unpack-objects")]),s._v(" ]    🌐"),t("a",{attrs:{href:"https://stackoverflow.com/questions/7236922",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),t("OutboundLink")],1)],1)],1)]),s._v(" "),t("p",[t("strong",[s._v("Example:")])]),s._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[s._v("find . -name \\*.idx -exec cat {} \\; | git show-index | grep 14d62f0ed4385e3f68f226ac133fa9932a9c65c9\n\ngit unpack-objects $FILE\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("3. Usage scenario: How can I determine when a git ref was created?")])]),s._v(" "),t("blockquote",[t("p",[t("font",{attrs:{size:"2"}},[s._v("💯Score: 1    🔗Associated commands: [ None ]    🌐"),t("a",{attrs:{href:"https://stackoverflow.com/questions/38706590",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),t("OutboundLink")],1)])],1)]),s._v(" "),t("p",[t("strong",[s._v("Example:")])]),s._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[s._v("for idx in .git/objects/pack/*.idx; do\n  if git show-index < $idx | grep $cid; then\n    ls -l ${idx/idx/pack}\n    break\n  fi\ndone\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);