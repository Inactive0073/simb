import React from "react";

function MyComponent() {
    return (
        <div>
        </div>
    )
}
export default MyComponent;
// 34b70489bd27469f922e066f13d298e3 X-Auth-Token  fetch("https://api.football-data.org/v2/matches")
/*export default class Matches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded:false,
            items: []
        };
    }
    componentDidMount() {
        fetch("https://api.football-data.org/v2/matches")
        .then(res => res.json())
        .then(
            (result)=>{
                this.setState({
                    isLoaded:true,
                    items: result.
                })
            }
        )
    }

    render () {

    }
} */