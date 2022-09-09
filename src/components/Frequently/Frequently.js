import { Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import FrequentlyAccordion from "./FrequentlyAccordion";

const info = {
    first: {
        title: '01. What is the process of project final delivery system?',
        text: 'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat. We try to reply quickly, so you need not to wait too long for a response!.'
    },
    second: {
        title: '02. What is payment process, believe in upfront?',
        text: 'Please read the documentation carefully. We also have some online  video tutorials regarding this issue. If the problem remains, Please Open a ticket in the support forum.'
    },
    third: {
        title: '03. What is the process of project final delivery system?',
        text: 'At first, Please check your internet connection. We also have some online  video tutorials regarding this issue. If the problem remains, Please Open a ticket in the support forum.'
    },
    fourth: {
        title: '04. Estimate project budget for categories?',
        text: "Our core members created this place for Designers, Developers, Product Owners, Marketing Managers, startup's, Freelancers and really for everyone who appreciates fine designs and well-crafted sites. We want to inspire and support you in the process of creating your own unique website projects."
    },
    fifth: {
        title: '05. All about project customization & monetization',
        text: 'We are giving the update of this theme continuously. You will receive an email Notification when we push an update. Always try to be updated with us.'
    },
}

const Frequently = () => {
  return (
    <section
      id="frequently"
      style={{ padding: "60px 0", backgroundColor: "#fff", color: "#000" }}
    >
      <Container>
        <Stack alignItems="center">
          <Typography
            variant="h5"
            fontSize={30}
            fontWeight={700}
            component="h6"
            marginBottom={6}
          >
            Frequently Ask Question
          </Typography>
        </Stack>
        <Stack alignItems='center' gap='10px'>
            <FrequentlyAccordion title={info.first.title} text={info.first.text} />
            <FrequentlyAccordion title={info.second.title} text={info.second.text} />
            <FrequentlyAccordion title={info.third.title} text={info.third.text} />
            <FrequentlyAccordion title={info.fourth.title} text={info.fourth.text} />
            <FrequentlyAccordion title={info.fifth.title} text={info.fifth.text} />

        </Stack>
      </Container>
    </section>
  );
};

export default Frequently;
