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
        speed :100,  
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        this.time=0;
        this.updateRun = false;
    },
    LeftenemybulletPlay(LeftenemybulletPool,LeftenemybulletSpawnDuration){
        this.LeftenemybulletPool = LeftenemybulletPool;
        this.LeftenemybulletSpawnDuration =LeftenemybulletSpawnDuration;
        this.updateRun = true ;
    },
    onBeginContact(contact,self,other)
    {
        switch(other.tag){
            
            case 3:
            
            other.node.destroy();
            cc.director.loadScene('Over');
            switch(self.tag)
            {
                case 0:
                this.node.destroy();

            }
        }
    },
// called every frame, uncomment this function to activate update callback
    update(dt) {
      this.time +=dt*1.5;
      if(this.updateRun){
          if(this.time >=this.LeftenemybulletSpawnDuration){
              let visivleSize = cc.director.getVisibleSize();
            this.node.x +=this.speed*dt;
              if(this.node.y >=visivleSize.height /2){
                  this.LeftenemybulletPool.put(this.node);
              };
              this.time = 0;
          };
      };
   },
});