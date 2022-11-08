import { TextField, MenuItem, Button } from "@mui/material"
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Categories from "../../data/categoires"
import "./Home.css";

export default function Home({ name, setName, fetchQuestions }) {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const history = useHistory();

    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
            setError(true);
            return;
        }
        setError(false);
        fetchQuestions(category, difficulty);
        history.push("/quiz");
    }

    return (
        <div className="content">
            <div className="settings">
                <span style={{ fontSize: 40 }}>Quiz settings</span>
                <div className="settings_select">
                    {error && <ErrorMessage>Please fill all the fileds</ErrorMessage>}

                    <TextField
                        style={{ marginBottom: 30, marginTop: 15 }}
                        label="Your Name"
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        select
                        label="Category"
                        variant="outlined"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                        style={{ marginBottom: 30 }}
                    >
                        {
                            Categories.map((cat) => (
                                <MenuItem key={cat.category} value={cat.value}>
                                    {cat.category}
                                </MenuItem>

                            ))}
                    </TextField>

                    <TextField
                        select
                        label="Difficulty"
                        variant="outlined"
                        style={{ marginBottom: 30 }}
                        onChange={(e) => setDifficulty(e.target.value)}
                        value={difficulty}
                    >
                        <MenuItem key="Easy" value="easy">
                            Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="medium">
                            Medium
                        </MenuItem>
                        <MenuItem key="Hard" value="hard">
                            Hard
                        </MenuItem>
                    </TextField>
                    <Button variant="text" color="secondary" size="large"
                        onClick={handleSubmit}
                    >
                        Start quiz
                    </Button>
                </div>
            </div>

            <img src="/quiz1.svg" className="banner" alt="quiz img" />
        </div>
    );
}