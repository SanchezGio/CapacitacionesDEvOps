/* eslint-disable react/no-danger */
import React from 'react';
import './faqs.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import parse from 'html-react-parser';
import Typography from '@mui/material/Typography';
import arrowDownRegular from '../../assets/icons/arrow-down-regular.svg';
import faqsJSON from '../../data/faqs';

const FAQS = () => (
  <div className="container-faqs">
    <div className="container-title my-4">
      <h2 className="title-faqs fontTelefonicaBold text-center">Preguntas frecuentes</h2>
    </div>
    <div>
      {faqsJSON.mainEntity.map((entity) => (
        <Accordion key={entity.name} className="margin-faqs">
          <AccordionSummary
            expandIcon={<img className="icon" src={arrowDownRegular} alt="" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component="div">
              <div>{parse(entity.name)}</div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">
              <div className="container-answer">{parse(entity.acceptedAnswer.text)}</div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  </div>
);

export default FAQS;
