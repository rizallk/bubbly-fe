import { Link } from 'react-router-dom';
import SidebarDashboard from '../../components/Sidebar.Dashboard';
import './style.scss';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="container-fluid overflow-hidden">
        <div className="row vh-100 overflow-auto">
          <SidebarDashboard />
          <div className="col d-flex flex-column h-sm-100">
            <main className="row overflow-auto">
              <div className="col py-3">
                {/* Content */}
                <div className="d-flex flex-wrap">
                  <div className="cards">
                    <div className="card mb-3 border-0 shadow card-custom p-3">
                      <div className="card-header">Toko</div>
                      <hr />
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start">
                          <div className="total">
                            <p>35</p>
                          </div>
                          <div className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              className="bi bi-shop"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer mt-3">
                        <div className="d-flex justify-content-between">
                          <div className="total-desc">
                            <small>Total seluruh toko</small>
                          </div>
                          <Link to="">Lihat</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="alert alert-info welcome-message"
                    role="alert"
                  >
                    <h4 className="alert-heading">Well done!</h4>
                    <p>
                      Aww yeah, you successfully read this important alert
                      message. This example text is going to run a bit longer so
                      that you can see how spacing within an alert works with
                      this kind of content.
                    </p>
                    <hr />
                    <p className="mb-0">
                      Whenever you need to, be sure to use margin utilities to
                      keep things nice and tidy.
                    </p>
                  </div>
                </div>
              </div>
            </main>
            <footer className="row bg-light py-3 mt-auto">
              <div className="col text-center">Copyright</div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
