import React, { useEffect, useState } from "react";
import { getProfileById } from "../../services";
import { Container, Typography } from "@mui/material";
import { ProfileById } from "../../types";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Avatar, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import AccordionComponent from "../../components/Accordion";

export default function Profile() {
  const { id } = useParams();

  const [profilePayload, setProfilePayload] = useState<
    ProfileById | undefined
  >();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const data = await getProfileById(id);
        setProfilePayload(data);
      } catch (error) {
        setError("error");
      }
    })();
  }, [id]);
  return (
    <Container>
      {profilePayload !== undefined && error.length < 1 && (
        <Paper
          sx={{
            margin: "3rem",
            paddingTop: "1rem",
            display: "grid",
            grid: "100%/ 50% 50%",
            justifyContent: "center",
          }}
        >
          <Avatar
            alt={profilePayload?.name}
            src={profilePayload?.image}
            sx={{
              width: 200,
              height: 200,
              margin: "10px auto",
            }}
          />
          <Container sx={{ display: "grid" }}>
            <Typography variant="h4" component="h2">
              {profilePayload?.name}
            </Typography>

            <AccordionComponent
              title={"Status"}
              text={profilePayload?.status}
            />
            <AccordionComponent
              title={"Species"}
              text={profilePayload?.species}
            />
            <AccordionComponent
              title={"Location"}
              text={profilePayload?.location.name}
            />
            <AccordionComponent
              title={"Gender"}
              text={profilePayload?.gender}
            />
            <AccordionComponent
              title={"Episodes"}
              text={profilePayload?.episode.join(", ")}
            />
          </Container>
        </Paper>
      )}

      {profilePayload === undefined && error.length > 1 && (
        <Typography variant="h2" component="h2" color="primary">
          <SentimentVeryDissatisfiedIcon sx={{ fontSize: "50px" }} />
          {` Sorry! Could you try another name?  we couldn't find "${id}".`}
        </Typography>
      )}
    </Container>
  );
}
