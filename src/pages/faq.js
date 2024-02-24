import React from "react"
import Layout from "../components/layout"

export default function FAQ() {
  return (
    <Layout>
      <h1 className="faq-header-small">Frequently Asked Questions</h1>
      <p>
        Below are some of the most common questions we receive from clients.
      </p>
      <div className="faq-section">
        <hr />
        <h2>Q. Why hire Night Owl Labs?</h2>
        <p>
          Many clients approach us with varied needs. Some wish to augment their
          in-house teams, while others are looking for expertise for a project
          with a specific timeline. By partnering with <b>Night Owl Labs</b>,
          you gain access to experienced professionals who ensure quality and
          efficiency, reducing long-term costs.
        </p>
        <hr />
        <h2>Q. When should we engage with Night Owl Labs?</h2>
        <p>
          The sooner, the better! We recommend involving us right from the
          conceptual or design phase. Decisions made early can have ripple
          effects throughout the project, potentially leading to expensive and
          time-consuming revisions. By integrating us early, you ensure a
          streamlined design process that's testable, manufacturable, reliable,
          and scalable.
        </p>
        <hr />
        <h2>Q. Do you work on-site?</h2>
        <p>
          Unfortunately we do not offer on-site services at the moment, it is
          completely remote; we've found that digital communication tools often
          offer a more efficient means of collaboration. Most of the work is
          done off-site in our fully-equipped lab, allowing us to leverage our
          resources and deliver the best results for your project.
        </p>
        <hr />
        <h2>Q. How do you handle project confidentiality?</h2>
        <p>
          Client confidentiality is paramount to us. All projects are handled
          with the utmost discretion, and we're open to signing non-disclosure
          agreements (NDAs) to protect your intellectual property.
        </p>
        <hr />
        <h2>Q. What's your expertise in emerging technologies?</h2>
        <p>
          <b>Night Owl Labs</b> stays at the forefront of tech trends. Our team
          is well-versed in the latest technologies and methodologies, ensuring
          your project benefits from cutting-edge solutions.
        </p>
        <hr />
        <h2>Q. How do you manage project timelines and deliverables?</h2>
        <p>
          We use a mix of agile methodologies and traditional project management
          tools. Regular project updates, sprint reviews, and transparent
          communication ensure that projects stay on track and clients are
          always in the loop.
        </p>
        <hr />
        <h2>Q. How much do your services cost?</h2>
        <p>
          As always, it depends on the size and scope of your project. We offer
          a free consultation to initially discuss and review your project in
          order to see if we're staffed properly to take on the scope. Most
          projects we take on are small to medium sized, but we have done a
          number or large projects as well. We also utilize partner companies to
          fill in our consulting knowledge around certain areas of the project
          where our knowledge may be lacking in order to properly see the
          project through.{" "}
        </p>
        <hr />
        <h2>Q. Do you offer refunds or a warrenty period?</h2>
        <p>
          Currently, we do not offer refunds but if you happen to be
          disassitisfied with your product or service, we will work with you to
          make it right. We do offer a free warrenty period for all of our
          products and services. If you find a bug or issue with your product or
          service, we will fix it free of charge.{" "}
        </p>
        <hr />
        <h2>Q. How will I be informed during the development process?</h2>
        <p>
          We will allocate a bucket of agreed upon hours, and you will only be
          billed for the hours used in said bucket. The proposed work will be
          clearly defined in a signed statement of work (SOW) along with the
          agreed upon project requirements. Subsequent invoices will be sent out
          on a weekly or monthly basis (depending on the proposed timeline of
          the project) for the work that has been completed. We will also
          provide a weekly activity report and optional weekly touchpoint calls
          in order to discuss the projects progress. Of course, we're always
          available via cell or email if you have any questions or concerns at
          any point during the lifecycle of the project.
        </p>
        <hr />
      </div>
      <h4 className="text-center">
        Have more questions?
        <br />
        Don't hesitate to{" "}
        <a className="regular-link" href="/contact">
          Contact
        </a>{" "}
        us! <br />
        We'd love to hear from you!
      </h4>
    </Layout>
  )
}
