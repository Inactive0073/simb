import React from "react";
import { Link } from "react-router-dom";
import { Button } from "rebass";
import { Flex } from 'reflexbox';

function Competition({competitions,firstCompetitionPage,lastCompetitionPage,competitionsPerPage}) {
    const currentCompetitionPage = (competitions.slice(firstCompetitionPage, lastCompetitionPage)).length === 0 ? competitions.slice(0, competitionsPerPage) : competitions.slice(firstCompetitionPage, lastCompetitionPage);

    return(
        <>
        <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
            {
                currentCompetitionPage.map((competition,i) => (
                    <div>
                        <Link key={i} mr={2} to={`/competitions/${competition.id}/teams`}>
                            <Button
                                key={id}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                p={3}
                                color='primary'
                                fontWeight="regular"
                                fontSize="20px"
                                lineHeight="25px"
                                width={1/3}
                                >
                                <p style={{
                                    display:"block",
                                    margin: "0 auto 12px"
                                }}
                                >{competition.area.name}</p>
                                <p style={{
                                    display:"block",
                                    margin: "0 auto 12px"
                                }}
                                >{competition.name}</p>
                            </Button>
                        </Link>
                    </div>
                ))
            }
        </Flex>
        </>
    )
}
export default Competition;