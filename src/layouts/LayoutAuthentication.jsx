import ErrorComponent from '../components/common/ErrorComponent';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { withErrorBoundary } from 'react-error-boundary';

const LayoutAuthentication = (props) => {
	const { children, heading = '' } = props;
	return (
		<div className="bg-lite min-h-screen w-full p-10 relative isolate">
			<img
				src="/ellipse.png"
				alt="bg"
				className="absolute bottom-0 left-0 right-0 pointer-events-none z-[-1]"
			/>
			<Link to="/" className="mb-5 lg:mb-16 inline-block">
				<img srcSet="/logo.png 2x" alt="crounfunding-app" />
			</Link>
			<div className="w-full max-w-[556px] bg-white mx-auto rounded-xl px-5 py-8 lg:px-16 lg:py-12">
				<h1 className="font-semibold lg:text-xl text-lg mb-1 lg:mb-3 text-text1 text-center">
					{heading}
				</h1>
				{children}
			</div>
		</div>
	);
};

LayoutAuthentication.propTypes = {
	heading: PropTypes.string,
	children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
	FallbackComponent: ErrorComponent,
});
