cc.Class({
    extends: cc.Component,

    properties: {
        LeftenemybulletPrefab:cc.Prefab,
        LeftenemybulletSpawnDuration:0,
        //bulletPrefab:cc.Prefab,
        //bulletSpawnDuration: 0,
        heroNode:cc.Node,
        enemyNode:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         this.canvas =cc.find('Canvas');
         this.LeftenemybulletPool = new cc.NodePool('LeftenemybulletPool');
         this.shotLeftenemybullet();
         var manager = cc.director.getCollisionManager();
         manager.enable = true;
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
            Leftenemybullet.setPosition(this.enemy.x,this.enemy.y+10);
            let LeftenemybulletScript = Leftenemybullet.getComponent('Leftenemybullet');
            LeftenemybulletScript.LeftenemybulletPlay(this.LeftenemybulletPool,this.LeftenemybulletSpawnDuration);
        },this.LeftenemybulletSpawnDuration);
    },
    // update (dt) {},
});