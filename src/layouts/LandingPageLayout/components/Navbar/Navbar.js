import React, { useEffect, useState, useRef } from "react";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import india from '../../../../assets/images/india.png';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../../../../assets/images/logo.png';
import { withRouter } from "react-router";

const navigation = [
  { name: 'About Us', href: '#', current: false, secLink: 'section2' },
  { name: 'Mission and Vission', href: '#', current: false, secLink: 'section3' },
  { name: 'Our Services', href: '#', current: false, secLink: 'section4' },
  { name: 'Pricing', href: '#', current: false, secLink: 'section5' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = (props) => {


  return (
    <React.Fragment>Navbar</React.Fragment>
  )
}

export default withRouter(Navbar);

