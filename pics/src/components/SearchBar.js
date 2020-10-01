import React from 'react'


class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            textSearch: ''
        }
    }
    
    onInputChange(value){
       this.setState({
           ...this.state,
             textSearch: value
         })
     }


    render(){
        return(
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Search Bar</label>
                        <input 
                            type='text' 
                            onChange={(e)=>this.onInputChange(e.target.value)} 
                            value={this.state.textSearch}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;