/**
 * logo界面
 * Created by zhangluxin on 15/9/16.
 */
var LogoScene = cc.Scene.extend({
    companyLogoPath: "res/video/mengcheng.mp4",
    teamLogoPath: "res/video/jianyu.mp4",
    onEnter: function () {
        this._super();
        this.playCompanyLogo();
    },
    playCompanyLogo: function () {
        var companyLogo = new ccui.VideoPlayer(this.companyLogoPath);
        this.addChild(companyLogo);
        companyLogo.setContentSize(ct.size);
        companyLogo.x = ct.width / 2;
        companyLogo.y = ct.height / 2;
        companyLogo.play();
        var change = function () {
            this.playTeamLogo();
            companyLogo.removeFromParent();
        }.bind(this);
        companyLogo.setEventListener(ccui.VideoPlayer.EventType.COMPLETED, change);
    },
    playTeamLogo: function () {
        var teamLogo = new ccui.VideoPlayer(this.teamLogoPath);
        this.addChild(teamLogo);
        teamLogo.setContentSize(ct.size);
        teamLogo.x = ct.width / 2;
        teamLogo.y = ct.height / 2;
        teamLogo.play();
        var change = function () {
            cc.director.runScene(new GameLoadingScene());
        }.bind(this);
        teamLogo.setEventListener(ccui.VideoPlayer.EventType.COMPLETED, change);
    }
});