import React from 'react';

const Navbar = ({ menuList, filterItem }) => {
    return (
        <div>
            <nav className='navbar'>
                <div className='btn-group'>

                    {
                        menuList.map((curelem) => {
                            return (
                                <>
                                    <button className='btn-group__item' onClick={() => filterItem(curelem)}> {curelem}</button>
                                </>
                            )
                        })
                    }




                </div>
            </nav>
        </div>
    );
}

export default Navbar;
