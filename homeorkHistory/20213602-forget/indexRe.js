new Vue({
    el:"#app",//vue接管范围
    data:{
        num: " ",
        },
})
var Model = {};        
Model.logoDom = document.getElementById("logo") ;
Model.currentTimeDom=document.getElementById("currentTime") ;
Model.isVideo = 1;

Model.Jud = {};
Model.Jud.bll = true;//判断视频播放状态 

Model.Dom = {};
Model.Dom.play = document.getElementById('play');
Model.Dom.stop = document.getElementById('stop');
Model.Dom.pre = document.getElementById('pre');
Model.Dom.next = document.getElementById('next');
Model.Dom.zhuan = document.getElementById('zhuan');
Model.Dom.switch = document.getElementById('switch');

Model.Vid = {};
Model.Vid.vino = 0;//定义视频
Model.Vid.ns = document.getElementById('nszhuan');//获取输入框内的数
Model.Vid.nowvideo = document.getElementById('video');
Model.Vid.videowith = document.body.clientWidth;//获取页面宽度 
Model.Vid.nowaudio = document.getElementById('audio');
Model.Vid.auno = 0;

function currentVideoUI(i){
    if(Model.isVideo){
        Model.logoDom.textContent = 'NO.' +  (i+1) + '/' + mediaData.videoFiles.length ;
    }
    else{
        Model.logoDom.textContent = 'NO.' +  (i+1) + '/' + mediaData.audioFiles.length ;
    }
} //设置NO数

window.setInterval(function(){
    if(Model.isVideo){
        Model.Vid.nowvideo.style.width = Model.Vid.videowith + 'px';
        currentVideoUI(Model.Vid.vino) ;
        Model.currentTimeDom.textContent = parseInt(Model.Vid.nowvideo.currentTime) + ' s' + '/' + parseInt(Model.Vid.nowvideo.duration) + ' s'
    }
    else{
        Model.Vid.nowvideo.style.width = Model.Vid.videowith + 'px';
        currentVideoUI(Model.Vid.auno) ;
        Model.currentTimeDom.textContent = parseInt(Model.Vid.nowaudio.currentTime) + ' s' + '/' + parseInt(Model.Vid.nowaudio.duration) + ' s'
    }
} , 100 );//每隔100调整视频宽度

function sInt(nsv){
    if(!(Model.Vid.ns.value%1 === 0) || Model.Vid.ns.value == " "){
        Model.Vid.ns.value = " ";
        alert("输入框不能为整数或空格！");
    }//输错变成原本视频数  
    else if(Model.Vid.ns.value != nsv){
        nsv=Model.Vid.ns.value-1;
        console.log('页面数不等于视频数');
        action(nsv);  
    } //证明输入了一个数
    return nsv;
}

function action(i){
    Model.Vid.ns.value = " ";
    console.log(i);
    if(Model.isVideo){
        Model.Vid.nowvideo.src=mediaData.videoPath+mediaData.videoFiles[i];
    }
    else{
        Model.Vid.nowaudio.src=mediaData.audioPath+mediaData.audioFiles[i];
    }
}//改变视频路径

Model.Dom.zhuan.onclick=function(){
    if(Model.isVideo){
        Model.Vid.vino = sInt(Model.Vid.vino);
    }
    else{
        Model.Vid.auno = sInt(Model.Vid.auno)
    }

}//zhuan按钮

Model.Dom.play.onclick=function(){
    if(Model.isVideo){
        action(Model.Vid.vino);
        Model.Vid.nowvideo.play();
    }
    else{
        action(Model.Vid.auno);
        Model.Vid.nowaudio.play();
    }
}//play按钮

Model.Dom.stop.onclick=function(){
    if(Model.isVideo){
        Model.Vid.nowvideo.pause();
    }
    else{
        Model.Vid.nowaudio.pause();
    }
}//stop按钮

Model.Dom.next.onclick=function(){
    if(Model.isVideo){
        if(Model.Vid.vino==mediaData.videoFiles.length-1){
            Model.Vid.vino=0;
        }
        else{
            Model.Vid.vino++;
        }
        action(Model.Vid.vino);
    }
    else{
        if(Model.Vid.auno==mediaData.audioFiles.length-1){
            Model.Vid.auno=0;
        }
        else{
            Model.Vid.auno++;
        }
        action(Model.Vid.auno);
    }
}//next按钮

Model.Dom.pre.onclick=function(){
    if(Model.isVideo){
        if(Model.Vid.vino==0){
            Model.Vid.vino=mediaData.videoFiles.length-1;
        }
        else{
            Model.Vid.vino--;
        }
        action(Model.Vid.vino);
    }
    else{
        if(Model.Vid.auno==0){
            Model.Vid.auno=mediaData.audioFiles.length-1;
        }
        else{
            Model.Vid.auno--;
        }
        action(Model.Vid.auno);
    }
}//pre按钮

Model.Dom.switch.onclick=function(){
    if(Model.isVideo){
        Model.Vid.nowvideo.pause();
        document.getElementById('media').style.display="hidden";
        Model.isVideo = 0;
    }
    else{
        Model.Vid.nowaudio.pause();
        document.getElementById('media').style.display="block";
        Model.isVideo = 1;
    }
}//切换媒体
