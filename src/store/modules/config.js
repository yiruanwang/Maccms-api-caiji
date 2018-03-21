/**
 * 全局配置
 */
var strserver = "http://cloud.home.yazhi.tv/index.php"; //"http://yztvapp.duapp.com";
var localserver="http://mac10.home.yazhi.tv/yazhi.php?s="
const config = {
    state: {
        token:"yazhi.tv",
        cloud: {         
            all: strserver + "/api/maccms/all",
            add: strserver + "/api/maccms/add",
            obtain: strserver + "/api/maccms/obtain", //从云获取
            push: strserver + "/api/maccms/push", //推送到云
        },
        local: {
            all: localserver + "/caiji/all",
            id: localserver + "/caiji/idselect",
            add: localserver + "/caiji/add",
            del: localserver + "/caiji/del",
            update: localserver + "/caiji/update",            
        }

    },
};
export default config;