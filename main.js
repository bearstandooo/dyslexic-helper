var str = '<div style="position:fixed;height:100%;width:100%;left:0px;top:0px;opacity: 0.5;"><div style="height:100%;width:100%;position:static;background-color:orange;position: fixed;z-index: 100000;top: 0;left: 0;opacity: .3;pointer-events: none;"></div></div>',
    mainBody = document.getElementsByTagName('body');
var bodyHTML = mainBody.innerHTML;
bodyHTML = bodyHTML + str;
