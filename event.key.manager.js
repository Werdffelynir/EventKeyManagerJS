
/*

EventKeyManager.lastCharCode        (public) (int|null) Содержит последний CharCode
EventKeyManager.listEvents          (private) (array) Список всех событий
EventKeyManager.listDisable         (private) (array) Список всех отключенных событий

EventKeyManager.init()              
(public) (void) Метод, инициализация слушатиля события "onkeyup" 

EventKeyManager.listen(callback)            
(public) (void) Метод, выполняет переданую функцию в параметре каждый раз при возникновении события "onkeyup" 

EventKeyManager.add(id, keyCode, callback)               
(public) (void) Метод, добавляет событие с уникальным индификатором

EventKeyManager.getById(id)           
(public) (object|null) Метод, вернет ссылку на событийный объект по id

EventKeyManager.getAllByKeyCode(keyCode)   
(public) (object|null) Метод, вернет ссылку на событийный объект по keyCode

EventKeyManager.charToCode(value)        
(public) (number|null) Метод, переводит символ в keyCode

EventKeyManager.codeToChart(value)       
(public) (string|null) Метод, переводит keyCode в символ

EventKeyManager.remove(id)            
(public) (object|null) Метод, полностю удаляет событийный объект по id

EventKeyManager.enable(id)            
(public) (void) Метод, включает событийный объект по id, если тот был отключен методом EventKeyManager.disable

EventKeyManager.disable(id)           
(public) (void) Метод, отключает событийный объект по id, больше не будет выполнятся. Отмена происходит при помощи метода EventKeyManager.enable

EventKeyManager.isDisable(id)         
(public) (bool) Метод, проверяет является ли событийный объект отключенным

EventKeyManager.foreachEvent(callback)      
(public) (void) Метод, переберает все событийные объекты, сходно функции Array.map
*/

(function(){
    
    /**
     * @namespace 
     */
    var mod = {
        lastCharCode:null,
        lastEvent:null,
        listEvents:[],
        listDisable:[],
        listenCallback:null
    };
    
    mod.listen = function(callback){
        mod.listenCallback = callback;
    };
    
    
    /**
     * @namespace 
     */
    mod.init = function(){

        window.addEventListener('keyup', function(event) {
            
            mod.lastEvent = event;
            mod.lastCharCode = event.keyCode;
            
            if(typeof mod.listenCallback === 'function')
                mod.listenCallback.call(mod, event);
            
            var i;
            for (i = 0; i < mod.listEvents.length; i ++ ) {
                if(typeof mod.listEvents[i] === 'object' && 
                   mod.listDisable.indexOf(mod.listEvents[i]['id']) === -1 && mod.listEvents[i]['keyCode'] === event.keyCode ) {
                    
                    if(typeof mod.listEvents[i]['callback'] === 'function')
                        mod.listEvents[i]['callback'].call(mod, event);
                    
                }
            }
            
        });
    };

    /**
     * @param id
     * @param keyCode
     * @param callback
     */
    mod.add = function(id, keyCode, callback){
        if(!mod.getById(id))
            mod.listEvents.push({id:id, keyCode:keyCode, callback:callback});
        else 
            throw new ReferenceError('ID "' + id + '" is exists!');
    };
    
    mod.getById = function(id){
        for (var i = 0; i < mod.listEvents.length; i ++ ) {
            if( typeof mod.listEvents[i] === 'object' && mod.listEvents[i]['id'] === id ) {
                mod.listEvents[i].index = i;
                return mod.listEvents[i];
            }
        }
        return null;
    };
    
    mod.getAllByKeyCode = function(keyCode){
        var result = [];
        for (var i = 0; i < mod.listEvents.length; i ++ ) {
            if(typeof mod.listEvents[i] === 'object' && mod.listEvents[i]['keyCode'] === keyCode) {
                result.push(mod.listEvents[i]);
            }
        }
        return result;
    };
    

    mod.charToCode = function(letter){
        return (letter||'').charCodeAt(0);
    };
    
    mod.codeToChart = function(code){
        return String.fromCharCode(code);
    };
    
    mod.remove = function(id){
        var eventObject;
        if(eventObject = mod.getById(id)) {
            return mod.listEvents.splice(eventObject.index, 1);
        }
    };
    
    mod.enable = function(id){
        var index;
        if ((index = mod.listDisable.indexOf(id)) !== -1) {
            mod.listDisable.splice(index, 1);
        }
    };
    
    mod.disable = function(id){
        if (mod.listDisable.indexOf(id) === -1) {
            mod.listDisable.push(id);
        }
    };
    
    mod.isDisable = function(id){
        return mod.listDisable.indexOf(id) !== -1;
    };
    
    mod.foreachEvent = function(callback){
        return mod.listEvents.map(callback);
    };
    
    window.EventKeyManager = mod;
    
})();