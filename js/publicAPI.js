const publicAPi = {
    'translation' : [
        {
            'title' : 'CloudFlare',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://translate.cloudflare.jaxing.cc/?text=On%20October%2031,%202013,%20Google%20officially%20announced%20the%20launch%20of%20a%20new%20flagship%20phone,%20the%20Nexus%205,%20which%20is%20equipped%20with%20the%20company%27s%20latest%20operating%20system,%20KitKat%20Android.%20This%20operating%20system%20is%20also%20designed%20for%20global%20users.%20Google%20aims%20to%20use%20this%20series%20of%20measures%20to%20curb%20the%20fragmentation%20of%20the%20global%20smartphone%20market%20caused%20by%20different%20versions%20of%20software.&source_lang=en&target_lang=zh',
        //     request parameters : text , source_lang , target_lang
            'description' : 'CloudFlare AI 翻译'
        },
        {
            'title' : 'Netease Translation',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://v.api.aa1.cn/api/api-fanyi-yd/index.php?msg=%E6%88%91%E7%88%B1%E4%BD%A0&type=3',
            //     request parameters : msg . type : 1.CN-EN 2.EN-CN 3.AUTO
            'description' : '网易有道翻译'
        },
        {
            'title' : 'Translation',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://api.52vmy.cn/api/query/fanyi?msg=hello&type=text',
            //     request parameters : msg , type : default : json option : text
            'description' : '自主翻译'
        },
        {
            'title' : 'Google Translation',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://findmyip.net/api/translate.php?text=Iloveyoumybaby',
            //     request parameters : text
            'description' : 'Google 翻译'
        },
    ],
    'everyday' : [
        {
            'title' : '历史上的今天',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://v2.api-m.com/api/history',
            'description' : '历史上的今天'
        },
        {
            'title' : '每日一言',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://api.yunmge.com/api/aword',
            'description' : '每日一言'
        },
        {
            'title' : 'ZhiHu News',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://v.api.aa1.cn/api/zhihu-news/index.php?aa1=xiarou',
            'description' : '知乎每日新闻'
        },{
            'title' : '全国本地新闻',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://v.api.aa1.cn/api/api-tplist/go.php/api/News/local_news?name=陕西省_汉中市&page=0',
            //     request parameters : name : 省_市 , page
            'description' : '获取全国本地新闻'
        },{
            'title' : '每日新闻快讯独家版',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://zj.v.api.aa1.cn/api/60s/',
            'description' : '60s新闻快讯'
        },{
            'title' : '每日新闻-带天气',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://www.apii.cn/api/60s-v5/?city=西乡',
            // request parameters : city
            'description' : '每日新闻 + 天气'
        },{
            'title' : 'b站今日更新',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://api.lolimi.cn/API/B_Update_Days/?num=5',
            // request parameters : 1.num : 默认1条 2.type : 默认json可选text 3.from : 默认返回所有可选：1-国漫/2-日漫/3-按照更新时间新到旧排序(国漫日漫)/4-返回请求时间数据/其他所有从旧到新排序(国漫日漫) 4.time : 如果from为4则必填/格式：12:00
            'description' : 'b站今日更新动漫'
        },
        {
            'title' : '早晚安图',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://api.lolimi.cn/API/image-zw/',
            'description' : '随机生成一张早晚安图片'
        },
        {
            'title' : '今日节气',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://api.shwgij.com/api/lunar/lunar.php?date=20240101',
            'description' : '获取指定日期的节气信息'
        }
    ],
    'random' : [
        {
            'title' : '随机古诗词',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://oiapi.net/API/Sentences',
            'description' : '随机一句古诗词',
        },
        {
            'title' : '随机密码',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://v.api.aa1.cn/api/api-mima/mima.php?msg=10',
            // request parameters : 1.msg : 密码长度
            'description' : '随机生成一个密码',
        },
        {
            'title' : '随机动漫原图',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://v.api.aa1.cn/api/api-pctu1/index.php?aa1=yuantu',
            // request parameters : 1.aa1 : yuantu 输出原图 2.url 返回图片url 3.json 返回json数据
            'description' : '随机生成一张动漫原图',
        },
        {
            'title' : '随机4k风景图',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://v.api.aa1.cn/api/api-fj-1/index.php?aa1=yuantu',
            // request parameters : 1.aa1 : yuantu 输出原图 2.url 返回图片url 3.json 返回json数据
            'description' : '随机生成一张4k风景原图',
        },
        {
            'title' : '随机网易云热评',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://zj.v.api.aa1.cn/api/wenan-wy/?type=json',
            'description' : '随机一句网易云热评',
        },
        {
            'title' : '随机手机壁纸',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://api.wer.plus/api/mowal',
            'description' : '随机生成一张手机壁纸',
        },
        {
            'title' : '随机生成一张电脑壁纸',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://api.wer.plus/api/pcwal',
            'description' : '随机生成电脑壁纸',
        },
        {
            'title' : '懒洋洋翻唱',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'http://api.treason.cn/API/nan.php',
            'description' : '随机生成一首懒洋洋翻唱',
        }
    ],
    'infoCheck' : [
        {
            'title' : 'ip查询',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' :  'https://app.ipdatacloud.com/v2/free_query?ip=110.242.68.66',
            // 'requestParameters' : 'ip',
            'description' : '查询ip地址信息',
        },
        {
            'title' : '身份证信息查询',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://zj.v.api.aa1.cn/api/sfz/?sfz=210105202103102811',
        //     request parameters : 1.sfz : 身份证号码
            'description' : '查询身份证信息',
        },
        {
            'title' : 'QQ信息查询',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
        'url' : 'http://api.52hyjs.com/api/level?qq=419437697',
            // request parameters : 1.qq : qq号码
            'description' : '查询QQ等级',
        }
    ],
    'searchImage' : [
        {
            'title' : '360搜图',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://api.52vmy.cn/api/img/360?msg=时代少年团',
            // request parameters : 1.msg : 你要搜的图片
            'description' : '360搜图',
        },
        {
            'title' : '搜狗搜图',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://api.52vmy.cn/api/img/sogo?msg=时代少年团',
            // request parameters : 1.msg : 你要搜的图片
            'description' : '搜狗搜图',
        },
        {
            'title' : '百度搜图',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://api.52vmy.cn/api/img/baidu?msg=时代少年团',
            // request parameters : 1.msg : 你要搜的图片
            'description' : '百度搜图',
        },
    ],
    'weather' : [
        {
            'title' : '实时天气',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'https://www.qypan.cn/api/tq.php',
            'description' : '显示当前地区实时天气',
        },
        {

        }
    ],
    'ai' : [
        {
           'title' : 'Bing AI',
            'img' : 'https://api.aa1.cn/assets/img/favicon.png',
            'url' : 'http://ovoa.cc/api/Bing.php?msg=你好?&model=down&type=json',
            // request parameters : 1.msg : 查询信息 2.model : 模型 3.type : 返回类型
            'description' : 'Bing AI',
        }
    ]
}
for (let i = 0 ; i < publicAPi.translation.length ; i++) {
    const li = document.createElement('li')
    li.innerHTML = "<div style='text-align: center;'>"+"<a href='" + publicAPi.translation[i].url + "' target='_blank'><img src='" + publicAPi.translation[i].img + "' alt='" + publicAPi.translation[i].title + "'><h3>" + publicAPi.translation[i].title + "</h3><br><p>" + publicAPi.translation[i].description + "</p></a>\n" + "</div><br>";
    document.getElementById('text').appendChild(li)

}
for (let i = 0 ; i < publicAPi.everyday.length ; i++) {
    const li = document.createElement('li')
    li.innerHTML = "<div style='text-align: center;'>"+"<a href='" + publicAPi.everyday[i].url + "' target='_blank'><img src='" + publicAPi.everyday[i].img + "' alt='" + publicAPi.everyday[i].title + "'><h3>" + publicAPi.everyday[i].title + "</h3><br><p>" + publicAPi.everyday[i].description + "</p></a>\n" + "</div><br>";
    document.getElementById('every').appendChild(li)
}
for (let i = 0 ; i < publicAPi.random.length ; i++) {
    const li = document.createElement('li')
    li.innerHTML = "<div style='text-align: center;'>"+"<a href='" + publicAPi.random[i].url + "' target='_blank'><img src='" + publicAPi.random[i].img + "' alt='" + publicAPi.random[i].title + "'><h3>" + publicAPi.random[i].title + "</h3><br><p>" + publicAPi.random[i].description + "</p></a>\n" + "</div><br>";
    document.getElementById('random').appendChild(li)
}
for (let i = 0 ; i < publicAPi.infoCheck.length ; i++) {
    const li = document.createElement('li')
    li.innerHTML = "<div style='text-align: center;'>"+"<a href='" + publicAPi.infoCheck[i].url + "' target='_blank'><img src='" + publicAPi.infoCheck[i].img + "' alt='" + publicAPi.infoCheck[i].title + "'><h3>" + publicAPi.infoCheck[i].title + "</h3><br><p>" + publicAPi.infoCheck[i].description + "</p></a>\n" + "</div><br>";
    document.getElementById('info').appendChild(li)
}



