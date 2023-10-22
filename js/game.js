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
                block: "center",

            })
            break;
        }
    }
})
const gameList = [
    {
        "title" : "Aaron’s Quest IV: While Moses Was Away",
        "titleLink" : "https://dashingstrike.itch.io/while-moses-was-away",
        "img" : "https://img.itch.zone/aW1nLzg3MTczMjcucG5n/original/wqh%2BiK.png",
        "description" : "这游戏玩儿起来满足感十足，玩家可以自行添加很多东西进去，比如新的升级体系、地图、游戏模式等等。有玩家就自行加入了时间关卡——在规定的时间内取得目标物品。"
    },
]
for (var i = 0 ; i < gameList.length ; i++){
    var li = document.createElement("li");
    li.innerHTML = "<center><img src='" + gameList[i].img + "' alt=''><a href='" + gameList[i].titleLink + "' , target='_blank' class='title'>" + gameList[i].title + "<p>" + gameList[i].description + "</p></a></center>"
    document.getElementById("gameList").appendChild(li)

}