/**
 * Social Media Application
 *
 * This React application serves as a simple Social Media platform. It includes features
 * such as creating and listing posts. Users can switch between the home page
 * (displaying existing posts) and the create post page.
 *
 * @version 1.0.0
 * @author Mohammed Anas
 */

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import { CreatePost } from "./components/CreatePost.jsx";
import { PostList } from "./components/PostList.jsx";
import { useState } from "react";
import { PostListProvider } from "./store/post-list-store.jsx";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
