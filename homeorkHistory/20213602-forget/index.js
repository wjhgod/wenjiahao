    //定义全局变量
	var Model = {} ;

	var mediaData = {
		videoPath : "d:/media/mp4Files/" ,
		videoFiles : ["v02004040000bpa9p3egncoejcefuv4g", "v02004090000brsni7sd1drb1sobjjl0", "v020040a0000bqvdpsl7gl1ko381hedg", "v020040c0000bti2etclja68ljgh9o30", "v02004140000bojvtckr08m3ineu8o90", "v02004170000bnabtdr6j2ql9flksu30", "v020041a0000bq8kab5p06vufte9gk5g", "v020041e0000bnabvqom4ciq1tkrpgu0", "v02004220000bnk9nkgm4cioajs247ig", "v02004250000bmnsaj9dli3rj0fo4v7g", "v020042c0000bqa0eeij2bouk4hiuitg", "v020042f0000bsbsuceg08joaideip6g", "v02004390000bjus27g697atl8skbmng", "v02004440000bsv7mdjlvmvitaj7f9g0", "v02004470000bphs39o697ap32u4ktgg", "v020044f0000bru9bgjc86dmn38v38s0", "v02004590000br6kb6k81ukk6s5n7n00", "v020045a0000bmqgqpdds13crlsmbibg", "v02004710000brm74cvibktq7tfr4m70", "v02004770000bn6keiaepr1cf84pn8m0", "v02004770000bpkqbkk1n3e10rmkd9og", "v02004810000bpblkkq7u0r5d52f8td0", "v02004830000bsbb9p2r56qcebd05v6g", "v02004910000bkemdd27u0r2cv3gvnq0", "v02004930000bpchrbs1n3e6vfb91j5g", "v020049f0000brm73vtjfrmhhdfcu62g", "v02004a40000bproefir863oaub47slg", "v02004a40000bproicl7gl1h25fgjoeg", "v02004a50000bpmepbubn5v2f7sn39og", "v02004a80000bn2mnkonrm1ii1qe45bg", "v02004ac0000bt20l8lo827ubql9vlt0", "v02004b40000bnac1ktjfrmsnk5rbis0", "v02004b40000bo039k481ukr122vand0", "v02004b70000bqud520697aqhcmfabr0", "v02004b70000bqud654qs4skvnoev5k0", "v02004c40000bnk9mra0ifkspps8uu80", "v02004c50000bpmejdm4tqbt4g4qiis0", "v02004c70000boqg8q7eqk81somj37fg", "v02004d00000bmt55akd1dr6lo7cgo40", "v02004d90000bjam8rg7q8i1sd06mda0", "v02004e10000blqa44o858lv6e4b9kpg", "v02004e20000bpmegl6vld7bj4d1qdug", "v02004ed0000bkbdi5aikatv305g7900", "v02004f40000bpgcqf51mikbqkhojceg", "v02004f50000bo4unvc1n3e1folem2r0", "v02004f50000bs6m8l0ar5621po9otig", "v02004g10000c5rrhhrc77u1fhfj73lg", "v02004g10000c5rrikbc77u4rdiknfog", "v02004g10000c5rt0erc77ud097i9ka0", "v02004g10000c5sagp3c77uek0luucag", "v02004g10000c5saktjc77u8lgv86de0", "v02004g10000c5sbrurc77ubkoc49260", "v02004g10000c5sgd13c77u7jlevn55g", "v02004g10000c62f0njc77u4tq54oqog", "v02004g10000c62uptrc77u43f69kg8g", "v02004g10000c62uuljc77u0gu6e3kvg", "v02004g10000c62uv03c77u9fhlj12gg", "v02004g10000c62v3brc77ue7t1llv50", "v02004g10000c62vdgrc77u5gmkj5s50", "v02004g10000c62vefbc77u27fie94j0", "v02004g10000c62vh53c77u7s0g8bpeg", "v02004g10000c62vhdjc77ucs4ub13h0", "v02004g10000c62vhrbc77uaqj1qbmbg", "v02004g10000c62vkvjc77u6s0801teg", "v02004g10000c62vl6bc77udn5psmn3g", "v02004g10000c62vm0bc77u1cuqnk8e0", "v02004g10000c62vmp3c77u9oiijo690", "v02004g10000c62vnfbc77ub99epl7dg", "v02004g10000c62vo2rc77u1nrn8lgbg", "v02004g10000c62vojjc77ucbokpae40", "v02004g10000c62vpf3c77u7or2pecqg", "v02004g10000c62vrhrc77uckgmm92p0", "v02004g10000c62vsljc77u9oiijujh0", "v02004g10000c630ls3c77ub8bf0brp0", "v02004g10000c630rfjc77u2pkcl6kr0", "v02004g10000c630sa3c77ufpliulk40", "v02004g10000c630slrc77ubsack6ncg", "v02004g10000c630srrc77ubsack6tqg", "v02004g10000c6317h3c77ub99eqonu0", "v02004g10000c631tsbc77u6etsudo2g", "v02004g10000c6321ajc77u6etsuhf10", "v02004g10000c648i43c77u2u7qb50e0", "v02004g10000c648jabc77ubsadrmmdg", "v02004g10000c64983jc77u0j3v5vfeg", "v02004g10000c649rcrc77u6pkh35ft0", "v02004g10000c64beprc77u7ulu7u3l0", "v02004g10000c64bf53c77u43f7mrha0", "v02004g10000c64bfk3c77u96irv78b0", "v02004g10000c64c3h3c77u74i8i5390", "v02004g10000c64ceb3c77u27fjs0tg0", "v02004g10000c64dvk3c77u40bkavjm0", "v02004g10000c64e1fjc77u1mcul10t0", "v02004g10000c64e1o3c77u0k67o8fo0", "v02004g10000c64e29bc77u08to73glg", "v02004g10000c64ebnjc77u0u6tin2s0", "v02004g10000c64ecsjc77u0fsou1200", "v02004g10000c64ed3rc77u7g8l1iqug", "v02004g10000c64eejbc77u0u6tiqfdg", "v02004g10000c64em4bc77u6s09gdvcg", "v02004g10000c64emfjc77udflk91trg", "v02004g10000c65id1bc77u0u6unbvug", "v02004g10000cdoj7ijc77u0q6r7n770", "v0201ag10000caikc13c77udap1dkdb0", "v030041b0000bti2edngvt0hel3lsi4g", "v03004330000bthktosocj9e1v35br7g", "v03004350000bt20q1ugoh6r1clid6pg", "v03004460000bka2l6v298s08t0hphhg", "v03004640000bkpuvncif32jk9ngddig", "v03004680000bt20mqnosmd9g3h47s5g", "v03004680000bt20mqnosmd9g3h47s6g", "v03004840000bsu95l75v4d5074lsmbg", "v03004910000bthl32n0l8p81ftmoggg", "v03004ac0000blvk5nlm8tc7dcuu06ag", "v03004bc0000bsvn9t4ev9gkf10h1880", "v03004d00000bthlir3l6nk41dnmaog0", "v03004d60000bt20j7df254l6aff4t6g", "v03004d70000bthlcn7758ubifbbdbl0", "v03004f50000bk9dkvqbr0fl17dvm6rg"] ,
		audioPath : "d:/media/mp3Files/" ,
		audioFiles : ["cs1.mp3","cs2.mp3","cs7.mp3","linuxCMD-0.mp3","linuxCMD-1.mp3","linuxCMD-2.mp3","linuxCMD-3.mp3","linuxCMD-4.mp3","linuxCMD-5.mp3","linuxCMD-6.mp3"] ,		
	} ;

	 //Model.videoFiles = 
     //Model.audioFiles = ;
	Model.i = 0;
	Model.videoLength = mediaData.videoFiles.length ;
	Model.audioLength = mediaData.audioFiles.length ;
	
    Model.getVideoURL = function(){ 
	   //let path = 
	   return mediaData.videoPath + mediaData.videoFiles[Model.i] ; 
     console.log(Model.i);
	 };
	  Model.getAudioURL = function(){
	   //let path =  ;
	   return mediaData.audioPath + mediaData.audioFiles[Model.i] ;
	 };

     
	  Model.isVideo = true ;
	 
    Model.UI ={} ;
    Model.UI.stageDom = document.getElementById("stage");
	  Model.UI.videoDom = document.getElementById("video");
    Model.UI.audioDom = document.getElementById("audio");
    Model.UI.preDom = document.getElementById("pre");
    Model.UI.playDom = document.getElementById("play");
    Model.UI.stopDom = document.getElementById("stop");
    Model.UI.nextDom = document.getElementById("next");
    Model.UI.logoDom = document.getElementById("logo");
    Model.UI.timeDom = document.getElementById("currentTime");
    Model.UI.switchDom = document.getElementById("switch");
	
	Model.UI.videoDom.src = Model.getVideoURL();
	// 第七次作业更新任务1— — — —全屏播放视频
   // 1.1定义windowWidth,将文档浏览器的宽度赋值给它
  Model.windowWidth = document.body.clientWidth;    
   // 1.2再将windowWidth赋值给视频的宽度，达成全屏播放视频的效果
  Model.UI.stageDom.style.width  = Model.windowWidth + 'px';
  Model.UI.videoDom.style.width  = Model.windowWidth + 'px';
  Model.UI.stageDom.style.height = Model.UI.videoDom.clientHeight +  100 + 'px' ;

	// 第七次作业更新任务2— — — —logo设置
    // 2.2logo内容填充
  
