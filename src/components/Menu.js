import React, {Component} from 'react';
import { Typography, Link } from '@material-ui/core'

class Menu extends Component{
    render(){
        return (
            <div>
                <Typography className="Menu">
                    <Link href="/">
                        Authorization
                    </Link>
                    <Link href="/home" className="link">
                        Home Page
                    </Link>
                </Typography>
            </div>
        )
    }
}

export default Menu;