import { makeStyles } from "@material-ui/core";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { MdExpandMore } from "react-icons/md";

const useStyles = makeStyles(() => ({
  section: {
    borderBottom: "1px solid #CFCFCF",
    // padding: "16px 26px",
    padding: "1% 1.5%",
  },
  expandIcon: {
    background: "rgba(196, 196, 196, 0.25)",
    // padding: 8,
    borderRadius: "50%",
    width: 30,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Faq = (props) => {
  const classes = useStyles();
  const { width } = props;

  const data = [
    {
      question: "Q. Is Auction Journal FREE?",
      answer:
        "A. Yes, auction listings are free for all auctioneers who place at the bottom of their home page a link to AuctionJournal.com",
    },
    {
      question:
        "Q. Can I list my auction on the website and have the photos and descriptions all appear on my own website?",
      answer: `A. Yes!  Learn more... ${process.env.REACT_APP_BASE_URL_WEBSITE}`,
    },
    {
      question: "Q. How many auctions may I list?",
      answer: "A. As many as you have.",
    },
    {
      question:
        "Q. Is there a limit on the number of photos I may list for my auctions?",
      answer: "A. No!  Add as many photos as you would like.",
    },
    {
      question: "Q. Will you offer Live Webcast Auctions and Online Auctions?",
      answer: "A. Yes!  Coming very soon!",
    },
    {
      question: "Q. How long does it take to have my account approved?",
      answer:
        "A. We take the auction industry seriously and we vet all auctioneers by requiring verification from the State they are licensed.  Our personnel work quickly to approve accounts as soon as possible.",
    },
    {
      question: `Q. What is the Auction Journal?`,
      answer: `A. The Auction Journal is your resource for the highest quality auction listings.  
The Auction Journal provides the most robust way to search and find auctions and for online live webcast auctions with real-time bidding and online auctions.`,
    },
    {
      question: `Q. Have the Auctioneers been vetted that list auctions?`,
      answer: `A. Yes!  The Auction Journal is committed to the integrity of the Auction industry.  The Auction Journal will only permit Auctioneers that we have verified are licensed and bonded in the state they provide services. `,
    },
    {
      question: `Q. Must I register to search for auctions?`,
      answer: `A. No.  However, if you want to receive auction alerts from Auction Companies and/or Auctioneers, keywords about products you are hoping to find, pre-register for auctions with the auctioneers and be able to bid at live webcast and online auctions, you will want to create an account and select what notifications about auctions you would like to receive.`,
    },
  ];

  return (
    <div style={{ margin: "2% 8%" }}>
      <div className={classes.section}>
        <Typography
          style={{
            color: "#434343",
            fontSize:
              width === "xs" ? "16px" : width === "sm" ? "23px" : "32px",
          }}
        >
          FAQ - Frequently Asked Questions
        </Typography>
      </div>
      <div style={{ padding: 0 }}>
        {data.map((dt, i) => {
          return (
            <Accordion
              key={i}
              style={{
                margin: "0px 0px",
                padding: "1%",
                borderRadius: 0,
                borderBottom: "1px solid #CFCFCF",
              }}
              elevation={0}
            >
              <AccordionSummary
                expandIcon={
                  <div className={classes.expandIcon}>
                    <MdExpandMore />
                  </div>
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  style={{
                    fontWeight: 500,
                    fontSize:
                      width === "xs"
                        ? "12px"
                        : width === "sm"
                        ? "12px"
                        : "15px",
                  }}
                >
                  {dt.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  style={{
                    fontSize:
                      width === "xs"
                        ? "12px"
                        : width === "sm"
                        ? "12px"
                        : "15px",
                  }}
                >
                  {dt.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
