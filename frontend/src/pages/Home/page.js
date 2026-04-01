import AboutUs from "@/components/Ui/Home/AboutUs";
import Banner from "@/components/Ui/Home/Banner";

const HomePage = () => {
    return (
        <>
            <header className="mb-6 md:mb-24">
                <Banner />
            </header>
            <section className="mb-6 md:mb-24">
                <AboutUs />
            </section>
        </>
    );
};

export default HomePage;