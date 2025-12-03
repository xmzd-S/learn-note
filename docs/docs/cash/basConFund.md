## zy参与机构录入（保存）

 接口 post: /basConFund/addSave

### 请求体

```JSON
{
  "data": {
    "agencyCode": "1", //虚拟单位编码
    "uwCode": "2", // 参与机构编码
    "uwName": "3",  // 参与机构全称
    "traAcctNo": "4", // 交易商账号
    "uwHeadName": "5", //参与机构简称
    "bankType": "1",  // 参与机构类型
    "isEnabled": "1",  // 是否启用
    "bankAccName": "6",  // 收款账户名称
    "paymentAcctNo": "7", // 收款账户账号
    "paymentAcctBankName": "8",  // 收款账户开户银行
    "contactName": "15132037699",
    "contactTel": "15132037699",
    "contactName1": "",
    "contactTel1": "",
    "contactName2": "",
    "contactTel2": "",
    "attachmentId": "",
    "0参与机构基础信息": "",
    "1账户信息": "",
    "2其他信息": "",
    "3上传附件": "",
    "fileList": []
  },
  "menuId": "DAC91C2A4B444DBF93550A1A0C235A26",
  "menuName": "定期存款参与机构信息录入",
  "processDefKey": "cashorgmng",
  "actionType": 1,
  "actionName": "新增",
  "params": {
    "wfstatus": "已录入"
  }
}
```

### 实体类



```java
@Getter
@Setter
@TableName("BAS_CON_FUND")
public class BasConFundDO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String cenConFundId; // CommonUtil.generateId()

    private String fiscalYear; 	// RequestHeader

    private String mofDivCode;	// RequestHeader

    private String mofDivName;	// RequestHeader

    private String uwId;   // 等于cenConFundId

    private String uwName;  // RequestBody

    private String uwCode;  // RequestBody

    private String traAcctNo; // RequestBody

    private String bankAccName;  // RequestBody

    private String paymentAcctNo; // RequestBody

    private String paymentAcctBankName; // RequestBody

    private String larAmoPayBankNo;  // 等于uwCode

    private String contactName;  // RequestBody

    private String contactTel; // RequestBody

    private String isModify;   // 程序赋值2

    private String unifsocCredCode; // null

    private String trCaMaOpeAgTyCode; // PAY_CASHMNG_UWTYPE 国库现金管理操作机构类型表code为1的定期存款机构的code

    private String trCaMaOpeAgTyName;// PAY_CASHMNG_UWTYPE 国库现金管理操作机构类型表code为1的定期存款机构的name

    private String parentId;  // null

    private Short levelNo; //	1

    private Short isLeaf;	// 1

    private Short isLastInst; // 2 

    private Date startDate;  // 2999-01-01

    private Date endDate; // 2999-01-01

    private Short isEnabled;  // RequestBody

    private Date updateTime; // CommonUtil.getNowDate()

    private Short isDeleted;  // 2

    private Date createTime; // CommonUtil.getNowDate()

    private String bizKey; // 等于cenConFundId

    private String attachmentId; // RequestBody

    private String realPayeeId;	// null

    private String oldConFundId; // null 

    private String lastUser;   // RequestHeader  userId

    private String wfStatus; // RequestBody params.wfstatus

    private String trCaMaOpeAgTyId; //PAY_CASHMNG_UWTYPE 国库现金管理操作机构类型表code为1的定期存款机构的name

    private String uwShortName; // 等于uwName 

    private String bankType;  // // RequestBody 

    private String bankTypeName;  // null

    private String agencyId; // 匹配平台要素agency后取的id

    private String agencyCode; // RequestBody  

    private String agencyName; // 匹配平台要素agency后取的name

    private String dataStatus;  // 2 

    private String isApplyChange;  // null

    private String alterInfo; // null

    private String uwHeadName;  // RequestBody  

    private String uwHeadBankCode; // 根据uwHeadName 模糊匹配UW_HEAD_BANK要素后取code

    private String larAmoPayBankNoCode;  // 等于uwCode

    private String larAmoPayBankNoName; // 等于uwName

    private String contactTel1;// RequestBody  

    private String contactTel2;// RequestBody  

    private String contactName1;// RequestBody  

    private String contactName2;// RequestBody  

    private String contactTel3;// RequestBody  

    private String contactName3;// RequestBody  
}

```

