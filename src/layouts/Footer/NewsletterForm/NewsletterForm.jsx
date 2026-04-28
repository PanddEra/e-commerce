import { useForm } from "react-hook-form";
import {Box} from "@mui/material";

const NewsletterForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <Box
            sx={{
                width: 1240,
                height: 180,
                borderRadius: 20,
                backgroundColor: "black",
            }}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    placeholder="Enter your email address"
                    {...register("email", { required: true })}
                    style={{
                        width: 349,
                        height: 48,
                        borderRadius: 4,
                        padding: "0 10px",
                        marginRight: 10,
                    }}
                />
                <button
                    type="submit"
                    style={{
                        width: 349,
                        height: 48,
                        borderRadius: 4,
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Subscribe
                </button>
            </form>
                    
        </Box>
    )
}
export default NewsletterForm;