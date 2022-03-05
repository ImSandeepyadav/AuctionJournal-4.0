import React from 'react';
import AppBar from '../../Components/AppBar/AppBar';
import Banner from '../../Components/Banner/Banner';
// import GroupSelect from '../../Components/GroupSelect/GroupSelect';
import Featured from '../../Components/Featured/Featured';
import Blog from '../../Components/Blog/Blog';
import AppFooter from '../../Components/AppFooter/AppFooter';

function Home() {
    return(
    <div>
        <AppBar />
        {/* <GroupSelect /> */}
        <Banner />
        <Blog />
        <Featured />
        <AppFooter />
    </div>
    );
}

export default Home;