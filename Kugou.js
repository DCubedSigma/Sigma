/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
酷狗
脚本名称:酷狗
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/gateway.kugou.com.+$ url script-response-body kugou.js
[mitm] 
hostname = *.kugou.*
*******************************
Surge

[Script]
^http[s]?:\/\/gateway.kugou.com.+$ requires-body=1,max-size=0,script-path=kugou.js

[MITM]
hostname = *.kugou.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data.user_type= 1;
obj.data.user_y_type= 1;
obj.data.is_vip= 1;
obj.data.vip_type= 1;
obj.data.vip_type= 1;
obj.data.svip_score= 1;
obj.data.svip_level= 1;
obj.data.annual_fee_begin_time= 09";
obj.data.annual_fee_end_time= 09";
obj.data.su_vip_end_time= 09";
obj.data.vip_end_time= 09";
obj.data.roam_type= 1;
obj.data.roam_end_time= 36";
obj.data.m_y_endtime= 36";
obj.data.vip_y_endtime= 36";
obj.data.m_type= 1;
obj.data.m_is_old= 1;
obj.data.su_vip_y_endtime= 36";
obj.data.roam_begin_time= 36";
obj.data.y_type= 1;
obj.data.signed_svip_before= 1;
obj.data.end_time= 36";
obj.data.duration= 873616277659;
obj.data.p_grade= 20;
obj.data.p_current_point= 873616277659;
obj.data.p_next_grade= 20;
obj.data.m_reset_time= 36",;
obj.data.vip_clearday= 36";
obj.data.h_signed= 36";
obj.data.m_clearday= 36";
obj.data.su_vip_clearday= 36";
obj.data.vip_list= 36";
obj.data.m_end_time= 09";
    $done({body: JSON.stringify(obj)});
