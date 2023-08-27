import React from 'react';

function ContentWrapper({children}) {
    return (
        <div className='max-w-[1280px] mx-auto'>
            {children}
        </div>
    );
}

export default ContentWrapper;