"use client"
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Badge, Button, Menu, TextField, InputAdornment } from "@mui/material";
import { FavoriteBorder, MarkunreadMailboxOutlined, PersonOutline, Search } from "@mui/icons-material";
import logo from '../../assets/logo.svg';
import cart from '../../assets/cart.svg';

function Header() {
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const [name, setName] = useState("Profile");
    const [cartItemCount, setCartItemCount] = useState(0); // State for cart item count
    const openMenu = Boolean(menuAnchorEl);

    const handleClick = (event) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setMenuAnchorEl(null);
    };

    return (
        <div className='w-full h-[60px] mt-0 flex items-center bg-[#A03037] z-20 justify-around gap-20'>
            <div className="w-full md:w-[50%] flex flex-col md:flex-row items-center md:gap-[80px]">
                <div className='h-[48px] pr-[30px] md:pr-0  ml-[130px] '>
                    <Link href="/">
                        <div className='flex gap-[5px] items-center'>
                            <Image src={logo} className='w-[40px] h-[40px]' alt='Head Logo'/>
                            <p className='text-white text-2xl font-sans'>Bookstore</p>
                        </div>
                    </Link>
                </div>
                <TextField 
                    className="w-full md:w-[95%] h-full bg-white rounded" 
                    id="search" 
                    placeholder="Search" 
                    size="small" 
                    type="search"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search/>
                            </InputAdornment>
                        )
                    }}
                />
            </div>
            <div className='flex gap-10 items-center mr-[220px]'>
                <div onClick={handleClick} className="flex flex-col items-center text-white">
                    <PersonOutline sx={{color:"white", fontSize:24}}/>
                    <p style={{ fontSize: 12, margin: 0 }}>{name}</p>
                </div>
                <Link href="/Dashoard/Mycart">
                    <div className="flex flex-col items-center text-white mt-[4px]">
                        <Badge badgeContent={cartItemCount} color="primary"> 
                            <Image src={cart} alt="cart" width="24px"/>
                        </Badge>
                        <p style={{ fontSize: 12, margin: 0 }}>Cart</p>
                    </div>
                </Link>
            </div>
            <Menu 
                id="simple-menu" 
                open={openMenu} 
                onClose={handleCloseMenu} 
                anchorEl={menuAnchorEl}
            >
                <div className='w-[240px] flex flex-col gap-[12px] pl-8'>
                    {localStorage.getItem('userName') ? 
                        <span className="font-bold">Hello {name},</span> :
                        <span className="font-bold">Welcome</span>
                    }
                    {localStorage.getItem('userName') ? (
                        <>
                            <Link href="/profilepage"><PersonOutline/>Profile</Link>
                            <Button variant="outlined" sx={{width:'150px',height:'40px',borderColor:"#A03037",color:"#A03037"}} onClick={logout}>Logout</Button>
                        </>
                    ) : (
                        <>
                            
                                <div className="text-[11px] text-[#878787] mt-[-10px] mb-[10px]">
                                    To access account and manage orders
                                    <Link href="/Authpage">
                                    <Button 
                                        variant="outlined" 
                                        sx={{width:'150px',height:'40px',borderColor:"#A03037",color:"#A03037",marginTop:"10px"}}
                                    >
                                        LOGIN/SIGNUP
                                    </Button>
                                    </Link>
                                </div>
                            
                        </>
                    )}
                    <Link href="/Dashoard/MyordersCart"><MarkunreadMailboxOutlined/> My Orders</Link>
                    <Link href="/Dashoard/Wishlist"><FavoriteBorder/> My Wishlist</Link>
                </div>
            </Menu>
          
        </div>
    );
}

export default Header;
