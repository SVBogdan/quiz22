
import { useEffect } from "react";
import { useHistory } from "react-router";
import "./Result.css";
import { Button } from "@mui/material";

export default function Result({ name, score }) {

    const history = useHistory();

    useEffect(() => {
        if (!name) {
            history.push("/");
        }
    }, [name, history]);

    return (
        <div className='result'>
            <span className='title'>Final score for {name} is {score} </span>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{ alignSelf: "center", marginTop: 20 }}
                href="/"
            >
                Go to homepage
            </Button>
        </div>
    );
}
