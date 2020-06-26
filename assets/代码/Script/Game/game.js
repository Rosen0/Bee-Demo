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
        bulletPrefab:cc.Prefab,
        bulletSpawnDuration: 0,
        heroNode:cc.Node,
        enemyNode:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         this.canvas =cc.find('Canvas');
         this.bulletPool = new cc.NodePool('bulletPool');
         this.enemybulletPool = new cc.NodePool('enemybulletPool');
         this.shotBullet();
         var manager = cc.director.getCollisionManager();
         manager.enable = true;
     },
     //获取子弹
     getBullet(){
        if(this.bulletPool.size >0){
            return this.bulletPool.get();
        }else{
            let bullet =cc.instantiate(this.bulletPrefab);
            this.bulletPool.put(bullet);
            return bullet;
        };
    },

    //发射子弹
    shotBullet(){
        this.schedule(()=>{
            let bullet =this.getBullet();
            this.canvas.addChild(bullet);
            bullet.setPosition(this.enemyNode.x,this.enemyNode.y+10);
            let bulletScript = bullet.getComponent('bullet');
            bulletScript.bulletPlay(this.bulletPool,this.bulletSpawnDuration);
        },this.bulletSpawnDuration);
    },
    // update (dt) {},
});
