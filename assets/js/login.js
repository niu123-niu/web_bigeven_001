$(function(){
    $("#regbox").on("click",function(){
        $(".login-box").hide()
        $(".reg-box").show()
    })
    $("#loginbox").on("click",function(){
        $(".login-box").show()
        $(".reg-box").hide()
    })
    var form=layui.form
    var layui=layui.layui
   form.verify({
    pwd: [
        /^[\S]{6,12}$/
        ,'密码必须6到12位，且不能出现空格'
      ], 
      repwd:function(vale){
          var pwd=$(".reg-box[name=password]").val()
          if(pwd!==0){
              return "两次输入不一样"
          }
          console.log("成功");
      }
   })
   $("#form-reg").on("submit",function(e){
    e.preventDefault()
    $.ajax({
        method:"POST",
        url:"http://ajax.frontend.itheima.net/api/reguser",
        data:{
           username: $("#form-reg[name=username]").val(),
           passworld:$("#form-reg[name=password]").val()
        },
        success:function(res){
            if(res.status!==0){
                return layui.msg(res.message)
            }
            layui.msg("成功")
        }
    })
   })
   $(".login-box").on("click",function(e){
       e.preventDefault()
       $.ajax({
           method:"POST",
           url:"/api/login",
           data:$(this).serialize(),
           success:function(res){
               if(res.status!==0){
                   return layui.msg(res.message)
               }
               layui.msg("恭喜你,登录成功")
               localStorage.setItem.token
               location.href="/index.html"
           }
       })
   })
})
   
