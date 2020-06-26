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
        LeftenemybulletPrefab:cc.Prefab,
        LeftenemybulletSpawnDuration:0,
        bulletPrefab:cc.Prefab,
        bulletSpawnDuration: 0,
        heroNode:cc.Node,
        enemyNode:cc.Node,
        Leftenemy:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         this.canvas =cc.find('Canvas');
         this.bulletPool = new cc.NodePool('bulletPool');
         this.LeftenemybulletPool = new cc.NodePool('LeftenemybulletPool');
         this.shotbullet();
         this.shotLeftenemybullet();
         var manager = cc.director.getCollisionManager();
         manager.enable = true;
     },
     //获取子弹
     getbullet(){
        if(this.bulletPool.size >0){
            return this.bulletPool.get();
        }else{
            let bullet =cc.instantiate(this.bulletPrefab);
            this.bulletPool.put(bullet);
            return bullet;
        };
    },
    //发射子弹
    shotbullet(){
        this.schedule(()=>{
            let bullet =this.getbullet();
            this.canvas.addChild(bullet);
            bullet.setPosition(this.enemyNode.x,this.enemyNode.y+10);
            let bulletScript = bullet.getComponent('bullet');
            bulletScript.bulletPlay(this.bulletPool,this.bulletSpawnDuration);
        },this.bulletSpawnDuration);
    },
    //获取子弹
    getLeftenemybullet(){
        if(this.LeftenemybulletPool.size >0){
            return this.LeftenemybulletPool.get();
        }else{
            let Leftenemybullet =cc.instantiate(this.LeftenemybulletPrefab);
            this.LeftenemybulletPool.put(Leftenemybullet);
            return Leftenemybullet;
        };
    },
    //发射子弹
    shotLeftenemybullet(){
        this.schedule(()=>{
            let Leftenemybullet =this.getLeftenemybullet();
            this.canvas.addChild(Leftenemybullet);
            Leftenemybullet.setPosition(this.Leftenemy.x,this.Leftenemy.y+10);
            let LeftenemybulletScript = Leftenemybullet.getComponent('Leftenemybullet');
            LeftenemybulletScript.LeftenemybulletPlay(this.LeftenemybulletPool,this.LeftenemybulletSpawnDuration);
        },this.LeftenemybulletSpawnDuration);
    },
    // update (dt) {},
});