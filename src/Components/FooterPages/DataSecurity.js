import React from "react";
import { Typography } from "@material-ui/core";

function DataSecurity(props) {
  const { width } = props;
  const style = {
    head: {
      fontWeight: "bold",
      fontSize: width === "xs" ? "15px" : width === "sm" ? "23px" : "32px",
      marginTop: "3%",
    },
    subHead: {
      fontWeight: "bold",
      fontSize: width === "xs" ? "10px" : width === "sm" ? "14px" : "20px",
      margin: "2% 0 1% 0",
    },
    contentHead: { fontWeight: "bold" },
    content: {
      margin: "1% 0",
      fontSize: width === "xs" ? "8px" : width === "sm" ? "12px" : "15px",
    },
    bullet: {
      fontSize: width === "xs" ? "8px" : width === "sm" ? "12px" : "15px",
    },
  };
  return (
    <div style={{ margin: "2% 8%" }}>
      <Typography style={style.head}>Data Security</Typography>
      <Typography style={style.subHead}>Registration</Typography>
      <Typography style={style.content}>
        During the registration process, we may ask you to provide sensitive
        personal and if you are a winning bidder will need to enter credit
        information that allows us to serve you better. We are clearly aware of
        the sensitivity of this information that you have entrusted to us and
        have taken security measures to safeguard your personal information
        online.
      </Typography>
      <Typography style={style.content}>
        You may access your account information online from True Blue Auctions
        Website only with your User ID and Password that is known to you only
        and that you have created when you set up your online account.
      </Typography>
      <Typography style={style.content}>
        True Blue Auctions uses advanced technology to encrypt your login,
        password and credit information that is stored in a secure database
        allowing limited access to a select few of authorized True Blue Auctions
        employees only.
      </Typography>
      <Typography style={style.content}>
        Security professionals regularly conduct tests to determine our
        vulnerability and to fix flaws immediately.
      </Typography>
      <Typography style={style.content}>
        Security patches are applied immediately as soon as they are released by
        the vendors with whom we are working.
      </Typography>

      <Typography style={style.subHead}>Fraudulent E-mails</Typography>
      <Typography style={style.content}>
        Please note that True Blue Auctions never sends e-mails asking you to
        reply with your account or other personal information.
      </Typography>
      <Typography style={style.content}>
        E-mail fraud is a common tool of identity thieves. An increasingly
        common fraudulent activity, called - phishing- , uses official-looking
        e-mails to deceive consumers into disclosing their personal information.
        The e-mail often directs the recipient to a look-alike Website of a
        legitimate business, tricking consumers into believing they are
        responding to a valid request. Other fraudulent e-mails entice users to
        make a purchase and are designed primarily to obtain credit card or bank
        account information. True Blue Auctions never sends e-mails asking you
        to reply with your account or other personal information.
      </Typography>
      <Typography style={style.content}>
        To avoid getting caught in any of these fraudulent activities, please
        remember to:
      </Typography>
      <ul style={{ margin: "0px", paddingLeft: "8%", paddingBottom: "1%" }}>
        <li style={{ margin: "0px", ...style.bullet }}>
          <Typography style={style.bullet}>
            Keep your login and password secret
          </Typography>
        </li>
        <li style={{ margin: "0px", ...style.bullet }}>
          <Typography style={style.bullet}>
            Change your password periodically
          </Typography>
        </li>
        <li style={{ margin: "0px", ...style.bullet }}>
          <Typography style={style.bullet}>
            Never give out your personal and account information by e-mail or
            telephone, unless you initiated the contact
          </Typography>
        </li>
        <li style={{ margin: "0px", ...style.bullet }}>
          <Typography style={style.bullet}>
            Verify that you are on this page, https://www.trueblueauctions.com/,
            whenever you are about to register, edit or add information to your
            account, or set up a new True Blue Auctions account. You may want to
            add this URL to your browser- s Favorites or Bookmarks menu
          </Typography>
        </li>
      </ul>
      <Typography style={style.content}>
        Always end your secure session on www.TrueBlueAuctions.com completely by
        clicking the Log Out link at the top right-hand side of the page and by
        closing your browser- s window
      </Typography>
      <Typography style={style.subHead}>
        Fraudulent Invoices & Demands for Payment
      </Typography>
      <Typography style={style.content}>
        If you ever have any reason to doubt the authenticity of an invoice with
        True Blue Auctions on it or any other request for payment, please do not
        hesitate to contact our Client Services team, who will be able to
        confirm if it is a valid invoice and advise you on next steps if it is
        not.
      </Typography>
      <Typography style={style.subHead}>Contact</Typography>
      <Typography style={style.content}>
        If you have any queries or concerns about the use and protection of your
        personal data, please e-mail us at info@TrueBlueAuctions.com or
        telephone our True Blue Auctions Client Services Department,
        Monday-Friday, 9:00 am - 9:00 pm (local times) as follows:
        <br />
        &emsp;&emsp;Main Office: Toll-Free 866-282-7355
      </Typography>
    </div>
  );
}

export default DataSecurity;
