import React from 'react';
import '../App.css';

const Header = (props) => {

    return (
        <div>
            <div>
                <h1>GET CITY DEALS</h1>
            </div>
            <div>
                <ul className="menu">
                    {props.categories.map(category => {
                        return (<li key={category.catid}>
                            {category.name}
                            <ul>
                                {props.subcategories.map(subcategory => {
                                    if (category.catid === subcategory.catid) {
                                        return <li>{subcategory.name}</li>
                                    }
                                })}
                            </ul>

                        </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Header;