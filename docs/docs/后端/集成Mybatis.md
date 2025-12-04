# 集成Mybatis

- 添加依赖

```xml
        <!-- MyBatis Spring Boot Starter -->
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
            <version>3.0.0</version>
        </dependency>

        <!-- 数据库驱动 (以MySQL为例) -->
        <dependency>
            <groupId>com.mysql</groupId>
            <artifactId>mysql-connector-j</artifactId>
            <scope>runtime</scope>
        </dependency>
```

- 写Mapper接口和XML文件

```java
package com.xmzd.train.member.mapper;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {
    int count();
}
```

‍

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.xmzd.train.member.mapper.MemberMapper">

    <select id="count" resultType="int">
        select count(1) from member
    </select>

</mapper>
```

‍

- 写yml配置文件(数据源，mybatis配置）

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:13306/train_member?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8
    username: train_member
    password: 123456!
    driver-class-name: com.mysql.jdbc.Driver


# MyBatis配置
mybatis:
  mapper-locations: classpath:mapper/*.xml
  configuration:
    map-underscore-to-camel-case: true
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
```

‍

‍

- 创建数据库、用户、表

```sql
CREATE DATABASE train_member;
CREATE USER IF NOT EXISTS 'train_member'@'%' IDENTIFIED BY '123456!';
GRANT ALL PRIVILEGES ON train_member.* TO 'train_member'@'%';
FLUSH PRIVILEGES;


DROP TABLE IF EXISTS `train_member`.`member`;

CREATE TABLE `train_member`.`member` (
    `id` INT NOT NULL COMMENT '主键id',
    `phone` VARCHAR(13) NOT NULL COMMENT '手机号',
    `name` VARCHAR(32) NOT NULL COMMENT '姓名',
     PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='会员表';


INSERT INTO member (id, phone, name) VALUES (1, '13800138000', '张三');
INSERT INTO member (id, phone, name) VALUES (2, '15901590159', '李四');
INSERT INTO member (id, phone, name) VALUES (3, '18618611861', '王五');
INSERT INTO member (id, phone, name) VALUES (4, '13113111311', '赵六');
INSERT INTO member (id, phone, name) VALUES (5, '18818821882', '钱七');
INSERT INTO member (id, phone, name) VALUES (6, '13713731373', '孙八');
INSERT INTO member (id, phone, name) VALUES (7, '13513541354', '周九');
INSERT INTO member (id, phone, name) VALUES (8, '13913951395', '吴十');
INSERT INTO member (id, phone, name) VALUES (9, '15015061506', '郑十一');
INSERT INTO member (id, phone, name) VALUES (10, '18918971897', '王十二');
```
