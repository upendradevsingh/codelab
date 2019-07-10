import React, { Component } from 'react';

export default class Pdp extends Component {
    constructor(props) {
        super();
        this.state = {
            ...props
        };
    }
    render() {
        const { plp } = this.state;
        const [product] = plp.products.filter(item => item.ID === parseInt(this.props.match.params.id, 10));

        return (
            <article>
                <div class="gallery">
                    <img src={product.Images} />
                </div>
            </article>
        );
    }
}