<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    
    <script src="event.key.manager.js" type="application/javascript"></script>
    <script src="http://dom.loc/ns.app/src/applibrary/util.js" type="application/javascript"></script>
    
</head>
<body>
    
    <h1>Demo of EventKeyManager JS</h1>
    
    <h2>Press any key</h2>
    <h3 id="display"></h3>
    
    
    <h2>Properties and methods</h2>
<pre>
EventKeyManager.lastCharCode
EventKeyManager.listEvents
EventKeyManager.listDisable

EventKeyManager.init()
EventKeyManager.listen()
EventKeyManager.add()
EventKeyManager.getById()
EventKeyManager.getAllByKeyCode()
EventKeyManager.charToCode()
EventKeyManager.codeToChart()
EventKeyManager.remove()
EventKeyManager.enable()
EventKeyManager.disable()
EventKeyManager.isDisable()
EventKeyManager.foreachEvent()
</pre>


    <h2>Use arrow, and look on console log</h2>
    
<pre>
EventKeyManager.init();

EventKeyManager.add('esc', 27, function(event){
    console.log('Front \'esc\' >>> ', event);
});
EventKeyManager.add('left', 37, function(event){
    console.log('Front \'left\' >>> ', event);
});
EventKeyManager.add('right', 39, function(event){
    console.log('Front \'right\' >>> ', event);
});
EventKeyManager.add('up', 38, function(event){
    console.log('Front \'up\' >>> ', event);
});
EventKeyManager.add('down', 40, function(event){
    console.log('Front \'down\' >>> ', event);
});

EventKeyManager.disable('up');
EventKeyManager.disable('down');
</pre>
    
    
    
    
    
<script>
    
    var display = document.getElementById('display');
    
    
    EventKeyManager.init();

    EventKeyManager.add('esc', 27, function(event){
        console.log('Front \'esc\' >>> ', event);
    });
    EventKeyManager.add('left', 37, function(event){
        console.log('Front \'left\' >>> ', event);
    });
    EventKeyManager.add('right', 39, function(event){
        console.log('Front \'right\' >>> ', event);
    });
    EventKeyManager.add('up', 38, function(event){
        console.log('Front \'up\' >>> ', event);
    });
    EventKeyManager.add('down', 40, function(event){
        console.log('Front \'down\' >>> ', event);
    });
    
    EventKeyManager.disable('up');
    EventKeyManager.disable('down');
    
    EventKeyManager.listen(function(event){
        var about = "key:" + event.key + " keyCode:" + event.keyCode;        
        display.textContent = about;
    });
    
</script>
</body>
</html>