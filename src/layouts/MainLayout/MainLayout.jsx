import NavigationBar from "@layouts/NavigationBar";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
    return (
        <>
            <NavigationBar />
            <>
                {children}
            </>
        </>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
};
export default MainLayout;
