import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                {this.props.home.widgets.map(({ href, title }, index) => (
                    <article class="card" key={`${href}_${index}`}>
                        <div class="content">
                            <Link class="title" to={href}>{title}</Link>
                        </div>
                    </article>
                ))}
            </div>
        );
    }
}
