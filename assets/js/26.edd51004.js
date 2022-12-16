(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{456:function(e,s,t){"use strict";t.r(s);var n=t(19),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("📖 "+e._s(e.$page.readingTime.text)+"    🔡 "+e._s(e.$page.readingTime.words)),t("br")])]),e._v(" "),t("h1",{attrs:{id:"git-checkout-index-copy-files-from-the-index-to-the-working-tree"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-checkout-index-copy-files-from-the-index-to-the-working-tree"}},[e._v("#")]),e._v(" 📌 git checkout-index - Copy files from the index to the working tree")]),e._v(" "),t("h2",{attrs:{id:"f"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#f"}},[e._v("#")]),e._v(" 🔹 -f")]),e._v(" "),t("p",[t("strong",[e._v("1. Usage scenario: GIT: Checkout to a specific folder")])]),e._v(" "),t("blockquote",[t("p",[t("font",{attrs:{size:"2"}},[e._v("💯Score: 62    🔗Associated commands: [ None ]    🌐"),t("a",{attrs:{href:"https://stackoverflow.com/questions/4482919",target:"_blank",rel:"noopener noreferrer"}},[e._v("Details"),t("OutboundLink")],1)])],1)]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("▲ You can use git checkout-index for that, this is a low level command, if you want to export everything, you can use -a,\ngit checkout-index -a -f --prefix=/destination/path/\n\n▲ If you want to export a certain directory, there are some tricks involved. The command only takes files, not directories. To apply it to directories, use the "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'find'")]),e._v(" command and pipe the output to git.\nfind dirname -print0 | git checkout-index --prefix=/path-to/dest/ -f -z --stdin\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[t("strong",[e._v("2. Usage scenario: Cloning a single path of a bare git repository")])]),e._v(" "),t("blockquote",[t("p",[t("font",{attrs:{size:"2"}},[e._v("💯Score: 2    🔗Associated commands: [ None ]    🌐"),t("a",{attrs:{href:"https://stackoverflow.com/questions/1361133",target:"_blank",rel:"noopener noreferrer"}},[e._v("Details"),t("OutboundLink")],1)])],1)]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("git checkout-index -a -f --prefix=/destination/path/\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("3. Usage scenario: Git, pull from branch, override local files in different folder")])]),e._v(" "),t("blockquote",[t("p",[t("font",{attrs:{size:"2"}},[e._v("💯Score: 1    🔗Associated commands: [ "),t("RouterLink",{attrs:{to:"/richen/git-archive.html"}},[e._v("git archive")]),e._v(" ]    🌐"),t("a",{attrs:{href:"https://stackoverflow.com/questions/42489120",target:"_blank",rel:"noopener noreferrer"}},[e._v("Details"),t("OutboundLink")],1)],1)],1)]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("git archive master | tar -x -C /var/www/public_html\n\ngit checkout-index -f -a --prefix=/var/www/public_html/\n\ngit archive --remote=ssh://remote_server/remote_repository master | tar -x -C /var/www/public_html\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("h2",{attrs:{id:"a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a"}},[e._v("#")]),e._v(" 🔹 -a")]),e._v(" "),t("p",[t("strong",[e._v("1. Usage scenario: GIT: Checkout to a specific folder")])]),e._v(" "),t("blockquote",[t("p",[t("font",{attrs:{size:"2"}},[e._v("💯Score: 62    🔗Associated commands: [ None ]    🌐"),t("a",{attrs:{href:"https://stackoverflow.com/questions/4482919",target:"_blank",rel:"noopener noreferrer"}},[e._v("Details"),t("OutboundLink")],1)])],1)]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("▲ You can use git checkout-index for that, this is a low level command, if you want to export everything, you can use -a,\ngit checkout-index -a -f --prefix=/destination/path/\n\n▲ If you want to export a certain directory, there are some tricks involved. The command only takes files, not directories. To apply it to directories, use the "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'find'")]),e._v(" command and pipe the output to git.\nfind dirname -print0 | git checkout-index --prefix=/path-to/dest/ -f -z --stdin\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[t("strong",[e._v("2. Usage scenario: git deleted everything, how to recover files and folders")])]),e._v(" "),t("blockquote",[t("p",[t("font",{attrs:{size:"2"}},[e._v("💯Score: 14    🔗Associated commands: [ "),t("RouterLink",{attrs:{to:"/richen/git-read-tree.html"}},[e._v("git read-tree")]),e._v(" ]    🌐"),t("a",{attrs:{href:"https://stackoverflow.com/questions/16409790",target:"_blank",rel:"noopener noreferrer"}},[e._v("Details"),t("OutboundLink")],1)],1)],1)]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("git read-tree bfe11a30d57a0233d3b0c840a3b66f6421987304\n\ngit checkout-index -a\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[t("strong",[e._v("3. Usage scenario: Cloning a single path of a bare git repository")])]),e._v(" "),t("blockquote",[t("p",[t("font",{attrs:{size:"2"}},[e._v("💯Score: 2    🔗Associated commands: [ None ]    🌐"),t("a",{attrs:{href:"https://stackoverflow.com/questions/1361133",target:"_blank",rel:"noopener noreferrer"}},[e._v("Details"),t("OutboundLink")],1)])],1)]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("git checkout-index -a -f --prefix=/destination/path/\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"prefix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prefix"}},[e._v("#")]),e._v(" 🔹 --prefix")]),e._v(" "),t("p",[t("strong",[e._v("1. Usage scenario: GIT: Checkout to a specific folder")])]),e._v(" "),t("blockquote",[t("p",[t("font",{attrs:{size:"2"}},[e._v("💯Score: 62    🔗Associated commands: [ None ]    🌐"),t("a",{attrs:{href:"https://stackoverflow.com/questions/4482919",target:"_blank",rel:"noopener noreferrer"}},[e._v("Details"),t("OutboundLink")],1)])],1)]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("▲ You can use git checkout-index for that, this is a low level command, if you want to export everything, you can use -a,\ngit checkout-index -a -f --prefix=/destination/path/\n\n▲ If you want to export a certain directory, there are some tricks involved. The command only takes files, not directories. To apply it to directories, use the "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'find'")]),e._v(" command and pipe the output to git.\nfind dirname -print0 | git checkout-index --prefix=/path-to/dest/ -f -z --stdin\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[t("strong",[e._v("2. Usage scenario: Cleanest way to checkout an earlier tag for read-only purposes in Git")])]),e._v(" "),t("blockquote",[t("p",[t("font",{attrs:{size:"2"}},[e._v("💯Score: 5    🔗Associated commands: [ "),t("RouterLink",{attrs:{to:"/richen/git-read-tree.html"}},[e._v("git read-tree")]),e._v(" ]    🌐"),t("a",{attrs:{href:"https://stackoverflow.com/questions/3992676",target:"_blank",rel:"noopener noreferrer"}},[e._v("Details"),t("OutboundLink")],1)],1)],1)]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("mkdir /path/to/test-tree\ncd /path/to/repo\ngit read-tree <tag>\ngit checkout-index -a --prefix=/path/to/test-tree/  # don't forget the last slash\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# read-tree copies content into the index")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# to restore it:")]),e._v("\ngit read-tree HEAD\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("p",[t("strong",[e._v("3. Usage scenario: Temporarily clearing untracked files before commit in Git")])]),e._v(" "),t("blockquote",[t("p",[t("font",{attrs:{size:"2"}},[e._v("💯Score: 3    🔗Associated commands: [ "),t("RouterLink",{attrs:{to:"/richen/git-diff-index.html"}},[e._v("git diff-index")]),e._v(", "),t("RouterLink",{attrs:{to:"/richen/git-rev-parse.html"}},[e._v("git rev-parse")]),e._v(" ]    🌐"),t("a",{attrs:{href:"https://stackoverflow.com/questions/4108042",target:"_blank",rel:"noopener noreferrer"}},[e._v("Details"),t("OutboundLink")],1)],1)],1)]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#!/bin/sh")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Via: http://github.com/jwiegley/git-scripts/blob/master/pre-commit.sh")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n\nif [ ! $(git rev-parse --symbolic-full-name HEAD) = refs/heads/master ]; then\n    exit 0\nfi\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# These are the locations I keep my temporary source and build trees in")]),e._v("\nTMPDIR=$HOME/code/myproject-pre-commit\nMIRROR=$HOME/code/myproject-pre-commit-mirror\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Exit with status 1 if any command below fails")]),e._v("\nset -e\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Checkout a copy of the current index into MIRROR")]),e._v("\ngit checkout-index --prefix=$MIRROR/ -af\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Remove files from MIRROR which are no longer present in the index")]),e._v("\ngit diff-index --cached --name-only --diff-filter=D -z HEAD | \\\n    (cd $MIRROR && xargs -0 rm -f --)\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Copy only _changed files_ from MIRROR to TMPDIR, without copying timestamps.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# This includes copying over new files, and deleting removed ones.  This way,")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# "make check" will only rebuild what is necessary to validate the commit.')]),e._v("\nrsync -rlpgoDOc --delete --exclude-from=.git-hooks/excludes $MIRROR/ $TMPDIR/\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Everything else happens in the temporary build tree")]),e._v("\ncd $TMPDIR\n\nnosetests\n\nexit 0\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br")])]),t("p",[t("strong",[e._v("4. Usage scenario: Cloning a single path of a bare git repository")])]),e._v(" "),t("blockquote",[t("p",[t("font",{attrs:{size:"2"}},[e._v("💯Score: 2    🔗Associated commands: [ None ]    🌐"),t("a",{attrs:{href:"https://stackoverflow.com/questions/1361133",target:"_blank",rel:"noopener noreferrer"}},[e._v("Details"),t("OutboundLink")],1)])],1)]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("git checkout-index -a -f --prefix=/destination/path/\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("5. Usage scenario: Git, pull from branch, override local files in different folder")])]),e._v(" "),t("blockquote",[t("p",[t("font",{attrs:{size:"2"}},[e._v("💯Score: 1    🔗Associated commands: [ "),t("RouterLink",{attrs:{to:"/richen/git-archive.html"}},[e._v("git archive")]),e._v(" ]    🌐"),t("a",{attrs:{href:"https://stackoverflow.com/questions/42489120",target:"_blank",rel:"noopener noreferrer"}},[e._v("Details"),t("OutboundLink")],1)],1)],1)]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("git archive master | tar -x -C /var/www/public_html\n\ngit checkout-index -f -a --prefix=/var/www/public_html/\n\ngit archive --remote=ssh://remote_server/remote_repository master | tar -x -C /var/www/public_html\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("h2",{attrs:{id:"stage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stage"}},[e._v("#")]),e._v(" 🔹 --stage")]),e._v(" "),t("p",[t("strong",[e._v("1. Usage scenario: Force merge file by file - git")])]),e._v(" "),t("blockquote",[t("p",[t("font",{attrs:{size:"2"}},[e._v("💯Score: 1    🔗Associated commands: [ "),t("RouterLink",{attrs:{to:"/richen/git-show.html"}},[e._v("git show")]),e._v(" ]    🌐"),t("a",{attrs:{href:"https://stackoverflow.com/questions/15294210",target:"_blank",rel:"noopener noreferrer"}},[e._v("Details"),t("OutboundLink")],1)],1)],1)]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("\ngit show :2:full_path > file\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or ")]),e._v("\ngit checkout-index --stage=2 -- file\n\n\ngit show :3:full_path > file\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or ")]),e._v("\ngit checkout-index --stage=3 -- file\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("h2",{attrs:{id:"temp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#temp"}},[e._v("#")]),e._v(" 🔹 --temp")]),e._v(" "),t("p",[t("strong",[e._v("1. Usage scenario: How do I git add only lines matching a pattern?")])]),e._v(" "),t("blockquote",[t("p",[t("font",{attrs:{size:"2"}},[e._v("💯Score: 5    🔗Associated commands: [ "),t("RouterLink",{attrs:{to:"/richen/git-update-index.html"}},[e._v("git update-index")]),e._v(", "),t("RouterLink",{attrs:{to:"/richen/git-hash-object.html"}},[e._v("git hash-object")]),e._v(", "),t("RouterLink",{attrs:{to:"/richen/git-diff.html"}},[e._v("git diff")]),e._v(" ]    🌐"),t("a",{attrs:{href:"https://stackoverflow.com/questions/37336801",target:"_blank",rel:"noopener noreferrer"}},[e._v("Details"),t("OutboundLink")],1)],1)],1)]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[e._v("$ git diff")]),e._v("\ndiff --git a/lorem.txt b/lorem.txt\nindex d5d20a4..58609a7 100644\n"),t("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("--- a/lorem.txt")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+++ b/lorem.txt")]),e._v("\n@@ -2,10 +2,14 @@ Lorem ipsum dolor sit amet,\n consectetur adipiscing elit,\n sed do eiusmod tempor\n incididunt ut labore et dolore\n"),t("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("-magna aliqua. Ut enim ad minim")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+minim")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+minim")]),e._v("\n veniam, quis nostrud\n exercitation ullamco laboris\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+maxim")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+maxim")]),e._v("\n nisi ut aliquip ex ea commodo\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+minim")]),e._v("\n consequat.  Duis aute irure\n dolor in reprehenderit in\n voluptate velit esse cillum\n\n"),t("span",{pre:!0,attrs:{class:"token command"}},[e._v("$ git diff"),t("span",{pre:!0,attrs:{class:"token parameter"}},[e._v(" --cached")]),e._v("  # nothing staged in the index")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token command"}},[e._v("$ git diff")]),e._v("\ndiff --git a/lorem.txt b/lorem.txt\nindex 7e1b4cb..58609a7 100644\n"),t("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("--- a/lorem.txt")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+++ b/lorem.txt")]),e._v("\n@@ -6,6 +6,8 @@ minim\n minim\n veniam, quis nostrud\n exercitation ullamco laboris\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+maxim")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+maxim")]),e._v("\n nisi ut aliquip ex ea commodo\n minim\n consequat.  Duis aute irure\n\n"),t("span",{pre:!0,attrs:{class:"token command"}},[e._v("$ git diff"),t("span",{pre:!0,attrs:{class:"token parameter"}},[e._v(" --cached")])]),e._v("\ndiff --git a/lorem.txt b/lorem.txt\nindex d5d20a4..7e1b4cb 100644\n"),t("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("--- a/lorem.txt")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+++ b/lorem.txt")]),e._v("\n@@ -2,10 +2,12 @@ Lorem ipsum dolor sit amet,\n consectetur adipiscing elit,\n sed do eiusmod tempor\n incididunt ut labore et dolore\n"),t("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("-magna aliqua. Ut enim ad minim")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+minim")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+minim")]),e._v("\n veniam, quis nostrud\n exercitation ullamco laboris\n nisi ut aliquip ex ea commodo\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+minim")]),e._v("\n consequat.  Duis aute irure\n dolor in reprehenderit in\n voluptate velit esse cillum\n\n@(next :args)\n@(assert)\n@pattern\n@file\n@(bind regex @(regex-compile pattern))\n@(next (open-command `git diff @file`))\ndiff @diffjunk\nindex @indexjunk\n"),t("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("--- a/@file")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+++ b/@file")]),e._v("\n@(collect)\n@@@@ -@bfline,@bflen +@afline,@aflen @@@@@(skip)\n@  (bind (nminus nplus) (0 0))\n@  (collect)\n@    (cases)\n @line\n@      (bind zerocol "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('" "')]),e._v(")\n@    (or)\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+@line")]),e._v("\n@      (bind zerocol "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"+"')]),e._v(")\n@      (require (search-regex line regex))\n@      (do (inc nplus))\n@    (or)\n"),t("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("-@line")]),e._v("\n@      (bind zerocol "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"-"')]),e._v(")\n@      (require (search-regex line regex))\n@      (do (inc nminus))\n@    (or)\n"),t("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("-@line")]),e._v("\n@;;    unmatched - line becomes context line\n@      (bind zerocol "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('" "')]),e._v(")\n@    (end)\n@  (until)\n@/[^+\\- ]/@(skip)\n@  (end)\n@  (set (bfline bflen afline aflen)\n        @[mapcar int-str (list bfline bflen afline aflen)])\n@  (set aflen @(+ bflen nplus (- nminus)))\n@(end)\n@(output :into stripped-diff)\ndiff @diffjunk\nindex @indexjunk\n"),t("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("--- a/@file")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+++ b/@file")]),e._v("\n@  (repeat)\n"),t("span",{pre:!0,attrs:{class:"token coord"}},[e._v("@@@@ -@bfline,@bflen +@afline,@aflen @@@@")]),e._v("\n@    (repeat)\n@zerocol@line\n@    (end)\n@  (end)\n@(end)\n@(next (open-command `git checkout-index --temp @file`))\n@tempname@\\t@file\n@(try)\n@  (do\n     (with-stream (patch-stream (open-command `patch -p1 @tempname` "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"w"')]),e._v("))\n       (put-lines stripped-diff patch-stream)))\n@  (next (open-command `git hash-object -w @tempname`))\n@newsha\n@  (do (sh `git update-index --cacheinfo 100644 @newsha @file`))\n@(catch)\n@  (fail)\n@(finally)\n@  (do\n     (ignerr [mapdo remove-path #`@tempname @tempname.orig @tempname.rej`]))\n@(end)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br"),t("span",{staticClass:"line-number"},[e._v("35")]),t("br"),t("span",{staticClass:"line-number"},[e._v("36")]),t("br"),t("span",{staticClass:"line-number"},[e._v("37")]),t("br"),t("span",{staticClass:"line-number"},[e._v("38")]),t("br"),t("span",{staticClass:"line-number"},[e._v("39")]),t("br"),t("span",{staticClass:"line-number"},[e._v("40")]),t("br"),t("span",{staticClass:"line-number"},[e._v("41")]),t("br"),t("span",{staticClass:"line-number"},[e._v("42")]),t("br"),t("span",{staticClass:"line-number"},[e._v("43")]),t("br"),t("span",{staticClass:"line-number"},[e._v("44")]),t("br"),t("span",{staticClass:"line-number"},[e._v("45")]),t("br"),t("span",{staticClass:"line-number"},[e._v("46")]),t("br"),t("span",{staticClass:"line-number"},[e._v("47")]),t("br"),t("span",{staticClass:"line-number"},[e._v("48")]),t("br"),t("span",{staticClass:"line-number"},[e._v("49")]),t("br"),t("span",{staticClass:"line-number"},[e._v("50")]),t("br"),t("span",{staticClass:"line-number"},[e._v("51")]),t("br"),t("span",{staticClass:"line-number"},[e._v("52")]),t("br"),t("span",{staticClass:"line-number"},[e._v("53")]),t("br"),t("span",{staticClass:"line-number"},[e._v("54")]),t("br"),t("span",{staticClass:"line-number"},[e._v("55")]),t("br"),t("span",{staticClass:"line-number"},[e._v("56")]),t("br"),t("span",{staticClass:"line-number"},[e._v("57")]),t("br"),t("span",{staticClass:"line-number"},[e._v("58")]),t("br"),t("span",{staticClass:"line-number"},[e._v("59")]),t("br"),t("span",{staticClass:"line-number"},[e._v("60")]),t("br"),t("span",{staticClass:"line-number"},[e._v("61")]),t("br"),t("span",{staticClass:"line-number"},[e._v("62")]),t("br"),t("span",{staticClass:"line-number"},[e._v("63")]),t("br"),t("span",{staticClass:"line-number"},[e._v("64")]),t("br"),t("span",{staticClass:"line-number"},[e._v("65")]),t("br"),t("span",{staticClass:"line-number"},[e._v("66")]),t("br"),t("span",{staticClass:"line-number"},[e._v("67")]),t("br"),t("span",{staticClass:"line-number"},[e._v("68")]),t("br"),t("span",{staticClass:"line-number"},[e._v("69")]),t("br"),t("span",{staticClass:"line-number"},[e._v("70")]),t("br"),t("span",{staticClass:"line-number"},[e._v("71")]),t("br"),t("span",{staticClass:"line-number"},[e._v("72")]),t("br"),t("span",{staticClass:"line-number"},[e._v("73")]),t("br"),t("span",{staticClass:"line-number"},[e._v("74")]),t("br"),t("span",{staticClass:"line-number"},[e._v("75")]),t("br"),t("span",{staticClass:"line-number"},[e._v("76")]),t("br"),t("span",{staticClass:"line-number"},[e._v("77")]),t("br"),t("span",{staticClass:"line-number"},[e._v("78")]),t("br"),t("span",{staticClass:"line-number"},[e._v("79")]),t("br"),t("span",{staticClass:"line-number"},[e._v("80")]),t("br"),t("span",{staticClass:"line-number"},[e._v("81")]),t("br"),t("span",{staticClass:"line-number"},[e._v("82")]),t("br"),t("span",{staticClass:"line-number"},[e._v("83")]),t("br"),t("span",{staticClass:"line-number"},[e._v("84")]),t("br"),t("span",{staticClass:"line-number"},[e._v("85")]),t("br"),t("span",{staticClass:"line-number"},[e._v("86")]),t("br"),t("span",{staticClass:"line-number"},[e._v("87")]),t("br"),t("span",{staticClass:"line-number"},[e._v("88")]),t("br"),t("span",{staticClass:"line-number"},[e._v("89")]),t("br"),t("span",{staticClass:"line-number"},[e._v("90")]),t("br"),t("span",{staticClass:"line-number"},[e._v("91")]),t("br"),t("span",{staticClass:"line-number"},[e._v("92")]),t("br"),t("span",{staticClass:"line-number"},[e._v("93")]),t("br"),t("span",{staticClass:"line-number"},[e._v("94")]),t("br"),t("span",{staticClass:"line-number"},[e._v("95")]),t("br"),t("span",{staticClass:"line-number"},[e._v("96")]),t("br"),t("span",{staticClass:"line-number"},[e._v("97")]),t("br"),t("span",{staticClass:"line-number"},[e._v("98")]),t("br"),t("span",{staticClass:"line-number"},[e._v("99")]),t("br"),t("span",{staticClass:"line-number"},[e._v("100")]),t("br"),t("span",{staticClass:"line-number"},[e._v("101")]),t("br"),t("span",{staticClass:"line-number"},[e._v("102")]),t("br"),t("span",{staticClass:"line-number"},[e._v("103")]),t("br"),t("span",{staticClass:"line-number"},[e._v("104")]),t("br"),t("span",{staticClass:"line-number"},[e._v("105")]),t("br"),t("span",{staticClass:"line-number"},[e._v("106")]),t("br"),t("span",{staticClass:"line-number"},[e._v("107")]),t("br"),t("span",{staticClass:"line-number"},[e._v("108")]),t("br"),t("span",{staticClass:"line-number"},[e._v("109")]),t("br"),t("span",{staticClass:"line-number"},[e._v("110")]),t("br"),t("span",{staticClass:"line-number"},[e._v("111")]),t("br"),t("span",{staticClass:"line-number"},[e._v("112")]),t("br"),t("span",{staticClass:"line-number"},[e._v("113")]),t("br"),t("span",{staticClass:"line-number"},[e._v("114")]),t("br"),t("span",{staticClass:"line-number"},[e._v("115")]),t("br"),t("span",{staticClass:"line-number"},[e._v("116")]),t("br"),t("span",{staticClass:"line-number"},[e._v("117")]),t("br"),t("span",{staticClass:"line-number"},[e._v("118")]),t("br"),t("span",{staticClass:"line-number"},[e._v("119")]),t("br"),t("span",{staticClass:"line-number"},[e._v("120")]),t("br"),t("span",{staticClass:"line-number"},[e._v("121")]),t("br"),t("span",{staticClass:"line-number"},[e._v("122")]),t("br"),t("span",{staticClass:"line-number"},[e._v("123")]),t("br"),t("span",{staticClass:"line-number"},[e._v("124")]),t("br"),t("span",{staticClass:"line-number"},[e._v("125")]),t("br")])]),t("h2",{attrs:{id:"stdin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stdin"}},[e._v("#")]),e._v(" 🔹 --stdin")]),e._v(" "),t("p",[t("strong",[e._v("1. Usage scenario: GIT: Checkout to a specific folder")])]),e._v(" "),t("blockquote",[t("p",[t("font",{attrs:{size:"2"}},[e._v("💯Score: 62    🔗Associated commands: [ None ]    🌐"),t("a",{attrs:{href:"https://stackoverflow.com/questions/4482919",target:"_blank",rel:"noopener noreferrer"}},[e._v("Details"),t("OutboundLink")],1)])],1)]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("▲ You can use git checkout-index for that, this is a low level command, if you want to export everything, you can use -a,\ngit checkout-index -a -f --prefix=/destination/path/\n\n▲ If you want to export a certain directory, there are some tricks involved. The command only takes files, not directories. To apply it to directories, use the "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'find'")]),e._v(" command and pipe the output to git.\nfind dirname -print0 | git checkout-index --prefix=/path-to/dest/ -f -z --stdin\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("h2",{attrs:{id:"z"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#z"}},[e._v("#")]),e._v(" 🔹 -z")]),e._v(" "),t("p",[t("strong",[e._v("1. Usage scenario: GIT: Checkout to a specific folder")])]),e._v(" "),t("blockquote",[t("p",[t("font",{attrs:{size:"2"}},[e._v("💯Score: 62    🔗Associated commands: [ None ]    🌐"),t("a",{attrs:{href:"https://stackoverflow.com/questions/4482919",target:"_blank",rel:"noopener noreferrer"}},[e._v("Details"),t("OutboundLink")],1)])],1)]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("▲ You can use git checkout-index for that, this is a low level command, if you want to export everything, you can use -a,\ngit checkout-index -a -f --prefix=/destination/path/\n\n▲ If you want to export a certain directory, there are some tricks involved. The command only takes files, not directories. To apply it to directories, use the "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'find'")]),e._v(" command and pipe the output to git.\nfind dirname -print0 | git checkout-index --prefix=/path-to/dest/ -f -z --stdin\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("h2",{attrs:{id:"none"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#none"}},[e._v("#")]),e._v(" 🔹None")]),e._v(" "),t("p",[t("strong",[e._v("1. Usage scenario: How to make a git sparse checkout without having the whole repository in git/objects/pack?")])]),e._v(" "),t("blockquote",[t("p",[t("font",{attrs:{size:"2"}},[e._v("💯Score: 2    🔗Associated commands: [ "),t("RouterLink",{attrs:{to:"/richen/git-read-tree.html"}},[e._v("git read-tree")]),e._v(" ]    🌐"),t("a",{attrs:{href:"https://stackoverflow.com/questions/26165940",target:"_blank",rel:"noopener noreferrer"}},[e._v("Details"),t("OutboundLink")],1)],1)],1)]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("git read-tree --reset\ngit read-tree HEAD:<path to folder you are interested in>\ngit checkout-index \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);