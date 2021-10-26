import React from "react";

export class SingleArticle extends React.Component{
    constructor() {
        super();
        this.state = {
            title: "",
            content: "",
            author: "",
            add_date: ""
        }
    }
    componentDidMount() {
        const id = window.location.pathname.split("/")[2];
        const formData = new FormData();
        formData.append("id", id);
        fetch("http://1141.vozhzhaev.ru/getArticleById",{
            method: "POST",
            cors: "no-cors",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                console.log(result);
                this.setState({
                    title: result.title,
                    content: result.content,
                    author: result.author,
                    add_date: result.add_date
                })
            })
    }
    render() {
        return (
            <div className="container">
                <h1>{this.state.title}</h1>
                <p dangerouslySetInnerHTML={{__html: this.state.content}}/>
                <p>Автор: {this.state.author}|| Дата добавления: {this.state.add_date}</p>
            </div>
        )
    }
}
