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
```