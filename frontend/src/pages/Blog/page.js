import NewsBlog from "@/components/Ui/Home/NewsBlog";

const BlogPage = () => {
    return (
        <div className="pt-20 md:pt-32 pb-20">
            <header className="container text-center mb-12 md:mb-16">
                <h1 className="text-4xl md:text-6xl font-black mb-4">Our Latest Insights</h1>
                <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                    Deep dives into industrial calibration, safety standards, and logistical excellence.
                </p>
            </header>
            
            <NewsBlog limit={null} />
        </div>
    );
};

export default BlogPage;