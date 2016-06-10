<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Demo of EventKeyManager v 0.2 </title>
    
    <script src="event.key.manager_0.2.js" type="application/javascript"></script>
    <script src="http://dom.loc/ns.app/src/applibrary/util.js" type="application/javascript"></script>
    
</head>
<body>

    <h5>EventKeyManager</h5>

    <div id="key_listen"></div>
    
        
    
    
<script>
    var display = document.getElementById('key_listen');

    function handlerEventManager (event){
        display.innerHTML = 'type:' + event.type + ' keyCode: ' +  event.keyCode;
        //console.log('handlerEventManager:', event.type, event.keyCode)
    }

    var upEvent = new EventKeyManager('keyup');

    //upEvent.add('space', 32, handlerEventManager);
    //upEvent.add('enter', 13, handlerEventManager);
    //upEvent.listen(handlerEventManager);















    //var eveKeyDownManager = new EventKeyManager('keydown');
    
    
    //eveKeyUpManager.add('space', 32, function(event){console.log('eveKeyUpManager.add 32:', event)});
    //eveKeyUpManager.add('a', 62, function(event){console.log('eveKeyUpManager.add 32:', event)});
    //eveKeyDownManager.add('space', 32, function(event){console.log('eveKeyDownManager.add 32:', event)});

//EventKeyManager.addEvent('keyup','space', 32, function(event){console.log('EventKeyManager.addListener:', event)});
//EventKeyManager.addEvent('keyup','enter', 13, function(event){console.log('EventKeyManager.addListener:', event)});
//EventKeyManager.addEvent('keyup','a', 65, function(event){console.log('EventKeyManager.addListener:', event)});
//
//EventKeyManager.addEvent('keydown','space', 32, function(event){console.log('EventKeyManager.addListener:', event)});
//EventKeyManager.addEvent('keydown','enter', 13, function(event){console.log('EventKeyManager.addListener:', event)});
//EventKeyManager.addEvent('keydown','a', 65, function(event){console.log('EventKeyManager.addListener:', event)});


//EventKeyManager.removeEvent('keydown','a');

//console.log(EventKeyManager.getEvent('keyup', 'space'));
//console.log(EventKeyManager.getEvent('*', 'space'));
//console.log(EventKeyManager.getEvent('*'));

//EventKeyManager.addListener('keyup');
//EventKeyManager.addListener('keydown');

//console.log(EventKeyManager.getEvent('*', 'space'));
//console.log(EventKeyManager.getEvent('keyup'));


</script>
</body>
</html>