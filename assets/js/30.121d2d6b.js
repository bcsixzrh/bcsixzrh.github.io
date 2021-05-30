(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{484:function(s,n,a){"use strict";a.r(n);var e=a(4),r=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"docker-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装"}},[s._v("#")]),s._v(" docker 安装")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 指定镜像地址\nsudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n// 安装docker\nyum install docker\n// 启动docker\nsystemctl start docker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"替换镜像源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#替换镜像源"}},[s._v("#")]),s._v(" 替换镜像源")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('sudo mkdir -p /etc/docker\nsudo tee /etc/docker/daemon.json <<-\'EOF\'\n{\n  "registry-mirrors": ["https://zlv6dw08.mirror.aliyuncs.com"]\n}\nEOF\nsudo systemctl daemon-reload\nsudo systemctl restart docker\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"docker-jenkins安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-jenkins安装"}},[s._v("#")]),s._v(" docker Jenkins安装")]),s._v(" "),a("h3",{attrs:{id:"拉取jenkins镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取jenkins镜像"}},[s._v("#")]),s._v(" 拉取Jenkins镜像")]),s._v(" "),a("p",[a("code",[s._v("docker pull docker.io/jenkins")])]),s._v(" "),a("h3",{attrs:{id:"执行脚本docker-jenkins-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行脚本docker-jenkins-sh"}},[s._v("#")]),s._v(" 执行脚本docker-jenkins.sh")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker stop jenkins\ndocker rm jenkins\ndocker run \\\n  --name jenkins \\\n  -d \\\n  -p 18080:8080 \\\n  -p 50000:50000 \\\n  -v /data/docker/jenkins/jenkins_home:/var/jenkins_home \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  jenkinsci/blueocean\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"docker-mysql安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-mysql安装"}},[s._v("#")]),s._v(" docker mysql安装")]),s._v(" "),a("h3",{attrs:{id:"docker-mysql-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-mysql-sh"}},[s._v("#")]),s._v(" docker-mysql.sh")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 挂载文件my.cnf先创建文件，否则会是文件夹，导致mysql启动失败\ndocker run \\\n    -p 23306:3306 \\\n    -e MYSQL_ROOT_PASSWORD=******** \\\n    -v /data/docker/mysql8/mysql/data:/var/lib/mysql:rw \\\n    -v /data/docker/mysql8/mysql/log:/var/log/mysql:rw \\\n    -v /data/docker/mysql8/mysql/config/my.cnf:/etc/mysql/my.cnf:rw \\\n    -v /etc/localtime:/etc/localtime:ro \\\n    --name mysql8 \\\n    --restart=always \\\n    -d mysql:8.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"docker-portainer安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-portainer安装"}},[s._v("#")]),s._v(" docker portainer安装")]),s._v(" "),a("h3",{attrs:{id:"docker-portainer-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-portainer-sh"}},[s._v("#")]),s._v(" docker-portainer.sh")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker run -d -p 19000:9000 -v /var/run/docker.sock:/var/run/docker.sock --restart=always --name prtainer portainer/portainer\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"docker-nginx安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-nginx安装"}},[s._v("#")]),s._v(" docker nginx安装")]),s._v(" "),a("h3",{attrs:{id:"docker-nginx-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-nginx-sh"}},[s._v("#")]),s._v(" docker-nginx.sh")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker run --name nginx --restart=always --privileged=true -p 80:80 -p 443:443 \\\n    -v /data/docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf:ro \\\n    -v /data/docker/nginx/conf/conf.d:/etc/nginx/conf.d \\\n    -v /data/docker/nginx/html:/usr/share/nginx/html \\\n    -v /data/docker/nginx/logs:/var/log/nginx \\\n    -v /etc/nginx/ssl:/etc/nginx/ssl \\\n    -d nginx:1.14.2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"docker-seata安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-seata安装"}},[s._v("#")]),s._v(" docker seata安装")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("## 拉取镜像\ndocker pull seataio/seata-server:latest\n## 运行容器\ndocker run --name seata-server -p 8091:8091 -d  seataio/seata-server:latest\n## 将容器中的配置拷贝到/data/docker/seata/seata-1.3.0\ndocker cp seata-server:/seata-server /data/docker/seata/seata-1.3.0\n## 修改配置文件（/data/docker/seata/seata-1.3.0/file.conf&registry.conf）\ndocker stop seata-server\ndocekr rm seata-server\n## 导入db\nseata-mysql.sql \n## 运行镜像\ndocker run -d --restart always  --name  seata-server -p 8091:8091  -v /data/docker/seata/seata-1.3.0:/seata-server -e SEATA_IP=192.168.145.128 -e SEATA_PORT=8091 seataio/seata-server:latest \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('file.conf\n## transaction log store, only used in seata-server\nstore {\n  ## store mode: file、db、redis\n  mode = "db" ## 原来为file\n \n  ## file store property\n  file {\n    ## store location dir\n    dir = "sessionStore"\n    # branch session size , if exceeded first try compress lockkey, still exceeded throws exceptions\n    maxBranchSessionSize = 16384\n    # globe session size , if exceeded throws exceptions\n    maxGlobalSessionSize = 512\n    # file buffer size , if exceeded allocate new buffer\n    fileWriteBufferCacheSize = 16384\n    # when recover batch read size\n    sessionReloadReadSize = 100\n    # async, sync\n    flushDiskMode = async\n  }\n\n  ## database store property\n  db {\n    ## the implement of javax.sql.DataSource, such as DruidDataSource(druid)/BasicDataSource(dbcp)/HikariDataSource(hikari) etc.\n    datasource = "druid"\n    ## mysql/oracle/postgresql/h2/oceanbase etc.\n    dbType = "mysql"\n    driverClassName = "com.mysql.jdbc.Driver"\n    ## 因为设置为db，所以需要选择数据库，这里设置数据库及密码，seata是需要创建的，默认的表是通过脚本运行得到的\n    url = "jdbc:mysql://192.168.1.23:3306/seata"\n    user = "root"\n    password = "123456"\n    minConn = 5\n    maxConn = 30\n    globalTable = "global_table"\n    branchTable = "branch_table"\n    lockTable = "lock_table"\n    queryLimit = 100\n    maxWait = 5000\n  }\n\n  ## redis store property\n  redis {\n    host = "127.0.0.1"\n    port = "6379"\n    password = ""\n    database = "0"\n    minConn = 1\n    maxConn = 10\n    queryLimit = 100\n  } \n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('registry {\n  # file 、nacos 、eureka、redis、zk、consul、etcd3、sofa\n  ## 我们这里使用nacos作为注册中心，所以需要设置type为nacos并设置nacos的属性\n  type = "nacos"\n  nacos {\n    application = "seata-server"\n    serverAddr = "192.168.1.23:8848"\n    group = "SEATA_GROUP"\n    ## 这里的namespace是你nacos服务的namespace的data-id，设置那里，到时就会在那个namespace中\n    namespace = "a1493ff3-a94b-4f76-91af-7999fabff7d5"\n    cluster = "default"\n    username = "nacos"\n    password = "nacos"\n  }\n}\n\nconfig {\n  # file、nacos 、apollo、zk、consul、etcd3\n  type = "file"\n\n  file {\n    name = "file.conf"\n  }\n} \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-- -------------------------------- The script used when storeMode is 'db' --------------------------------\n-- the table to store GlobalSession data\nCREATE TABLE IF NOT EXISTS `global_table`\n(\n    `xid`                       VARCHAR(128) NOT NULL,\n    `transaction_id`            BIGINT,\n    `status`                    TINYINT      NOT NULL,\n    `application_id`            VARCHAR(32),\n    `transaction_service_group` VARCHAR(32),\n    `transaction_name`          VARCHAR(128),\n    `timeout`                   INT,\n    `begin_time`                BIGINT,\n    `application_data`          VARCHAR(2000),\n    `gmt_create`                DATETIME,\n    `gmt_modified`              DATETIME,\n    PRIMARY KEY (`xid`),\n    KEY `idx_gmt_modified_status` (`gmt_modified`, `status`),\n    KEY `idx_transaction_id` (`transaction_id`)\n) ENGINE = InnoDB\n  DEFAULT CHARSET = utf8;\n\n-- the table to store BranchSession data\nCREATE TABLE IF NOT EXISTS `branch_table`\n(\n    `branch_id`         BIGINT       NOT NULL,\n    `xid`               VARCHAR(128) NOT NULL,\n    `transaction_id`    BIGINT,\n    `resource_group_id` VARCHAR(32),\n    `resource_id`       VARCHAR(256),\n    `branch_type`       VARCHAR(8),\n    `status`            TINYINT,\n    `client_id`         VARCHAR(64),\n    `application_data`  VARCHAR(2000),\n    `gmt_create`        DATETIME(6),\n    `gmt_modified`      DATETIME(6),\n    PRIMARY KEY (`branch_id`),\n    KEY `idx_xid` (`xid`)\n) ENGINE = InnoDB\n  DEFAULT CHARSET = utf8;\n\n-- the table to store lock data\nCREATE TABLE IF NOT EXISTS `lock_table`\n(\n    `row_key`        VARCHAR(128) NOT NULL,\n    `xid`            VARCHAR(96),\n    `transaction_id` BIGINT,\n    `branch_id`      BIGINT       NOT NULL,\n    `resource_id`    VARCHAR(256),\n    `table_name`     VARCHAR(32),\n    `pk`             VARCHAR(36),\n    `gmt_create`     DATETIME,\n    `gmt_modified`   DATETIME,\n    PRIMARY KEY (`row_key`),\n    KEY `idx_branch_id` (`branch_id`)\n) ENGINE = InnoDB\n  DEFAULT CHARSET = utf8;\n  -- for AT mode you must to init this sql for you business database. the seata server not need it.\nCREATE TABLE IF NOT EXISTS `undo_log`\n(\n    `id`            BIGINT(20)   NOT NULL AUTO_INCREMENT COMMENT 'increment id',\n    `branch_id`     BIGINT(20)   NOT NULL COMMENT 'branch transaction id',\n    `xid`           VARCHAR(100) NOT NULL COMMENT 'global transaction id',\n    `context`       VARCHAR(128) NOT NULL COMMENT 'undo_log context,such as serialization',\n    `rollback_info` LONGBLOB     NOT NULL COMMENT 'rollback info',\n    `log_status`    INT(11)      NOT NULL COMMENT '0:normal status,1:defense status',\n    `log_created`   DATETIME     NOT NULL COMMENT 'create datetime',\n    `log_modified`  DATETIME     NOT NULL COMMENT 'modify datetime',\n    PRIMARY KEY (`id`),\n    UNIQUE KEY `ux_undo_log` (`xid`, `branch_id`)\n) ENGINE = InnoDB\n  AUTO_INCREMENT = 1\n  DEFAULT CHARSET = utf8 COMMENT ='AT transaction mode undo table';\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br")])])])}),[],!1,null,null,null);n.default=r.exports}}]);