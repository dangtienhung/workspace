import React, { useState } from 'react';

import Cart from '../Cart/Cart';
import IconHeart from '../icon/IconHeart';
import IconShopping from '../icon/IconShopping';
import logo from '../../assets/images/logo.png';
import { useSelector } from 'react-redux';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);

	const { totalAmount } = useSelector((state) => state.cart);
	return (
		<>
			<div className="bg-black p-2 w-full">
				<h3 className="text-center text-white font-bold font-inter text-2xl">
					Welcome all
				</h3>
			</div>
			<div className="flex justify-around items-center">
				<div>
					<img src={logo} alt="store" className="h-28 w-full object-cover" />
				</div>
				<div className="flex justify-center items-center gap-4">
					<button className="font-inter text-base font-medium">Log Out</button>
					<div className="flex flex-row items-center">
						<IconHeart />
						<p className="font-inter capitalize tracking-normal text-center">
							Whish List
						</p>
					</div>
					<div
						className="flex flex-center items-center cursor-pointer"
						onClick={() => handleOpen()}
					>
						{totalAmount > 0 ? (
							<span className="bg-gray-300 py-1 px-3 rounded-3xl">
								{totalAmount}
							</span>
						) : (
							<IconShopping />
						)}
						<p className="font-inter capitalize tracking-normal text-center">
							Shopping Cart
						</p>
					</div>
				</div>
			</div>
			<div className="flex justify-around items-center bg-black p-4 w-full">
				<div className="text-white font-inter font-medium text-base text-center">
					50& Off
				</div>
				<div className="text-white font-inter font-medium text-base text-center">
					Free Shipping and returns
				</div>
				<div className="text-white font-inter font-medium text-base text-center">
					Diffrent Payment Methods
				</div>
			</div>
			<Cart openModal={open} setOpen={setOpen} />
		</>
	);
};

export default Navbar;
