const Header =(props) => {
         return (
            <header>
                <h1>{props.title}</h1>
                <span className="stats">Drinks:{props.totalDrinks}</span>                
            </header>
        );
    }


const Drink = (props) => {
    return (
        <div className="drink">
            <span className="drink-name">
            <button className="remove-drink" onClick={() =>props.removePlayer(props.id)}>✖</button>
                {props.name}
            </span>
            <Counter />
        </div>
    );
}

class Counter extends React.Component {
    state = {
        cups: 0
    };

    incrementCup = () => {
        this.setState(prevState => {            
            return {
                cups: prevState.cups + 1
            }
        });
    }

    decrementCup = () => {
        this.setState(prevState => {
            if(prevState.cups > 0)
            return {
                cups: prevState.cups - 1
            };
        });
    }
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementCup}>-</button>
                <span className="counter-score">{this.state.cups}</span>
                <button className="counter-action increment" onClick={this.incrementCup}>+</button>
            </div>
        );
    }
}
class App extends React.Component {
        state = {
            drinks:[
            {
                name: "Bubble Tea",
                id: 1
            },
            {
                name: "Lemon Yogurt",
                id: 2
            },
            {
                name: "Matcha",
                id: 3
            },
            {
                name: "Chocoalate Milk",
                id: 4
            }
            ]
        };

        handleRemovePlayer = (id) => {
            this.setState(prevState=>{
                return{
                    drinks:prevState.drinks.filter(p => p.id !== id)
                };
                
            });

        }

    render() {
        return (
            <div className="orderDrink">
                <Header title="Choose your summer favorite drink" totalDrinks={this.state.drinks.length} />

                
                {this.state.drinks.map(drink =>
                    <Drink
                        name={drink.name}
                        id={drink.id}
                        key={drink.id.toString()}
                        removePlayer = {this.handleRemovePlayer}
                    />
                )}                
            </div>            
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
