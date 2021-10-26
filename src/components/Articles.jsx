import React from "react";
import {Link} from "react-router-dom";

function Article(props){
    return (<div className="col-12">
        <Link to={"/blog/"+props.id}><h3>{props.title}</h3></Link>
        <p>{props.content}</p>
        <p>Дата: {props.add_date} || Автор: {props.author}</p>
        <hr/>
    </div>)
}

export class Articles extends React.Component{
    constructor() {
        super();
        this.state = {
            articles: []
        }
        console.log("Запущен метод constructor()")
    }
    componentDidMount() {
        console.log("Запущен метод componentDidMount()");
        fetch("http://1141.vozhzhaev.ru/getArticles")
            .then(response=>response.json())
            .then(result=>{
                console.log(result);
                let articles = result.map((item)=>{
                    const parser = new DOMParser();
                    let doc = parser.parseFromString(item.content, "text/html");
                    let content = (doc.body.innerText.slice(0, 90)+"...");
                    return <Article
                        id={item.id}
                        title={item.title}
                        add_date={item.add_date}
                        author={item.author}
                        content={content}
                    />
                });
                this.setState({
                    articles: articles
                })
            })
    }
    componentWillUnmount() {
        console.log("Запущен метод componentWillUnmount()")
    }

    render() {
        console.log("Запущен метод render()")
        return (
            <div className="container">
                <Link to="/addArticle" className="btn btn-primary my-3">Добавить статью</Link>
                {this.state.articles}
            </div>
        )
    }
}
