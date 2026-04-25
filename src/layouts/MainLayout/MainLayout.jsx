import { Container } from "@mui/material";
import NavigationBar from "@layouts/NavigationBar";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
    return (
        <>
            <NavigationBar />
            <Container>
                {children}
            </Container>
        </>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
};
export default MainLayout;
