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
            fetch('/all-products', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => this.setState({ plp: data.plp }));
        }
    }
    render() {
        const { plp } = this.state;
        const { products } = plp;

        if (!products || (Array.isArray(products) && products === 0)) {
            return (<div>Rendering ...</div>);
        }

        if (this.props.match.params.id) {
            const [product] = plp.products.filter(item => item.ID === parseInt(this.props.match.params.id, 10));
            return (
                <article class="tile">
                    <div class="gallery placeholder">
                        <img src={product.Images} />
                    </div>
                    <div class="p-desc">
                        <p class="name">{product["Name"]}</p>
                        <p class="title">{product["Short description"]}</p>
                        <p class="price">Rs. {product["Sale price"]}</p>
                    </div>
                </article>
            );
        }
        return (
            <div>
                {products.map(({ Images, ID, ...rest }) => (
                    <article class="tile" key={ID}>
                        <div class="content">
                            <Link to={`/product/${ID}`} class="placeholder">
                                <img src={Images} alt={rest["Short description"]} />
                            </Link>
                            <div class="p-desc">
                                <p class="name">{rest["Name"]}</p>
                                <p class="title">{rest["Short description"]}</p>
                                <p class="price">Rs. {rest["Sale price"]}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        );
    }
}
