(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{495:function(s,t,n){"use strict";n.r(t);var e=n(19),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("📖 "+s._s(s.$page.readingTime.text)+"    🔡 "+s._s(s.$page.readingTime.words)),n("br")])]),s._v(" "),n("h1",{attrs:{id:"git-hash-object-compute-object-id-and-optionally-creates-a-blob-from-a-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-hash-object-compute-object-id-and-optionally-creates-a-blob-from-a-file"}},[s._v("#")]),s._v(" 📌 git hash-object - Compute object ID and optionally creates a blob from a file")]),s._v(" "),n("h2",{attrs:{id:"t"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#t"}},[s._v("#")]),s._v(" 🔹 -t")]),s._v(" "),n("p",[n("strong",[s._v("1. Usage scenario: Git: stage only added lines of a files")])]),s._v(" "),n("blockquote",[n("p",[n("font",{attrs:{size:"2"}},[s._v("💯Score: 2    🔗Associated commands: [ "),n("RouterLink",{attrs:{to:"/richen/git-cat-file.html"}},[s._v("git cat-file")]),s._v(", "),n("RouterLink",{attrs:{to:"/richen/git-update-index.html"}},[s._v("git update-index")]),s._v(" ]    🌐"),n("a",{attrs:{href:"https://stackoverflow.com/questions/47198956",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),n("OutboundLink")],1)],1)],1)]),s._v(" "),n("p",[n("strong",[s._v("Example:")])]),s._v(" "),n("div",{staticClass:"language-git line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-git"}},[n("code",[s._v("git update-index --cacheinfo 100644,$(python -c '\n    import difflib, sys;\n    sys.stdout.writelines(\n        line[2:] for line in difflib.Differ().compare(\n            open(sys.argv[1]).readlines(), open(sys.argv[2]).readlines())\n        if line.startswith("),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"  "')]),s._v(") or line.startswith("),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+ "')]),s._v("))' \\\n    <(git cat-file blob HEAD:filename) filename \\\n| git hash-object -t blob -w --stdin --path filename),filename\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[n("strong",[s._v("2. Usage scenario: How to find the file a specfic blob is associated with?")])]),s._v(" "),n("blockquote",[n("p",[n("font",{attrs:{size:"2"}},[s._v("💯Score: 1    🔗Associated commands: [ "),n("RouterLink",{attrs:{to:"/richen/git-add.html"}},[s._v("git add")]),s._v(", "),n("RouterLink",{attrs:{to:"/richen/git-rm.html"}},[s._v("git rm")]),s._v(", "),n("RouterLink",{attrs:{to:"/richen/git-commit.html"}},[s._v("git commit")]),s._v(" ]    🌐"),n("a",{attrs:{href:"https://stackoverflow.com/questions/68682597",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),n("OutboundLink")],1)],1)],1)]),s._v(" "),n("p",[n("strong",[s._v("Example:")])]),s._v(" "),n("div",{staticClass:"language-git line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-git"}},[n("code",[s._v("▲ What this means is that if we make one commit, or many commits, containing the same data, we get the same blob hash ID:\n$ echo test data > file\n"),n("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git add file")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git commit"),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v(" -m")]),s._v(" ")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add some test data"')]),s._v("\n[commit message here]\n"),n("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git rm file")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git commit"),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v(" -m")]),s._v(" ")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"remove the test data"')]),s._v("\n[commit message here]\n$ echo test data > different-name\n"),n("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git add different-name")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git commit"),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v(" -m")]),s._v(" ")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add the same data under another name"')]),s._v("\n[commit message here]\n\n▲ If we inspect these commits, we will find that both files, file and different-name, have the same blob hash ID, even though they have different file names and do not coexist in adjacent commits.  In fact, the blob hash ID of test data\\n is:\n$ echo test data | git hash-object -t blob --stdin\n082b3465b6ac4b857f930b655c1cdb398aa6c465\n\necho hello world | git hash-object -t blob --stdin\n3b18e512dba79e4c8300dd08aeb37f8e728b8dad\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h2",{attrs:{id:"w"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#w"}},[s._v("#")]),s._v(" 🔹 -w")]),s._v(" "),n("p",[n("strong",[s._v("1. Usage scenario: How do I git add only lines matching a pattern?")])]),s._v(" "),n("blockquote",[n("p",[n("font",{attrs:{size:"2"}},[s._v("💯Score: 5    🔗Associated commands: [ "),n("RouterLink",{attrs:{to:"/richen/git-checkout-index.html"}},[s._v("git checkout-index")]),s._v(", "),n("RouterLink",{attrs:{to:"/richen/git-update-index.html"}},[s._v("git update-index")]),s._v(", "),n("RouterLink",{attrs:{to:"/richen/git-diff.html"}},[s._v("git diff")]),s._v(" ]    🌐"),n("a",{attrs:{href:"https://stackoverflow.com/questions/37336801",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),n("OutboundLink")],1)],1)],1)]),s._v(" "),n("p",[n("strong",[s._v("Example:")])]),s._v(" "),n("div",{staticClass:"language-git line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-git"}},[n("code",[n("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git diff")]),s._v("\ndiff --git a/lorem.txt b/lorem.txt\nindex d5d20a4..58609a7 100644\n"),n("span",{pre:!0,attrs:{class:"token deleted"}},[s._v("--- a/lorem.txt")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token inserted"}},[s._v("+++ b/lorem.txt")]),s._v("\n@@ -2,10 +2,14 @@ Lorem ipsum dolor sit amet,\n consectetur adipiscing elit,\n sed do eiusmod tempor\n incididunt ut labore et dolore\n"),n("span",{pre:!0,attrs:{class:"token deleted"}},[s._v("-magna aliqua. Ut enim ad minim")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token inserted"}},[s._v("+minim")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token inserted"}},[s._v("+minim")]),s._v("\n veniam, quis nostrud\n exercitation ullamco laboris\n"),n("span",{pre:!0,attrs:{class:"token inserted"}},[s._v("+maxim")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token inserted"}},[s._v("+maxim")]),s._v("\n nisi ut aliquip ex ea commodo\n"),n("span",{pre:!0,attrs:{class:"token inserted"}},[s._v("+minim")]),s._v("\n consequat.  Duis aute irure\n dolor in reprehenderit in\n voluptate velit esse cillum\n\n"),n("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git diff"),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v(" --cached")]),s._v("  # nothing staged in the index")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git diff")]),s._v("\ndiff --git a/lorem.txt b/lorem.txt\nindex 7e1b4cb..58609a7 100644\n"),n("span",{pre:!0,attrs:{class:"token deleted"}},[s._v("--- a/lorem.txt")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token inserted"}},[s._v("+++ b/lorem.txt")]),s._v("\n@@ -6,6 +6,8 @@ minim\n minim\n veniam, quis nostrud\n exercitation ullamco laboris\n"),n("span",{pre:!0,attrs:{class:"token inserted"}},[s._v("+maxim")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token inserted"}},[s._v("+maxim")]),s._v("\n nisi ut aliquip ex ea commodo\n minim\n consequat.  Duis aute irure\n\n"),n("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git diff"),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v(" --cached")])]),s._v("\ndiff --git a/lorem.txt b/lorem.txt\nindex d5d20a4..7e1b4cb 100644\n"),n("span",{pre:!0,attrs:{class:"token deleted"}},[s._v("--- a/lorem.txt")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token inserted"}},[s._v("+++ b/lorem.txt")]),s._v("\n@@ -2,10 +2,12 @@ Lorem ipsum dolor sit amet,\n consectetur adipiscing elit,\n sed do eiusmod tempor\n incididunt ut labore et dolore\n"),n("span",{pre:!0,attrs:{class:"token deleted"}},[s._v("-magna aliqua. Ut enim ad minim")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token inserted"}},[s._v("+minim")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token inserted"}},[s._v("+minim")]),s._v("\n veniam, quis nostrud\n exercitation ullamco laboris\n nisi ut aliquip ex ea commodo\n"),n("span",{pre:!0,attrs:{class:"token inserted"}},[s._v("+minim")]),s._v("\n consequat.  Duis aute irure\n dolor in reprehenderit in\n voluptate velit esse cillum\n\n@(next :args)\n@(assert)\n@pattern\n@file\n@(bind regex @(regex-compile pattern))\n@(next (open-command `git diff @file`))\ndiff @diffjunk\nindex @indexjunk\n"),n("span",{pre:!0,attrs:{class:"token deleted"}},[s._v("--- a/@file")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token inserted"}},[s._v("+++ b/@file")]),s._v("\n@(collect)\n@@@@ -@bfline,@bflen +@afline,@aflen @@@@@(skip)\n@  (bind (nminus nplus) (0 0))\n@  (collect)\n@    (cases)\n @line\n@      (bind zerocol "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),s._v(")\n@    (or)\n"),n("span",{pre:!0,attrs:{class:"token inserted"}},[s._v("+@line")]),s._v("\n@      (bind zerocol "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+"')]),s._v(")\n@      (require (search-regex line regex))\n@      (do (inc nplus))\n@    (or)\n"),n("span",{pre:!0,attrs:{class:"token deleted"}},[s._v("-@line")]),s._v("\n@      (bind zerocol "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v(")\n@      (require (search-regex line regex))\n@      (do (inc nminus))\n@    (or)\n"),n("span",{pre:!0,attrs:{class:"token deleted"}},[s._v("-@line")]),s._v("\n@;;    unmatched - line becomes context line\n@      (bind zerocol "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),s._v(")\n@    (end)\n@  (until)\n@/[^+\\- ]/@(skip)\n@  (end)\n@  (set (bfline bflen afline aflen)\n        @[mapcar int-str (list bfline bflen afline aflen)])\n@  (set aflen @(+ bflen nplus (- nminus)))\n@(end)\n@(output :into stripped-diff)\ndiff @diffjunk\nindex @indexjunk\n"),n("span",{pre:!0,attrs:{class:"token deleted"}},[s._v("--- a/@file")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token inserted"}},[s._v("+++ b/@file")]),s._v("\n@  (repeat)\n"),n("span",{pre:!0,attrs:{class:"token coord"}},[s._v("@@@@ -@bfline,@bflen +@afline,@aflen @@@@")]),s._v("\n@    (repeat)\n@zerocol@line\n@    (end)\n@  (end)\n@(end)\n@(next (open-command `git checkout-index --temp @file`))\n@tempname@\\t@file\n@(try)\n@  (do\n     (with-stream (patch-stream (open-command `patch -p1 @tempname` "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"w"')]),s._v("))\n       (put-lines stripped-diff patch-stream)))\n@  (next (open-command `git hash-object -w @tempname`))\n@newsha\n@  (do (sh `git update-index --cacheinfo 100644 @newsha @file`))\n@(catch)\n@  (fail)\n@(finally)\n@  (do\n     (ignerr [mapdo remove-path #`@tempname @tempname.orig @tempname.rej`]))\n@(end)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br"),n("span",{staticClass:"line-number"},[s._v("125")]),n("br")])]),n("p",[n("strong",[s._v("2. Usage scenario: How to have current file in git but not history of file?")])]),s._v(" "),n("blockquote",[n("p",[n("font",{attrs:{size:"2"}},[s._v("💯Score: 4    🔗Associated commands: [ "),n("RouterLink",{attrs:{to:"/richen/git-fetch.html"}},[s._v("git fetch")]),s._v(", "),n("RouterLink",{attrs:{to:"/richen/git-show.html"}},[s._v("git show")]),s._v(", "),n("RouterLink",{attrs:{to:"/richen/git-tag.html"}},[s._v("git tag")]),s._v(" ]    🌐"),n("a",{attrs:{href:"https://stackoverflow.com/questions/55682356",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),n("OutboundLink")],1)],1)],1)]),s._v(" "),n("p",[n("strong",[s._v("Example:")])]),s._v(" "),n("div",{staticClass:"language-git line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-git"}},[n("code",[s._v("$ make book.pdf\n"),n("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git tag"),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v(" -f")]),s._v(" current-book `git hash-object"),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v(" -w")]),s._v(" book.pdf`")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git fetch origin current-book")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git show FETCH_HEAD >book.pdf")]),s._v("\n$ open book.pdf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[n("strong",[s._v("3. Usage scenario: How can I use git to stage only one line in a file for commit, all from a script?")])]),s._v(" "),n("blockquote",[n("p",[n("font",{attrs:{size:"2"}},[s._v("💯Score: 1    🔗Associated commands: [ "),n("RouterLink",{attrs:{to:"/richen/git-update-index.html"}},[s._v("git update-index")]),s._v(", "),n("RouterLink",{attrs:{to:"/richen/git-show.html"}},[s._v("git show")]),s._v(" ]    🌐"),n("a",{attrs:{href:"https://stackoverflow.com/questions/4618659",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),n("OutboundLink")],1)],1)],1)]),s._v(" "),n("p",[n("strong",[s._v("Example:")])]),s._v(" "),n("div",{staticClass:"language-git line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-git"}},[n("code",[s._v("blobid=$(git show :"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$filepath"')]),s._v(" | copyright-filter | git hash-object -w --stdin)\n\nif $? -eq 0; then\n\n    git update-index --cacheinfo 100644 "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$blobid"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$filepath"')]),s._v(" &&\n    copyright-filter "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$filepath"')]),s._v("\n\nfi\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"stdin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stdin"}},[s._v("#")]),s._v(" 🔹 --stdin")]),s._v(" "),n("p",[n("strong",[s._v("1. Usage scenario: Git: stage only added lines of a files")])]),s._v(" "),n("blockquote",[n("p",[n("font",{attrs:{size:"2"}},[s._v("💯Score: 2    🔗Associated commands: [ "),n("RouterLink",{attrs:{to:"/richen/git-cat-file.html"}},[s._v("git cat-file")]),s._v(", "),n("RouterLink",{attrs:{to:"/richen/git-update-index.html"}},[s._v("git update-index")]),s._v(" ]    🌐"),n("a",{attrs:{href:"https://stackoverflow.com/questions/47198956",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),n("OutboundLink")],1)],1)],1)]),s._v(" "),n("p",[n("strong",[s._v("Example:")])]),s._v(" "),n("div",{staticClass:"language-git line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-git"}},[n("code",[s._v("git update-index --cacheinfo 100644,$(python -c '\n    import difflib, sys;\n    sys.stdout.writelines(\n        line[2:] for line in difflib.Differ().compare(\n            open(sys.argv[1]).readlines(), open(sys.argv[2]).readlines())\n        if line.startswith("),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"  "')]),s._v(") or line.startswith("),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+ "')]),s._v("))' \\\n    <(git cat-file blob HEAD:filename) filename \\\n| git hash-object -t blob -w --stdin --path filename),filename\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[n("strong",[s._v("2. Usage scenario: How can I use git to stage only one line in a file for commit, all from a script?")])]),s._v(" "),n("blockquote",[n("p",[n("font",{attrs:{size:"2"}},[s._v("💯Score: 1    🔗Associated commands: [ "),n("RouterLink",{attrs:{to:"/richen/git-update-index.html"}},[s._v("git update-index")]),s._v(", "),n("RouterLink",{attrs:{to:"/richen/git-show.html"}},[s._v("git show")]),s._v(" ]    🌐"),n("a",{attrs:{href:"https://stackoverflow.com/questions/4618659",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),n("OutboundLink")],1)],1)],1)]),s._v(" "),n("p",[n("strong",[s._v("Example:")])]),s._v(" "),n("div",{staticClass:"language-git line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-git"}},[n("code",[s._v("blobid=$(git show :"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$filepath"')]),s._v(" | copyright-filter | git hash-object -w --stdin)\n\nif $? -eq 0; then\n\n    git update-index --cacheinfo 100644 "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$blobid"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$filepath"')]),s._v(" &&\n    copyright-filter "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$filepath"')]),s._v("\n\nfi\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[n("strong",[s._v("3. Usage scenario: How to find the file a specfic blob is associated with?")])]),s._v(" "),n("blockquote",[n("p",[n("font",{attrs:{size:"2"}},[s._v("💯Score: 1    🔗Associated commands: [ "),n("RouterLink",{attrs:{to:"/richen/git-add.html"}},[s._v("git add")]),s._v(", "),n("RouterLink",{attrs:{to:"/richen/git-rm.html"}},[s._v("git rm")]),s._v(", "),n("RouterLink",{attrs:{to:"/richen/git-commit.html"}},[s._v("git commit")]),s._v(" ]    🌐"),n("a",{attrs:{href:"https://stackoverflow.com/questions/68682597",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),n("OutboundLink")],1)],1)],1)]),s._v(" "),n("p",[n("strong",[s._v("Example:")])]),s._v(" "),n("div",{staticClass:"language-git line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-git"}},[n("code",[s._v("▲ What this means is that if we make one commit, or many commits, containing the same data, we get the same blob hash ID:\n$ echo test data > file\n"),n("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git add file")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git commit"),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v(" -m")]),s._v(" ")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add some test data"')]),s._v("\n[commit message here]\n"),n("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git rm file")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git commit"),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v(" -m")]),s._v(" ")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"remove the test data"')]),s._v("\n[commit message here]\n$ echo test data > different-name\n"),n("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git add different-name")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git commit"),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v(" -m")]),s._v(" ")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add the same data under another name"')]),s._v("\n[commit message here]\n\n▲ If we inspect these commits, we will find that both files, file and different-name, have the same blob hash ID, even though they have different file names and do not coexist in adjacent commits.  In fact, the blob hash ID of test data\\n is:\n$ echo test data | git hash-object -t blob --stdin\n082b3465b6ac4b857f930b655c1cdb398aa6c465\n\necho hello world | git hash-object -t blob --stdin\n3b18e512dba79e4c8300dd08aeb37f8e728b8dad\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h2",{attrs:{id:"path"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[s._v("#")]),s._v(" 🔹 --path")]),s._v(" "),n("p",[n("strong",[s._v("1. Usage scenario: Git: stage only added lines of a files")])]),s._v(" "),n("blockquote",[n("p",[n("font",{attrs:{size:"2"}},[s._v("💯Score: 2    🔗Associated commands: [ "),n("RouterLink",{attrs:{to:"/richen/git-cat-file.html"}},[s._v("git cat-file")]),s._v(", "),n("RouterLink",{attrs:{to:"/richen/git-update-index.html"}},[s._v("git update-index")]),s._v(" ]    🌐"),n("a",{attrs:{href:"https://stackoverflow.com/questions/47198956",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),n("OutboundLink")],1)],1)],1)]),s._v(" "),n("p",[n("strong",[s._v("Example:")])]),s._v(" "),n("div",{staticClass:"language-git line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-git"}},[n("code",[s._v("git update-index --cacheinfo 100644,$(python -c '\n    import difflib, sys;\n    sys.stdout.writelines(\n        line[2:] for line in difflib.Differ().compare(\n            open(sys.argv[1]).readlines(), open(sys.argv[2]).readlines())\n        if line.startswith("),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"  "')]),s._v(") or line.startswith("),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+ "')]),s._v("))' \\\n    <(git cat-file blob HEAD:filename) filename \\\n| git hash-object -t blob -w --stdin --path filename),filename\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"none"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#none"}},[s._v("#")]),s._v(" 🔹None")]),s._v(" "),n("p",[n("strong",[s._v("1. Usage scenario: GIT: determine revision based on a file")])]),s._v(" "),n("blockquote",[n("p",[n("font",{attrs:{size:"2"}},[s._v("💯Score: 16    🔗Associated commands: [ "),n("RouterLink",{attrs:{to:"/richen/git-rev-list.html"}},[s._v("git rev-list")]),s._v(", "),n("RouterLink",{attrs:{to:"/richen/git-ls-tree.html"}},[s._v("git ls-tree")]),s._v(", "),n("RouterLink",{attrs:{to:"/richen/git-branch.html"}},[s._v("git branch")]),s._v(" ]    🌐"),n("a",{attrs:{href:"https://stackoverflow.com/questions/7387905",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),n("OutboundLink")],1)],1)],1)]),s._v(" "),n("p",[n("strong",[s._v("Example:")])]),s._v(" "),n("div",{staticClass:"language-git line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-git"}},[n("code",[s._v("git hash-object foo.c\n\nfor c in $(git rev-list --all)\ndo\n   ( git ls-tree -r $c | grep f414f31 ) && echo Found the blob in commit: $c\ndone\n\ngit branch -a --contains 1a2b3c4d\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[n("strong",[s._v("2. Usage scenario: Do different versions of a file get their own blob/sha?")])]),s._v(" "),n("blockquote",[n("p",[n("font",{attrs:{size:"2"}},[s._v("💯Score: 6    🔗Associated commands: [ None ]    🌐"),n("a",{attrs:{href:"https://stackoverflow.com/questions/5928807",target:"_blank",rel:"noopener noreferrer"}},[s._v("Details"),n("OutboundLink")],1)])],1)]),s._v(" "),n("p",[n("strong",[s._v("Example:")])]),s._v(" "),n("div",{staticClass:"language-git line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-git"}},[n("code",[n("span",{pre:!0,attrs:{class:"token command"}},[s._v(" $ git hash-object text.txt")]),s._v("\n 9dbcaae0abd0d45c30bbb1a77410fb31aedda806\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);