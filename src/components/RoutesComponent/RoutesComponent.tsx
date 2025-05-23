import * as React from "react";
import { Route, Routes } from "react-router-dom";
//import ErrorPage from "../../pages/ErrorPage/ErrorPage";
//import LegalNoticePage from "../../pages/Static/LegalNoticePage/LegalNoticePage";
//import PrivacyPolicyPage from "../../pages/Static/PrivacyPolicyPage/PrivacyPolicyPage";
import HomePage from "../../pages/HomePage/HomePage";
import ContactPage from "../../pages/ContactPage/ContactPage";
import BlogPage from "../../pages/BlogPage/BlogPage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";
import BlogPostPage from "../../pages/BlogPostPage/BlogPostPage";

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogPostPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
};
export default RoutesComponent;
