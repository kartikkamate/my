import React from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
  Button,
  Card,
} from "react-bootstrap";

import {
  FaCalendarAlt,
  FaUsers,
  FaGraduationCap,
  FaBullhorn,
  FaArrowRight,
  FaPlay,
  FaStar,
  FaRocket,
  FaCheckCircle,
  FaGlobe,
  FaLightbulb,
} from "react-icons/fa";

const Home = () => {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=90",
      badge: "WELCOME TO CAMPUSHUB",
      title: "Your Campus.",
      highlight: "Your Community.",
      subtitle:
        "One powerful platform to discover events, connect with students, join communities and make your campus life unforgettable.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=90",
      badge: "DISCOVER • CONNECT • PARTICIPATE",
      title: "Events That",
      highlight: "Bring Everyone Together.",
      subtitle:
        "Discover fests, workshops, competitions, seminars and exciting activities happening around your campus.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=2000&q=90",
      badge: "THE FUTURE OF CAMPUS LIFE",
      title: "Build.",
      highlight: "Connect. Grow.",
      subtitle:
        "CampusHub brings everything students need into one simple, modern and exciting platform.",
    },
  ];

  const services = [
    {
      icon: <FaCalendarAlt />,
      number: "01",
      title: "Campus Events",
      text: "Find fests, workshops, competitions, seminars and exciting events happening on your campus.",
    },
    {
      icon: <FaUsers />,
      number: "02",
      title: "Student Community",
      text: "Connect with students, clubs, societies and organizations that match your interests.",
    },
    {
      icon: <FaGraduationCap />,
      number: "03",
      title: "Learning Hub",
      text: "Discover courses, seminars, workshops and opportunities to build valuable skills.",
    },
    {
      icon: <FaBullhorn />,
      number: "04",
      title: "Campus Updates",
      text: "Never miss important announcements, notices, deadlines and campus news.",
    },
  ];

  const stats = [
    { number: "100+", text: "Campus Events", icon: <FaCalendarAlt /> },
    { number: "5K+", text: "Students Connected", icon: <FaUsers /> },
    { number: "50+", text: "Student Clubs", icon: <FaStar /> },
    { number: "25+", text: "Campus Partners", icon: <FaGlobe /> },
  ];

  return (
    <div className="campus-home">

      {/* ================= HERO ================= */}

      <section className="hero-section">

        <Carousel
          fade
          interval={4500}
          indicators={true}
          controls={true}
        >
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>

              <div className="hero-image-wrapper">

                <img
                  src={slide.image}
                  alt={slide.title}
                  className="hero-image"
                />

                <div className="hero-gradient"></div>

                <div className="hero-content">

                  <div className="hero-badge">
                    <FaStar />
                    {slide.badge}
                  </div>

                  <h1>
                    {slide.title}
                    <br />
                    <span>{slide.highlight}</span>
                  </h1>

                  <p>{slide.subtitle}</p>

                  <div className="hero-buttons">

                    <Button className="primary-btn">
                      Explore Campus
                      <FaArrowRight />
                    </Button>

                    <Button className="secondary-btn">
                      <FaPlay />
                      Explore Events
                    </Button>

                  </div>

                  <div className="hero-trust">

                    <div className="avatars">
                      <span>👨🏻</span>
                      <span>👩🏻</span>
                      <span>👨🏽</span>
                      <span>👩🏽</span>
                    </div>

                    <div>
                      <strong>5,000+ Students</strong>
                      <small>already connected</small>
                    </div>

                  </div>

                </div>

              </div>

            </Carousel.Item>
          ))}
        </Carousel>

      </section>

      {/* ================= STATS ================= */}

      <section className="stats-section">

        <Container>

          <div className="stats-wrapper">

            {stats.map((stat, index) => (
              <div className="stat-box" key={index}>

                <div className="stat-icon">
                  {stat.icon}
                </div>

                <div>
                  <h2>{stat.number}</h2>
                  <p>{stat.text}</p>
                </div>

              </div>
            ))}

          </div>

        </Container>

      </section>

      {/* ================= SERVICES ================= */}

      <section className="services-section">

        <Container>

          <div className="section-heading">

            <span>WHAT WE OFFER</span>

            <h2>
              Everything Your
              <br />
              <strong>Campus Needs.</strong>
            </h2>

            <p>
              CampusHub brings students, events, organizations and
              opportunities together in one powerful platform.
            </p>

          </div>

          <Row className="g-4">

            {services.map((service, index) => (

              <Col lg={3} md={6} key={index}>

                <Card className="service-card">

                  <div className="card-number">
                    {service.number}
                  </div>

                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <Card.Body>

                    <h4>{service.title}</h4>

                    <p>{service.text}</p>

                    <a href="/services">
                      Learn More
                      <FaArrowRight />
                    </a>

                  </Card.Body>

                </Card>

              </Col>

            ))}

          </Row>

        </Container>

      </section>

      {/* ================= ABOUT / FEATURE ================= */}

      <section className="feature-section">

        <Container>

          <Row className="align-items-center">

            <Col lg={6}>

              <div className="feature-image">

                <img
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=90"
                  alt="Students"
                />

                <div className="image-glow"></div>

                <div className="floating-card">

                  <div className="floating-icon">
                    <FaUsers />
                  </div>

                  <div>
                    <strong>5,000+</strong>
                    <small>Students Connected</small>
                  </div>

                </div>

                <div className="floating-small-card">
                  <FaCheckCircle />
                  <span>Campus Verified</span>
                </div>

              </div>

            </Col>

            <Col lg={6}>

              <div className="feature-content">

                <span className="small-heading">
                  WHY CAMPUSHUB?
                </span>

                <h2>
                  Make Your Campus Life
                  <span> More Meaningful.</span>
                </h2>

                <p>
                  College is more than classrooms and exams. It's about
                  people, experiences, opportunities and memories.
                </p>

                <p>
                  CampusHub gives students one simple place to discover
                  everything happening around their campus.
                </p>

                <div className="feature-list">

                  <div>
                    <FaCheckCircle />
                    Discover exciting campus events
                  </div>

                  <div>
                    <FaCheckCircle />
                    Connect with student communities
                  </div>

                  <div>
                    <FaCheckCircle />
                    Find learning opportunities
                  </div>

                  <div>
                    <FaCheckCircle />
                    Stay updated with campus news
                  </div>

                </div>

                <Button className="primary-btn dark-btn">
                  Discover CampusHub
                  <FaArrowRight />
                </Button>

              </div>

            </Col>

          </Row>

        </Container>

      </section>

      {/* ================= WHY CAMPUSHUB ================= */}

      <section className="why-section">

        <Container>

          <div className="section-heading light-heading">

            <span>ONE PLATFORM</span>

            <h2>
              Built Around
              <strong> Student Life.</strong>
            </h2>

            <p>
              Everything you need to make your college journey
              more connected, productive and exciting.
            </p>

          </div>

          <Row className="g-4">

            <Col md={4}>

              <div className="why-card">

                <div className="why-icon">
                  <FaRocket />
                </div>

                <h4>Discover</h4>

                <p>
                  Find events, opportunities, clubs and activities
                  that match your interests.
                </p>

              </div>

            </Col>

            <Col md={4}>

              <div className="why-card">

                <div className="why-icon">
                  <FaUsers />
                </div>

                <h4>Connect</h4>

                <p>
                  Meet new people, join communities and build
                  meaningful campus connections.
                </p>

              </div>

            </Col>

            <Col md={4}>

              <div className="why-card">

                <div className="why-icon">
                  <FaLightbulb />
                </div>

                <h4>Grow</h4>

                <p>
                  Learn new skills, participate in activities and
                  create opportunities for your future.
                </p>

              </div>

            </Col>

          </Row>

        </Container>

      </section>

      {/* ================= CTA ================= */}

      <section className="cta-section">

        <Container>

          <div className="cta-box">

            <div className="cta-content">

              <span>READY TO GET STARTED?</span>

              <h2>
                Your Campus.
                <br />
                Your Community.
                <br />
                <strong>Your CampusHub.</strong>
              </h2>

              <p>
                Join your campus community and never miss
                an opportunity again.
              </p>

            </div>

            <div className="cta-action">

              <Button className="cta-btn">
                Join CampusHub
                <FaArrowRight />
              </Button>

              <small>
                Free for students
              </small>

            </div>

          </div>

        </Container>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="campus-footer">

        <Container>

          <Row className="g-5">

            <Col lg={5}>

              <div className="footer-logo">

                <span className="logo-icon">
                  C
                </span>

                Campus<span>Hub</span>

              </div>

              <p>
                Connecting students, creating opportunities and
                transforming campus life.
              </p>

              <div className="footer-social">

                <span>f</span>
                <span>𝕏</span>
                <span>in</span>
                <span>◎</span>

              </div>

            </Col>

            <Col lg={2}>

              <h5>Explore</h5>

              <a href="/">Home</a>
              <a href="/events">Events</a>
              <a href="/services">Services</a>
              <a href="/clubs">Clubs</a>

            </Col>

            <Col lg={2}>

              <h5>Company</h5>

              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>

            </Col>

            <Col lg={3}>

              <h5>Stay Connected</h5>

              <p>
                Get the latest campus updates and events.
              </p>

              <div className="newsletter">

                <input
                  type="email"
                  placeholder="Enter your email"
                />

                <button>
                  <FaArrowRight />
                </button>

              </div>

            </Col>

          </Row>

          <hr />

          <div className="footer-bottom">

            <span>
              © 2026 CampusHub. All Rights Reserved.
            </span>

            <span>
              Made for Students ❤️
            </span>

          </div>

        </Container>

      </footer>

    </div>
  );
};

export default Home;