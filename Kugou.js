/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
酷狗
脚本名称:酷狗
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************/
[rewrite_local]
^http[s]?:\/\/gateway.kugou.com\/mobile\/vipinfoV2&code=6CD6CC814DA3F20219DB3D9AA005EA8B954078A151043C1A4F16528893F650E85630DD57E638700460D82EB30CFD18BDAF47EE94F279D52856BE188DCE7EF40B2E3D27AD7E29EB37A0F63E1D8588336033DE36C6B256214141C8795F08FA090202191FB5FFAEED6738BE85AD3BAF08BE7972E3E3DA31BC0A1BA388E43EE118C5DFF89C0EC25020FC435BB81040DEF4A12A6321406DD6EF56F54B16D58FBA2CF0ACD0E1D5F27AD8D777721ED440C383A278BC17F0FD3C64BBBC6D343241C75C60E8C50A088531D72E2963127BF74CEBEAC03A74E40DAE6E5C8A2099EE5C40D5C7A44A09CBBD8F291DE3AE6CEAB609FD17AE50AA60BE7F88FDCC5220411033AD0E4FD54AA22EC234EBBB73C1876E577C1E7D4413B88456066321A18BF09A85AF3A0CDB1329FACA5954D0AB8D7B309938785B4F50AE62ECD6D993604970BCB05F454D95324D00C3EF64F2BB1611BA12AFEBEB77C87F0A7F4B42EB1CCA156FAACBA195B728ACD9BB2D45.+$ url script-response-body https://raw.githubusercontent.com/DCubedSigma/Sigma/main/Kugou.js
[mitm] 
hostname = *.kugou.*

Surge

[Script]
^http[s]?:\/\/gateway.kugou.com\/mobile\/vipinfoV2&code=6CD6CC814DA3F20219DB3D9AA005EA8B954078A151043C1A4F16528893F650E85630DD57E638700460D82EB30CFD18BDAF47EE94F279D52856BE188DCE7EF40B2E3D27AD7E29EB37A0F63E1D8588336033DE36C6B256214141C8795F08FA090202191FB5FFAEED6738BE85AD3BAF08BE7972E3E3DA31BC0A1BA388E43EE118C5DFF89C0EC25020FC435BB81040DEF4A12A6321406DD6EF56F54B16D58FBA2CF0ACD0E1D5F27AD8D777721ED440C383A278BC17F0FD3C64BBBC6D343241C75C60E8C50A088531D72E2963127BF74CEBEAC03A74E40DAE6E5C8A2099EE5C40D5C7A44A09CBBD8F291DE3AE6CEAB609FD17AE50AA60BE7F88FDCC5220411033AD0E4FD54AA22EC234EBBB73C1876E577C1E7D4413B88456066321A18BF09A85AF3A0CDB1329FACA5954D0AB8D7B309938785B4F50AE62ECD6D993604970BCB05F454D95324D00C3EF64F2BB1611BA12AFEBEB77C87F0A7F4B42EB1CCA156FAACBA195B728ACD9BB2D45.+$ requires-body=1,max-size=0,script-path=kugou.js
er
[MITM]
hostname = *.kugou.*


var obj = JSON.parse($response.body);
    obj.user_type=  1;
obj.user_y_type=  1;
obj.is_vip=  1;
obj.vip_type=  1;
obj.svip_score=  1;
obj.svip_level=  1;
obj.annual_begin_time= 09";
obj.annual_begin_time= 09";
obj.su_vip_end_time= 09";
obj.vip_end_time= 09";
obj.roam_type=  1;
obj.roam_end_time= 36";
obj.m_y_endtime= 36";
obj.vip_y_endtime= 36";
obj.m_type=  1;
obj.m_is_old=  1;
obj.su_vip_y_endtime= 36";
obj.roam_begin_time= 36";
obj.y_type=  1;
obj.signed_svip_before=  1;
obj.end_time= 36";
obj.duration=  873616277659;
obj.p_grade=  20;
obj.p_current_point=  873616277659;
obj.p_next_grade=  20;
obj.m_reset_time= 36";
obj.vip_clearday= 36";
obj.su_vip_clearday= 36";
obj.vip_list= 36";
obj.m_end_time= 09";
    $done({body: JSON.stringify(obj)});
