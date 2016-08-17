stat = {
    availableEventsNames: ['keyup', 'keydown'],

    listEvents: {keyup: [], keydown: []},
//            listEvents_keyup : [],
//            listEvents_keydown : [],

    addEvent: function (key_event_name, id, key_code, callback, overwrite) {

        if (!this.listEvents[key_event_name])
            throw new ReferenceError('Key Event Name "' + key_event_name + '" is not exists! available is the (keyup, keydown)');

        console.log(!!overwrite);

        /*if(!this.getEvent(id)) {
         this.listEvents.push({id:id, keyCode:keyCode, callback:callback});
         } else
         throw new ReferenceError('ID "' + id + '" is exists!');*/
    },

    getEvent: function (key_event_name, id) {
        var stack = this.listEvents[key_event_name];
        console.log(stack);
        /*
         for (var i = 0; i < this.listEvents.length; i ++ ) {
         if( typeof this.listEvents[i] === 'object' && this.listEvents[i]['id'] === id ) {
         this.listEvents[i].index = i;
         return this.listEvents[i];
         }
         }
         return null;*/
    }
},


















//    console.log(Util.isType(arr));
//    console.log(Util.isType(arr, 'Array'));
//    console.log(Util.isType(arr, 'Object'));
//    console.log(Util.isType(100));
//    console.log(Util.isType(runner));
//    console.log(Util.isType('runner'));
//    console.log(Util.isType(pressEvent));
//    console.log(Util.isType(EventKeyManager));
//    console.log(Util.isType(dateObject));

//    console.log(Util.isNumeric(0));
//    console.log(Util.isNumeric(10));
//    console.log(Util.isNumeric(-10));
//    console.log(Util.isNumeric('10'));
//    console.log(Util.isNumeric('-10'));
//    console.log(Util.isNumeric('10asd'));
//    console.log(Util.isNumeric('asd10'));
//    console.log(Util.isNumeric('asd'));





//    function handlerEventManager (event){
//        display.innerHTML = 'type:' + event.type + ' keyCode: ' +  event.keyCode;
//        console.log('handlerEventManager:', event.type, event.keyCode)
//    }
//    var upEvent = new EventKeyManager('keyup');
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