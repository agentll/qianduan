

function ajax(method,url,isAsync,success){
 // 创建 ajax 对象
 var oAjax = new XMLHttpRequest();
 // 配置 ajax 信息（发送 http 请求的方法，url 接口地址，是否异步）
 oAjax.open(method,url,isAsync);
 // 发送请求
 oAjax.send();
 // 监听 ajax 状态
 oAjax.onreadystatechange = function(){
   if(oAjax.readyState == 4 && oAjax.status == 200){
     // 处理数据
     var res = JSON.parse(oAjax.responseText);
     if(typeof success == "function"){
       success(res);
     }
   }
 }
}
