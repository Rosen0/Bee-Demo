cc.Class({
    extends: cc.Component,

    properties: {
        touchAudio: {
            default: null,
            url: cc.AudioClip
        }
        
     },
     playtouchSound: function () {
        // 调用声音引擎播放声音
        
        cc.audioEngine.playEffect(this.touchAudio, false);
    },

    // pauseMusic: function() {
    //     cc.audioEngine.pauseMusic();
    // },
    // playButton: function() {
    //     this._playSFX(this.buttonAudio);
    // },
    // onLoad: function () {
    //     // 初始化键盘输入监听
    //     this.setInputControl();
    // },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});