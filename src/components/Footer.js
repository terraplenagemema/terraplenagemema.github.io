import React, {Component} from 'react';

export class Footer extends Component {
    render() {
        return (
            <footer className="container">
                <div class="row justify-content-between">
                    <div class="col-4">
                        <p>&copy; {this.props.year} {this.props.author}</p>
                    </div>
                    <div class="col-4 text-end">
                        <a href="#top">Voltar ao topo</a>
                    </div>
                </div>
            </footer>
        );
    }
}



