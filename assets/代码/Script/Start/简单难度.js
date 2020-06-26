// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        buttonSound: {
            default: null,
            url: cc.AudioClip
        }
    },


   

    // use this for initialization
    onLoad: function () {
        cc.audioEngine.play(this.buttonSound);
    
    },

    startGame: function () {
        
       
        
        cc.audioEngine.play(this.buttonSound);
        // 转场
        cc.director.loadScene('easygame');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
