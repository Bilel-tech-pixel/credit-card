import React from 'react'
import { render } from '@testing-library/react'

class Card extends React.Component{
    constructor(props){
        super(props) 
        this.state = {
            card:"####",
            name:"####",
            date:"####"
        }
    }

    validThru = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

render(){

    
    let numRegex = /^[0-9\b]+$/

    return(<div className="container">
        <div>
            <img src="https://www.interactivebrokers.eu/images/2015/debit-card-shadow.png"/>
            <p>{this.state.name.toUpperCase().padEnd(7,"#")}</p>
            <p>{numRegex.test(this.state.date) ? this.state.date.padEnd(4,"").replace(/^(d{2})/,'$1 / ') : "**/*"}</p>
            <p>{numRegex.test(this.state.card) ? this.state.card.replace(/(\d{4})/g,'$1 / ').replace(/(^\s+|\s+$)/, '') : "### ## ##"}</p>
        </div>
        <div>
            <input className="field" type="text" name="card" onChange={this.validThru}/><br/>
            <input className="field" type="text" name="name" onChange={this.validThru}/><br/>
            <input className="field" type="text" name="date" onChange={this.validThru}/>
        </div>
    </div>)
}    

}
export default Card

