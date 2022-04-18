import React from "react";
import { Link } from "react-router-dom";
import { Button } from "rebass";
import { Flex } from 'reflexbox';

function Competition({competitions,firstCompetitionPage,lastCompetitionPage,competitionsPerPage}) {
    const currentCompetitionPage = (competitions.slice(firstCompetitionPage, lastCompetitionPage)).length === 0 ? competitions.slice(0, competitionsPerPage) : competitions.slice(firstCompetitionPage, lastCompetitionPage);

    return(
        <Flex flexWrap="wrap" alignItems="center" justifyContent="center" >
            {
                currentCompetitionPage.map((competition,i) => (
                    <div style={{
                        flexShrink:"0",
                        margin:"0 24px 24px 0",
                        display:"flex",
                        position:"relative"
                    }}>
                        <Link key={i}  to={`/competitions/${competition.id}/teams`} 
                            width="100%"
                            display="block"
                            textDecoration="none"
                        >
                            <Button
                                key={i}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                flexDirection="column-reverse"
                                p={3}
                                color='black'
                                fontWeight="regular"
                                fontSize="20px"
                                lineHeight="25px"
                                backgroundColor="rgba(51, 51, 77,0.8)"
                                color="#fff"
                                cursor="pointer"
                                width="300px"
                                height="150px"
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
    )
}
export default Competition;