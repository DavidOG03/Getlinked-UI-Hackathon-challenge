import React from "react";
import AnimatedText from "./AnimatedText";
import AnimatedReveal from "./animatedReveal";
import { NavLink } from "react-router-dom";
import Clock from "./clock";

export default function Body() {

  
  
  return (
    <>
      <section className="hero">
        <img src="/assets/star.svg" alt="star" className="star-one" />
        <img src="/assets/star-2.svg" alt="star" className="star-two" />
        <img src="/assets/star-2.svg" alt="star" className="star-three" />
        <img
          src="/assets/PurpleFlaredesktop-1.svg"
          alt="purple-flare"
          className="flare-hero"
        />
        <div className="brief">
          <AnimatedText text="Igniting a Revolution in HR Innovation" />
          <AnimatedReveal>
            <img src="/assets/line.svg" alt="line" />
          </AnimatedReveal>
        </div>
        <div className="hero-body">
          <div className="hero-body-text">
              <h1 className="title">
            <AnimatedReveal>
                getlinked Tech Hackathon <span>1.0</span>
                <span className="creative-icon">
                  <img src="/assets/creative-icon.svg" alt="creative-icon" />
                </span>
                <img src="/assets/chain.svg" alt="chain" className="chain" />
                <img src="/assets/boom.svg" alt="boom-icon" className="boom" />
            </AnimatedReveal>
              </h1>
            <AnimatedReveal>
              <p className="hero-text">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
            </AnimatedReveal>
            <AnimatedReveal>
              <NavLink to="/register" className="CTA-button">
                Register
              </NavLink>
            </AnimatedReveal>
            <AnimatedReveal>
              <Clock />
            </AnimatedReveal>
          </div>
          <div className="guy">
            <AnimatedReveal>
              <img
                src="/assets/virtual.png"
                alt="virtual reality"
                className="virtual"
              />
            </AnimatedReveal>
          </div>
        </div>
        <img
          src="/assets/purple-hero.svg"
          alt="purple-hero"
          className="flare-hero-mobile"
        />
        <img
          src="/assets/PurpleFlaredesktop-1.svg"
          alt="purple-hero"
          className="flare-hero-desktop-1"
        />
        <img
          src="/assets/PurpleFlaredesktop-2.svg"
          alt="purple-hero"
          className="flare-hero-desktop-2"
        />
        {/* <img src="/assets/metrix.svg" alt="metrix" className="virtual-metrix"/> */}
      </section>

      {/* Intro Section  */}

      <section className="introduction" id="overview">
        <img src="/assets/star-pu.svg" alt="star" className="star-two" />
        <AnimatedReveal>
          <div className="introduction-image">
            <img
              src="/assets/big-idea.svg"
              alt="big-idea-img"
              className="idea"
            />
            <img src="/assets/star-gra.svg" alt="star" className="star" />
            <img src="/assets/arrow.svg" alt="arrow" className="arrow" />
          </div>
        </AnimatedReveal>
        <div className="introduction-text" >
          <AnimatedReveal>
            <h2>
              Introduction to getlinked
              <span> tech Hackathon 1.0</span>
            </h2>
          </AnimatedReveal>
          <AnimatedReveal>
            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </AnimatedReveal>
        </div>
      </section>

      {/* Rules Section */}

      <section className="rules">
        <img
          src="/assets/rules-flare-1.svg"
          alt="flare"
          className="flare-mobile-1"
        />
        <img
          src="/assets/rules-flare-2.svg"
          alt="flare"
          className="flare-mobile-2"
        />
        <img
          src="/assets/PurpleFlarerules.svg"
          alt="flare"
          className="flare-desktop-1"
        />
        <img
          src="/assets/PurpleFlarerules-2.svg"
          alt="flare"
          className="flare-desktop-2"
        />
        <div className="rules-image">
          <AnimatedReveal>
            <img
              src="/assets/rules-illustration.svg"
              alt="illustration"
              className="sitting-img"
            />
            <img src="/assets/ellipse.svg" alt="ellipse" className="ellipse" />
          </AnimatedReveal>
          <img src="/assets/star.svg" alt="star" className="star" />
        </div>
        <div className="rules-text">
          <img src="/assets/star-2.svg" alt="star" className="star-1" />
          <img src="/assets/star.svg" alt="star" className="star-2" />
          <AnimatedReveal>
            <h3>
              Rules and <span>Guidelines</span>
            </h3>
          </AnimatedReveal>
          <AnimatedReveal>
            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </AnimatedReveal>
        </div>
      </section>

      {/* Judge Section */}
      <section className="judge">
        <img
          src="/assets/purple-flare.svg"
          alt="purple-flare"
          className="flare"
        />
        <img
          src="/assets/judge-flare-2.svg"
          alt="purple-flare"
          className="flare-2"
        />
        <img
          src="/assets/PurpleFlarejudge-1.svg"
          alt="purple-flare"
          className="flare-desktop-1"
        />
        <img
          src="/assets/PurpleFlarejudge-2.svg"
          alt="purple-flare"
          className="flare-desktop-2"
        />
        <img src="/assets/star-2.svg" alt="star" className="star-two" />
        <img src="/assets/star.svg" alt="star" className="star-three" />
        <div className="judge-image">
          <AnimatedReveal>
            <img
              src="/assets/judging.svg"
              alt="illustration"
              className="judge-img"
            />
            <img src="/assets/ellipse.svg" alt="ellipse" className="ellipse" />
          </AnimatedReveal>
          <img src="/assets/star-pu.svg" alt="star" className="judge--star" />
        </div>
        <div className="judge-text">
          <AnimatedReveal>
            <h3>
              Judging Criteria <span>Key attributes</span>
            </h3>
          </AnimatedReveal>
          <AnimatedReveal>
            <p>
              <span>Innovation and Creativity:</span> Evaluate the uniqueness
              and creativity of the solution. Consider whether it addresses a
              real-world problem in a novel way or introduces innovative
              features.
            </p>
          </AnimatedReveal>
          <AnimatedReveal>
            <p>
              <span>Functionality:</span> Assess how well the solution works.
              Does it perform its intended functions effectively and without
              major issues? Judges would consider the completeness and
              robustness of the solution.
            </p>
          </AnimatedReveal>
          <AnimatedReveal>
            <p>
              <span>Impact and Relevance:</span> Determine the potential impact
              of the solution in the real world. Does it address a significant
              problem, and is it relevant to the target audience? Judges would
              assess the potential social, economic, or environmental benefits.
            </p>
          </AnimatedReveal>
          <AnimatedReveal>
            <p>
              <span>Technical Complexity:</span>Evaluate the technical
              sophistication of the solution. Judges would consider the
              complexity of the code, the use of advanced technologies or
              algorithms, and the scalability of the solution.
            </p>
          </AnimatedReveal>
          <AnimatedReveal>
            <p>
              <span>Adherence to Hackathon Rules:</span> Judges will Ensure that
              the team adhered to the rules and guidelines of the hackathon,
              including deadlines, use of specific technologies or APIs, and any
              other competition-specific requirements.
            </p>
          </AnimatedReveal>
          <AnimatedReveal>
            <button className="more">Read More</button>
          </AnimatedReveal>
        </div>
      </section>

      {/* faqs section */}
      <section className="faqs" id="faqs">
        <div className="faqs-text">
          <AnimatedReveal>
            <h3>
              Frequently Ask <span>Question</span>
            </h3>
            <p>
              We got answers to the questions that you might want to ask about
              <span> getlinked Hackathon 1.0</span>
            </p>
          </AnimatedReveal>
          <div className="faqs-container">
            <AnimatedReveal>
              <div className="faq">
                Can I work on a project I started before the hackathon?
                <span>+</span>
              </div>
            </AnimatedReveal>
            <AnimatedReveal>
              <div className="faq">
                What happens if I need help during the hackathon?<span>+</span>
              </div>
            </AnimatedReveal>
            <AnimatedReveal>
              <div className="faq">
                What happens if I don't have an idea for a project?
                <span>+</span>
              </div>
            </AnimatedReveal>
            <AnimatedReveal>
              <div className="faq">
                Can I join a team or do I have to come with one?<span>+</span>
              </div>
            </AnimatedReveal>
            <AnimatedReveal>
              <div className="faq">
                What happens after the hackathon ends<span>+</span>
              </div>
            </AnimatedReveal>
            <AnimatedReveal>
              <div className="faq">
                Can I work on a project I started before the hackathon?
                <span>+</span>
              </div>
            </AnimatedReveal>
          </div>
        </div>
        <AnimatedReveal>
          <div className="faqs-illustration">
            <img
              src="/assets/faq-illustration.svg"
              alt="illustration"
              className="faqs-illustration-img"
            />
            <img
              src="/assets/faq-illustration-desktop.svg"
              alt="illustration"
              className="faqs-illustration-img-desktop"
            />
            <img
              src="/assets/question-mark-pink.svg"
              alt="question mark"
              className="pink-qm"
            />
            <img
              src="/assets/question-mark-purple.svg"
              alt="question mark"
              className="purple-qm-one"
            />
            <img
              src="/assets/question-mark-purple.svg"
              alt="question mark"
              className="purple-qm-two"
            />
            <img
              src="/assets/star-gra.svg"
              alt="star"
              className="star-gra-one"
            />
            <img
              src="/assets/star-gra.svg"
              alt="star"
              className="star-gra-two"
            />
            <img src="/assets/star-2.svg" alt="star" className="star-one" />
            <img src="/assets/star.svg" alt="star" className="star-two" />
          </div>
        </AnimatedReveal>
      </section>

      {/* Timeline Section  */}

      <section className="timeline" id="timeline">
        <AnimatedReveal>
          <h3>Timeline</h3>
        </AnimatedReveal>
        <AnimatedReveal>
          <p>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </AnimatedReveal>

        <div className="timeline-date">
          <img src="/assets/star-pu.svg" alt="star" className="star-one" />
          <img src="/assets/star-2.svg" alt="star" className="star-two" />
          <img src="/assets/star.svg" alt="star" className="star-three" />

          <div className="numbers">
            <span className="line"></span>
            <AnimatedReveal>
              <span className="number">1</span>
            </AnimatedReveal>
            <span className="line"></span>
            <AnimatedReveal>
              <span className="number">2</span>
            </AnimatedReveal>
            <span className="line"></span>
            <AnimatedReveal>
              <span className="number">3</span>
            </AnimatedReveal>
            <span className="line four"></span>

            <AnimatedReveal>
              <span className="number">4</span>
            </AnimatedReveal>
            <span className="line"></span>
            <AnimatedReveal>
              <span className="number">5</span>
            </AnimatedReveal>
            <span className="line"></span>
            <AnimatedReveal>
              <span className="number">6</span>
            </AnimatedReveal>
          </div>
          <div className="dates">
            <AnimatedReveal>
              <div className="date">
                <h4>Hackathon Announcement</h4>
                <p>
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </p>
              </div>
              <span>November 18, 2023</span>
            </AnimatedReveal>

            <AnimatedReveal>
              <div className="date">
                <h4>Teams Registration begins</h4>
                <p>
                  Interested teams can now show their interest in the getlinked
                  tech hackathon 1.0 2023 by proceeding to register
                </p>
              </div>
              <span>November 18, 2023</span>
            </AnimatedReveal>
            <AnimatedReveal>
              <div className="date">
                <h4>Teams Registration ends</h4>
                <p>Interested Participants are no longer Allowed to register</p>
              </div>
              <span>November 18, 2023</span>
            </AnimatedReveal>
            <AnimatedReveal>
              <div className="date">
                <h4>Announcement of the accepted teams and ideas</h4>
                <p>
                  All teams whom idea has been accepted into getlinked tech
                  hackathon 1.0 2023 are formally announced
                </p>
              </div>

              <span className="four">November 18, 2023</span>
            </AnimatedReveal>
            <AnimatedReveal>
              <div className="date">
                <h4>Getlinked Hackathon 1.0 Offically Begins</h4>
                <p>
                  Accepted teams can now proceed to build their ground breaking
                  skill driven solutions
                </p>
              </div>

              <span>November 18, 2023</span>
            </AnimatedReveal>
            <AnimatedReveal>
              <div className="date">
                <h4>Demo Day</h4>
                <p>
                  Teams get the opportunity to pitch their projects to judges.
                  The winner of the hackathon will also be announced on this day
                </p>
              </div>

              <span>November 18, 2023</span>
            </AnimatedReveal>
          </div>
        </div>
      </section>
      <section className="timeline-desktop" id="timeline-desktop">
        <h3>Timeline</h3>
        <p>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
        <div className="timeline-desktop-date">
          <img src="/assets/star-pu.svg" alt="star" className="star-one" />
          <img src="/assets/star-2.svg" alt="star" className="star-two" />
          <img src="/assets/star.svg" alt="star" className="star-three" />

          <div className="numbers">
            <span className="line"></span>
            <span className="number">1</span>
            <span className="line"></span>
            <span className="number">2</span>
            <span className="line"></span>
            <span className="number">3</span>
            <span className="line four"></span>
            <span className="number">4</span>
            <span className="line"></span>
            <span className="number">5</span>
            <span className="line"></span>
            <span className="number">6</span>
          </div>
          <div className="dates">
            <div className="date">
              <div className="odd">
                <AnimatedReveal>
                  <h4>Hackathon Announcement</h4>
                </AnimatedReveal>
                <AnimatedReveal>
                  <p>
                    The getlinked tech hackathon 1.0 is formally announced to
                    the general public and teams begin to get ready to register
                  </p>
                </AnimatedReveal>
              </div>
              <AnimatedReveal>
                <span className="left">November 18, 2023</span>
              </AnimatedReveal>
            </div>

            <div className="date">
              <AnimatedReveal>
                <span className="right">November 18, 2023</span>
              </AnimatedReveal>

              <div className="even">
                <AnimatedReveal>
                  <h4>Teams Registration begins</h4>
                </AnimatedReveal>
                <AnimatedReveal>
                  <p>
                    Interested teams can now show their interest in the
                    getlinked tech hackathon 1.0 2023 by proceeding to register
                  </p>
                </AnimatedReveal>
              </div>
            </div>
            <div className="date">
              <div className="odd">
                <AnimatedReveal>
                  <h4>Teams Registration ends</h4>
                </AnimatedReveal>
                <AnimatedReveal>
                  <p>
                    Interested Participants are no longer Allowed to register
                  </p>
                </AnimatedReveal>
              </div>
              <AnimatedReveal>
                <span className="left">November 18, 2023</span>
              </AnimatedReveal>
            </div>

            <div className="date">
              <AnimatedReveal>
                <span className="right">November 18, 2023</span>
              </AnimatedReveal>
              <div className="even">
                <AnimatedReveal>
                  <h4>Announcement of the accepted teams and ideas</h4>
                </AnimatedReveal>
                <AnimatedReveal>
                  <p>
                    All teams whom idea has been accepted into getlinked tech
                    hackathon 1.0 2023 are formally announced
                  </p>
                </AnimatedReveal>
              </div>
            </div>

            <div className="date">
              <div className="odd">
                <AnimatedReveal>
                  <h4>Getlinked Hackathon 1.0 Offically Begins</h4>
                </AnimatedReveal>
                <AnimatedReveal>
                  <p>
                    Accepted teams can now proceed to build their ground
                    breaking skill driven solutions
                  </p>
                </AnimatedReveal>
              </div>
              <AnimatedReveal>
                <span className="left">November 18, 2023</span>
              </AnimatedReveal>
            </div>

            <div className="date ">
              <AnimatedReveal>
                <span className="right">November 18, 2023</span>
              </AnimatedReveal>
              <div className="even">
                <AnimatedReveal>
                  <h4>Demo Day</h4>
                </AnimatedReveal>
                <AnimatedReveal>
                  <p>
                    Teams get the opportunity to pitch their projects to judges.
                    The winner of the hackathon will also be announced on this
                    day
                  </p>
                </AnimatedReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="prize">
        <img
          src="/assets/purple-flare.svg"
          alt="purple-flare"
          className="flare-one"
        />
        <img
          src="/assets/judge-flare-2.svg"
          alt="purple-flare"
          className="flare-two"
        />
        <div className="prize-body">
          <AnimatedReveal>
            <h3>
              Prizes and <span>Rewards</span>
            </h3>
            <p>
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </AnimatedReveal>
        </div>
        <div className="trophy-img">
          <AnimatedReveal>
            <img
              src="/assets/trophy.svg"
              alt="trophy"
              className="trophy-mobile"
            />
            <img
              src="/assets/trophy-desktop.png"
              alt="trophy"
              className="trophy-desktop"
            />
          </AnimatedReveal>
        </div>

        <AnimatedReveal>
          <div className="rewards">
            <div className="silver">
              <img src="/assets/silver.svg" alt="silver medal" />
              <span className="position">2nd</span>
              <span className="runner">runner</span>

              <span className="amount">400,000</span>
            </div>

            <div className="gold">
              <img src="/assets/gold.svg" alt="gold medal" />
              <span className="position">1st</span>
              <span className="runner">runner</span>
              <span className="amount">300,000</span>
            </div>

            <div className="bronze">
              <img src="/assets/bronze.svg" alt="bronze medal" />
              <span className="position">3rd</span>
              <span className="runner">runner</span>
              <span className="amount">150,000</span>
            </div>
          </div>
        </AnimatedReveal>
      </section>

      <section className="partners">
        <img
          src="/assets/purple-flare.svg"
          alt="purple-flare"
          className="flare-one"
        />
        <img
          src="/assets/judge-flare-2.svg"
          alt="purple-flare"
          className="flare-two"
        />
        <img
          src="/assets/PurpleFlarepartner-1.svg"
          alt="purple-flare"
          className="flare-three"
        />
        <img
          src="/assets/PurpleFlarepartner-2.svg"
          alt="purple-flare"
          className="flare-four"
        />
        <h3>Partners and Sponsors</h3>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
        <AnimatedReveal>
          <div className="sponsors">
            <img src="/assets/star-pu.svg" alt="star" className="star" />
            <div className="sponsors-first-section">
              <img src="/assets/liberty.svg" alt="logo" className="liberty" />
              <div className="v-line"></div>
              <img src="/assets/liberty-pay.svg" alt="logo" className="pay" />
              <div className="v-line"></div>
              <img src="/assets/win-wise.svg" alt="logo" className="win" />
            </div>

            <div className="h-lines">
              <div className="h-line"></div>
              <div className="h-line"></div>
              <div className="h-line"></div>
            </div>
            <div className="sponsors-second-section">
              <img src="/assets/whispersm.svg" alt="logo" className="whisp" />
              <div className="v-line"></div>
              <img src="/assets/paybox.svg" alt="logo" className="paybox" />
              <div className="v-line"></div>
              <img src="/assets/vusual.svg" alt="logo" className="vusual " />
            </div>

            <img src="/assets/star.svg" alt="star-two" className="star-two" />
          </div>
        </AnimatedReveal>
      </section>

      <section className="policy">
        <img
          src="/assets/purple-flare.svg"
          alt="purple-flare"
          className="flare-one"
        />
        <img
          src="/assets/PurpleFlaresecure.svg"
          alt="purple-flare"
          className="flare-two"
        />
        <div className="policy-body">
          <AnimatedReveal>
            <h3>
              Privacy Policy and <span>Terms</span>
            </h3>
            <span className="update">Last updated on September 12, 2023</span>
            <p className="policy-text">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </AnimatedReveal>

          <AnimatedReveal>
            <div className="policy-terms">
              <p className="policy-terms-text">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>

              <div className="policy-terms-license">
                <h4>Licensing Policy</h4>
                <span className="text">
                  Here are terms of our Standard License:
                </span>
                <div className="license">
                  <span>
                    <img src="/assets/green-tick.svg" alt="green tick" />
                  </span>
                  <p className="license-text">
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </div>
                <div className="license">
                  <span>
                    <img src="/assets/green-tick.svg" alt="green tick" />
                  </span>
                  <p className="license-text">
                    You are licensed to use the item available at any free
                    source sites, for your project developement
                  </p>
                </div>
              </div>
              <button className="more">Read More</button>
            </div>
          </AnimatedReveal>
        </div>

        <div className="policy-illustration">
          <AnimatedReveal>
            <img
              src="/assets/security-illustration.svg"
              alt="illustration"
              className="secure"
            />
          </AnimatedReveal>
          <img src="/assets/shield.svg" alt="" className="shield" />
          <img src="/assets/star-pu.svg" alt="star" className="star-one" />
          <img src="/assets/star.svg" alt="star" className="star-two" />
          <img src="/assets/star.svg" alt="star" className="star-three" />
          <img src="/assets/star-2.svg" alt="star" className="star-four" />
        </div>
      </section>
    </>
  );
}
