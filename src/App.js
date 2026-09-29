import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import Resources from "./pages/Resources";
import Publications from "./pages/Publications";
import NotFound from "./pages/NotFound";

function App() {
  // Strip any trailing slash so "/blog/" matches the same as "/blog".
  // The home path "/" collapses to "".
  const pathname = window.location.pathname.replace(/\/+$/, "");
  const blogMatch = pathname.match(/^\/blog\/(.+)$/);

  if (blogMatch) {
    return <BlogPost slug={blogMatch[1]} />;
  }

  if (pathname === "/blog") {
    return <BlogList />;
  }

  if (pathname === "/resources") {
    return <Resources />;
  }

  if (pathname === "/publications") {
    return <Publications />;
  }

  if (pathname === "") {
    return <Main />;
  }

  return <NotFound />;
}

export default App;
