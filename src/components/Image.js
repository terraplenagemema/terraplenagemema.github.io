import React, {Component} from 'react';
import placeholder from "../images/placeholder.png";
import {defaultLazyImageLoader} from "./LazyImageLoader";

import "./Image.scss";

export class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: placeholder
        };
        this.element = React.createRef();
        this.onDisplay = this.onDisplay.bind(this);
    }

    componentDidMount() {
        defaultLazyImageLoader.register(this.element.current, this.onDisplay);
    }

    onDisplay() {
        this.setState({image: this.props.image});
    }

    render() {
        return (
            <img ref={this.element} src={this.state.image} className="photo" alt={this.props.alt || ""}/>
        );
    }
}
