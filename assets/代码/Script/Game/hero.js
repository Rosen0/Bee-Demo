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
    
    properties:{
      
        
    

    },
    setInputControl: function () {
        var self = this;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event){
            switch(event.keyCode) {
                case cc.KEY.w:
                    self.Upper = true;
                    break;
                case cc.KEY.s:
                    self.Down= true;
                    break;
                case cc.KEY.a:
                    self.Left = true;
                    break;
                case cc.KEY.d:
                    self.Right = true;
                    break;
               case cc.KEY.shift:{
                   self.Slow = true; 
               }
            }
        });
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function (event){
            switch(event.keyCode) {
                case cc.KEY.w:
                    self.Upper = false;
                    break;
                case cc.KEY.s:
                    self.Down= false;
                    break;
                case cc.KEY.a:
                    self.Left = false;
                    break;
                case cc.KEY.d:
                    self.Right = false;
                    break;
                case cc.KEY.shift:
                    self.Slow = false;
                    break;   
            }
        });
    },
    // LIFE-CYCLE CALLBACKS:
onLoad: function () {
    this.visibleSize =cc.director.getVisibleSize();

     // 主角当前水平方向速度
     this.xSpeed = 0;
     this.ySpeed = 0;
     // 初始化键盘输入监听
     this.setInputControl();
},
update:function(dt){
    
        var height=this.visibleSize.height /2;
        var width=this.visibleSize.width /2;
        if(this.Slow){
            this.speed=200;
        }
        else{
            this.speed=400;
        }
         // 根据当前速度方向每帧更新速度
    if (this.Left && this.node.x>-width + this.node.width/2 *this.node.scale) {
            this.xSpeed = -this.speed ;
        } else if (this.Right && this.node.x<width - this.node.width/2 *this.node.scale) {
            this.xSpeed = this.speed ;
        }
        else {
            this.xSpeed = 0;
        }
        if (this.Upper && this.node.y<height - this.node.height/2 *this.node.scale) {
            this.ySpeed = this.speed ;
        } else if (this.Down && this.node.y>-height + this.node.height/2 *this.node.scale) {
            this.ySpeed = -this.speed ;
        }
        else {
            this.ySpeed = 0;
        }
        // 根据当前速度更新主角的位置
        this.node.x += this.xSpeed * dt;
        this.node.y += this.ySpeed * dt;
    },
});
