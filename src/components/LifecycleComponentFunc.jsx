import React, { useState, useEffect, } from 'react';

const LifecycleComponentFunc = () => {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);


    useEffect(() => {
        console.log('---DidMount---');
        fetch('https://todo-redev.herokuapp.com/api/todos')
            .then((response) => response.json())
            .then((data) => setTodo(data));
    }, []);//пустая зависиЯмость т.к. вызываем один раз при первом рендере чтобы получитьданные

    useEffect(() => {
        console.log('---DidUpdate---');
        if (count % 2 === 0) {
            console.log('Компонент обновлен, значение count:', count);
        }
    }, [count]);//передаём зависимость count чтобы компонент ререндерился только при четных числах

    useEffect(() => {
        console.log('---WillUnmount---');
        console.log('Компонент LifecycleComponent скоро удалится');;
    }, []);//пустая зависимость т.к. выводим только лог для удаления компонента из дом и возвращения его

    const changeIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <h1>LifecycleComponent</h1>
            <p>Значение count:  {count % 2 === 0 ? count : count - 1}</p>
            <button onClick={changeIncrement}>Увеличить count</button>
            {count %2 === 0 ? <div><p>Число четное</p></div> : <p>Число нечетное, тыкни ещё.</p> }
        </div>
    );
};

export default LifecycleComponentFunc;
