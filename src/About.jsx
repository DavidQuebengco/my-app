import React from 'react';
import { Container } from 'react-bootstrap';

function About() {
  return(
    <Container>
      <div class="row">
          <h2 className="text-center fw-bold m-3">Group 9</h2>
          <h3 className="text-center m-2">
            <i>"Keep it cool, that's how you survived!</i>
          </h3>
        </div>

        <div className="container mt-4">
          <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">David Quebengco</h5>
                  <div className="card-text text-black-50">Group Leader</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">EJ Santosidad</h5>
                  <div className="card-text text-black-50">Group Member</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Norman Mendiola</h5>
                  <div className="card-text text-black-50">Group Member</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Danica Libres</h5>
                  <div className="card-text text-black-50">Group Member</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Charlene Lopez</h5>
                  <div className="card-text text-black-50">Group Member</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Container>

    
    );
}
export default About;
