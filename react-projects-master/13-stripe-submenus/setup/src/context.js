import React, { useState, useContext, useEffect } from 'react'
import sublinks from './data'


const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const [location, setLocation] = useState({});

    const [page, setPage] = useState({page: '', links: []});

    const [listPage, setListPage] = useState([]);

    useEffect(() => {
        const newList = sublinks.map((item) => item.page);
        setListPage(newList);
    }, [])

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((item) => item.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);   
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    return <AppContext.Provider
        value={{
            isSidebarOpen,
            isSubmenuOpen,
            openSidebar,
            closeSidebar,
            openSubmenu,
            closeSubmenu,
            location,
            page,
            listPage
        }}
    >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}