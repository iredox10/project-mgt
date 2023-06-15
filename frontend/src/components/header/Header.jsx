import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='header'>
        <div className="logo">logo</div>
        <nav className="nav">
            <div className='links'>
            <button>Home</button>
            <button>Blog</button>
            </div>
            <div className="login">
                <button>login</button>
            </div>
        </nav>
    </div>
  )
}
