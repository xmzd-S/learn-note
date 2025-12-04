# mybatis generator

- 配置插件

```xml
    <build>
        <plugins>
            <plugin>
                <groupId>org.mybatis.generator</groupId>
                <artifactId>mybatis-generator-maven-plugin</artifactId>
                <version>1.4.2</version>
                <configuration>
                    <configurationFile>src/main/resources/generatorConfig.xml</configurationFile>
                    <overwrite>true</overwrite>
                    <verbose>true</verbose>
                </configuration>
                <dependencies>
                    <dependency>
                        <groupId>mysql</groupId>
                        <artifactId>mysql-connector-java</artifactId>
                        <version>8.0.33</version>
                    </dependency>
                </dependencies>
            </plugin>
        </plugins>
    </build>
```

- 生成器配置文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration PUBLIC
        "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
        "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">

<generatorConfiguration>
    <context id="DB2Tables" targetRuntime="MyBatis3">
        <jdbcConnection
                driverClass="com.mysql.cj.jdbc.Driver"
                connectionURL="jdbc:mysql://localhost:13306/train_member"
                userId="train_member"
                password="123456!"/>

        <javaModelGenerator targetPackage="com.xmzd.train.member.model"
                            targetProject="../member/src/main/java"/>

        <sqlMapGenerator targetPackage="mapper"
                         targetProject="../member/src/main/resources"/>

        <javaClientGenerator type="XMLMAPPER"
                             targetPackage="com.xmzd.train.member.mapper"
                             targetProject="../member/src/main/java"/>

        <table tableName="member" >
            <property name="useActualColumnNames" value="false"/>
        </table>
    </context>
</generatorConfiguration>
```

‍

- 运行插件
