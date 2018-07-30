import React from 'react'
import {Button} from 'antd'
import { observable, computed, autorun } from 'mobx'
import { observer, inject, Provider } from 'mobx-react'


class TodoStore {
    @observable todos = [];
    @observable pendingRequests = 0;

    constructor(){
        autorun(() => console.log(this.report))
    }

    @computed get completedTodoCount(){
        return this.todos.filter(
            todo => todo.completed === true
        ).length
    }

    @computed get report(){
        if (this.todos.length === 0){
            return "<none>";
        }
        return `Next todo: "${this.todos[0].task}". Progress: ${this.completedTodoCount}/${this.todos.length}`
    }

    addTodo(task){
        this.todos.push({
            task: task,
            completed: false,
            assignee: null
        })
    }
}

const todoStore = new TodoStore()

@observer
class TodoList extends React.Component{
    onNewTodo = () => {
        this.props.store.addTodo(prompt('Enter a new todo:','coffee plz'))
    }

    render(){
        const store = this.props.store;
        return (
            <div>
                { store.report }
                <ul>
                    {
                        store.todos.map(
                            (todo, index) => <TodoView todo={todo} key={index}/>
                        )
                    }
                </ul>
                { store.pendingRequests > 0 ? <marquee>Loading</marquee> : null}
                <button onClick={this.onNewTodo}>New Todo</button>
                {/*<RenderCounter />*/}
            </div>
        )
    }
}

@inject("todoStore")
@observer
class TodoView extends React.Component{
    onToggleCompleted = () => {
        const todo = this.props.todo;
        todo.completed = !todo.completed;
    }

    onRename = () => {
        const todo = this.props.todo;
        todo.task = prompt('Task name', todo.task) || todo.task;
    }

    render(){
        console.log(this.props.todoStore)
        const todo = this.props.todo;
        return (
            <li onDoubleClick={this.onRename}>
                <input type="checkbox" checked={todo.completed} onChange={this.onToggleCompleted}/>
                { todo.task }
                { todo.assignee ? <small>{todo.assignee}</small> : null}
                {/*<RenderCounter />*/}
            </li>
        )
    }
}

class ListOfWords extends React.PureComponent{
    render(){
        return (
            <div>
                {this.props.words.join('，')}
            </div>
        )
    }
}

class WordAdder extends React.Component {
    state = {
        words: ['marklar']
    }

    handleClick = () => {
        const words = this.state.words
        words.push('marklar')
        // this.setState({...words})
        this.setState(preState => ({
            words: [...preState.words, 'marklar' ]
        }))
    }

    render(){
        return (
            <div>
                <Button onClick={this.handleClick}>click</Button>
                <ListOfWords words={this.state.words}/>
            </div>
        )
    }
}

class IndexA extends React.Component{

    state = {
        a: 1,
        b: 2,
        c: 3
    }

    setData = () => {
        this.setState({
            a: 2,
            b: 3
        }, () => {
            console.log(this.state)
        })
    }

    render(){
        return (
            <Provider todoStore={todoStore}>
                <div>
                    IndexA
                    <Button onClick={this.setData}>setData</Button>
                    <TodoList store={todoStore} color="red"/>
                    <WordAdder/>
                </div>
            </Provider>
        )
    }
}

export default IndexA