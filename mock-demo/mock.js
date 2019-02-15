$(function(){
        /*Mock.mock('http://g.cn','get',{
            "news|6": [
                {   
                    "ctitle": "@ctitle"
                } ,
            ]
        });*/
        Mock.mock('/test','get',function(){
        	return {
        		'city':Mock.mock('@city'),
        		'num':Mock.mock('@increment(100)')
        	}
        });
        var newsList = $('#news_list');
        $.ajax({
            url: "/test",
            type:'get',
            dataType: "json"
        }).done(function(data, status, xhr){
        	console.log(data)
            // console.log(JSON.stringify(data, null, 4));
            /*for(let i = 0; i < data.news.length; i++){
                var news = data.news[i];
                newsList.append(`
                <li class='list-group-item'> <a href=''>
                    <h4>  ${news.ctitle} </h4>
                    </a>
                </li>`);
            }*/
        });
    });

/*
function() {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            title:Mock.Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Mock.Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Mock.Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Mock.Random.date() + ' ' + Mock.Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
 
    return {
        articles: articles
    }
}*/