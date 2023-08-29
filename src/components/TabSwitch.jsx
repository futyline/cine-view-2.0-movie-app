import { useState } from 'react';

function TabSwitch({tabOne, tabTwo, endpointOne, endpointTwo, setEndpoint}) {

    const [activeTab, setActiveTab] = useState('tabOne');

    const handleClick = (tab) => {
        if (tab === activeTab) {
            setActiveTab(activeTab);
        } else {
            setActiveTab(tab)
        }
    };

    return (
        <div className=''>
            <button 
                onClick={() => {
                    handleClick("tabOne");
                    setEndpoint(endpointOne);
                }}
                className={`px-8 py-4 ${
                    activeTab === 'tabOne'
                        ? 'bg-orange-600'
                        : 'bg-amber-500 hover:bg-orange-600'
                } text-white font-bold rounded-tl-md rounded-bl-md border-r-2 border-[#04152d]`}
            >
                {tabOne}
            </button>
            <button 
                onClick={() => {
                    handleClick("tabTwo");
                    setEndpoint(endpointTwo);
                }}                
                className={`px-8 py-4 ${
                    activeTab !== 'tabTwo'
                        ? 'bg-amber-500 hover:bg-orange-600'
                        : 'bg-orange-600'
                } text-white font-bold rounded-tr-md rounded-br-md`}
            >
                {tabTwo}
            </button> 
        </div>
    );
}

export default TabSwitch;