import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
// import logo from '../../assets/Final-M-SinglePiece.svg'; // Example logo import

const Navdiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
		background-color: rgba(0,0,0,0.85);
	color: #fff;
	backdrop-filter: blur(6px);
	position: fixed;
	width: 100vw;
	height: 8vh;
	padding: 0 3vw;
	z-index: 1000;
`;

const NavLinksWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const NavLinks = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	margin: 0;
	padding: 0;
	color: #fff;
`;

const ListItem = styled.li`
	position: relative;
	white-space: nowrap;
	color: #fff;
	padding-left: 64px;
							/* Remove ::after dead zone, use bridge element instead */
	@media (hover: hover) {
		&:hover > div,
		.dropdown-bridge:hover + div {
			display: block;
		}
	}
`;

// Bridge element for dropdown dead zone
const DropdownBridge = styled.div`
	position: absolute;
	left: -100px;
	top: 100%;
	width: calc(100% + 200px);
	height: 120px;
	background: rgba(255,0,0,0.2);
	z-index: 2000;
	border: 2px solid red; /* for debugging, remove after test */
`;

// Example JSX update for Projects dropdown:
// <ListItem>
//   <span>Projects</span>
//   <DropdownBridge className="dropdown-bridge" />
//   <Dropdown>
//     <div>Microsoft</div>
//     <div>Outsource</div>
//     <div>Leysi</div>
//     <div>Piton</div>
//     <div>Three Pillars</div>
//     <div>Access Direct</div>
//     <div>Giga</div>
//     <div>Graphic Design</div>
//   </Dropdown>
// </ListItem>
// Preserve custom animation and spotlight code
const spotlightLeftMove = keyframes`
	0% { transform: translateX(-40%) translateY(0); opacity: 1; }
	25% { transform: translateX(-35%) translateY(-5px); opacity: 0.9; }
	50% { transform: translateX(-30%) translateY(3px); opacity: 0.8; }
	75% { transform: translateX(-35%) translateY(-2px); opacity: 0.9; }
	100% { transform: translateX(-40%) translateY(0); opacity: 0.85; }
`;

const spotlightRightMove = keyframes`
	0% { transform: translateX(140%) translateY(0); opacity: 1; }
	25% { transform: translateX(135%) translateY(4px); opacity: 0.95; }
	50% { transform: translateX(130%) translateY(-3px); opacity: 0.9; }
	75% { transform: translateX(135%) translateY(2px); opacity: 0.95; }
	100% { transform: translateX(140%) translateY(0); opacity: 0.9; }
`;

const Spotlight = styled.span`
	position: absolute;
	width: 150px;
	height: 150px;
	border-radius: 50%;
	background: radial-gradient(circle, rgba(0,255,255,0.6) 0%, rgba(255,192,203,0.35) 60%, transparent 100%);
	filter: blur(70px);
	pointer-events: none;
	z-index: 997;
`;

const SpotlightLeft = styled(Spotlight)`
	left: 0;
	animation: ${spotlightLeftMove} 6s ease-in-out infinite;
`;

const SpotlightRight = styled(Spotlight)`
	right: 0;
	animation: ${spotlightRightMove} 6s ease-in-out infinite;
`;

const slideFade = keyframes`
	0% { transform: translateX(0); opacity: 1; }
	33% { transform: translateX(calc(100vw - 650px)); opacity: 1; }
	66% { transform: translateX(0); opacity: 1; }
	85% { transform: translateX(50vw); opacity: 0; }
	100% { transform: translateX(0); opacity: 0; }
`;