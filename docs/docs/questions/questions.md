这里记录的是工作中曾经遇到的问题



## 创建一个可以跳过SSL校验的RestTemplate

创建一个不验证 SSL 证书有效性和主机名有效性的 HTTP 客户端，用于访问：

- 使用自签名证书的 HTTPS 站点
- 证书已过期的站点
- 开发/测试环境的 HTTPS 服务

```java
    public static CloseableHttpClient createSSLInsecureClient() {
        try {
            SSLContext sslContext = (new SSLContextBuilder()).loadTrustMaterial(new TrustStrategy() {
                @Override
                public boolean isTrusted(X509Certificate[] chain, String authType) throws CertificateException {
                    return true;
                }
            }).build();
            SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(sslContext, new HostnameVerifier() {
                public boolean verify(String hostname, SSLSession session) {
                    return true;
                }
            });
            return HttpClients.custom().setSSLSocketFactory(sslsf).build();
        } catch (GeneralSecurityException var2) {
            throw new RuntimeException(var2);
        }
    }
```



创建一个Restemplate Bean

```java
@Bean
@LoadBalanced
public RestTemplate getRestTemplate(){
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getMessageConverters().remove(5);
        restTemplate.getMessageConverters().add(new FastJsonHttpMessageConverter());
        restTemplate.getMessageConverters().add(0, new StringHttpMessageConverter(Charset.forName("UTF-8")));    
        HttpComponentsClientHttpRequestFactory clientHttpRequestFactory = new HttpComponentsClientHttpRequestFactory(){
            @Override
            protected HttpUriRequest createHttpUriRequest(HttpMethod httpMethod, URI uri) {
                return super.createHttpUriRequest(httpMethod, uri);
            }
        };
        clientHttpRequestFactory.setHttpClient(createSSLInsecureClient());
        clientHttpRequestFactory.setConnectTimeout(5000);
        clientHttpRequestFactory.setReadTimeout(600000);
        clientHttpRequestFactory.setConnectionRequestTimeout(3000);
        restTemplate.setRequestFactory(clientHttpRequestFactory);  
        restTemplate.setInterceptors(Collections.singletonList(new ClientHttpRequestInterceptor() {
            @Override
            public ClientHttpResponse intercept(HttpRequest request, byte[] body, ClientHttpRequestExecution clientHttpRequestExecution) throws IOException {
                
            }
        }));    
		return restTemplate;    
}
```

1. 消息转换器配置

- **移除第5个转换器**：删除默认的消息转换器列表中的第6个（索引从0开始）
- **添加 FastJson 转换器**：集成阿里巴巴的 FastJson 库用于 JSON 序列化/反序列化
- **添加字符串转换器**：在首位添加 UTF-8 编码的字符串转换器，确保字符串处理使用正确的编码

2. 自定义请求工厂

- **自定义 DELETE 请求**：重写方法以支持自定义的 `HttpDeleteRequest`实现
- **扩展功能**：可能是为了在 DELETE 请求中添加特殊逻辑或头信息

3. SSL安全配置

- **忽略 SSL 证书验证**：`createSSLInsecureClient()`方法通常会创建一个跳过 SSL 证书验证的 HTTP 客户端

4. 超时时间配置

- **连接超时**：建立 TCP 连接的最大等待时间
- **读取超时**：从服务器读取数据的最大等待时间（设置为10分钟，说明有长时间运行的任务）
- **连接池等待超时**：从连接池获取连接的最大等待时间

## 一个controller写多个接口

```
@PostMapping(value = {"/test1","/test2"})
```







## 带下划线的请求头被nginx忽略了

nginx配置文件中添加

```
http {
    # 允许请求头中出现下划线
    underscores_in_headers on;
    
    server {
        listen 80;
        server_name example.com;
        
        # 也可以在server级别设置
        underscores_in_headers on;
        
        location / {
            # 或者在location级别设置
            underscores_in_headers on;
            
            # 其他配置...
        }
    }
}
```

