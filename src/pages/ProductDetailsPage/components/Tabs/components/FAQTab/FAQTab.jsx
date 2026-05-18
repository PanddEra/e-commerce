import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";

const FAQTab = () => {
    const id = React.useId();
    return (
        <div style={{ margin: "50px 0" }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel1-content`}
                        id={`${id}-panel1-header`}
                    >
                        <Typography variant="body1">What payment methods do you accept?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                        We accept all major credit and debit cards, PayPal, Apple Pay, Google Pay, and other secure payment options available at checkout.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel2-content`}
                        id={`${id}-panel2-header`}
                    >
                        <Typography variant="body1">How long does shipping take?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Shipping times vary depending on your location. Most orders are processed within 1–2 business days and delivered within 3–7 business days.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel3-content`}
                        id={`${id}-panel3-header`}
                    >
                        <Typography variant="body1">Do you offer international shipping?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Yes, we ship to many countries worldwide. Shipping rates and delivery times are calculated at checkout based on your destination.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel4-content`}
                        id={`${id}-panel4-header`}
                    >
                        <Typography variant="body1">Can I track my order?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Absolutely. Once your order ships, you’ll receive a tracking number by email so you can follow your package in real time.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-panel4-content`}
                        id={`${id}-panel4-header`}
                    >
                        <Typography variant="body1">What should I do if I receive a damaged or incorrect item?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                        Please contact our support team within 48 hours of delivery with photos of the item, and we’ll quickly arrange a replacement or refund.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${id}-panel5-content`}
                    id={`${id}-panel5-header`}
                    >
                    <Typography variant="body1">What is your return policy?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2">
                    We offer a 30-day return policy for most items. If you’re not satisfied with your purchase, please contact our support team to initiate a return or exchange.
                    </Typography>
                </AccordionDetails>
                </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${id}-panel6-content`}
                id={`${id}-panel6-header`}
                >
                    <Typography variant="body1">Do you offer gift wrapping?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2">
                    Yes, we offer gift wrapping for an additional fee. You can select this option at checkout and include a personalized message if you’d like.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${id}-panel7-content`}
                    id={`${id}-panel7-header`}
                >
                    <Typography variant="body1">Can I change or cancel my order after placing it?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2">
                    Orders can usually be modified or canceled within a short time after purchase. Contact us as soon as possible, and we’ll do our best to help.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${id}-panel8-content`}
                    id={`${id}-panel8-header`}
                >
                    <Typography variant="body1">How can I contact customer support?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2">
                        You can reach our support team via email, live chat, or the contact form on our website. We aim to respond within 24 hours.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default FAQTab;