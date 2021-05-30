(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{488:function(s,t,a){"use strict";a.r(t);var r=a(4),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[a("a",{attrs:{href:"https://travis-ci.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Travis CI"),a("OutboundLink")],1),s._v(" 是在线托管的持续集成服务，绑定Github项目，抓取新的代码自动进行测试构建，甚至自动部署到测试环境。 使用这项服务，每次我们提交新的代码，都能及时发现问题并修复。")])]),s._v(" "),a("h1",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("ul",[a("li",[s._v("自己去官网看")])]),s._v(" "),a("h1",{attrs:{id:"通过travis-发布github-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过travis-发布github-pages"}},[s._v("#")]),s._v(" 通过Travis 发布github pages")]),s._v(" "),a("h2",{attrs:{id:"_1-github-创建-xxx-github-io-仓库-github-提供的静态界面展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-github-创建-xxx-github-io-仓库-github-提供的静态界面展示"}},[s._v("#")]),s._v(" 1.github 创建 xxx.github.io 仓库(github 提供的静态界面展示)")]),s._v(" "),a("h2",{attrs:{id:"_2-申请github-access-tokens-用来travis-推送代码上来"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-申请github-access-tokens-用来travis-推送代码上来"}},[s._v("#")]),s._v(" 2.申请github access_tokens 用来travis 推送代码上来")]),s._v(" "),a("ul",[a("li",[s._v("setting /  Developer settings / Personal access tokens / Generate new token 创建token, 保存好这个token(只会在创建时展示一次明文);")])]),s._v(" "),a("h2",{attrs:{id:"_3-使用github账号登陆-travis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用github账号登陆-travis"}},[s._v("#")]),s._v(" 3.使用github账号登陆 "),a("a",{attrs:{href:"https://travis-ci.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Travis"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"_4-设置关联项目为第一步建立的项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-设置关联项目为第一步建立的项目"}},[s._v("#")]),s._v(" 4.设置关联项目为第一步建立的项目;")]),s._v(" "),a("ul",[a("li",[s._v("Active repositories / settings  打开 build pushed branches,Auto cancel branch builds , Auto cancel pull request builds;")]),s._v(" "),a("li",[s._v("Environment Variables 下设置 github创建的token(此处变量名称需要记住,在下面配置文件中会用);")])]),s._v(" "),a("h2",{attrs:{id:"_5-配置-travis-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置-travis-yml"}},[s._v("#")]),s._v(" 5.配置.travis.yml")]),s._v(" "),a("ul",[a("li",[s._v("此处我是用"),a("a",{attrs:{href:"https://www.vuepress.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress"),a("OutboundLink")],1),s._v("搭建的博客项目为例,在项目根目录中创建"),a("a",{attrs:{href:"https://docs.travis-ci.com/user/encrypting-files/",target:"_blank",rel:"noopener noreferrer"}},[s._v(".travis.yml"),a("OutboundLink")],1),s._v("文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('language: node_js\nnode_js:\n- lts/*\nbranches:\n  only:\n  - master\ncache:\n  directories:\n  - node_modules\nscript:\n- npm run build\n- cd ./html\n- git init\n- git add -A\n- git commit -m \'deploy\'\n- git config --local user.name "user"\n- git config --local user.email "user@gmail.com"\n- git push -f https://${GITHUB_TOKEN}@resp\n  master\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("ul",[a("li",[s._v("创建完成提交文件到github就可以在Travis 的控制台中看到打包部署过程")])]),s._v(" "),a("h1",{attrs:{id:"travis-配置ssh链接发布项目到阿里云服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#travis-配置ssh链接发布项目到阿里云服务器"}},[s._v("#")]),s._v(" Travis 配置SSH链接发布项目到阿里云服务器")]),s._v(" "),a("blockquote",[a("p",[s._v("参考"),a("br"),s._v(" "),a("a",{attrs:{href:"https://oncletom.io/2016/travis-ssh-deploy/",target:"_blank",rel:"noopener noreferrer"}},[s._v("SSH deploys with Travis CI"),a("OutboundLink")],1),a("br"),s._v(" "),a("a",{attrs:{href:"https://www.ctolib.com/topics-139043.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("手摸手教你搭建 Travis CI 持续集成和自动化部署"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"_1-创建ssh密匙-rsa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建ssh密匙-rsa"}},[s._v("#")]),s._v(" 1.创建ssh密匙 *.rsa")]),s._v(" "),a("h2",{attrs:{id:"_2-推送-rsa-pub文件到部署服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-推送-rsa-pub文件到部署服务器"}},[s._v("#")]),s._v(" 2.推送*.rsa..pub文件到部署服务器")]),s._v(" "),a("h2",{attrs:{id:"_3-加密-rsa-文件-并把加密后的文件推送送到仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-加密-rsa-文件-并把加密后的文件推送送到仓库"}},[s._v("#")]),s._v(" 3.加密*.rsa 文件,并把加密后的文件推送送到仓库")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.travis-ci.com/user/encrypting-files/",target:"_blank",rel:"noopener noreferrer"}},[s._v("加密api"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"_4-编写-travis-yml文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-编写-travis-yml文件"}},[s._v("#")]),s._v(" 4.编写.travis.yml文件")]),s._v(" "),a("h2",{attrs:{id:"_5-提交请求查看结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-提交请求查看结果"}},[s._v("#")]),s._v(" 5.提交请求查看结果")]),s._v(" "),a("h1",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("ul",[a("li",[s._v("容我想想")])])])}),[],!1,null,null,null);t.default=e.exports}}]);