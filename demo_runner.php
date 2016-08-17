<!DOCTYPE html>
<!--suppress JSUnresolvedVariable -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Demo of EventKeyManager v 0.2 </title>
    <script src="event.key.manager_0.2.js" type="application/javascript"></script>
    <link rel="stylesheet" href="http://dom.loc/jslibs/grid.css">
    <style>
        #page{
            width: 800px;
            height: 400px;
            margin: 0 auto;
            border: 3px solid #898989;
            outline: 2px solid #4a4a4a;
        }
        #ball{
            width: 30px;
            height: 30px;
            border-radius: 15px;
            background-color: #92f292;
            position: relative;
        }

    </style>

</head>
<body>
    <h5>EventKeyManager</h5>

    <div id="page">

        <div id="ball" style="left:400px;top:200px;"></div>

    </div>


    <script>
    /**
     * @param {{isNumeric:function,isType:function}} Util
     */

    "use strict";

    var page = document.getElementById('page');

    var ball = {
        elem: document.getElementById('ball'),
        color: '#92F292',
        radius: 15,
        speed: 2,
        x: 0,
        y: 0
    };

    var runner = function (event, id) {

        if (id === 'left') {
            ball.elem.style.left = (parseInt(ball.elem.style.left) - ball.speed) + 'px';
        }
        if (id === 'right') {
            ball.elem.style.left = (parseInt(ball.elem.style.left) + ball.speed) + 'px';
        }
        if (id === 'up') {
            ball.elem.style.top = (parseInt(ball.elem.style.top) - ball.speed) + 'px';
        }
        if (id === 'down') {
            ball.elem.style.top = (parseInt(ball.elem.style.top) + ball.speed) + 'px';
        }
    };

    var pressEvent = new EventKeyManager('keydown');

    pressEvent.add('left', 65, runner);
    pressEvent.add('right', 68, runner);
    pressEvent.add('up', 87, runner);
    pressEvent.add('down', 83, runner);


</script>
</body>
</html>