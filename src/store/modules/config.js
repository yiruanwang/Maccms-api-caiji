/**
 * 全局配置
 */
var strserver = "http://cloud.home.yazhi.tv/index.php"; //"http://yztvapp.duapp.com";
const config = {
    state: {
        cloud: {
            token:"yazhi.tv",
            all: strserver + "/api/maccms/all",
            add: strserver + "/api/maccms/add",
            obtain: strserver + "/api/maccms/obtain", //从云获取
            push: strserver + "/api/maccms/push", //推送到云
        },
        local: {
            url: "http://mac.home.yazhi.tv/admin/yazhicaiji/db.php"
        }

    },
};
export default config;