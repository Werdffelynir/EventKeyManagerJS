# EventKeyManager JS



## Свойства
```
EventKeyManager.lastCharCode        (public) (int|null) Содержит последний CharCode
EventKeyManager.listEvents          (private) (array) Список всех событий
EventKeyManager.listDisable         (private) (array) Список всех отключенных событий
```


## Методы
```
EventKeyManager.init()              
(public) (void) Метод, инициализация слушатиля события "onkeyup" 

EventKeyManager.listen(callback)            
(public) (void) Метод, выполняет переданую функцию в параметре каждый раз при возникновении события "onkeyup" 

EventKeyManager.add(id, keyCode, callback)               
(public) (void) Метод, добавляет событие с индификатором. Индификаторы могут собератся в стаки. 

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
```

## Примеры
```
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
```

```
EventKeyManager.listen(function(event){
    var about = "key:" + event.key + " keyCode:" + event.keyCode;
    console.log('Front \'listen\' >>> ', about, event);
});
```