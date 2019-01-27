import React, {Component} from 'react';

export class Footer extends Component {
    render() {
        return (
            <footer className="container">
                <p className="float-right"><a href="#">Voltar ao topo</a></p>
                <p>&copy; {this.props.year} {this.props.author}</p>
            </footer>
        );
    }
}



