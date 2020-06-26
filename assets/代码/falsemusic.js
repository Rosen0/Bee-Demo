cc.Class({
    extends: cc.Component,

    properties: {
        bgAudio:{
            default:null,
            url:cc.AudioClip
        }
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        //cc.audioEngine.setMusicVolume(0.2);
         cc.audioEngine.playMusic(this.bgAudio,false);
     },

    start () {

    },

    // update (dt) {},
});
