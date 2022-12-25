import React, {Component} from 'react';

export class Footer extends Component {
    render() {
        return (
            <footer className="container">
                <div className="row justify-content-between">
                    <div className="col-4">
                        <p>&copy; {this.props.author}</p>
                    </div>
                    <div className="col-4 text-end">
                        <a href="#top">Voltar ao topo</a>
                    </div>
                </div>
            </footer>
        );
    }
}



