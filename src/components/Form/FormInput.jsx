import PropTypes from 'prop-types'

const FormInput = ({ title, htmlFor, ...rest }) => {
    return (
        <div className="mt-3">
            <label className="mb-2 inline-block text-c-dark-300" htmlFor={htmlFor}>{title}</label>
            <input className="block px-4 py-2 border rounded-md bg-[#F3F3F3] focus:outline-none w-full" {...rest} />
        </div>
    );
};

FormInput.propTypes = {
    title: PropTypes.string,
    htmlFor: PropTypes.string,
}


export default FormInput;