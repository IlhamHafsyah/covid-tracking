import React from "react";
import styles from "./Home.module.css";
import headerImage from "../../images/head.png";
import Typography from "@material-ui/core/Typography";
import Country from "../../components/Country/Country";
import Cards from "../../components/Cards/Cards";
import axios from "axios";
// import {Link} from 'react-router-dom'

class Home extends React.Component {
  state = {
    name: "Ilham Hafsyah",
    data: {},
  };

  componentDidMount() {
    console.log("component did mount is running here");
    this.getData();
  }

  countryChangeHandle = (event) => {
    console.log(event.target.value);
    const country = event.target.value;
    this.getData(country);
    const setCountry = country ? country : "Global";
    this.props.history.push({
      search: "?country=" + setCountry,
    });
  };

  getData = (country) => {
    let setUrl = "https://covid19.mathdro.id/api";
    setUrl = country ? `${setUrl}/countries/${country}` : setUrl;
    axios
      .get(setUrl)
      .then((res) => {
        console.log(res);
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    // console.log('rendering page');
    const { data } = this.state;
    const lastUpdate = new Date(data.lastUpdate).toDateString();
    console.log(lastUpdate);
    return (
      <div className={styles.container}>
        <img className={styles.image} src={headerImage} alt="covid-19" />
        <h6>Covid 19 tracker by {this.state.name}</h6>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Terakhir Update : {lastUpdate}
        </Typography>
        <Country countryChangeHandle={this.countryChangeHandle} />
        <Cards data={data} />
        {/* <Link to='/about'>About</Link>
                <h1>
                    Halaman Home
                </h1>
                <p>{this.state.name}</p> */}
      </div>
    );
  }
}

export default Home;
