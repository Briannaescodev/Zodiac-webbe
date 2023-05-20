import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Grid.css";

export default function Grid1() {
    const {sign} = useParams();
    const [zodiac, setZodiac] = useState();

    useEffect(()=>{
        fetch("https://us-central1-zodiacwebbe.cloudfunctions.net/api/data")
            .then(resp=>resp.json())
            .then(allsigns=>{
                setZodiac(allsigns.find(el=>el.sign === sign))
            })
    },[sign])

    console.log("=====>", zodiac);
  if(!zodiac) return <h2> loading </h2>
    return (
        <>
        <h2>{sign.toUpperCase()}</h2>
        <Container className="grid">            
            <Row>
                <Col className="bg-danger">{zodiac["affirm-1-text"]}</Col>
            </Row>
        </Container>

        </>
    );
}