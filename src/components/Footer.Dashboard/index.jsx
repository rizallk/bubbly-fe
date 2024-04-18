import './style.scss';

export default function FooterDashboard() {
  return (
    <footer className="row py-3 mt-auto footer-dashboard ">
      <div className="col text-center">
        {' '}
        <small>
          All rights reserved. Copyright &copy; {new Date().getFullYear()}
        </small>
      </div>
    </footer>
  );
}
