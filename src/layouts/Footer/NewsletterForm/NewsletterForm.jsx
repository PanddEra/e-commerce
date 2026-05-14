import { useForm } from "react-hook-form";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";

const NewsletterForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "36px 64px",
                width: "100%",
                height: 180,
                borderRadius: "20px",
                backgroundColor: "black",
            }}
        >
            <Typography sx={{
                fontStyle: "bold",
                fontSize: 40,
                fontWeight: 700,
                width: "550px",
                color: "white",
                alignItems: "center"
            }}>
                STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </Typography>
            <form style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "349px",
                gap: 14,
            }} onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    placeholder="Enter your email address"
                    {...register("email", { required: true })}
                    style={{
                        width: "100%",
                        height: 48,
                        borderRadius: 64,
                        padding: "12px 16px",
                        border: "none"
                    }}
                />
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        height: 48,
                        borderRadius: 64,
                        border: "none",
                        cursor: "pointer",
                        padding: "12px 16px",
                    }}
                >
                    Subscribe
                </button>
            </form>
                    
        </Box>
    )
}
export default NewsletterForm;