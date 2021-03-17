import React, { Component } from 'react'



const signs = require('../../texts/signs.json');



export class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title : signs[props.currentSign].title,
      sign: signs[props.currentSign].sign,
      text: signs[props.currentSign].text,
      currentSign: signs[props.currentSign].currentSign,
      yesterday: false,
      today: false,
      tomorrow: false,
      change:false,
      yesterday_horo: '',
      today_horo: '',
      tomorrow_horo: ''
      }
  }

  dict = {
    "yesterday":"yesterday_horo",
    "today":"today_horo",
    "tomorrow" : "tomorrow_horo",
  }

  loadHoroscopes(){
    fetch(`https://aztro.sameerkumar.website?sign=${this.state.sign.toLowerCase()}&day=yesterday`,{
      method:"POST"
    })
    .then(res => res.json()).then(yesterday => this.setState({yesterday_horo:yesterday}))

    fetch(`https://aztro.sameerkumar.website?sign=${this.state.sign.toLowerCase()}&day=today`,{
      method:"POST"
    })
    .then(res => res.json()).then(today => this.setState({today_horo:today}))

    fetch(`https://aztro.sameerkumar.website?sign=${this.state.sign.toLowerCase()}&day=tomorrow`,{
      method:"POST"
    })
    .then(res => res.json()).then(tom => this.setState({tomorrow_horo:tom}))
  }

  componentWillMount(){
    this.loadHoroscopes();
  }

  toggle() {
    document.getElementById('yesterday').classList.remove('clicked');
    document.getElementById('today').classList.remove('clicked');
    document.getElementById('tomorrow').classList.remove('clicked');
    document.getElementById('change').classList.remove('clicked');
  }

  clicked(elementsTarget){
    let clicked = elementsTarget.currentTarget;
    if(eval(`this.state.${clicked.id}`) === true) {
      document.getElementById("text").textContent = this.state.text;
      document.getElementById("date").textContent = '';
      eval(`this.setState({${clicked.id}:!this.state.${clicked.id}}, () => clicked.classList.toggle("clicked"))`);
    } else {
      this.setState({yesterday:false, today:false, tomorrow:false, change:false}, ()=> {
        this.toggle();
        document.getElementById("date").textContent = this.state[this.dict[clicked.id]].current_date;
        document.getElementById("text").textContent = this.state[this.dict[clicked.id]].description;
        eval(`this.setState({${clicked.id}:true}, () => clicked.classList.toggle("clicked"))`);
      });
    } 
  }

  render() {
    return ( 
    <div className="card" id="card">
      
      <div className="card-text">
        <span className="date">{`${this.state.title}`}</span>
        <h2 id="card_sign">{`${this.state.sign}`}</h2>
        <p id="date"></p>
        <p id="text">
        {`${this.state.text}`}
        </p>
      </div>
      <div className="change_sign" id="change" onClick={(element) => this.props.changeSign("change")}>Change sign</div>
      <div className="card-stats">
      <div className="stat" id="yesterday" onClick={(element) => this.clicked(element)}>
          <div className="value">Yesterday's</div>
          <div className="type">Horoscope</div>
        </div>
        <div className="stat border" id="today" onClick={(element) => this.clicked(element)}>
          <div className="value">Today's</div>
          <div className="type">Horoscope</div>
        </div>
        <div className="stat" id="tomorrow" onClick={(element) => this.clicked(element)}>
          <div className="value">Tomorrow's</div>
          <div className="type">Horoscope</div>
        </div>
      </div>
    </div>
    )
}
}

export default Card;