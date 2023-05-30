import React from 'react';
import { Route, Routes} from 'react-router-dom';
import PostList from "./pages/PostList/PostsList.jsx";
import AboutPage from "./pages/Aboutpage/AboutPage.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import CreatePost from "./components/CreatePost/CreatePost.jsx";

const App = () => {
    return (
        <div>
            <NavBar/>
           <Routes>
               <Route index element={<PostList/>}/>
               <Route path='/about/:id' element={<AboutPage/>}/>
               <Route path='/create' element={<CreatePost/>}/>
           </Routes>
        </div>
);
};

export default App;