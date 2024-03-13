/* eslint-disable react/prop-types */
import PropTypes from "prop-types"

function Student(props) {
    return (
        <section className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
        </section>
    );
}

Student.protoTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "GUEST",
    age: 0,
    isStudent: false,
}

export default Student