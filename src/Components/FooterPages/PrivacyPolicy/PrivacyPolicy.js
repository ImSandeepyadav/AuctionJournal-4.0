import { Typography } from "@material-ui/core";
import React from "react";

function PrivacyPolicy(props) {
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
      margin: "1% 0",
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
      <Typography style={style.head}>Auction Journal Privacy Policy</Typography>
      <Typography style={style.content}>
        Auction Journal LLC considers the privacy and protection of our clients’
        data, both corporate and personal, to be of the utmost importance and we
        take vigorous measures across our business to protect the security and
        integrity of all such information.
      </Typography>
      <Typography style={style.content}>
        We take particular steps in relation to the processing and protection of
        personal data. To ensure that you feel confident about providing us with
        your personal information when communicating with us and using our
        services, we outline below our practices in relation to the collection
        and use of personal data. This policy (together with our terms of use
        and any other documents referred to on it) sets out the basis on which
        we will collect, use and process personal data. Please read this Privacy
        Policy carefully to ensure you understand how we handle your personal
        data; please also check this page from time to time as the Policy may be
        updated.
      </Typography>
      <Typography style={style.head}>
        Information We May Collect From You
      </Typography>
      <Typography style={style.content}>
        We may collect and process the following information about you:
      </Typography>
      <Typography style={style.content}>
        Information you provide by filling in forms on our website
        (www.AuctionJournal.com); and information given in hard copy form or by
        any other means providing: your name; date of birth; address; drivers
        license; interests; marketing preferences; when appropriate your credit
        information; and any other personal information relevant to the services
        we provide. This information may be provided when you are registering
        interest, transacting with us, subscribing to our services or for
        newsletters or requesting information; correspondence or other contacts
        you may have with us; details of transactions you carry out through our
        website, and any communications by telephone, in person or by any other
        means relating to those transactions. This may include recording certain
        telephone conversations, for example relating to live bidding; details
        of your visits to our website including, but not limited to, traffic
        data, web logs or other communication data and the resources you access.
      </Typography>
      <Typography style={style.content}>
        The information you provide to us will be used for processing
        transactions but may also be used for internal data processing, such as
        compiling statistical information about your interests and the use of
        www.AuctionJournal.com. As a service to you, we may also use this
        information to customize the content we offer on www.AuctionJournal.com.
      </Typography>
      <Typography style={style.head}>
        Specific Information We May Collect via AuctionJournal.com
      </Typography>
      <Typography style={style.content}>
        We may collect and process the following information obtained from your
        use of www.AuctionJournal.com.
      </Typography>
      <Typography style={style.subHead}>Cookies</Typography>
      <Typography style={style.content}>
        A cookie is a simple text file that is stored on your computer or mobile
        device by a website’s server and only that server will be able to
        retrieve or read the contents of that cookie. Each cookie is unique to
        your web browser. It will contain some anonymous information such as a
        unique identifier and the site name and some digits and numbers. It
        allows a website to remember things like your preferences or what’s in
        your shopping basket. Using our website will result in us placing
        cookies on your computer in the 3 categories set out below.
      </Typography>
      <Typography style={style.content}>
        <span style={{ fontWeight: "bold" }}>Strictly necessary:</span> These
        cookies are essential to enable you to move around the website and use
        its features, such as accessing secure areas of the website; many of the
        functions on our website will not work properly, or at all, if you do
        not allow these cookies to be used. We may therefore be unable to
        provide many of the services you may wish to request unless you accept
        the use of these cookies.
      </Typography>
      <Typography style={style.content}>
        <span style={{ fontWeight: "bold" }}>Performance:</span> These cookies
        collect information about how visitors use a website, for instance which
        pages visitors go to most often. These cookies do not collect
        information that identifies a visitor: all information these cookies
        collect is aggregated and is therefore anonymous. The information is
        only used to improve how the website works.
      </Typography>
      <Typography style={style.content}>
        <span style={{ fontWeight: "bold" }}>Functionality:</span> These cookies
        allow the website to remember choices you make (such as your user name,
        language or the region you are in) and provide enhanced, more personal
        features (for example, remembering changes you have made to text size
        and fonts).
      </Typography>
      <Typography style={style.content}>
        If you reside outside the United States, we also use a fourth type of
        cookie for Targeting or Advertising:
      </Typography>
      <Typography style={style.content}>
        <span style={{ fontWeight: "bold" }}>Targeting or Advertising:</span> We
        sometimes partner with third parties to deliver more relevant
        advertisements and to compile web statistics. These third parties may
        use cookies, web beacons and other tracking technology to monitor your
        visits to both True Blue Auction’s and other websites. They monitor your
        online behavior and identify website usage, helping advertisers show you
        advertising and content that is more relevant to you. Some examples of
        what Targeting and Advertising Cookies do:
      </Typography>
      <ul style={{ margin: "0px", paddingLeft: "8%", paddingBottom: "1%" }}>
        <li style={{ margin: "0px", ...style.bullet }}>
          <Typography style={style.bullet}>
            Provide advertisers with information about your visit to our
            websites so they can show you advertising that is relevant to you.
          </Typography>
        </li>
        <li style={{ margin: "0px", ...style.bullet }}>
          <Typography style={style.bullet}>
            Limit the number of times you see an advertisement.
          </Typography>
        </li>
        <li style={{ margin: "0px", ...style.bullet }}>
          <Typography style={style.bullet}>
            Help measure the effectiveness of an advertising campaign.
          </Typography>
        </li>
      </ul>
      <Typography style={style.content}>
        Don’t worry, none of these cookies store personally identifiable
        information and we only use trusted advertising partners. Just so you
        know, these third parties will have their own privacy policies and they
        may be different from ours.
      </Typography>
      <Typography style={style.content}>
        Auction Journal provides users of www.AuctionJournal.com the opportunity
        to inform others (each, a ‘recipient’) about an Auction or lot for sale,
        which will require the sender to provide us with the recipient’s email
        address(es). At the sender’s request, Auction Journal will automatically
        send the recipient an email on behalf of the sender containing a link to
        Auction Journal site which has the information about the sale or lot.
        Auction Journal will not initiate any further contact with the
        recipient, beyond the email sent on behalf of the sender, unless the
        recipient specifically ‘subscribes’ for extra services by filling out a
        registration form.
      </Typography>
      <Typography style={style.content}>
        If you, as a recipient, do not wish to receive further e-mails from the
        sender and Christies, please reply to the sender requesting they stop
        sending you the email in the future. Auction Journal does not accept
        responsibility for any third party’s use (or misuse) of this service.
      </Typography>
      <Typography style={style.subHead}>IP Address</Typography>
      <Typography style={style.content}>
        We may collect information about your computer, including your internet
        address, operating system and browser type when you visit us. Your
        internet address is used to help identify and gather statistical or
        demographic information about our customers generally. We also use this
        information for internal system administration to help diagnose problems
        with our servers, to administer our website and the customer or user
        experience.
      </Typography>

      <Typography style={style.head}>
        How Is This Personal Information Used
      </Typography>
      <Typography style={style.content}>
        Auction Journal will collect, record, store and use your personal data
        world-wide among the Auction Journal group of websites for clearly
        specified purposes including but not limited to:
      </Typography>
      <Typography style={style.content}>
        Providing you with information, products or services that you request
        from us or which we believe would interest you in a way that is targeted
        and relevant. This could include but is not limited to auctions, events,
        storage services and transportation, valuations, real estate, education
        and insurance; carrying out our obligations arising from any contracts
        entered into between you and us; notifying you about changes to our
        products and services; ensuring that our website is presented in the
        most effective manner for you and your computer selling or purchasing
        property or services (unless you object,) advising you of forthcoming
        sales, events and services.
      </Typography>
      <Typography style={style.content}>
        We may contact you for the above purposes by telephone call, email, text
        or SMS messaging and other means.
      </Typography>

      <Typography style={style.head}>Sharing Information</Typography>
      <Typography style={style.content}>
        We will not share your personal data with anyone outside the Auction
        Journal group of websites other than in accordance with the law and as
        stated in this Policy.
      </Typography>
      <Typography style={style.content}>
        We may from time to time however need to disclose your personal data to
        certain third parties.
      </Typography>
      <Typography style={style.contentHead}>
        Agents or Contractors of Auction Journal
      </Typography>
      <Typography style={style.content}>
        We may need to disclose certain personal information to our Agents or
        Contractors to enable Auction Journal to process transactions or
        communicate with you. Where we do so it will be on the basis that these
        agents/contractors are required to keep the information confidential and
        secure, and will not use the information for any other purpose than to
        carry out the services they are performing for Auction Journal.
      </Typography>
      <Typography style={style.contentHead}>
        Anti-Money Laundering and Regulatory Authorities
      </Typography>

      <Typography style={style.content}>
        We may need to retain and disclose certain information about you to
        regulatory authorities and to appropriate agencies to conduct anti-money
        laundering and trade sanction checks and to assist with fraud
        prevention, in particular, in compliance with our AML obligations and in
        relation to trade sanctions. We will disclose this information only as
        is required by law.
      </Typography>
      <Typography style={style.contentHead}>Credit Agencies</Typography>

      <Typography style={style.content}>
        We may need to disclose certain personal information about you to credit
        agencies to conduct appropriate checks when you are transacting with us.
      </Typography>
      <Typography style={style.contentHead}>Legal Disclosures</Typography>

      <Typography style={style.content}>
        While we will not voluntarily disclose your personal data we may
        disclose such information if we are required to do so by a valid Court
        Order, if we are lawfully requested by government or law enforcement
        authorities, if we are required to do so pursuant to other legal
        processes, or if it becomes necessary to protect the rights or property
        of Auction Journal.
      </Typography>

      <Typography style={style.head}>Contacting You</Typography>
      <Typography style={style.content}>
        In order to provide you with marketing information about our products
        and services, we may contact you by email, text, SMS or any other
        messaging service, telephone, fax and by post. At the bottom of any
        marketing emails you will have a clearly marked unsubscribe option from
        future mailings. In addition, you may at any time send an email to
        info@auctionjournal.com asking for your name to be removed from our
        lists.
      </Typography>
      <Typography style={style.head}>Your Rights</Typography>
      <Typography style={style.content}>
        You have the legal right to a copy of the information which we hold
        about you, including information on how this will be used and to ensure
        this information is accurate. You also have the right to ask us not to
        process your personal data for marketing purposes ‘ you can exercise
        this right by checking certain boxes on the forms we use to collect data
        or at any time by contacting us at info@auctionjournal.com.
      </Typography>

      <Typography style={style.head}>Security</Typography>
      <Typography style={style.content}>
        We will take all reasonable and appropriate steps to protect the
        security and integrity of all personal information provided to our
        website, or by any other means electronic or otherwise.
      </Typography>
      <Typography style={style.content}>
        We will ensure that your personal data within Auction Journal is
        suitably protected against both unauthorized physical and electronic
        access. These measures include an electronic firewall and various other
        protection measures that involve virus scanning, installation of
        security patches, vulnerability testing, backup and recovery planning,
        employee training, security audits and other steps designed constantly
        to improve the data protection posture. However, we cannot guarantee
        that information during transmission through the internet or any
        computer network is entirely safe from unauthorized intrusion, access or
        manipulation. We will have no liability for disclosure of information
        due to errors or unauthorized acts of third parties. In any event, where
        we believe personal data has been compromised, we will notify you of
        this.
      </Typography>

      <Typography style={style.head}>Third-Party Websites</Typography>
      <Typography style={style.content}>
        The Auction Journal sites contain links to other websites which are not
        operated by Auction Journal. The information you provide to us will not
        be transmitted to other websites. However, these websites may collect
        personal information about you in accordance with their own privacy
        policies. Auction Journal is not responsible for the privacy practices
        or the content of such websites.
      </Typography>

      <Typography style={style.head}>
        How Long Will Auction Journal Keep My Personal Information
      </Typography>
      <Typography style={style.content}>
        We will hold your information on our systems for as long as is necessary
        for the relevant activity, or for as long as is specified in any
        agreement between you and us.
      </Typography>

      <Typography style={style.head}>Changes To This Policy</Typography>
      <Typography style={style.content}>
        We reserve the right to amend or update this Privacy Policy and any of
        our privacy practices at any time. We will notify users of this website
        by posting any updated policy on this page and such changes will be
        effective immediately and without further notice. Where appropriate, we
        may notify you directly of changes to the Privacy Policy either through
        email or a prominent notice on our website.
      </Typography>

      <Typography style={style.head}>Contact</Typography>
      <Typography style={style.content}>
        If you have any queries in relation to the use and protection of your
        personal data please contact us at info@auctionjournal.com.
      </Typography>
    </div>
  );
}

export default PrivacyPolicy;
