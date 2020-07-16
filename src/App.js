import React, { Component } from 'react';
import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'
class App extends Component {
    
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data : fetchedData});
        console.log("state: "+JSON.stringify(this.state));
    }
    state = { data:{}, country: '' };

    handleCountryChange = async (country)=>{
        const fetchedData = await fetchData(country);
        this.setState({data : fetchedData, country});
        console.log("fetched data: "+JSON.stringify(fetchedData));
    }
    render() { 
        return ( 
            <div className={styles.container}>
            <Cards {...this.state}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Chart {...this.state}/>
            </div>
        );
    }
}
 
export default App;