;var ajaxAPI = null;
;(function($) {
    var ajaxBaseUrl = "";
    function $get(url,params){
        return new Promise(function(res,rej){
            $.ajax({
                url:ajaxBaseUrl+url,
                contentType:'application/x-www-form-urlencoded',
                success:function(data){
                    res(data)
                },
                data:params,
                type:'GET',
                dataType:'json',
                error:function(e){
                    rej(e)
                }
            })
        })
    }

    function $post(url,params){
        return new Promise(function(res,rej){
            $.ajax({
                url:ajaxBaseUrl+url,
                contentType:'application/x-www-form-urlencoded',
                success:function(data){
                    res(data)
                },
                data:params,
                type:'POST',
                dataType:'json',
                error:function(e){
                    rej(e)
                }
            })
        })
    }

    ajaxAPI = {
        get:$get,
        post:$post
    }
})(jQuery)