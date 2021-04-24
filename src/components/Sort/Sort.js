import { useState } from 'react';
import './Sort.css';

export default function Sort({onChange}) {
    return (
        <select className="sort" name="sort" onChange={e => onChange(e.target.value)}>
            <option value="firstName">Sort By: First Name</option>
            <option value="lastName">Sort By: Last Name</option>
            <option value="age">Sort By: Age</option>
        </select>
    )
}