## zy参与机构导入

POST  /basConFund/upload

```json
[
	{
		"errinfo":"",
		"agencyCode":"1", // 虚拟单位编码   
		"uwCode":"2",  // 参与机构编码(银行联行号)   
		"uwName":"3",// 参与机构全称         
		"traAcctNo":"4",// 参与机构交易商账号
		"bankAccName":"5",  // 收款账户名称  
		"paymentAcctNo":"6",   // 收款账户账号      
		"paymentAcctBankName":"7",  //收款账户开户银行    
		"uwHeadName":"8" // 参与机构简称        
		"bankType":"9",  // 参与机构类型
		"contactName":"10",  // 联系人1
		"contactTel":"11",   // 联系电话1
		"contactName1":"12",  // 联系人2
		"contactTel1":"13", //联系电话2
		"contactName2":"14",  // 联系人3
		"contactTel2":"15",  // 联系电话3
	}
]
```



```java
@Getter
@Setter
@TableName("BAS_CON_FUND")
public class BasConFundDO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String cenConFundId; // CommonUtil.generateId()

    private String fiscalYear; 	// RequestHeader

    private String mofDivCode;	// RequestHeader

    private String mofDivName;	// RequestHeader

    private String uwId;   // 等于cenConFundId

    private String uwName;  // RequestBody

    private String uwCode;  // RequestBody

    private String traAcctNo; // RequestBody

    private String bankAccName;  // RequestBody

    private String paymentAcctNo; // RequestBody

    private String paymentAcctBankName; // RequestBody

    private String larAmoPayBankNo;  // 等于uwCode

    private String contactName;  // RequestBody

    private String contactTel; // RequestBody

    private String isModify;   // 程序赋值2

    private String unifsocCredCode; // null

    private String trCaMaOpeAgTyCode; // PAY_CASHMNG_UWTYPE 国库现金管理操作机构类型表code为1的定期存款机构的code

    private String trCaMaOpeAgTyName;// PAY_CASHMNG_UWTYPE 国库现金管理操作机构类型表code为1的定期存款机构的name

    private String parentId;  // null

    private Short levelNo; //	1

    private Short isLeaf;	// 1

    private Short isLastInst; // 2 

    private Date startDate;  // 2999-01-01

    private Date endDate; // 2999-01-01

    private Short isEnabled;  // (和录入不一样，赋值了1而不是从请求体中)

    private Date updateTime; // CommonUtil.getNowDate()

    private Short isDeleted;  // 2

    private Date createTime; // CommonUtil.getNowDate()

    private String bizKey; // 等于cenConFundId

    private String attachmentId; // null

    private String realPayeeId;	// null

    private String oldConFundId; // null 

    private String lastUser;   // RequestHeader  userId

    private String wfStatus; // RequestBody params.wfstatus

    private String trCaMaOpeAgTyId; //PAY_CASHMNG_UWTYPE 国库现金管理操作机构类型表code为1的定期存款机构的name

    private String uwShortName; // 等于uwName

    private String bankType;  // // RequestBody   -> 这里录入的名称，所以需要转换为编码

    private String bankTypeName;  // null

    private String agencyId; // 匹配平台要素agency后取的id

    private String agencyCode; // RequestBody  

    private String agencyName; // 匹配平台要素agency后取的name

    private String dataStatus;  // 2 

    private String isApplyChange;  // null

    private String alterInfo; // null

    private String uwHeadName;  // RequestBody  

    private String uwHeadBankCode; // 根据uwHeadName 模糊匹配UW_HEAD_BANK要素后取code

    private String larAmoPayBankNoCode;  // 等于uwCode

    private String larAmoPayBankNoName; // 等于uwName

    private String contactTel1;// RequestBody  

    private String contactTel2;// RequestBody  

    private String contactName1;// RequestBody  

    private String contactName2;// RequestBody  

    private String contactTel3;// RequestBody  

    private String contactName3;// RequestBody  
}

```

