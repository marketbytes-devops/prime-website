import AboutUs from "@/components/Ui/Home/AboutUs";
import Banner from "@/components/Ui/Home/Banner";
import OurServices from "@/components/Ui/Home/OurServices";
import WeOffers from "@/components/Ui/Home/WeOffers";
import OurCertifications from "@/components/Ui/Home/OurCertifications";
import OurProducts from "@/components/Ui/Home/OurProducts";
import IndustriesWeServe from "@/components/Ui/Home/IndustriesWeServe";
import ClienteleWeServe from "@/components/Ui/Home/ClienteleWeServe";
import FAQ from "@/components/Ui/Home/FAQ";
import NewsBlog from "@/components/Ui/Home/NewsBlog";

const HomePage = () => {
    return (
        <>
            <header className="mb-6 md:mb-24">
                <Banner />
            </header>
            <section className="mb-6 md:mb-24">
                <AboutUs />
            </section>
            <section className="mb-6 md:mb-24">
                <OurServices />
            </section>
            <section className="mb-6 md:mb-24">
                <WeOffers />
            </section>
            <section className="mb-6 md:mb-24">
                <OurCertifications />
            </section>
            <section className="mb-6 md:mb-24">
                <OurProducts />
            </section>
            <section className="mb-6 md:mb-24">
                <IndustriesWeServe />
            </section>
            <section className="mb-6 md:mb-24">
                <ClienteleWeServe />
            </section>
            <section className="mb-6 md:mb-24">
                <FAQ />
            </section>
            <section>
                <NewsBlog />
            </section>
        </>
    );
};

export default HomePage;