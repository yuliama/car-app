import './Sort.css';

export default function Sort() {
    return (
        <select className="sort" name="sort" value="sort">
            <option value="fname">Sort By: First Name</option>
            <option value="lname">Sort By: Last Name</option>
            <option value="age">Sort By: Age</option>
        </select>
    )
}