<?php
//错误提示
error_reporting(0);
//默认时区
date_default_timezone_set("Asia/Shanghai");
//强制编码
header('Content-type:text/html;charset=utf-8');

$get = $_POST;
$yzcj = array();
$yzcj['name'] = $get['name'];
$yzcj['url'] = $get['url'];
$yzcj['urlsetup'] = $get['urlsetup'];
$yzcj['time'] = $get['time'];
$yzcj['content'] = $get['content'];
$yzcj['type'] = $get['type'];
$yzcj['id'] = $get['id'];
$yzcj['page']=$get['page'];

if (empty($yzcj['type'])) {
	header('HTTP/1.1 403 Forbidden');
	exit('403');
}
if ($yzcj['type'] == "select") {
	AllSelectCj();
}
if ($yzcj['type'] == "update") {
	updateCj($yzcj['id'], $yzcj['name'], $yzcj['url'], $yzcj['urlsetup'], $yzcj['time'], $yzcj['content']);
}
if ($yzcj['type'] == "add") {
	addCj($yzcj['name'], $yzcj['url'], $yzcj['urlsetup'], $yzcj['time'], $yzcj['content']);
}
if ($yzcj['type'] == "selectID") {
	IDSelectCj($yzcj['id']);
}
if ($yzcj['type'] == "del") {
	delCj($yzcj['id']);
}
if ($yzcj['type'] == "readupdate") {
	readupdate($yzcj['id']);
}
if($yzcj['type']=="pagelimt"){
	pagelimt($yzcj['page']);
}
/**
 * 分页查询
 * $page=传参page｛页码｝
 */
function pagelimt($page){
$db_name = 'yzcaiji.sqlite';
	$db = new SQLite3($db_name);
	$selectData = array();
	$results = $db -> query("select * from yz_caijitime order by id limit 1 offset 1 * '".$page."'");
	while ($res = $results -> fetchArray(1)) {
		array_push($selectData, $res);
	}
	$json = json_encode($selectData);
	exit($json);
}
/**
 * 添加数据
 */
function addCj($name, $url, $urlsetup, $time, $content) {
	$db_name = 'yzcaiji.sqlite';
	$db = new SQLite3($db_name);
	//    $name="测试添加";
	//    $url="wwwurl";
	//    $urlsetup="wwwurlsetup";
	//    $time="72";
	//    $content="说明";
	$times = "00-00-00 01:01:01";
	$timeint = time();
	$sql = "INSERT INTO yz_caijitime (name,url,urlsetup,time,content,times,timeint) VALUES ('" . $name . "','" . $url . "','" . $urlsetup . "','" . $time . "','" . $content . "','" . $times . "','" . $timeint . "')";
	$ret = $db -> query($sql);
	if ($ret === false) { die();
	} else { echo "okadd";
	}
}

/**
 * 查询全部数据
 */
function AllSelectCj() {
	$db_name = 'yzcaiji.sqlite';
	$db = new SQLite3($db_name);
	$selectData = array();
	$results = $db -> query("select * from yz_caijitime order by timeint desc");
	while ($res = $results -> fetchArray(1)) {
		array_push($selectData, $res);
	}
	$json = json_encode($selectData);
	exit($json);
}

/**
 * 根据ID查询数据
 */
function IDSelectCj($id) {
	$db_name = 'yzcaiji.sqlite';
	$db = new SQLite3($db_name);
	$selectData = array();
	$results = $db -> query("select * from yz_caijitime where id='" . $id . "'");
	while ($res = $results -> fetchArray(1)) {
		array_push($selectData, $res);
	}
	$json = json_encode($selectData);
	exit($json);
}

/**
 * 修改数据
 */
function updateCj($id, $name, $url, $urlsetup, $time, $content) {
	$db_name = 'yzcaiji.sqlite';
	$db = new SQLite3($db_name);
	$sql = "UPDATE yz_caijitime SET name='" . $name . "',url='" . $url . "',urlsetup='" . $urlsetup . "',time='" . $time . "',content='" . $content . "'  WHERE id='" . $id . "'";
	$ret = $db -> query($sql);
	if ($ret === false) { die();
	} else { echo "okupdate";
	}
}

/**
 * 根据ID删除数据
 */
function delCj($id) {
	$db_name = 'yzcaiji.sqlite';
	$db = new SQLite3($db_name);
	$sql = "DELETE FROM yz_caijitime where id='" . $id . "'";
	$ret = $db -> query($sql);
	if ($ret === false) { die();
	} else { echo "okdel";
	}
}

/**
 * 修改采集时间数据
 */
function readupdate($id) {
	$db_name = 'yzcaiji.sqlite';
	$db = new SQLite3($db_name);
	$times = date('y-m-d h:i:s', time());
	$timeint = time();
	$sql = "UPDATE yz_caijitime SET times='" . $times . "',timeint='" . $timeint . "' WHERE id='" . $id . "'";
	$ret = $db -> query($sql);
	if ($ret === false) { die();
	} else { echo "okupdate";
	}
}
