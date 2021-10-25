import React from "react";

function Article(){
    return (<div className="col-12">
        <h3>Заголовок страницы</h3>
        <p>Описание</p>
        <p>Дата: 25.10.2021 || Автор: author</p>
        <hr/>
    </div>)
}

export class Articles extends React.Component{
    constructor() {
        super();
        console.log("Запущен метод constructor()")
    }
    componentDidMount() {
        console.log("Запущен метод componentDidMount()")
    }
    componentWillUnmount() {
        console.log("Запущен метод componentWillUnmount()")
    }

    render() {
        console.log("Запущен метод render()")
        return (
            <div className="container">
                <Article/>
                <Article/>
                <Article/>
            </div>
        )
    }
}
