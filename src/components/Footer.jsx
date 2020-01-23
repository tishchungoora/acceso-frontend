import React, { Component } from "react";
import { Modal } from "react-bootstrap";

export default class Footer extends Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div id="Footer">
        <footer id="footer" className="py-4 bg-dark text-white-50">
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <div className="col-sm-4">
                <small className="text-uppercase">Creator</small>
                <p>
                  <a href="https://github.com/tishchungoora" target={"_blank"}>
                    <small>Tish Chungoora</small>
                  </a>
                </p>
              </div>
              <div className="col-sm-4">
                <small className="text-uppercase">Tech Stack</small>
                <p>
                  <a href="https://reactjs.org/" target={"_blank"}>
                    <small>React</small>
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources"
                    target={"_blank"}
                  >
                    <small>JavaScript</small>
                  </a>{" "}
                  |{" "}
                  <a href="https://getbootstrap.com/" target={"_blank"}>
                    <small>Bootstrap</small>
                  </a>{" "}
                  |{" "}
                  <a href="https://www.ruby-lang.org/" target={"_blank"}>
                    <small>Ruby</small>
                  </a>{" "}
                  |{" "}
                  <a href="https://rubyonrails.org/" target={"_blank"}>
                    <small>Rails</small>
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://guides.rubyonrails.org/active_record_basics.html"
                    target={"_blank"}
                  >
                    <small>Active Record</small>
                  </a>{" "}
                  |{" "}
                  <a href="https://www.postgresql.org/" target={"_blank"}>
                    <small>PostgreSQL</small>
                  </a>
                </p>
              </div>
              <div className="col-sm-4">
                <small className="text-uppercase">Acknowledgements</small>
                <p>
                  <a href="http://www.mypecs.com/" target={"_blank"}>
                    <small>My PECS</small>
                  </a>{" "}
                  |{" "}
                  <a href="https://pecsusa.com/" target={"_blank"}>
                    <small>PECS USA</small>
                  </a>{" "}
                  |{" "}
                  <a href="https://www.flaticon.com/" target={"_blank"}>
                    <small>Flaticon</small>
                  </a>
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-2">
                <small>© acceso</small>
                <button className="btn btn-link text-white">
                  <small onClick={this.handleClick}>Terms and Conditions</small>
                </button>
              </div>

              <Modal
                show={this.state.open}
                onHide={this.closeModal}
                size="lg"
                aria-labelledby="ModalHeader"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="ModalHeader">
                    <h1>Terms & conditions</h1>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h3>Introduction</h3>
                  <p>
                    Please read these Terms and Conditions ("Terms", "Terms and
                    Conditions") carefully before using the Acceso web
                    application (the "Service").
                  </p>
                  <p>
                    Your access to and use of the Service is conditioned on your
                    acceptance of and compliance with these Terms. These Terms
                    apply to all visitors, users and others who access or use
                    the Service.
                  </p>
                  <p>
                    By accessing or using the Service you agree to be bound by
                    these Terms. If you disagree with any part of the terms then
                    you may not access the Service.
                  </p>
                  <h3>Links to other Websites</h3>

                  <p>
                    The Service may contain links to third-party web sites or
                    services that are not owned or controlled by Acceso.
                  </p>
                  <p>
                    Acceso has no control over, and assumes no responsibility
                    for, the content, privacy policies, or practices of any
                    third party websites or services. You further acknowledge
                    and agree that Acceso shall not be responsible or liable,
                    directly or indirectly, for any damage or loss caused or
                    alleged to be caused by or in connection with use of or
                    reliance on any such content, goods or services available on
                    or through any such websites or services.
                  </p>
                  <p>
                    It is strongly advised you read the terms and conditions and
                    privacy policies of any third-party websites or services
                    that you visit.
                  </p>
                  <h3>Governing Law</h3>
                  <p>
                    These Terms shall be governed and construed in accordance
                    with the laws of United Kingdom, without regard to its
                    conflict of law provisions.
                  </p>
                  <p>
                    Our failure to enforce any right or provision of these Terms
                    will not be considered a waiver of those rights. If any
                    provision of these Terms is held to be invalid or
                    unenforceable by a court, the remaining provisions of these
                    Terms will remain in effect. These Terms constitute the
                    entire agreement between us regarding our Service, and
                    supersede and replace any prior agreements we might have
                    between us regarding the Service.
                  </p>
                  <h3>Changes</h3>
                  <p>
                    We reserve the right, at our sole discretion, to modify or
                    replace these Terms at any time. What constitutes a Material
                    change will be determined at our sole discretion.
                  </p>
                  <p>
                    By continuing to access or use our Service after those
                    revisions become effective, you agree to be bound by the
                    revised terms. If you do not agree to the new terms, please
                    stop using the Service.
                  </p>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
