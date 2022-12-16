import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

function TimeAndDate() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title> {time.toLocaleTimeString()}</Card.Title>
                    <Card.Title>{time.toLocaleDateString()}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
}

export default TimeAndDate;