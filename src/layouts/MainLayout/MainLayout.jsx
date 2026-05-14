import NavigationBar from "@layouts/NavigationBar";
import PropTypes from "prop-types";
import Footer from "@layouts/Footer/index.js";

const MainLayout = ({ children }) => {
    return (
        <div id="WTF" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "1240px", margin: "0 auto", padding: "0"}}>
            <NavigationBar />
            <>
                {children}
            </>
            <Footer/>
        </div>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
};
export default MainLayout;
