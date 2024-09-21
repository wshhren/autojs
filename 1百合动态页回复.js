const Y1 = device.height;  // 屏幕高度
const X1 = device.width;   // 屏幕宽度
const FILE_PATH = "/sdcard/Pictures/1.txt";  // 文件路径
const SLEEP_TIME = random(666,1333)   // 睡眠时间
const SLIDE_DURATION = 500; // 滑动持续时间
var savedNickname = files.read("/sdcard/Pictures/1.txt");

// 
let myapp = {
    every: "100",
    taskNum: "1",
    m4: "𝗤𝗤𝟮𝟯𝟬𝟲𝟰𝟰𝟳𝟴𝟲𝟲"
};

let 相似页 = id("bh_square_dynamic_details_title").text("动态详情");
let 发送 = id("comment_panel_send").text("发送");

while (true) {
    sleep(55);
    if (相似页.exists()) {
        sleep(155);
        let D1 = 相似页.findOne().bounds().bottom; // 评论页卡片底部坐标

        let nicknameViews = id("viewholder_comments_nickname")
            .boundsInside(1, D1, X1 * 0.6, Y1 * 0.95).find();

        if (nicknameViews.length === 0) {
            toast("没有找到昵称组件");
            swipe(X1 * 0.5, Y1 * 0.25, X1 * 0.5, Y1 * 0.8, SLIDE_DURATION);
            continue; // 如果没有找到，跳过本次循环
        }

        let allReplied = true; // 标志变量，初始设为 true

        nicknameViews.forEach(replyToNickname);

        if (allReplied) {
            toast("所有昵称均已回复过，执行滑动操作");
            swipe(X1 * 0.5, Y1 * 0.25, X1 * 0.5, Y1 * 0.8, SLIDE_DURATION);
            sleep(2555);
        }
    }
}

function replyToNickname(nicknameView) {
    let nicknameText = nicknameView.text();
    let fileContent = files.read(FILE_PATH);

    if (!fileContent.includes(nicknameText)) {
        let parentView = nicknameView.parent();
        if (parentView) {
            let replyView = parentView.findOne(id("viewholder_comments_reply").text("回复"));
            if (replyView) {
               
                replyView.click();
                sleep(SLEEP_TIME);
                setText(myapp.m4);
                sleep(SLEEP_TIME);
                点击(发送);
                toastLog("发送了" + myapp.taskNum++ + "个用户")
                sleep(SLEEP_TIME);
                files.append(FILE_PATH, "\"" + nicknameText + "\",\n");
            } else {
                log("未找到回复按钮");
            }
        } else {
            log("未找到父组件");
        }
    } else {
        
    }
}

function 点击(bbb) {
    if (bbb.exists()) {
        bbb.findOne().click();
        sleep(random(900, 1500));
    }
}
