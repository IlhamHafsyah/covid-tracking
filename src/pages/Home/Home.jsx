import React from 'react'
import styles from './Home.module.css'
import headerImage from '../../images/head.png'
import Typography from '@material-ui/core/Typography'
import Country from '../../components/Country/Country'
// import {Link} from 'react-router-dom'

class Home extends React.Component {
    state = {
        name: 'Mohammad Ilham Nurdhi Hafsyah'
    }

    componentDidMount() {
        console.log('component did mount is running here');
    }

    render() {
        // console.log('rendering page');
        return(
            <div className={styles.container}>
                <img className={styles.image} src={headerImage} alt='covid-19'/>
                <Typography variant='subtitle2' color='textSecondary' gutterBottom>Terakhir Update : ...</Typography>
                <Country/>
                {/* <Link to='/about'>About</Link>
                <h1>
                    Halaman Home
                </h1>
                <p>{this.state.name}</p> */}
            </div>
        )
    }
}

export default Home