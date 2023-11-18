import React from "react";
import "./style.scss";
import Section from "../shared/section";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";
import BlogCard from "./blog-card";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Blogs & Articles"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="Parag Naik"
                    date="Aug 10 2023"
                    image={Blog1}
                    title="Tree a data structure"
                    description="Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
                />
                <BlogCard
                    user="Parag Naik"
                    date="Aug 10 2023"
                    image={Blog2}
                    title="Tree a data structure"
                    description="Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
                />
                <BlogCard
                    user="Parag Naik"
                    date="Aug 10 2023"
                    image={Blog3}
                    title="Tree a data structure"
                    description="Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
                />
            </div>
        </Section>
    );
};

export default Blogs;
