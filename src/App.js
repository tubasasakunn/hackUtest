import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Top } from "./news/pages/Top";
import { ArticleDetail } from "./news/pages/ArticleDetail";
import { AddArticle } from "./news/pages/AddArticle";
import { TagArticleList } from "./news/pages/TagArticleList";
import { AddTag } from "./news/pages/AddTag";
import { NotFound } from "./news/pages/NotFound";
import { Tree } from "./news/pages/Tree";
import { Sigma } from "./news/pages/Sigma";

import "./css/index.css";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Routes>

            <Route path="/" element={<Top />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
            <Route path="/addArticle" element={<AddArticle />} />
            <Route path="/addTag" element={<AddTag />} />
            <Route path="/tree/:id" element={<Tree />} />
            <Route path="/sigma" element={<Sigma />} />
            <Route path="/tags/:tag" element={<TagArticleList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
