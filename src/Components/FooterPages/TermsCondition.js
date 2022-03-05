import React from "react";
import { Typography } from "@material-ui/core";

function TermsCondition(props) {
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
      <Typography style={style.head}>
        Terms & Conditions For Website Use
      </Typography>
      <Typography style={style.subHead}>
        1) The Material on the Web Site
      </Typography>
      <Typography style={style.content}>
        The following are the terms and conditions (the “Terms”) under which you
        (a “User”) may use the web sites and co-branded web sites of Auction
        Journal LLC (the “Auction Journal”) at www.AuctionJournal.com and/or any
        other addresses (any or all of which are herein referred to as the
        “Auction Journal”). Please read this page carefully. By accessing and
        using the Web Site, you accept and agree to be bound, without
        modification, limitation or qualification, by the Terms. The Auction
        Journal may, at its sole discretion, modify or revise the Terms at any
        time by updating the text of this page. You are bound by any such
        modification or revision and should therefore visit this page
        periodically to review the Terms. Specific rules, in addition to these
        Terms, are provided with respect to transactions conducted on or in
        connection with the Web Site, and other rules may be provided for the
        use of certain other items, areas or services provided on or in
        connection with the Web Site, and you agree to be bound by such rules.
      </Typography>
      <Typography style={style.content}>
        YOUR USE OF THE WEB SITE CONSTITUTES YOUR AGREEMENT TO ALL TERMS,
        CONDITIONS, AND NOTICES CONTAINED HEREIN OR OTHERWISE POSTED ON THE WEB
        SITE. (THE CONTENT OF SUCH AGREEMENT, INCLUSIVE OF THE TERMS AND ALL
        SUCH ADDITIONAL CONDITIONS AND NOTICES, ARE TOGETHER REFERRED TO HEREIN
        AS THE “AGREEMENT.”) IF YOU DO NOT ACCEPT ANY OF THE PROVISIONS OF THE
        AGREEMENT, DO NOT USE THE WEB SITE.
      </Typography>

      <Typography style={style.subHead}>
        2) Privacy: User Submissions
      </Typography>
      <Typography style={style.content}>
        WARNING: The content of the Web Site is not intended for minors. Such
        content extends to a wide range of personal property not limited to but
        including art and antiquities, is generally uncensored, and may include
        nudity or other graphic or literary content that some people may
        consider offensive, as well as access to live or electronic bidding on
        articles such as firearms and alcoholic beverages that may be harmful
        and/or illegal in the hands of minors and children and/or inappropriate
        for them to view or have access to. If you allow your child to use your
        computer, it is your responsibility to determine whether any of the
        services, content and subject matter displayed on the Web Site is
        inappropriate for your child, and to control the child’s use of the
        computer accordingly. If you yourself find offensive content of the type
        referred to above, you should not use the Web Site.
      </Typography>
      <Typography style={style.content}>
        The contents of the Web Site, such as text, graphics, images, audio,
        video, data, coding, scripts, computer programs and other material
        (“Material” or “Materials”), are protected by copyright under the laws
        of the United States as well as other countries, and are owned or
        controlled by the Auction Journal or by third parties that have licensed
        their Material to the Auction Journal. The Auction Journal authorizes
        you to view and download a single copy of the Material solely for your
        personal, non-commercial use, or in the case of dealers, to display to
        your clients solely for purposes of facilitating a transaction with the
        Auction Journal. The use of any software that is made available for
        downloading from the Web Site (“Software”) is governed by the terms of
        the software license agreement act. Auction Journal and use of such
        software (the “License Agreement”), and is conditioned on your agreement
        to be bound by the terms of the License Agreement. All rights in and to
        the Material not expressly granted to you in the Agreement are reserved.
        Neither the availability of, nor anything contained within the Web Site
        shall be construed as conferring any license under any of the Auction
        Journal’s or any third party’s intellectual property rights, other or
        further than as expressly provided in the foregoing provisions of this
        paragraph, whether by implication, estoppel or otherwise.
      </Typography>
      <Typography style={style.content}>
        Unauthorized use of the Material may violate copyright, trademark, and
        other laws. You may not sell, prepare derivative works based on or
        modify the Material (including, without limitation, preparation of
        summaries of the Material or “thumbnails” of any images therein), or
        reproduce, publicly display, publicly perform, distribute, or otherwise
        use the Material in any way for any public or commercial purpose. The
        use of the Material or any portion thereof on any other web site, or in
        any publication, database, catalog or compilation, or in a networked
        computer environment for any purpose other than personal browsing of the
        Web Site without the express prior written permission of the Auction
        Journal is strictly prohibited. With respect to any copy you make of the
        Material within the scope of the limited personal license granted
        herein, you must retain therein, unmodified and unobscured, any and all
        copyright and other proprietary notices contained in the original
        Material. Some of the Material may contain digital “watermarks” to
        indicate their source and ownership. You agree not to attempt to remove,
        deactivate, reverse engineer, modify, tamper with or obscure any such
        watermarks. The trademarks, logos and service marks (the “Marks”)
        displayed on the Web Site are owned by the Auction Journal or third
        parties. You are prohibited from using the Marks without the express,
        prior written permission of the Auction Journal or such third party. If
        you would like information about obtaining the Auction Journal’s
        permission to use the Material on your web site, please email
        info@AuctionJournal.com.
      </Typography>
      <Typography style={style.content}>
        The Auction Journal reserves the right to employ robot exclusion headers
        and similar mechanisms within the Web Site, and you agree that you and
        all persons and facilities under your control will honor such headers
        and mechanisms. Regardless of the presence or absence of any such
        headers or mechanisms, and without limiting the generality of any other
        restriction on use of the Web Site or the Material set forth in this
        Agreement, you will not in any event use any robot, spider, or other
        automatic or manual device or process for the purpose of compiling
        information regarding the identification, address or other attributes of
        any of our Users, bidders or sellers, or to recreate in original or
        modified form any substantial portion of the Web Site. You further agree
        not to use any device, software or routine to interfere or attempt to
        interfere with the proper functioning of the Web Site or any
        transactions being conducted on or in connection with the Web Sites. You
        agree that you will not take any action that imposes an unreasonable or
        disproportionately large load on our servers or systems.
      </Typography>
      <Typography style={style.content}>
        If you violate any provision of the Agreement, your permission to use
        the Material and the Web Site automatically terminate and you must
        immediately destroy any copies you have made of the Material.
      </Typography>
      <Typography style={style.content}>
        Entering and using this website constitutes consent to indemnify and
        hold harmless the Auctioneer and Property owner from any and all claims
        for any type of claim or damage (including but not limited to attorney’s
        fees or litigation expenses) resulting from using this website. Entering
        website constitutes understanding that you and those in your care and/or
        custody agree and grant the Auction Journal, its affiliates, franchise,
        advertising and promotional agencies, and their agents the irrevocable,
        unrestricted right to use, publish, display and distribute materials
        bearing the name, voice, likeness or any other identifiable
        representation of you and those in your care and/or custody. Promotional
        materials may appear in any form, style, color or medium whatsoever
        (including, without limitation, photographs, video tapes, films, sound
        recordings, software, drawings, prints, broadcast, internet and
        electronic media). You and those in your care and/or custody agree that
        all materials from text to images including anything containing
        identifiable representation of (including without limitation, all
        negatives, plates and masters of any photographs, files, prints or
        tapes) shall be and remain the sole and exclusive property of the
        Journal. All content uploaded or published becomes the property of
        Auction Journal and may be used as the Auction Journal wishes.
      </Typography>
      <Typography style={style.content}>
        The Auction Journal respects the intellectual property of others, and we
        ask our Users to do the same. If you believe that your work has been
        copied in a way that constitutes copyright infringement, please provide
        the Auction Journal’s Copyright Agent the following information:
      </Typography>
      <ul style={{ margin: "0px", paddingLeft: "8%", paddingBottom: "1%" }}>
        <li style={{ margin: "0px", ...style.bullet }}>
          <Typography style={style.bullet}>
            An electronic or physical signature of the person authorized to act
            on behalf of the owner of the copyright interest
          </Typography>
        </li>
        <li style={{ margin: "0px", ...style.bullet }}>
          <Typography style={style.bullet}>
            A description of the copyrighted work that you claim has been
            infringed
          </Typography>
        </li>
        <li style={{ margin: "0px", ...style.bullet }}>
          <Typography style={style.bullet}>
            A description of where the Material that you claim is infringing is
            located on the site
          </Typography>
        </li>
        <li style={{ margin: "0px", ...style.bullet }}>
          <Typography style={style.bullet}>
            Your address, telephone number, and e-mail address
          </Typography>
        </li>
        <li style={{ margin: "0px", ...style.bullet }}>
          <Typography style={style.bullet}>
            A statement by you that you have a good faith belief that the
            disputed use is not authorized by the copyright owner, its agent, or
            the law
          </Typography>
        </li>
        <li style={{ margin: "0px", ...style.bullet }}>
          <Typography style={style.bullet}>
            A statement by you, made under penalty of perjury, that the above
            information in your Notice is accurate and that you are the
            copyright owner or authorized to act on the copyright owner’s behalf
          </Typography>
        </li>
        <li style={{ margin: "0px", ...style.bullet }}>
          <Typography style={style.bullet}>
            The Auction Journal’s Copyright Agent for Notice of claims of
            copyright infringement on its site is Skip Dreibelbis who can be
            reached as follows:
            <br />
            &emsp;&emsp;Skip Dreibelbis
            <br />
            &emsp;&emsp;Auction Journal LLC
            <br />
            &emsp;&emsp;1607 E. Branch Rd.
            <br />
            &emsp;&emsp;State College, PA 16801
            <br />
            &emsp;&emsp;Tel: 347-470-7653 eMail address:
            copyright@AuctionJournal.com
            <br />
          </Typography>
        </li>
      </ul>

      <Typography style={style.subHead}>
        3) Registration, Passwords and Signatures
      </Typography>
      <Typography style={style.content}>
        The Auction Journal is committed to maintaining your privacy. The
        Auction Journal does, however, gather certain information that you
        provide to the Web Site. For information regarding the Auction Journal’s
        policies for using User information please read our Privacy Policy.
      </Typography>
      <Typography style={style.content}>
        The Auction Journal may provide certain areas of the Web Site (such as
        chat rooms, message boards or other facilities) designated as open to
        public access or to our Users at large (each of which is referred to
        herein as a “Public Area”). Generally, any communication that you post
        to a Public Area is considered to be non-confidential.
      </Typography>
      <Typography style={style.content}>
        By posting communications (including any graphic or multimedia content)
        to any Public Area, you automatically grant the Auction Journal a
        royalty-free, perpetual, irrevocable non-exclusive license to use,
        reproduce, modify, publish, edit, translate, distribute, publicly
        perform, and publicly display the communication and any trademarks,
        names or likenesses therein alone or as part of compilations or other
        works in any form, media, or technology whether now known or hereafter
        developed, and to sublicense such rights through multiple tiers of
        sublicenses. (Provisions conferring similar rights on the Auction
        Journal may apply under separate terms or agreements with respect to
        certain matter submitted other than in Public Areas; you should check
        the applicable agreements or terms provided by the Auction Journal in
        order to ascertain your rights.)
      </Typography>
      <Typography style={style.content}>
        The Auction Journal does not screen communications in advance and is not
        responsible for screening or monitoring material posted by Users. As a
        User, you are responsible for your own communications and are
        responsible for the consequences of their posting. You must not do any
        of the following things while accessing or using the Web Site or using
        the Material: (1) post or transmit any material unless you are the owner
        of all patent, trademark, copyright, trade secret or other proprietary
        rights (“Rights”) therein, or have the permission of the owner of the
        Rights to post or transmit such material to the Web Site; (2) post
        material that otherwise violates any Rights of any third party or
        violates or infringes on the privacy or publicity rights of third
        parties; (3) post material that is obscene, defamatory, threatening,
        harassing, abusive, hateful, embarrassing or otherwise objectionable to
        another User or any other person or entity; (4) post sexually-explicit
        language or images; (5) post advertisements or solicitations of
        business; (6) post or transmit any chain letters or pyramid schemes; (7)
        impersonate another person or entity; (8) intentionally or
        unintentionally violate any applicable local, state, national or
        international law while using or accessing the Web Site or the Material;
        or (9) post or transmit any information containing a virus or other
        harmful component. If notified by a User of communications that
        allegedly do not conform to any term of this Agreement, the Auction
        Journal may investigate the allegation and determine in its sole
        discretion whether to remove or request the removal of the
        communication. The Auction Journal has no liability or responsibility to
        Users for performance or non-performance of such activities. The Auction
        Journal reserves the right, in its sole discretion, to expel Users and
        prevent their further access to the Web Site for violating this
        Agreement or the law. The Auction Journal also reserves the right at all
        times to disclose any information as necessary or deemed desirable by
        the Auction Journal to satisfy any applicable law, regulation, legal
        process or governmental request, or to edit, refuse to post or to remove
        any information or materials, in whole or in part, in the Auction
        Journal’s sole discretion.
      </Typography>
      <Typography style={style.content}>
        THE AUCTION JOURNAL DOES NOT ENDORSE, SUPPORT, REPRESENT OR GUARANTEE
        THE TRUTHFULNESS, ACCURACY, OR RELIABILITY OF ANY COMMUNICATIONS POSTED
        BY OTHER USERS OR ENDORSE ANY OPINIONS EXPRESSED BY USERS. YOU
        ACKNOWLEDGE THAT ANY RELIANCE ON MATERIAL POSTED BY OTHER USERS WILL BE
        AT YOUR OWN RISK.
      </Typography>

      <Typography style={style.subHead}>
        4) Use of the Auction or Commerce Portions of the Web Site
      </Typography>
      <Typography style={style.content}>
        The auction or commerce portions of the Web Site are available only to
        clients of the Auction Journal. This excludes in all cases minors
        (persons who have not reached their eighteenth birthday).
      </Typography>

      <Typography style={style.subHead}>5) Links to Other Sites</Typography>
      <Typography style={style.content}>
        The Web Site may contain links to third-party web sites that are
        maintained by others. These links are provided solely as a convenience
        to you and not as an endorsement by the Auction Journal of the contents
        of such third-party web sites. The Auction Journal is not responsible
        for the content of linked third-party sites and does not make any
        representations regarding the content or accuracy of materials on such
        third-party web sites. If you decide to access linked third-party web
        sites, you do so at your own risk
      </Typography>

      <Typography style={style.subHead}>6) Liability Disclaimers</Typography>
      <Typography style={style.content}>
        The Material may contain inaccuracies or typographical errors. Except as
        may be separately specifically provided with respect to a particular
        sale, the Auction Journal makes no representations about the accuracy,
        reliability, completeness, or timeliness of the Material or about the
        results to be obtained from using the Web Site and the Material. Any use
        of the Web Site and the Material is at your own risk. Advice received
        via the Web Site should not be relied upon for personal, medical, legal
        or financial decisions and you should consult an appropriate
        professional for specific advice tailored to your situation. Changes are
        periodically made to the Web Site and may be made at any time. Some
        Material on the Web Site is provided by third parties and the Auction
        Journal shall not be held responsible for any such Material provided by
        third parties.
      </Typography>
      <Typography style={style.content}>
        You acknowledge and agree that, in the event that there are
        discrepancies or differences between the descriptions of property
        provided on the Web Site, on the one hand, and the saleroom catalogue or
        saleroom addenda and announcements related to such property, on the
        other, the latter will in all events be considered to be authoritative
        and controlling.
      </Typography>
      <Typography style={style.content}>
        THE AUCTION JOURNAL DOES NOT WARRANT THAT THE WEB SITE WILL OPERATE
        ERROR-FREE, CONTINUOUSLY OR WITHOUT INTERRUPTION, OR THAT THE WEB SITE
        OR ITS SERVER ARE FREE OF COMPUTER VIRUSES OR OTHER HARMFUL CONTENT. IF
        YOUR USE OF THE WEB SITE OR THE MATERIAL RESULTS IN THE NEED FOR
        SERVICING OR REPLACING EQUIPMENT OR DATA, THE AUCTION JOURNAL IS NOT
        RESPONSIBLE FOR THOSE COSTS.
      </Typography>
      <Typography style={style.content}>
        THE WEB SITE AND MATERIAL ARE PROVIDED ON AN “AS IS” BASIS WITHOUT ANY
        WARRANTIES OF ANY KIND. THE AUCTION JOURNAL AND ITS SUPPLIERS, TO THE
        FULLEST EXTENT PERMITTED BY LAW, DISCLAIM ALL WARRANTIES, INCLUDING THE
        WARRANTY OF MERCHANTABILITY, NON-INFRINGEMENT OF PROPRIETARY OR
        THIRD-PARTY RIGHTS, AND THE WARRANTY OF FITNESS FOR PARTICULAR PURPOSE.
        THE AUCTION JOURNAL AND ITS SUPPLIERS MAKE NO WARRANTIES ABOUT THE
        ACCURACY, RELIABILITY, COMPLETENESS, OR TIMELINESS OF THE MATERIAL,
        SERVICES, SOFTWARE TEXT, GRAPHICS, AND LINKS.
      </Typography>

      <Typography style={style.subHead}>
        7) Disclaimers of Certain Damages
      </Typography>
      <Typography style={style.content}>
        IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE WEB SITE, OR WITH ANY
        PROVISION OF THE AGREEMENT, YOUR SOLE AND EXCLUSIVE REMEDY IS TO
        DISCONTINUE USING THE WEB SITE. UNDER NO CIRCUMSTANCES SHALL THE AUCTION
        JOURNAL BE LIABLE TO ANY USER OR ANY THIRD PARTY ON ACCOUNT OF THAT
        USER”S USE OF THE WEB SITE. IN NO EVENT SHALL THE AUCTION JOURNAL AND/OR
        ITS SUPPLIERS BE LIABLE TO YOU OR ANY SUCH THIRD PARTY FOR ANY DIRECT,
        INDIRECT, PUNITIVE, EXEMPLARY, INCIDENTAL, SPECIAL OR CONSEQUENTIAL
        DAMAGES OR ANY DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION,
        DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY
        CONNECTED WITH THE USE OR PERFORMANCE OF THE WEB SITE, THE DELAY OR
        INABILITY TO USE THE WEB SITE, THE PROVISION OF OR FAILURE TO PROVIDE
        SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND
        RELATED GRAPHICS OBTAINED THROUGH THE WEB SITE, OR OTHERWISE ARISING OUT
        OF THE USE OF THE WEB SITE, WHETHER BASED ON CONTRACT, TORT, STRICT
        LIABILITY OR OTHERWISE, EVEN IF THE AUCTION JOURNAL OR ANY OF ITS
        SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME
        STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
        LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATIONS
        MAY NOT APPLY TO YOU.
      </Typography>

      <Typography style={style.subHead}>8) Indemnity</Typography>
      <Typography style={style.content}>
        You agree to defend, indemnify, and hold harmless the Auction Journal,
        its officers, directors, employees and agents, from and against any
        losses, liabilities, damages, costs, and expenses, including, without
        limitation, reasonable legal, expert and accounting fees, incurred in
        connection with any claims, actions or demands alleging or resulting
        from your use of the Material (including Software), your breach of this
        Agreement, or your violation of law or of the rights of any third party.
        The Auction Journal shall provide notice to you promptly of any such
        claim, suit, or proceeding and, if it is one asserted by a third party,
        shall provide reasonable assistance to you, at your expense, in
        defending any such claim, suit or proceeding.
      </Typography>

      <Typography style={style.subHead}>
        9) Export Control of Software and Technical Data
      </Typography>
      <Typography style={style.content}>
        The following applies with respect to Software and other Material of a
        technical nature that you may obtain from the Web Site (other
        requirements set forth in Section
      </Typography>

      <Typography style={style.subHead}>
        10) Import and Export Regulations Regarding Tangible Property” below may
        apply with respect to items offered for sale, purchased or sold:
      </Typography>
      <Typography style={style.content}>
        The United States controls the export of such items. You agree to comply
        with such restrictions and not to export or re-export the Material
        (including Software) to countries or persons prohibited under the export
        control laws. By downloading the Material (including Software), you are
        agreeing that you are not in a country where such export is prohibited
        and that you are not on the U.S. Commerce Department’s Table of Denial
        Orders or the U.S Treasury Department’s list of Specially Designated
        Nationals. You are responsible for compliance with the laws of your
        local jurisdiction regarding the import, export, or re-export of the
        Software and/or other Material. Import and Export Regulations Regarding
        Tangible Property The United States and most foreign countries regulate
        the importation and exportation of tangible property. Many countries
        require a declaration of export for property that is leaving the
        country. Additionally, most countries require an Import Declaration at
        the time of customs clearance of property into that country. Upon
        import, these countries may impose duties, other taxes and/or
        restrictions on the property. Many countries also prohibit or restrict
        importation or exportation of property containing ivory, tortoiseshell,
        whalebone, and/or products derived from other endangered or protected
        species, and require special licenses or permits in order to import or
        export such property. Other countries regulate movement of antiquities
        and cultural items, which in some cases are subject to a right of
        pre-emption or compulsory purchase by the country from which they are to
        be exported. It is the responsibility of the seller to ensure that the
        item is properly and lawfully exported from the country in which it is
        located. It is the responsibility of the buyer to ensure that the
        property is properly imported into the buyer’s country. If you
        participate in the auction or commerce portions of the Web site, and, as
        a result, purchase property that you plan to ship to another country,
        you agree that you are responsible for familiarizing yourself with and
        complying with any and all applicable rules and regulations.
      </Typography>
      <Typography style={style.content}>
        THE AUCTION JOURNAL MAKE NO REPRESENTATION OR WARRANTY AND ACCEPTS NO
        LIABILITY WHATSOEVER TO THE SELLER, THE BUYER, OR ANY THIRD PARTY IN
        RESPECT OF THE AVAILABILITY OR ISSUANCE OF VALID IMPORT AND EXPORT
        PERMITS OR THE EXISTENCE OR EXERCISE OF PRE-EMPTION OR OTHER RIGHTS TO
        PURCHASE BY GOVERNMENTAL OR REGULATORY AUTHORITIES ANYWHERE.
      </Typography>

      <Typography style={style.subHead}>11) General</Typography>
      <Typography style={style.content}>
        The Auction Journal makes no claim that the Materials are appropriate
        for any particular purpose or audience, or that they may be downloaded
        outside of the United States. Access to the Materials (including
        Software) may not be legal by certain persons or in certain countries.
        If you access the Web Site from outside of the United States, you are
        responsible for compliance with the laws of your jurisdiction. The Web
        Site is based in the State of Pennsylvania, U.S.A. All legal issues
        arising from or related to the use of the Web Site shall be construed in
        accordance with and determined by the laws of the Commonwealth of
        Pennsylvania applicable to contracts entered into and performed within
        the Commonwealth of Pennsylvania without respect to its conflict of laws
        principles. By using the Web Site, you agree that the exclusive forums
        for any claims or causes of action arising out of your use of the Web
        Site shall be the state courts for or within Centre County in the
        Commonwealth of Pennsylvania, and the United States District Court for
        the Eastern District of Pennsylvania. You hereby irrevocably waive, to
        the fullest extent permitted by law, any objection which you may now or
        hereafter have to the laying of the venue of any such proceeding brought
        in such a court and any claim that any such proceeding brought in such a
        court has been brought in an inconvenient forum. User of website agrees
        to pay any and all legal fees should they initiate any action or request
        or cause any legal action to be taken toward Auction Journal LLC, it’s
        officers, directors, employees and agents.
      </Typography>
      <Typography style={style.content}>
        If any provision of this Agreement is found to be invalid by any court
        having competent jurisdiction, the invalidity of such provision shall
        not affect the validity of the remaining provisions of this Agreement,
        which shall remain in full force and effect. The failure of the Auction
        Journal to exercise or enforce any right or provision of the Agreement
        shall not constitute a waiver of such right or provision, and no waiver
        of any term of this Agreement shall be deemed a further or continuing
        waiver of such term or any other term. You agree that regardless of any
        statute or law to the contrary, any claim or cause of action arising out
        of or related to use of the Web Site must be filed within one (1) year
        after such claim or cause of action arose or be forever barred. This
        Agreement constitutes the entire Agreement between you and the Auction
        Journal with respect to the use of the Web Site. Any changes to this
        Agreement must be made in writing, signed by an authorized
        representative of the Auction Journal.
      </Typography>
    </div>
  );
}

export default TermsCondition;
