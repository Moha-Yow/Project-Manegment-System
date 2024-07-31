import React, { useContext } from 'react';
import { FaSun, FaMoon, FaLeaf, FaTint, FaFireAlt } from 'react-icons/fa';
import { ThemeContext } from '../Context/ThemeContext';

const SettingsPopup = ({ onClose }) => {
    const { changeTheme } = useContext(ThemeContext);

    const handlePopupClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4" onClick={onClose}>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg" onClick={handlePopupClick}>
                <h1 className="text-xl sm:text-2xl font-bold mb-4">Settings</h1>
                <div>
                    <p className="text-black mb-2">Select Theme:</p>
                    <button onClick={() => changeTheme('dark')} className="text-black flex items-center mb-2">
                        <FaMoon className="mr-2" /> Dark
                    </button>
                    <button onClick={() => changeTheme('green')} className="text-black flex items-center mb-2">
                        <FaLeaf className="mr-2" /> Green
                    </button>
                    <button onClick={() => changeTheme('blue')} className="text-black flex items-center mb-2">
                        <FaTint className="mr-2" /> Blue
                    </button>
                    <button onClick={() => changeTheme('red')} className="text-black flex items-center mb-2">
                        <FaFireAlt className="mr-2" /> Red
                    </button>
                    <button onClick={() => changeTheme('light')} className="text-black flex items-center mb-2">
                        <FaSun className="mr-2" /> Light
                    </button>
                </div>
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default SettingsPopup;
