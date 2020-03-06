import React from 'react';

export default class AddPokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokeSearch: ''
        }
    }

    addPokemon() {
        this.props.addPokemon(this.state.pokeSearch.toLowerCase())
    }
    render() {
        return (
            <div className='w3-container w3-block w3-row w3-center'>
                <input
                    type='text'
                    placeholder='Add a Pokemon'
                    className='w3-input w3-threequarter'
                    onChange={(update) => this.setState({pokeSearch: update.target.value})}
                />
                <div className='w3-quarter'>
                    <input
                        type='button'
                        value='+'
                        className='w3-green w3-circle w3-button'
                        onClick={this.addPokemon.bind(this)}
                    />
                </div>
            </div>
        )
    }
}