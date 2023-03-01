import PropTypes from 'prop-types';
import React from 'react';

const Button = ({
	type = 'button',
	className = '',
	children,
	isLoading = false,
	...rest
}) => {
	const child = !!isLoading ? (
		<div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
	) : (
		children
	);
	return (
		<button
			type={type}
			className={`p-4 min-h-[56px] text-base font-semibold text-white flex justify-center items-center rounded-xl ${className}`}
			{...rest}
		>
			{child}
		</button>
	);
};

Button.propTypes = {
	type: PropTypes.string.isRequired,
	children: PropTypes.node,
	className: PropTypes.string,
	isLoading: PropTypes.bool,
};

export default Button;
