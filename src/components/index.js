import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Help from './help'
import Logo from './react.png'
import './App.scss'
import Globals from '@utils/globals'
import Canvasify from '@canvasify'
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.canvasOne = React.createRef()
        this.canvasTwo = React.createRef()
    }
    componentDidMount() {
        let image = document.createElement('img')
        image.src = '/mountain.jpg'

        let canvas1 = this.canvasOne.current
        let canvas2 = this.canvasTwo.current
        let ctx1 = canvas1.getContext('2d')

        image.addEventListener('load', e => {
            ctx1.drawImage(image, 0, 0, canvas1.width, canvas1.height)
        })
    }

    onModify = () => {
        let canvas1 = this.canvasOne.current
        let canvas2 = this.canvasTwo.current

        let ctx1 = canvas1.getContext('2d')
        let newData = ctx1.toGrayScale()

        let ctx2 = canvas2.getContext('2d')
        ctx2.put(newData)
    }
    render() {
        return (
            <div>
                <canvas ref={this.canvasOne} className="can" />
                <canvas ref={this.canvasTwo} className="can" />
                <button onClick={this.onModify}>Modify</button>
            </div>
        )
    }
}
