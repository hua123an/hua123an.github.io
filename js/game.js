//  search in current page
$(".searchButton").click(function () {
    // 1.获取输入框的值
    var searchValue = $(".input-text").val();
    console.log(searchValue)
//     获取所有的title信息，title的信息来自a标签的文本信息
    var titleList = $(".title");
    // 3.遍历titleList，获取每一个title的文本信息
    for (var i = 0; i < titleList.length; i++) {
        var title = titleList[i].innerText;
        //     判断搜索框的信息是否能匹配到title的信息，能匹配则定位该元素的位置，然后滚动到该元素位置,忽略大小写
        if (title.toLowerCase().indexOf(searchValue.toLowerCase()) != -1) {
            titleList[i].scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
            break;
        }
    }
})
/*
 gameList
* @param {
"title" : String,
"titleLink" : String,
"img" : String(source address)
"description" : String(introduce the game)
}
*
* */
const gameList = [
    {
        "title" : "Aaron’s Quest IV: While Moses Was Away",
        "titleLink" : "https://dashingstrike.itch.io/while-moses-was-away",
        "img" : "https://img.itch.zone/aW1nLzg3MTczMjcucG5n/original/wqh%2BiK.png",
        "description" : "这游戏玩儿起来满足感十足，玩家可以自行添加很多东西进去，比如新的升级体系、地图、游戏模式等等。"
    },
    {
        "title" : " IT’S TOO RAW!",
        "titleLink" : "https://maximeeuziere.itch.io/its-too-raw",
        "img" : "https://img.itch.zone/aW1nLzg3NTc5ODIuanBn/347x500/C9AqHQ.jpg",
        "description" : "非常有趣的一款游戏！虽然游戏类型很常见，但是却有很多创新的元素。大体上就是要把一条鱼煎到恰到好处。"
    },
    {
        "title" : "raw mode",
        "titleLink" : "https://caiofov.itch.io/raw-mode",
        "img" : "https://img.itch.zone/aW1hZ2UvMTUwMjI0MS84NzcyNjc3LnBuZw==/347x500/eJDJuO.png",
        "description" : "这款游戏的机制既独特又引人入胜。可供玩家探索的部分非常多。"
    },
    {
        "title" : "Golem Caves",
        "titleLink" : "https://svntax.itch.io/golem-caves",
        "img" : "https://img.itch.zone/aW1hZ2UvMTUwMzIyOS84NzYyODM0LnBuZw==/347x500/fmN56M.png",
        "description" : "这款游戏也非常有意思。不过，锄头挥得再快一点就好了，现在开山辟路也太慢了。"
    },
    {
        "title" : "UNRAWIFY",
        "titleLink" : "https://stiggstogg.itch.io/unrawify",
        "img" : "https://itch.io/static/images/enlarge.svg?1698028781",
        "description" : "这款游戏最大的特点就是——玩儿的越多，加入的元素就越多！有点像早先风靡一时的进化之地~"
    },
    {
        "title" : " Super Simple Salad Simulator",
        "titleLink" : "https://stas.itch.io/super-simple-salad-simulator",
        "img" : "https://img.itch.zone/aW1hZ2UvMTUwMzAwNS84NzY0MDk1LnBuZw==/347x500/7%2BD22e.png",
        "description" : "类似于弹跳球的游戏。"
    },
    {
        "title" : "Chez RAW",
        "titleLink" : "https://epicramen3d.itch.io/chez-raw",
        "img" : "https://img.itch.zone/aW1hZ2UvMTUwMjk5MS84NzYzODkzLmdpZg==/347x500/dQrBTC.gif",
        "description" : "小精灵也太可爱了！甚至要干掉的小猪仔也很可爱，呜呜，都不忍心下手。"
    },
    {
        "title" : "Sushi Dou",
        "titleLink" : "https://sureno.itch.io/sushi-dou",
        "img" : "https://img.itch.zone/aW1nLzg3NjMyMTQucG5n/347x500/lU5bwK.png",
        "description" : "非常可爱的一款游戏！没读指南之前基本是搞不懂怎么操作的，所以有份指南是很必要的。"
    },
    {
        "title" : "Rock to forget",
        "titleLink" : "https://horncn.itch.io/rock-to-forget",
        "img" : "https://img.itch.zone/aW1nLzg3MTczMjcucG5n/original/wqh%2BiK.png",
        "description" : "很不错的一款唱歌游戏！如果玩家能把里面的歌曲翻唱了就更好玩了！但是难度不小，期待未来有更多的更新内容。"
    },
    {
        "title" : "RunAWay",
        "titleLink" : "https://pi64.itch.io/runaway",
        "img" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJ9JREFUeNq01ssOwyAMRFG46v//Mt1ESmgh+DFmE2GPOBARKb2NVjo+17PXLD8a1+pl5+A+wSgFygymWYHBb0FtsKhJDdZlncG2IzJ4ayoMDv20wTmSMzClEgbWYNTAkQ0Z+OJ+A/eWnAaR9+oxCF4Os0H8htsMUp+pwcgBBiMNnAwF8GqIgL2hAzaGFFgZauDPKABmowZ4GL369/0rwACp2yA/ttmvsQAAAABJRU5ErkJggg==",
        "description" : "机制虽然延续很多经典游戏的模式，但是不得不说，动画效果和人物设计真的非常可爱。"
    },
    {
        "title" : " R.A.W. Ball",
        "titleLink" : "https://invasion.itch.io/raw-ball",
        "img" : "https://img.itch.zone/aW1hZ2UvMTUwMjg4Mi84NzYxMjg2LnBuZw==/347x500/76HDA6.png",
        "description" : "如此简约的画风你爱了吗"
    },
    {
        "title" : "RAWS: a Raw Ascii Web Shooter",
        "titleLink" : "https://freddd.itch.io/raws",
        "img" : "https://img.itch.zone/aW1nLzg3NjIxODUucG5n/347x500/6cKmYu.png",
        "description" : "一点奇思妙想、一点无与伦比的创造力，再加上说干就干的动手能力，就可以啦。"
    }


]
for (var i = 0 ; i < gameList.length ; i++){
    var li = document.createElement("li");
    li.innerHTML = "<center><img src='" + gameList[i].img + "' alt=''><br><a href='" + gameList[i].titleLink + "' , target='_blank' class='title'>" + gameList[i].title + "<p>" + gameList[i].description + "</p></a></center>"
    document.getElementById("gameList").appendChild(li)

}