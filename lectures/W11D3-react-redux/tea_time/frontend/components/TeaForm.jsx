import React from "react";


class TeaForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: Math.floor(Math.random() * 1000) ,
            flavor: "" ,
            amount: ""
        }
        console.log(props)
        this.updateFlavor = this.updateFlavor.bind(this);
        this.updateAmount = this.updateAmount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateFlavor(e) {
        console.log(e)
        this.setState({flavor:e.target.value})
    }

    updateAmount(e) {
        console.log(e)
        this.setState({ amount: e.target.value})
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.props.receivedTea(this.state)
    }



    render() {
        return (
            <form onSubmit={ this.handleSubmit} >
                <h2>Here You can add a tea</h2>
                <label>Flavor:
                    <input type="text" value={this.state.flavor} onChange={this.updateFlavor}/>
                </label>
                <label >Amount:
                    <input type="text" value={this.state.amount} onChange={this.updateAmount }/>
                </label>

                <input type="submit" value="add tea!!!" />


            </form>
        )
    }
}

export default TeaForm;