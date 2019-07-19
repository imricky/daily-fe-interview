
//方法1：
function validateIDCard(val){
  var reg=/^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|(10|20|30|31))\d{3}[0-9Xx]$/;
   return reg.test(val);
}


var result = validateIDCard(a)
console.log(result)

var reg = /^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|(10|20|30|31))\d{3}[0-9Xx]$/;






var reg = /^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|(10|20|30|31))\d{3}[0-9Xx]$)/;


//检测省份码
function checkProvice(val)
{
    var patten=/^[1-9][0-9]/;
    if(patten.test(val))
    {
        var prov={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",51:"四川",52:"贵州",53:"云南",54:"西藏",50:"重庆",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",81:"香港",82:"澳门",83:"台湾"};
        if(prov[val])
        {
            return true;
        };
    }


   return false;
}


//检测出生日期
function checkBirthDay(val)
{
    var patten=/^(19|20)\d{2}((0[1-9])|1[0-2])(([0-2][1-9])|(10|20|30|31))/;
    if(patten.test(val))
    {
        var year=val.substring(0,4);
        var month=val.substring(4,6);
        var day=val.substring(6,8);
         
        var date=new Date(year+"-"+month+"-"+day);
        if(date&&date.getMonth()==(parseInt(month)-1))
        {
            return true;
        }
 
    }
    return false;
}

//检测校验码
function checkVerifyCode(val)
{
    var patten=/^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|(10|20|30|31))\d{3}[0-9X]$/;
    var ratio=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
    var codeArr=[1,0,"X",9,8,7,6,5,4,3,2];
    var code=val.substring(17);
    if(patten.test(val))
    {
        var sum=0;
        for(var i=0;i<17;i++)
        {
            sum+=val[i]*ratio[i];
        }
        console.log(sum)
        var remainder=sum%11;
        if(codeArr[remainder]==code)
        {
            return true;
        }
    }
    return false;
}

function checkIndetityCardNo(val){
    var province=val.substring(0,2);
    if(checkProvice(province))
    {
         var date=val.substring(6,14);
         if(checkBirthDay(date))
         { 
             return checkVerifyCode(val);
         }
    }
    return false;
}
