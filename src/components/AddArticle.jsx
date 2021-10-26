import React from "react";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

export class AddArticle extends React.Component{
    constructor() {
        super();
        this.state = {
            title: "",
            author: ""
        }
        this.sunEditorRef = React.createRef();
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerSubmit =  this.handlerSubmit.bind(this);
        this.getSunEditorInstance = this.getSunEditorInstance.bind(this);
    }

    handlerChange(event){
        const name = (event.target.name);
        const value = (event.target.value);
        this.setState({
            [name]: value
        });
    }
    getSunEditorInstance = (sunEditor) => {
        this.sunEditorRef.current = sunEditor;
    };
    handlerSubmit(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", this.state.title);
        formData.append("content", this.sunEditorRef.current.getContents());
        formData.append("author", this.state.author);
        fetch("http://1141.vozhzhaev.ru/addArticle",{
            method: "POST",
            cors: "no-cors",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                console.log(result);
            })
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Добавление статьи</h1>
                <div className="col-sm-7 mx-auto">
                    <form onSubmit={this.handlerSubmit}>
                        <div className="mb-3">
                            <input name="title" onChange={this.handlerChange} type="text" placeholder="Заголовок" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <SunEditor
                                getSunEditorInstance={this.getSunEditorInstance}
                                setOptions={
                                    {
                                        width: '100%',
                                        height: '500px',
                                    }
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <input name="author" onChange={this.handlerChange} type="text" placeholder="Автор" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <input type="submit" value="Добавить стаью" className="form-control btn btn-primary"/>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}
