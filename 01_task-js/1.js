//Что выведится на экран ?

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('The index of this number is: ' + i);
    }, 3000);
}

{ //! Правильная реализация выглядит примерно так:

    const arr = [10, 12, 15, 21];
    for (var i = 0; i < arr.length; i++) {
        // передать переменную i так, чтобы каждая функция
        // имела доступ к правильному индексу
        setTimeout(function(i_local) {
            return function() {
                console.log('The index of this number is: ' + i_local);
            }
        }(i), 3000);
    }

}

{ // Или так:
    const arr = [10, 12, 15, 21];
    for (let i = 0; i < arr.length; i++) {
        // используя синтаксис let ES6, он создает новую привязку
        // каждый раз, когда функция вызывается
        setTimeout(function() {
            console.log('The index of this number is: ' + i);
        }, 3000);
    }

}