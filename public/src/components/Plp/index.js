import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './tile.css';

export default class Plp extends Component {
    constructor(props) {
        super();
        this.state = {
            ...props
        }
    }
    componentDidMount() {
        if (!this.state.plp.products) {
            fetch('/all-products')
                .then(response => response.json())
                .then(data => this.setState({ plp: data.plp }));
        }
    }
    render() {
        const { plp } = this.state;
        const { products } = plp;

        if (!products || (Array.isArray(products) && products === 0)) {
            console.log('in');
            return (<div>Rendering ...</div>);
        }

        return (
            <div>
                {products.map(({ Images, ID, ...rest }) => (
                    <article class="tile" key={ID}>
                        <div class="content">
                            <Link to={`/product/${ID}`}>
                                <img src={Images} alt={rest["Short description"]} />
                            </Link>
                            <p class="title">{rest["Short description"]}</p>
                        </div>
                    </article>
                ))}
            </div>
        );
    }
}
