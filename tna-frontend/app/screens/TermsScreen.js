import React from "react";
import { SafeAreaView, StyleSheet, Text, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

export default function TermsScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <MaterialCommunityIcons
        name="arrow-left"
        size={25}
        color="black"
        style={styles.icon}
        onPress={() => {
          props.navigation.goBack(null);
        }}
      />
      <Text style={styles.title}>Terms & Conditions</Text>
      <ScrollView>
      <Text style={styles.subtitle}>
        Last updated: 2021-10-12 {"\n"}
        1. Introduction {"\n"}
        Welcome to The News App Inc. (“Company”, “we”, “our”, “us”)! {"\n"}
        These Terms of Service (“Terms”, “Terms of Service”) govern your use of
        our website located at thenewsapp.com (together or individually
        “Service”) operated by The News App Inc.{"\n"}
        Our Privacy Policy also governs your use of our Service and explains how
        we collect, safeguard and disclose information that results from your
        use of our web pages.{"\n"}
        Your agreement with us includes these Terms and our Privacy Policy
        (“Agreements”). You acknowledge that you have read and understood
        Agreements, and agree to be bound of them.{"\n"}
        If you do not agree with (or cannot comply with) Agreements, then you
        may not use the Service, but please let us know by emailing at
        ask@tna.com so we can try to find a solution. These Terms apply to all
        visitors, users, and others who wish to access or use Service.{"\n"}
        2. Communications{"\n"}
        By using our Service, you agree to subscribe to newsletters, marketing
        or promotional materials, and other information we may send. However,
        you may opt-out of receiving any, or all, of these communications from
        us by following the unsubscribe link or by emailing at ask@tna.com.
        {"\n"}
        3. Contests, Sweepstakes, and Promotions{"\n"}
        Any contests, sweepstakes or other promotions (collectively,
        “Promotions”) made available through Service may be governed by rules
        that are separate from these Terms of Service. If you participate in any
        Promotions, please review the applicable rules as well as our Privacy
        Policy. If the rules for a Promotion conflict with these Terms of
        Service, Promotion rules will apply.{"\n"}
        4. Content{"\n"}
        The content found on or through this Service is the property of The News
        App Inc. or used with permission. You may not distribute, modify,
        transmit, reuse, download, repost, copy, or use said Content, whether in
        whole or in part, for commercial purposes or for personal gain, without
        express advance written permission from us.{"\n"}
        5. Prohibited Uses{"\n"}
        You may use Service only for lawful purposes and in accordance with
        Terms. You agree not to use Service:{"\n"}
        0.1. In any way that violates any applicable national or international
        law or regulation.{"\n"}
        0.2. For the purpose of exploiting, harming, or attempting to exploit or
        harm minors in any way by exposing them to inappropriate content or
        otherwise.{"\n"}
        0.3. To transmit, or procure the sending of, any advertising or
        promotional material, including any “junk mail”, “chain letter,” “spam,”
        or any other similar solicitation.{"\n"}
        0.4. To impersonate or attempt to impersonate Company, a Company
        employee, another user, or any other person or entity.{"\n"}
        0.5. In any way that infringes upon the rights of others, or in any way
        is illegal, threatening, fraudulent, or harmful, or in connection with
        any unlawful, illegal, fraudulent, or harmful purpose or activity.{"\n"}
        0.6. To engage in any other conduct that restricts or inhibits anyone’s
        use or enjoyment of Service, or which, as determined by us, may harm or
        offend Company or users of Service or expose them to liability.
        Additionally, you agree not to:{"\n"}
        0.1. Use Service in any manner that could disable, overburden, damage,
        or impair Service or interfere with any other party’s use of Service,
        including their ability to engage in real-time activities through
        Service.{"\n"}
        0.2. Use any robot, spider, or other automatic devices, process, or
        means to access Service for any purpose, including monitoring or copying
        any of the material on Service.{"\n"}
        0.3. Use any manual process to monitor or copy any of the material on
        Service or for any other unauthorized purpose without our prior written
        consent.{"\n"}
        0.4. Use any device, software, or routine that interferes with the
        proper working of Service.{"\n"}
        0.5. Introduce any viruses, trojan horses, worms, logic bombs, or other
        material which is malicious or technologically harmful.{"\n"}
        0.6. Attempt to gain unauthorized access to, interfere with, damage, or
        disrupt any parts of Service, the server on which Service is stored, or
        any server, computer, or database connected to Service.{"\n"}
        0.7. Attack Service via a denial-of-service attack or a distributed
        denial-of-service attack.{"\n"}
        0.8. Take any action that may damage or falsify the Company rating. 0.9.
        Otherwise attempt to interfere with the proper working of Service.{"\n"}
        6. Analytics{"\n"}
        We may use third-party Service Providers to monitor and analyze the use
        of our Service.{"\n"}
        7. No Use By Minors{"\n"}
        Service is intended only for access and use by individuals at least
        eighteen (18) years old. By accessing or using Service, you warrant and
        represent that you are at least eighteen (18) years of age and with the
        full authority, right, and capacity to enter into this agreement and
        abide by all of the terms and conditions of Terms. If you are not at
        least eighteen (18) years old, you are prohibited from both the access
        and usage of Service.{"\n"}
        8. Accounts{"\n"}
        When you create an account with us, you guarantee that you are above the
        age of 18 and that the information you provide us is accurate, complete,
        and current at all times. Inaccurate, incomplete, or obsolete
        information may result in the immediate termination of your account on
        Service.{"\n"}
        You are responsible for maintaining the confidentiality of your account
        and password, including but not limited to the restriction of access to
        your computer and/or account. You agree to accept responsibility for any
        and all activities or actions that occur under your account and/or
        password, whether your password is with our Service or a third-party
        service. You must notify us immediately upon becoming aware of any
        breach of security or unauthorized use of your account.{"\n"}
        You may not use as a username the name of another person or entity or
        that is not lawfully available for use, a name or trademark that is
        subject to any rights of another person or entity other than you,
        without appropriate authorization. You may not use as a username any
        name that is offensive, vulgar, or obscene. We reserve the right to
        refuse service, terminate accounts, remove or edit content, or cancel
        orders at our sole discretion.{"\n"}
        9. Intellectual Property{"\n"}
        Service and its original content (excluding Content provided by users),
        features, and functionality are and will remain the exclusive property
        of The News App Inc. and its licensors. Service is protected by
        copyright, trademark, and other laws of and foreign countries. Our
        trademarks may not be used in connection with any product or service
        without the prior written consent of The News App Inc.{"\n"}
        10. Copyright Policy{"\n"}
        We respect the intellectual property rights of others. It is our policy
        to respond to any claim that Content posted on Service infringes on the
        copyright or other intellectual property rights (“Infringement”) of any
        person or entity.{"\n"}
        If you are a copyright owner or authorized on behalf of one, and you
        believe that the copyrighted work has been copied in a way that
        constitutes copyright infringement, please submit your claim via email
        to ask@tna.com, with the subject line: “Copyright Infringement” and
        include in your claim a detailed description of the alleged Infringement
        as detailed below, under “DMCA Notice and Procedure for Copyright
        Infringement Claims”{"\n"}
        You may be held accountable for damages (including costs and attorneys’
        fees) for misrepresentation or bad-faith claims on the infringement of
        any Content found on and/or through Service on your copyright.{"\n"}
        11. DMCA Notice and Procedure for Copyright Infringement Claims{"\n"}
        You may submit a notification pursuant to the Digital Millennium
        Copyright Act (DMCA) by providing our Copyright Agent with the following
        information in writing (see 17 U.S.C 512(c)(3) for further detail):
        {"\n"}
        0.1. an electronic or physical signature of the person authorized to act
        on behalf of the owner of the copyright’s interest;{"\n"}
        0.2. a description of the copyrighted work that you claim has been
        infringed, including the URL (i.e., web page address) of the location
        where the copyrighted work exists or a copy of the copyrighted work;
        {"\n"}
        0.3. identification of the URL or other specific location on Service
        where the material that you claim is infringing is located;{"\n"}
        0.4. your address, telephone number, and email address;{"\n"}
        0.5. a statement by you that you have a good faith belief that the
        disputed use is not authorized by the copyright owner, its agent, or the
        law;{"\n"}
        0.6. a statement by you, made under penalty of perjury, that the above
        information in your notice is accurate and that you are the copyright
        owner or authorized to act on the copyright owner’s behalf. You can
        contact our Copyright Agent via email at ask@tna.com.{"\n"}
        12. Error Reporting and Feedback{"\n"}
        You may provide us either directly at ask@tna.com or via third-party
        sites and tools with information and feedback concerning errors,
        suggestions for improvements, ideas, problems, complaints, and other
        matters related to our Service (“Feedback”). You acknowledge and agree
        that: (i) you shall not retain, acquire or assert any intellectual
        property right or other rights, title or interest in or to the Feedback;
        (ii) Company may have developed ideas similar to the Feedback; (iii)
        Feedback does not contain confidential information or proprietary
        information from you or any third party, and (iv) Company is not under
        any obligation of confidentiality with respect to the Feedback. In the
        event the transfer of the ownership to the Feedback is not possible due
        to applicable mandatory laws, you grant Company and its affiliates an
        exclusive, transferable, irrevocable, free-of-charge, sub-licensable,
        unlimited, and perpetual right to use (including copy, modify, create
        derivative works, publish, distribute and commercialize) Feedback in any
        manner and for any purpose.{"\n"}
        13. Links To Other Web Sites{"\n"}
        Our Service may contain links to third-party websites or services that
        are not owned or controlled by The News App Inc.{"\n"}
        The News App Inc. has no control over and assumes no responsibility for
        the content, privacy policies, or practices of any third-party websites
        or services. We do not warrant the offerings of any of these
        entities/individuals or their websites. For example, the outlined Terms
        of Use have been created using PolicyMaker.io, a free web application
        for generating high-quality legal documents. PolicyMaker’s Terms and
        Conditions generator is an easy-to-use free tool for creating an
        excellent standard Terms of Service template for a website, blog,
        e-commerce store, or app.{"\n"}
        YOU ACKNOWLEDGE AND AGREE THAT THE COMPANY SHALL NOT BE RESPONSIBLE OR
        LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED
        TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH
        CONTENT, GOODS, OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD-PARTY
        WEB SITES OR SERVICES. WE STRONGLY ADVISE YOU TO READ THE TERMS OF
        SERVICE AND PRIVACY POLICIES OF ANY THIRD-PARTY WEBSITES OR SERVICES
        THAT YOU VISIT.{"\n"}
        14. Disclaimer Of Warranty{"\n"}
        THESE SERVICES ARE PROVIDED BY THE COMPANY ON AN “AS IS” AND “AS
        AVAILABLE” BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY
        KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE
        INFORMATION, CONTENT, OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE
        THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR
        ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK. NEITHER COMPANY NOR ANY
        PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION
        WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY,
        ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE
        FOREGOING, NEITHER COMPANY NOR ANYONE ASSOCIATED WITH THE COMPANY
        REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES
        OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE,
        ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE
        SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR
        OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS
        OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR
        EXPECTATIONS. THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND,
        WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT
        LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND
        FITNESS FOR A PARTICULAR PURPOSE.{"\n"}
        THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR
        LIMITED UNDER APPLICABLE LAW.{"\n"}
        15. Limitation Of Liability{"\n"}
        EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS,
        DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE,
        SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER, IT ARISES
        (INCLUDING ATTORNEYS’ FEES AND ALL RELATED COSTS AND EXPENSES OF
        LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR
        NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF
        CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN
        CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM
        FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND
        ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES,
        RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF
        THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS
        LIABILITY FOUND ON THE PART OF THE COMPANY, IT WILL BE LIMITED TO THE
        AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES
        WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT
        ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL, OR
        CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT
        APPLY TO YOU.{"\n"}
        16. Termination{"\n"}
        We may terminate or suspend your account and bar access to Service
        immediately, without prior notice or liability, under our sole
        discretion, for any reason whatsoever and without limitation, including
        but not limited to a breach of Terms.{"\n"}
        If you wish to terminate your account, you may simply discontinue using
        Service.{"\n"}
        All provisions of Terms which by their nature should survive termination
        shall survive termination, including, without limitation, ownership
        provisions, warranty disclaimers, indemnity, and limitations of
        liability.{"\n"}
        17. Governing Law{"\n"}
        These Terms shall be governed and construed in accordance with the laws
        of Sri Lanka, which governing law applies to the agreement without
        regard to its conflict of law provisions.{"\n"}
        Our failure to enforce any right or provision of these Terms will not be
        considered a waiver of those rights. If any provision of these Terms is
        held to be invalid or unenforceable by a court, the remaining provisions
        of these Terms will remain in effect. These Terms constitute the entire
        agreement between us regarding our Service and supersede and replace any
        prior agreements we might have had between us regarding Service.{"\n"}
        18. Changes To Service{"\n"}
        We reserve the right to withdraw or amend our Service, and any service
        or material we provide via Service, in our sole discretion without
        notice. We will not be liable if for any reason all or any part of
        Service is unavailable at any time or for any period. From time to time,
        we may restrict access to some parts of Service, or the entire Service,
        to users, including registered users.{"\n"}
        19. Amendments To Terms{"\n"}
        We may amend Terms at any time by posting the amended terms on this
        site. It is your responsibility to review these Terms periodically. Your
        continued use of the Platform following the posting of revised Terms
        means that you accept and agree to the changes. You are expected to
        check this page frequently so you are aware of any changes, as they are
        binding on you.{"\n"}
        By continuing to access or use our Service after any revisions become
        effective, you agree to be bound by the revised terms. If you do not
        agree to the new terms, you are no longer authorized to use Service.
        {"\n"}
        20. Waiver And Severability{"\n"}
        No waiver by Company of any term or condition set forth in Terms shall
        be deemed a further or continuing waiver of such term or condition or a
        waiver of any other term or condition, and any failure of Company to
        assert a right or provision under Terms shall not constitute a waiver of
        such right or provision.{"\n"}
        If any provision of Terms is held by a court or other tribunal of
        competent jurisdiction to be invalid, illegal, or unenforceable for any
        reason, such provision shall be eliminated or limited to the minimum
        extent such that the remaining provisions of Terms will continue in full
        force and effect.{"\n"}
        21. Acknowledgement{"\n"}
        BY USING SERVICE OR OTHER SERVICES PROVIDED BY THE US, YOU ACKNOWLEDGE
        THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.
        {"\n"}
        22. Contact Us{"\n"}
        Please send your feedback, comments, requests for technical support by
        email: ask@tna.com.{"\n"}
      </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    position: "absolute",
    left: 20,
    top: 45,
  },
  title: {
    color: colors.black,
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 40,
    alignSelf: "center",
  },
  subtitle: {
    margin: 40,
  },
});
