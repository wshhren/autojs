var Y1 = device.height;  //Y1屏幕高度
var X1 = device.width;   //X1屏幕宽度
var myapp = {}           //全局变量
myapp.every = "100"    // if (myapp.taskNum % myapp.every == 0) {
myapp.taskNum = "1"
myapp.taskNum1 = "1"
myapp.AABB = "laoer"
// myapp.m2 = "帮我暖暖被窝吧 睡不着"
// myapp.m3 = "第二句"
myapp.m4 = "𝗤𝗤𝟮𝟯𝟬𝟲𝟰𝟰𝟳𝟴𝟲𝟲"
myapp.m5 = "𝚀第二句1"
myapp.m6 = "第二句2"
myapp.qq = "𝚀"
var 相似页 = id("bh_square_dynamic_details_title").text("动态详情")
var 发送 = id("comment_panel_send").text("发送")
var 图片 = id("comment_panel_img_layout")
var 相册 = id("bhf_common_dialog_btn1")
var 选择 = id("check_view")
var 完成 = id("btnDone")
var 回复 = id("viewholder_comments_reply").text("回复")
var 文件 = "/sdcard/Pictures/1.txt";

// 检查文件是否存在
if (!files.exists(文件)) {
    // 如果文件不存在，则创建一个空文件
    files.create(文件);
    toast("启动成功记录文件已创建: " + 文件);
} else {
    toast("启动成功记录文件已存在: " + 文件);
}


home()
sleep(1111)
点击(text("百合婚恋"))
sleep(1111)
while (true) {
    点击(id("tv_try_again").text("点击重试"))
    sleep(222)
    if (相似页.exists()) {
        sleep(155)
        var D1 = 相似页.findOne().bounds().bottom //评论页卡片底部坐标
        var filePath = "/sdcard/Pictures/1.txt";

        // 读取1.txt的内容
        var fileContent = files.read(filePath);

        // 遍历屏幕上所有昵称
        var nicknameViews = id("viewholder_comments_nickname").boundsInside(1, D1, X1 * 0.6, Y1 * 0.95).find();
        var allReplied = true; // 标志变量，初始设为 true

        // 遍历所有昵称组件
        nicknameViews.forEach(function (nicknameView) {
            var nicknameText = nicknameView.text();

            // 检查昵称是否已经存在于1.txt
            if (!fileContent.includes(nicknameText)) {
                allReplied = false; // 如果有未回复的昵称，设置标志为 false

                // 找到与当前昵称相对应的父组件
                var parentView = nicknameView.parent();

                if (parentView) { // 确保 parentView 不为 null
                    var replyView = parentView.findOne(id("viewholder_comments_reply").text("回复"));

                    if (replyView) {

                        replyView.click()
                        sleep(555)
                        setText(myapp.m4)
                        sleep(555)
                        点击(发送)
                        sleep(555)
                        toastLog("发送了" + myapp.taskNum1++ + "个用户")
                        // 将昵称追加到1.txt中，防止下次重复
                        files.append(filePath, "\"" + nicknameText + "\",\n");
                    } else {
                        toast("未找到回复按钮");
                    }
                } else {
                    // toast("未找到父组件");
                }
            } else {

            }
        });

        // 如果所有昵称都已回复过，执行滑动操作
        if (allReplied) {
            toast("所有昵称均已回复过，执行滑动操作");
            // 执行滑动操作，例如：
            swipe(X1 * 0.5, Y1 * 0.25, X1 * 0.5, Y1 * 0.8, 500)
            sleep(3355)
        }

    }
}



function 中心点击(aaa) {
    if (aaa.exists()) {
        var AAA = aaa.findOne(1000)
        var xx1 = AAA.bounds().centerX() //获取name组件的上方坐标
        var yy1 = AAA.bounds().centerY()  //获取name组件的下方坐标
        click(xx1, yy1)
        sleep(random(900, 1500))
    }
}


function 点击(bbb) {

    if (bbb.exists()) {
        bbb.findOne().click()
        sleep(random(900, 1500))
    }
}