// 定义模型中showCurrentVideoUI方法，用来在页面上输出当前视频编号
	  
  Model.showCurrentVideoUI = function(i) {
        Model.UI.logoDom.textContent = "NO." + (i + 1) + "/" + mediaData.videoFiles.length;
    }

  Model.showCurrentVideoUI(0);  // 2.3初始化 i=0

    // 第七次作业更新任务3— — — —实时视频时间
    window.setInterval(function () {
		let progressContent ;
    if(Model.isVideo){
      progressContent = parseInt(Model.UI.videoDom.currentTime) + " s " +
	  "/" + parseInt(Model.UI.videoDom.duration) + " s " ;
    }else{
      progressContent = parseInt(Model.UI.audioDom.currentTime) + " s " +
      "/" + parseInt(Model.UI.audioDom.duration) + " s " ;
    }
    
    Model.UI.timeDom.textContent = progressContent ;
    }, 1000); //1000ms执行一次。 
   
     //定义播放按钮
    Model.UI.playDom.onclick = function () {
        Model.UI.videoDom.play();
    };
    //定义暂停按钮
    Model.UI.stopDom.onclick = function () {
        Model.UI.videoDom.pause();
    };
    //定义 上一个 按钮
    Model.UI.preDom.onclick = function () {
		let i = Model.i ;
        if (i == 0) {
            i = Model.videoLength - 1;
        }
        else {
            i--;
        } 
        Model.showCurrentVideoUI(i); 
        Model.i = i ;
        Model.UI.videoDom.src = Model.getVideoURL() ;
        Model.UI.videoDom.play();
    
    }
   
    //定义 下一个 按钮
    Model.UI.nextDom.onclick = function () {
		let i = Model.i ;
        if (i == Model.videoLength - 1) {
            i = 0;
        }
        else {
            i++;
        } 
        Model.showCurrentVideoUI(i);
		    Model.i = i ;
        Model.UI.videoDom.src = Model.getVideoURL();
        Model.UI.videoDom.play();  
    } ;

	Model.UI.switchDom.onclick = function(){
	  if (Model.isVideo){
	   Model.UI.switchDom.value = "ToAudio" ; 
       //Model.shutDownVideo() ;	
       Model.UI.videoDom.pause();   
	  }else{
	   Model.UI.switchDom.value = "ToVideo" ;
       //Model.turnOnVideo() ; 
       Model.UI.videoDom.play();
	  }
	   Model.isVideo = !  Model.isVideo ;
    
	};
  
 /*  Model.shutDownVideo = function(){
    Model.UI.videoDom.style.display = "none" ;
  } ;
  Model.turnOnVideo = function(){
    Model.UI.videoDom.style.display = "" ;
  } ;
 */