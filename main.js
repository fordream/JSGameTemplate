cc.game.onStart = function () {
    cc.view.enableRetina(false);
    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(ct.width, ct.height, ct.resolutionPolicy);
    cc.view.resizeWithBrowserSize(true);
    //cc.LoaderScene.preload(g_resources, function () {
    //    cc.director.runScene(new view.Logo());
    //}, this);
    cc.director.runScene(new LogoScene());
};
cc.game.run();